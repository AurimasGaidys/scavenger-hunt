import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { teamState, bonusState } from "../../atoms/userData";
import { getDB } from "../../helpters/getDB";
import { DatabaseTables } from "../../models/aDatabaseTables";
import { BonusDataModel } from "../../models/bonus";

interface Props {
}

export const BonusBuilder = () => {

    const team = useRecoilValue(teamState);
    const [bonus, setBonus] = useRecoilState(bonusState);

    useEffect(() => {
        let unsubscribe: Function = () => { };

        const levelId = team?.currentLevelId || "";
        if (levelId != "") {
            const q = query(collection(getDB(), DatabaseTables.bonus), where("levelIds", "array-contains", levelId));
            unsubscribe = onSnapshot(q, (querySnapshot) => {
                const bonuses: BonusDataModel[] = [];
                querySnapshot.forEach((doc) => {
                    const bonus = doc.data() as BonusDataModel;
                    console.log(bonus);
                    bonuses.push(bonus);
                });
                setBonus(bonuses);
            });
        }

        return () => {
            unsubscribe();
        }
    }, [team?.currentLevelId])


    return <div>
        <div>{team?.bonusSolved.join(", ")}</div>
        <div>
            {bonus?.map(x => <BonusCell data={x} solved={false} />)}
        </div>
    </div>


}

interface BCProps {
    data: BonusDataModel;
    solved: boolean;
}

const BonusCell = ({ data, solved }: BCProps) => {
    const router = useRouter();

    return <div onClick={() => {
        router.push({
            pathname: "/bonus",
            query: { bonus: JSON.stringify(data.id) },
        })
    }}>
        <div className="flex items-center border-b border-gray-200 p-2">
            <img src={data.imageUrl} className="w-12 h-12 rounded-xl" />
            <div className="flex items-start justify-between w-full">
                <div className="pl-3 w-full">
                    <p className="text-xl font-medium leading-5 text-gray-800">{data.title}</p>
                    <p className="text-sm leading-normal pt-2 text-gray-500 truncate">{solved ? "solved" : data.body}</p>
                </div>
            </div>
        </div>
    </div>
}

