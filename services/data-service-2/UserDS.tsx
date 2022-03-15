import { doc, onSnapshot, setDoc } from "firebase/firestore";
import moment from "moment";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react"
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/userData";
import { getDB } from "../../helpters/getDB";
import { DatabaseTables } from "../../models/aDatabaseTables";
import { UserDataModel } from "../../models/user";

export const UserDS = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [user, setUser] = useRecoilState(userState);


    useEffect(() => {
        let unsubscribe: Function = () => { };
        if (session?.user?.email) {
            const docRef = doc(getDB(), DatabaseTables.user, session?.user?.email);
            let uuser: UserDataModel
            unsubscribe = onSnapshot(docRef, (data) => {
                if (data.exists()) {
                    uuser = data.data() as UserDataModel;
                    setUser(uuser);
                } else {
                    uuser = {
                        id: session?.user?.email || "id",
                        isNew: true,
                        isDeveloper: false,
                        name: session?.user?.name || "mane",
                        teamCreated: +moment(),
                        logs: []
                    };

                    setDoc(docRef, uuser);
                }

                if(uuser?.isNew){
                    // No team selected redirect to team select
                    console.warn(" No team selected redirect to team select");
                    router.push("/teamselect");
                }
            });
        }


        return () => {
            console.log("destroy")
            unsubscribe();
        }
    }, [session?.user?.email])


    return <div>
       
    </div>
}