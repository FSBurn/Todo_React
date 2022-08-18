import React from 'react';
import styles from "./TodoCard.module.css"

export default function TodoCard(props) {

    return (
        <div>{props.cards.length ? props.cards.map((newDiv) => <div
            className={styles.todoItem}
            key={newDiv.id}>Task: {newDiv.title}
            <button id={newDiv.id} className={styles.card_button} onClick={props.removeCard}>X
            </button>
        </div>) : "empty list"}</div>
    );
}

