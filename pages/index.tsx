import Head from 'next/head'
import { useRecoilState, useRecoilValue } from 'recoil';
import { teamState } from '../atoms/userData';
import { LevelCodeSender } from '../components/code-sender/LevelCodeSender';
import Header from '../components/Header'
import { LevelBuilder } from '../components/level-builder/LevelBuilder'
import Modal from '../components/Modal'

export default function Home() {

  const team = useRecoilValue(teamState);

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
