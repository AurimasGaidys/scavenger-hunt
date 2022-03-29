import { atom } from "recoil";
import { TeamDataModel } from "../models/team";
import { UserDataModel } from "../models/user";

export const userState = atom<UserDataModel | undefined>({
    key: "userState",
    default: undefined
})

export const teamState = atom<TeamDataModel | undefined>({
    key: "teamState",
    default: undefined
})