import '../styles/globals.css'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'
import { UserProvider } from '../services/data-service/useUser'
import { UserDS } from '../services/data-service-2/UserDS'
import { TeamDS } from '../services/data-service-2/TeamDS'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <SessionProvider session={session}>
    <RecoilRoot>
      <UserProvider>
        <UserDS />
        <TeamDS />
        <Component {...pageProps} />
      </UserProvider>
    </RecoilRoot>
  </SessionProvider>
}

export default MyApp;