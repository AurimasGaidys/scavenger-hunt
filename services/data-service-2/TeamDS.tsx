import { doc, onSnapshot, setDoc } from "firebase/firestore";
import moment from "moment";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil";
import { teamState, userState } from "../../atoms/userData";
import { getDB } from "../../helpters/getDB";
import { DatabaseTables } from "../../models/aDatabaseTables";
import { TeamDataModel } from "../../models/team";

export const TeamDS = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const user = useRecoilValue(userState);
    const [team, setTeam] = useRecoilState(teamState);


    useEffect(() => {
        let unsubscribe: Function = () => { };
        if (user?.teamId) {
            const docRef = doc(getDB(), DatabaseTables.team, user?.teamId);
            let uteam: TeamDataModel
            unsubscribe = onSnapshot(docRef, (data) => {
                if (data.exists()) {
                    uteam = data.data() as TeamDataModel;
                    setTeam(uteam);
                }
            });
        }


        return () => {
            console.log("destroy")
            unsubscribe();
        }
    }, [user])


    return <div>
      
    </div>
}