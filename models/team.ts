export interface TeamDataModel {
    id: string,

    name: string,
    joinId: string,

    created: number,
    membersIds: string[]

    gameStarted: number;
    gameEnded: number;
    currentLevelNumber: number;
    currentLevelId: string;
    currentLevelStarted: number;
    correctCodes: string[],
    solvedSectors: string[],
    correctBonusCodes: string[],
    solvedBonuses: string[],

    bonusSolved: string[];
    isNew: boolean;
    adminNotes: string;
}