import React from 'react';
import styles from "./TodoHeader.module.css"

export default function TodoHeader(props) {
    return (

        <div className={styles.padding10}>{props.cards.length ? <div>You have {props.cards.length} Todos</div> : null}</div>
    );
}

