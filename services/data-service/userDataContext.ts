// import * as firebase from 'firebase';
// import '@firebase/firestore';
// import { TeamDataModel } from '../../models/team-data-model';
// import { getDB } from '../../helpers/get-db';

// const DB_TABLE_NAME = "team";

export class UserDataContext {
    // private static instance: TeamDataContext;

    // private Teams: TeamDataModel[] = [];
    // private hooks: Function[] = [];

    // private constructor() { }

    // public static getInstance(): TeamDataContext {
    //     if (!TeamDataContext.instance) {
    //         TeamDataContext.instance = new TeamDataContext();
    //         this.instance.fetchData();
    //     }

    //     return TeamDataContext.instance;
    // }

    // private fetchData = async () => {
    //     try {
    //         const result = await getDB()
    //             .collection(DB_TABLE_NAME)
    //             .onSnapshot((sn) => {
    //                 if (!sn.empty) {
    //                     this.Teams = [];

    //                     let a = sn.forEach(doc => {

    //                         const data = doc.data() as TeamDataModel;
    //                         this.Teams.push(data);

    //                         // To remove duplicates
    //                         // let position = this.Teams.findIndex(x => x.id == data.id);

    //                         // if (position > -1) {
    //                         //     this.Teams[position] = data;
    //                         // } else {
    //                         //     this.Teams.push(data);
    //                         // }
    //                     })

    //                     this.hooks.forEach(x => x(this.Teams))
    //                 }
    //             });

    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // subscribeForUpdates = (func: (a: TeamDataModel[]) => void) => {
    //     this.hooks.push(func);
    // }

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
  //  }
}