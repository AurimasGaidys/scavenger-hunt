import { doc, setDoc } from "firebase/firestore";
import moment from "moment";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { getDB } from "../helpters/getDB";
import { DatabaseTables } from "../models/aDatabaseTables";
import { TeamDataContext } from "../services/data-service/teamDataContext";
import useUser from "../services/data-service/useUser";

function TeamSelect() {
    const { data: session, status } = useSession();
    const { user, userId } = useUser();
    // const aaa = TeamDataContext.getInstance({ teamId: user?.teamId || "not set" });

    const createTeam = () => {
        if (user?.isNew) {
            const uteam = {
                id: session?.user?.email,
                name: session?.user?.name,
                joinId: "",
                created: +moment(),
                membersIds: [],
                currentLevelNumber: 0,
                currentLevelId: "",
                correctCodes: [],
                bonusSolved: [],
                isNew: true
            };

            const docRef = doc(getDB(), DatabaseTables.team, session?.user?.name || "no name");
            let aaa = setDoc(docRef, uteam);
        }
    }

    useEffect(() => {
        if(session?.user?.email != null){
            createTeam();
        }
    }, [session?.user?.email])


    return <div className="p-4">
        <h1 className="text-lg p-4">Yay you made it</h1>
        <p className="p-4">You will be assign to team soon</p>

        <button className="border p-2" onClick={() => { signOut() }}>Logout</button>
    </div>
}

export default TeamSelect;