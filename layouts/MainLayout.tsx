import React from 'react';
import Head from 'next/head';

import { Header } from '../components/Header';

interface MainLayoutProps {
    title: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>{ title }</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="content">
                <Header />
                { children }
            </div>
        </>
    )
}
