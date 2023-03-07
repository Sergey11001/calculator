import React from 'react';
import Button from "../Button";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

import styles from './styles.module.scss'

const numbersArr = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ',']

const Numbers = () => {
    const type = useAppSelector(state => state.blocks.type)
    const {setCurrentNumberButton} = useAppDispatch()
    const handleClick = (number: number | string) => {
        setCurrentNumberButton(number === ',' ? '.' : number)
    }
    return (
        <div className={styles.numbers} >
            {
                numbersArr.map(item => (
                    <Button onClick={type==="Runtime" ? handleClick : () => {}} key={item} content={item}/>
                ))
            }
        </div>

    );
};

export default Numbers;