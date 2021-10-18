import React from 'react';
import Image from 'next/image';

import styles from './NewsCard.module.scss';

interface NewsCardProps {
    imageBig: string;
    title: string;
    creationDate: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ imageBig, title, creationDate }) => {
    return (
        <>
            <div className={styles.newsItemImg}>
                <Image src={imageBig} alt="" objectFit="cover" layout="fill" />
            </div>
            <div className={styles.newsItemContent}>
            <span className={styles.newsItemDate}>{ creationDate }</span>
            <span className={styles.newsItemTitle}>{ title }</span>
            </div>
        </>
    );
};
