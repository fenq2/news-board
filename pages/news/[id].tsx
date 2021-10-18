import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { MainLayout } from '../../layouts/MainLayout';

interface NewsDataProps {
    id: number;
    image_big: string;
    title: string;
    view_count: number;
}

const Post: React.FC = () => {
    const [postData, setPostData] = useState<NewsDataProps | null>(null);
    const router = useRouter();

    useEffect(() => {
        const getPost = async () => {
            try {
                const data: any = await axios.get('https://news.itmo.ru/api/news/list/?ver=2.0');
                const dataItem: any = data.data.news.forEach((item: NewsDataProps) => {
                    if((item.id).toString() === router.query.id) {
                        setPostData(item);
                    }
                });
                
                
            } catch (error) {
                console.log(error);
            }
        };

        getPost();
    }, [router]);

    return (
        <MainLayout title="Карточка">
            <div className="container">
                <Link href={'/'}>
                    <a className="breadcrumbs-link">&#8249; Назад</a>
                </Link>
                <div>
                    {postData ? (
                        <div className="post">
                            <div className="postImg">
                                <Image src={postData['image_big']} alt="" objectFit="cover" layout="fill" />
                            </div>
                            <span className="postTitle">{postData.title}</span>
                            <span className="postCount">Просмотров: {postData['view_count']}</span>
                        </div>
                    ) : (
                        <>
                            <Skeleton duration={2} height={200} />
                            <Skeleton duration={2} height={600} />
                        </>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};



export default Post;
