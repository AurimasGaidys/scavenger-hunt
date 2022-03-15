import React from 'react';
import Image from 'next/image';
import { GiftIcon, UserIcon, CogIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Header() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [open, setOpen] = useRecoilState(modalState);
    return <div className='shadow-sm border-b bg-white sticky'>
        <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto p-2'>
            {session ? (
                <UserIcon className="h-6" onClick={() => { router.push("/profile") }} />
            ) : <div />}


            {/* center */}
            <div className='flex items-center'>
                <div>{JSON.stringify(session?.user?.name)}</div>
            </div>

            {session ? (
                <GiftIcon className="h-6" onClick={() => { router.push("/bonus-list") }} />
            ) : (
                <div className='flex items-center justify-end space-x-4' >
                    <button onClick={() => signIn()}>Sign in</button>
                </div>
            )}
            {/* right */}

        </div>

    </div>;
}

export default Header;
