import React from 'react';
import Image from 'next/image';
import { GiftIcon, UserIcon, CogIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Header() {
    const router = useRouter();
    return <div className='shadow-sm border-b bg-white sticky'>
        <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto p-2'>
            <UserIcon className="h-6" onClick={() => { router.push("/profile") }} />
        </div>

    </div>;
}

export default Header;
