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

    private   : TeamDataModel[] = [];
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
            });
        }

        if (teamId != this.teamId) {
            this.instance.unsubscribe();
            this.instance.unsubscribe = onSnapshot(doc(getDB(), DatabaseTables.team, teamId), (doc) => {
                console.log("Current data: ", doc.data());
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
    }

}