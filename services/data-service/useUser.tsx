import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { loadingState } from '../../atoms/loadingAtom';
import { UserDataModel } from '../../models/user';

interface ucd {
    user: UserDataModel | undefined;
    loading: boolean;
    error: string;
    userId: string;
    setUserId?: Function;
}

const userContext = createContext<ucd>({ error: "", loading: true, user: undefined, userId: "" });

// user data service written as a hook
export const UserProvider = ({ children }: any) => {

    const [userId, setUserId] = useState("");
    const [user, setUser] = useState<UserDataModel | undefined>();
    const [loading, setLoading] = useRecoilState(loadingState);
    const [error, setError] = useState("");

    useEffect(() => {
        console.log(userId);
    }, [userId]);


    return <userContext.Provider value={{
        user,
        loading,
        error,
        setUserId,
        userId
    }}>
        {children}
    </userContext.Provider>

}

export default function useUser() {
    return useContext(userContext);
}
