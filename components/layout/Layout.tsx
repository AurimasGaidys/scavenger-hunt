import { RecoilRoot } from 'recoil'
import styles from '../../styles/Home.module.css'

interface Props {
    children: any;
}

export const Layout = (props: Props) => {
    return (
        <RecoilRoot>
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className='flex flex-col w-1/2'>
                        {props.children}
                    </div>
                </main>
            </div>
        </RecoilRoot>
    )
}