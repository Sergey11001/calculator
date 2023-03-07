import React, {useState} from 'react';

import styles from "./styles.module.scss"

import img from "../../assets/img-drop.svg"
import {useDrop} from "react-dnd";
import {IBlock} from "../../utils/types/IBlock";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

const DropArea = () => {
    const {setBlocksConstructor} = useAppDispatch()
    const {blocksConstructor, blocksMain} = useAppSelector(state => state.blocks)
    const [{isOver}, drop] = useDrop(() => ({
        accept: "CalculatorBlock",
        drop: (item:{id:number}) => addBlockBoard(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))
    const addBlockBoard = (id:number) => {
        setBlocksConstructor(blocksMain.find((block:IBlock) => block.id===id))
    }
    return (
        <div className={styles.dropArea} style={isOver ? {background: "#f6f6f6"} : {}} ref={drop}>
            {
                blocksConstructor.length ?
                    blocksConstructor.map((block:IBlock) => (
                        <div key={block.id} style={{width:'100%'}}>
                            {block.block}
                        </div>
                    ))
                    :
                    <>
                        <img src={img} alt="img" height={40} width={40}/>
                        <p className={styles.purpleText}>Перетащите сюда</p>
                        <p className={styles.text}>Любой элемент из левой панели</p>
                    </>

            }

        </div>
    );
};

export default DropArea;