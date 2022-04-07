import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Props {
    bonusId: string;
}

export const BonusCodeSender = ({ bonusId }: Props) => {

    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string[] | undefined>();
    const [code, setCode] = useState("");
    const [value, setValue] = useState("");

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        setSuccess(false);

        if (code == "") {
            setLoading(false);
            return;
        }
        // GET request using fetch inside useEffect React hook
        fetch(`https://europe-west3-gth-web-tests.cloudfunctions.net/onSendBonusCode`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ uid: session?.user?.email, code: code.trim().toLowerCase(), bonusId: bonusId })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setSuccess(true);
                    setValue("");

                } else {
                    setError(data.errors);
                }

                console.warn(data)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [code]);

    return <div className="w-full flex flex-col">
        <div className="w-full flex">
            <input className="w-full p-4 border-b" value={value} onChange={e => { e.preventDefault(); setValue(e.target.value) }} />
            <button className="p-4 bg-gray-400" onClick={() => code != value && setCode(value)}>Send</button>
        </div>
        {loading && <p >Loading...</p>}
        {success && <div onClick={() => { setSuccess(false) }} className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Yes!</strong>
            <span className="block sm:inline">Code approved</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
        </div>}
        {error && <div onClick={() => { setError(undefined) }} className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Oh noo!</strong>
            <span className="block sm:inline">{error[0]}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
        </div>}

    </div>
};