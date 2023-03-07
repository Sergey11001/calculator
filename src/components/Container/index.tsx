import React, {forwardRef, ReactNode} from 'react';

import styles from './styles.module.scss'
import classNames from "classnames";

interface IContainer{
    children: ReactNode,
    isDragging: boolean,
    inactive:boolean
}

const Container = forwardRef<HTMLDivElement, IContainer>(({children, isDragging, inactive}, ref) => {
    return (
        <div ref={ref} className={classNames(styles.wrapper, {
            [styles.inactive]: inactive
        })} style={isDragging ? {opacity: 0.4} : {}}>
            {children}
        </div>
    );
});

export default Container;