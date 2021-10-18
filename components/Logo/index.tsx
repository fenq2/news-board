import React from 'react';
import Link from 'next/link';

import styles from './Logo.module.scss';

export const Logo: React.FC = () => {
    return (
        <Link href={'/'}>
            <a className={styles.logo}>
                Logo
            </a>
        </Link>
    );
};
