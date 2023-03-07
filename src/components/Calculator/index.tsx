import React from 'react';

import {IBlock} from "../../utils/types/IBlock";
import {useAppSelector} from "../../redux/hooks";
import Draggable from "../Draggable";

import styles from "./styles.module.scss"

const Calculator: React.FC = () => {
    const blocksMain = useAppSelector(state => state.blocks.blocksMain)
    return (
        <div className={styles.calcBody}>
            {
                blocksMain.map((blockItem:IBlock) => (
                    <Draggable key={blockItem.id} id={blockItem.id}>
                        {blockItem.block}
                    </Draggable>
                ))
            }
        </div>
    );
};

export default Calculator;