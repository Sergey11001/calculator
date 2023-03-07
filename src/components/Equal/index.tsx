import React from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

import Button from "../Button";
import {calcByOption} from "../../helpers/calcByOption";


const Equal = () => {
    const {currentNumber, prevNumber, operation} = useAppSelector(state => state.numbers)
    const {setCurrentNumber, setOperation, setPrevNumber} = useAppDispatch()
    const handleEqualClick = () => {
        setCurrentNumber(calcByOption({operation, currentNumber, prevNumber}))
        setPrevNumber('')
        setOperation('')
    }
    return (
        <Button onClick={handleEqualClick} content={'='} primary />
    );
};

export default Equal;