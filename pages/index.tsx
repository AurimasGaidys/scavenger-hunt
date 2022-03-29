import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head'
import { useRecoilState, useRecoilValue } from 'recoil';
import { teamState } from '../atoms/userData';
import { LevelCodeSender } from '../components/code-sender/LevelCodeSender';
import Header from '../components/Header'
import { LevelBuilder } from '../components/level-builder/LevelBuilder'
import Modal from '../components/Modal'

export default function Home() {

  const { data: session, status } = useSession();
  const team = useRecoilValue(teamState);

  if (session == null) {
    return (<div className="flex justify-center p-8 flex-col">
      <Head>
        <title>Create test App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-lg text-center p-4'>Great Treasure hunt</h1>
      <h1 className='text-m text-center p-4'>You are almost there press sign in </h1>
      <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => signIn()}>Sign in</button>
    </div>);
  }

  return (
    <div className="">
      <Head>
        <title>Create test App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LevelCodeSender />
      <LevelBuilder levelId={team?.currentLevelId || ""} />
      <Modal />
    </div>
  )
}
