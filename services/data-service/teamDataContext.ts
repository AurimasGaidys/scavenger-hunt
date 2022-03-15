import '@firebase/firestore';
import { onSnapshot } from '@firebase/firestore';
import { doc } from 'firebase/firestore';
import { getDB } from '../../helpters/getDB';
import { DatabaseTables } from '../../models/aDatabaseTables';
import { TeamDataModel } from '../../models/team';

interface Props {
    teamId: string;
}

export class TeamDataContext {
    private static instance: TeamDataContext;
    private static teamId: string;

    private team?: TeamDataModel;
    private hooks: Function[] = [];
    private unsubscribe: Function;

    private constructor() {
        this.unsubscribe = () => { console.log("init") }
    }

    public static getInstance({ teamId }: Props): TeamDataContext {
        if (!TeamDataContext.instance) {
            TeamDataContext.instance = new TeamDataContext();
            this.instance.unsubscribe = onSnapshot(doc(getDB(), DatabaseTables.team, teamId), (doc) => {
                console.log("Current data: ", doc.data());
                TeamDataContext.instance.team = doc.data() as TeamDataModel;
            });
        }

        if (teamId != this.teamId) {
            this.instance.unsubscribe();
            this.instance.unsubscribe = onSnapshot(doc(getDB(), DatabaseTables.team, teamId), (doc) => {
                console.log("Current data: ", doc.data());
                TeamDataContext.instance.team = doc.data() as TeamDataModel;
            });
        }

        return TeamDataContext.instance;
    }


    subscribeForUpdates = (func: (a: TeamDataModel[]) => void) => {
        console.log("subscribeForUpdates", this.hooks.length);
        this.hooks.push(func);
    }

    totalHooks = () => {
        return this.hooks.length
    };

    // public getList = async (noCashe?: boolean) => {
    //     if ((noCashe == null || noCashe == false) && this.Teams.length > 0) {
    //         return this.Teams.sort(function (a, b) {
    //             if (a.name < b.name) { return -1; }
    //             if (a.name > b.name) { return 1; }
    //             return 0;
    //         });
    //     }

    //     await this.fetchData();
    //     return this.Teams.sort(function (a, b) {
    //         if (a.name < b.name) { return -1; }
    //         if (a.name > b.name) { return 1; }
    //         return 0;
    //     });
    // }

    // public getItem = async (id: string, noCashe?: boolean) => {
    //     if ((noCashe == null || noCashe == false) && this.Teams.length > 0) {
    //         const index = this.Teams.findIndex(x => x.id === id);
    //         return this.Teams[index];
    //     }

    //     await this.fetchData();
    //     const index = this.Teams.findIndex(x => x.id === id);
    //     return this.Teams[index];
    // }
}


// import '@firebase/firestore';
// import { doc } from '@firebase/firestore';
// import { onSnapshot } from 'firebase/firestore';
// import { useEffect, useState } from 'react';
// import { getDB } from '../../helpters/getDB';
// import { TeamDataModel } from '../../models/team';

// export const LevelDataContext = () => {
//     const [teamId, setTeamId] = useState<TeamDataModel>();
//     const [team, setTeam] = useState<TeamDataModel>();
//     const [hooks, setHooks] = useState<Function[]>([]);

//     useEffect(() => {
//         const unsubscribe = onSnapshot(doc(getDB(), "cities", "SF"), (doc) => {
//             console.log("Current data: ", doc.data());
//         });

//         return unsubscribe;
//     }, [teamId]);

//     const subscribeForUpdates = (func: (a: TeamDataModel[]) => void) => {
//         console.log("aaaa", hooks?.length);
//         setHooks([...hooks, func]);
//     }

//     return { team, subscribeForUpdates }
// }