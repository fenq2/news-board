import React from 'react';

import styles from './Header.module.scss';

import { Logo } from '../Logo';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <Logo />
            </div>
        </div>
    );
};
