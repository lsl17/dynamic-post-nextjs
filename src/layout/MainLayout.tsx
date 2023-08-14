import Header from '@/components/Header';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { ReactElement } from "react";

const MainLayout = (page: ReactElement, pageProps: AppProps) => {
    const router = useRouter();
    return (
        <div id="main-start-section" className='flex w-full min-h-screen flex-col relative'>
            <div className='w-full pb-5 flex-grow'>
                <Header />
                {page}
            </div>
            {/* <Footer /> */}
        </div>
    )
}
export default MainLayout;

