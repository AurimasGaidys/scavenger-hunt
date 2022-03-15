export interface UserDataModel {
    id: string;
    name: string;

    teamCreated?: number;
    teamId?: string;

    isDeveloper: boolean;
    isNew: boolean;
    logs: string[];
    adminNotes: string;
}
