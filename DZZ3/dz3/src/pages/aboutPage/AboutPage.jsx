import React from 'react';
import Description from '../../components/descrption/Descrption';
import styles from './aboutPage.module.css'

const AboutPage = () => {
    const descriptionProps = { title: "Title 2", description: "description 2" };

    return (
        <div className={styles.aboutPage}>
            <h1>About Page</h1>
            <Description {...descriptionProps} />
        </div>
    );
};

export default AboutPage;