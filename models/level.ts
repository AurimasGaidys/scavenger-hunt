export enum LevelPayloadType {
    None,
    Image,
    Text
}

export interface LevelBodyText {
    text: string;
}


export interface LevelBodyImage {
    url: string;
}

export interface LevelBody {
    id: string;
    type: LevelPayloadType
    payload: string;
}

export interface Hints {
    id: string;
    delayInSeconds: number;
    body: LevelBody[];
}

export interface Sector {
    id: string;
    name: string;
    codes: string[];
}

export interface LevelDataModel {
    id: string;

    name: string;
    body: LevelBody[];
    hints: Hints[];

    sectors: Sector[];
    correctSectorsNeeded: number;

    nextLevelId: string;
    isStart: boolean;
    isFinish: boolean;

    adminNotes: string;
}

export interface LevelDto {
    id: string;
    name: string;
    body: LevelBody[];
    hints: Hints[];
    correctSectorsNeeded: number;
    sectors: Sector[];
}