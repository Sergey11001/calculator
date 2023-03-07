import React, {useState} from 'react';
import Calculator from "../../components/Calculator";
import Constructor from "../../components/Constructor";

import styles from "./styles.module.scss"

const MainPage = () => {
    return (
        <div className={styles.main}>
            <Calculator/>
            <Constructor />
        </div>
    );
};

export default MainPage;