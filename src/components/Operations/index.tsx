import React from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

import Button from "../Button";
import {calcByOption} from "../../helpers/calcByOption";

import styles from './styles.module.scss'

const operationArr = ['/', 'x', '-', '+']

const Operations = () => {
    const type = useAppSelector(state => state.blocks.type)
    const {currentNumber, prevNumber, operation} = useAppSelector(state => state.numbers)
    const {setCurrentNumber, setOperation, setPrevNumber} = useAppDispatch()
    const handleClickOperation = (operationSelected: string | number) => {
        if (!prevNumber && !currentNumber) return
        if (!prevNumber) {
            setPrevNumber(currentNumber)
            setCurrentNumber('')
            setOperation(operationSelected)
        }
        if (prevNumber && currentNumber) {
            const result = calcByOption({operation, currentNumber, prevNumber})
            setPrevNumber(result)
            setCurrentNumber('')
            setOperation(operationSelected)
        }
    }
    return (
        <div className={styles.operations}>
            {
                operationArr.map(sign => (
                    <Button
                        onClick={type === "Runtime" ? handleClickOperation : () => {
                        }}
                        key={sign}
                        content={sign}
                    />
                ))
            }
        </div>
    );
};

export default Operations;