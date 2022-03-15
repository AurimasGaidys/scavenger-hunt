export enum BonusType {
    None,
    Image,
    Text
}

export interface BonusDataModel {
    id: string;

    name: string;
    type: BonusType;
    imageUrl: string;
    title: string; 
    body: string;

    correctCodesNeeded: number;
    codes: string[];
    levelIds: string[];

    bonusAmountInSeconds: number;
}