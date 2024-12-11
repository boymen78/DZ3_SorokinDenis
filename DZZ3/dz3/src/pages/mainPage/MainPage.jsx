import React from 'react';
import Description from '../../components/descrption/Descrption';
import styles from './mainPage.module.css';

const MainPage = () => {
    const descriptionProps = { title: "Title", description: "description" };

    return (
        <div className={styles.mainPage}>
            <h1>Main Page</h1>
            <Description {...descriptionProps} />
        </div>
    );
};

export default MainPage;