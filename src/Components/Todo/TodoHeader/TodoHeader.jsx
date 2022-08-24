import React from 'react';
import styles from "./TodoHeader.module.css"

export default function TodoHeader({cards}) {
    return (

        <div className={styles.padding10}>{cards ? <div>You have {cards} Todos</div> : null}</div>
    );
}

