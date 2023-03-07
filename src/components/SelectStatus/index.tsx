import React from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

import styles from "./styles.module.scss"

import eye from "../../assets/eye.svg"



const SelectStatus = () => {
    const { blocksConstructor ,type} = useAppSelector(state => state.blocks)
    const {clearBlocksConstructor, setBlocksMain, setType} = useAppDispatch()
    const handleClickSelector = (type: string) => {
        if(type==="Runtime"){
            if(blocksConstructor.length===4){
                setBlocksMain(blocksConstructor)
            }
            clearBlocksConstructor()
        }
        setType(type)
    }
    return (
        <div className={styles.selector}>
            <ul className={styles.list}>
                <li
                    className={styles.listItem}
                    style={type==="Runtime" ? {background:'white'} : {}}
                    onClick={() => handleClickSelector("Runtime")}
                >
                    <img src={eye} alt="eye" height={20} width={20}/>
                    <p>Runtime</p>
                </li>
                <li
                    className={styles.listItem}
                    style={type==="Constructor" ? {background:'white'} : {}}
                    onClick={() => handleClickSelector("Constructor")}
                >
                    <span className={styles.blueBrackets}>{'<>'}</span>
                    <p>Constructor</p>
                </li>
            </ul>
        </div>
    );
};

export default SelectStatus;