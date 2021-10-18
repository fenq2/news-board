import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

import styles from './News.module.scss';

import { NewsCard } from './NewsCard';

interface NewsDataProps {
    id: number;
    image_big: string;
    title: string;
    creation_date: string;
}

export const News = () => {
    const [newsData, setNewsData] = useState<NewsDataProps[] | null>(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const data: any = await axios.get('https://news.itmo.ru/api/news/list/?ver=2.0');
                setNewsData(data.data.news);
                console.log(data.data.news);
            } catch (error) {
                console.log(error);
            }
        };

        getNews();
    }, []);

    return (
        <div>
            <div className="container">
                <h3 className="section-title">Новости и события</h3>
                <div className={styles.news}>
                    {newsData ? (
                        newsData.map((item: NewsDataProps) => {
                            return (
                                <Link key={item.id} href={`/news/${encodeURIComponent(item.id)}`}>
                                    <a className="newsItem"><NewsCard imageBig={item['image_big']} title={item.title} creationDate={item['creation_date']} /></a>
                                </Link>
                            );
                        })
                    ) : (
                        <>
                            <Skeleton duration={2} width={380} height={200} />
                            <Skeleton duration={2} width={380} height={200} />
                            <Skeleton duration={2} width={380} height={200} />
                            <Skeleton duration={2} width={380} height={200} />
                            <Skeleton duration={2} width={380} height={200} />
                            <Skeleton duration={2} width={380} height={200} />
                            <Skeleton duration={2} width={380} height={200} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
