import React from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, UserIcon, CogIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function BonusHeader() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [open, setOpen] = useRecoilState(modalState);
    return <div className='shadow-sm border-b bg-white sticky'>
        <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto p-2'>
            {session ? (
                <ArrowLeftIcon className="h-6" onClick={() => { router.back() }} />
            ) : <div />}


            {/* center */}
            <div className='flex items-center'>
                <div>Bonus</div>
            </div>

            <div />

        </div>

    </div>;
}

export default BonusHeader;
