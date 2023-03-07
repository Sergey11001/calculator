import React from 'react';

import styles from "./styles.module.scss"
import classNames from "classnames";

interface IButton {
    content: number | string,
    primary?: boolean,
    onClick: (c: string | number) => void
}

const Button: React.FC<IButton> = ({content, primary = false, onClick}) => {
    return (
        <div onClick={() => onClick(content)} className={classNames(styles.button, {
            [styles.buttonNull]: content === 0,
            [styles.buttonPrimary]: primary
        })}>
            {content}
        </div>
    );
};

export default Button;