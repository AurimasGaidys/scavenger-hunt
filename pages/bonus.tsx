import { useRouter } from "next/router";
import BonusHeader from "../components/BonusHeader";
import { BonusCodeSender } from "../components/code-sender/BonusCodeSender";
import { BonusDataModel } from "../models/bonus";

function Bonus() {
    const router = useRouter();
    const bonus = JSON.parse(router.query.bonus as string) as BonusDataModel;

    return <div className="p-4">
        <BonusHeader />

        <div className="w-full">
            <img className="h-64 " src={bonus.imageUrl} />
            <BonusCodeSender bonusId={bonus.id} />
            <h1 className="font-semibold text-2xl">{bonus.bonusAmountInSeconds} seconds bonus</h1>
            <h1 className="font-semibold text-2xl">{bonus.id} seconds bonus</h1>
            <p>{bonus.body}</p>
        </div>
    </div>
}

export default Bonus;