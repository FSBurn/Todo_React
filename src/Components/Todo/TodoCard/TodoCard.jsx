import React from 'react';
import styles from "./TodoCard.module.css"

export default function TodoCard({cards, removeCard}) {

    return (
        <div>{cards.length ? cards.map((newDiv) => <div
            className={styles.todoItem}
            key={newDiv.id}>Task: {newDiv.title}
            <button id={newDiv.id} className={styles.card_button} onClick={removeCard}>X
            </button>
        </div>) : "empty list"}</div>
    );
}

