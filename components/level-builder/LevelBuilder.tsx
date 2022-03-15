import { doc, onSnapshot } from "firebase/firestore";
import moment from "moment";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { teamState } from "../../atoms/userData";
import { getDB } from "../../helpters/getDB";
import { DatabaseTables } from "../../models/aDatabaseTables";
import { Hints, LevelDto, Sector } from "../../models/level";
import { TeamDataModel } from "../../models/team";
import { Creator } from "./LevelBuilderFactory";

interface Props {
    levelId: string;
}

export const LevelBuilder = (p: Props) => {
    const [level, setLevel] = useState<LevelDto | undefined>();

    useEffect(() => {
        let unsubscribe: Function = () => { };
        if (p.levelId != "") {
            unsubscribe();
            const docRef = doc(getDB(), DatabaseTables.level, p.levelId);
            // TODO make web request
            // temp solution for now, not secure
            unsubscribe = onSnapshot(docRef, (data) => {
                if (data.exists()) {
                    const uteam = data.data() as LevelDto;
                    setLevel(uteam);
                }
            });
        }

        return () => {
            unsubscribe();
        }
    }, [p.levelId])


    return <div>
        {/* <div>{p.levelId}{level?.name}</div> */}
        <div className="text-lg">
            {level?.body.map(x => <div key={x.id}><Creator data={x} /></div>)}
            <h2 className="text-2xl p-4 w-full">Sectors to close:</h2>
            {level?.sectors?.map(x => <div className="p-4" key={x.id}><SectorCell sector={x} /></div>)}
            <h2 className="text-2xl p-4 w-full">Hints:</h2>
            {level?.hints?.map(x => <div key={x.id}><Hint hint={x} /></div>)}
        </div>
    </div>


}


interface SectorProps {
    sector: Sector;
}

const SectorCell = ({ sector }: SectorProps) => {
    const team = useRecoilValue(teamState);

    return <div>
        {sector.name} - {team?.solvedSectors.includes(sector.name) ? "Solved" : "Open"}
    </div>
}

interface hintProps {
    hint: Hints;
}

const Hint = ({ hint }: hintProps) => {
    const [hintTime, setHintTime] = useState<number>(10);
    const team = useRecoilValue(teamState);

    const levelOpened = moment(team?.currentLevelStarted);

    useEffect(() => {

        let myInterval = setInterval(() => {
            const seconds = moment().subtract(hint.delayInSeconds, "seconds").diff(levelOpened, "second");
            // console.log(seconds)
            if (seconds < 0) {
                setHintTime(seconds);
            } else {
                clearInterval(myInterval);
                setHintTime(seconds);
            }

        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    }, [team]);




    if (hintTime > -1) {
        return <div key={hint.id}>
            {hint.body.map(x => <div key={x.id}><Creator data={x} /></div>)}
        </div>
    }
    return <div key={hint.id}>
        <h1>Next hint in</h1>
        <p>{hintTime}</p>
    </div>

}