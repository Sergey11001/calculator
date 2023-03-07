import React from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

import styles from './styles.module.scss'

const Input = () => {
    const type = useAppSelector(state => state.blocks.type)
    const {currentNumber, prevNumber, operation} = useAppSelector(state => state.numbers)
    const {setCurrentNumber} = useAppDispatch()
    return (
            <div className={styles.inputWrapper} >
                {
                    prevNumber ?
                        <p className={styles.history}>
                            {prevNumber} {operation}
                        </p>
                        :
                        null
                }

                <input
                    type="text"
                    style={type==="Runtime" ? {}: {pointerEvents:"none"}}
                    className={styles.input} placeholder={'0'}
                    value={currentNumber || ''}
                    onChange={(e) => setCurrentNumber(e.target.value)}
                />
            </div>

    );
};

export default Input;