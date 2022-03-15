import moment from "moment";
import { TeamDataContext } from "../services/data-service/teamDataContext";
import useUser from "../services/data-service/useUser";

function TeamSelect() {
    const { user, userId } = useUser();
    const aaa = TeamDataContext.getInstance({ teamId: "3213ff14-8172-452a-8a6c-4cde94ab0cc7" });

    const createTeam = () => {
        const uteam = {
            id:  "id",
            name: "",
            joinId: "",
            created: +moment(),
            membersIds: [],
            currentLevelNumber: 0,
            currentLevelId: "",
            correctCodes: [],
            bonusSolved: [],
            isNew: true
        };

    //    let aaa =  setDoc(docRef, uteam);
    }

    return <div>
        <h1>Team Select </h1>
        // Join


    // create new


    </div>
}

export default TeamSelect;