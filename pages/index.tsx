import React from 'react';

import { MainLayout } from '../layouts/MainLayout';
import { News } from '../components/News';

const Home: React.FC = () => {
    return (
        <MainLayout title="Главная страница">
            <News />
        </MainLayout>
    );
};

export default Home;
