import { BonusBuilder } from "../components/bonus-builder/bonus-builder";
import BonusHeader from "../components/BonusHeader";

function BonusList() {
    return <div>
        <BonusHeader name="Bonus"/>
        <BonusBuilder />
    </div>
}

export default BonusList;