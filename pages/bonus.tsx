import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { bonusState, currentBonusState } from "../atoms/userData";
import BonusHeader from "../components/BonusHeader";
import { BonusCodeSender } from "../components/code-sender/BonusCodeSender";
import { BonusDataModel } from "../models/bonus";

function Bonus() {
    const router = useRouter();
    const bonus = useRecoilValue(currentBonusState);

    if (bonus == null) {
        return <div className="p-4">
            <BonusHeader name="Bonus"/>
        </div>
    }

    return <div className="p-4">
        <BonusHeader name="Bonus"/>

        <div className="w-full">
            <img className="h-64 " src={bonus.imageUrl} />
            <BonusCodeSender bonusId={bonus.id} />
            <h1 className="font-semibold text-2xl">{bonus.title} seconds bonus</h1>
            <h1 className="font-semibold text-2xl">{bonus.bonusAmountInSeconds} seconds bonus</h1>
            <p>{bonus.body}</p>
        </div>
    </div>
}

export default Bonus;