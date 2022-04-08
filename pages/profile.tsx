import moment from "moment";
import BonusHeader from "../components/BonusHeader";
import { TeamDataContext } from "../services/data-service/teamDataContext";
import useUser from "../services/data-service/useUser";

import { useRouter } from 'next/dist/client/router';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRecoilValue } from "recoil";
import { teamState, userState } from "../atoms/userData";


function Profile() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const user = useRecoilValue(userState);
    const team = useRecoilValue(teamState);

    return <div >
        <BonusHeader name="Profile" />
        <div className="p-4">
            <h1 className="text-xl p-2">Profile</h1>
            {
                !session ? <>
                    <h2 className="p-2">Logged out</h2>
                    <button className="border p-2" onClick={() => { signIn() }}>Login in</button>
                </>
                    :
                    <>
                        <h2 className="text-xl p-2">Team mates</h2>
                        <div className="flex flex-col space-y-2 p-4">{team?.membersIds?.map(x => <p key={"tm-" + x}>{x}</p>)} </div>
                        <h2 className="text-xl p-2">Total Bonuses solved</h2>
                        <div className="text-m p-4">{team?.solvedBonuses?.length} </div>
                        <div className="flex"> {(team?.solvedBonuses?.length || 0)*60} sec bonus</div>
                        <h2 className="text-xl p-4">Game started</h2>
                        {(team?.gameStarted || 0) > 0 &&<div className="text-m p-4">{moment(team?.gameStarted).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>}
                        <h2 className="text-xl p-4">Game ended</h2>
                        {(team?.gameEnded || 0) > 0 &&<div className="text-m p-4">{moment(team?.gameEnded).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>}
                        <h2 className="text-xl p-4">Game duration</h2>
                        {(team?.gameEnded || 0) > 0 && <div className="text-m p-4">{moment.duration(moment(team?.gameEnded).diff(moment(team?.gameStarted))).asMinutes()}</div>}
                        <h2 className="text-xl p-4">Total game time</h2>
                        {(team?.gameEnded || 0) > 0 && <div className="text-m p-4">{moment.duration(moment(team?.gameEnded).diff(moment(team?.gameStarted))).asMinutes() - (team?.solvedBonuses?.length || 0)*60}</div>}
                        <button className="border p-2" onClick={() => { signOut() }}>Logout</button>
                    </>
            }
        </div>
    </div>
}

export default Profile;