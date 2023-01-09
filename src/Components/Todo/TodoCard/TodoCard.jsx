import React from 'react';
import styles from "./TodoCard.module.css"

export default function TodoCard({cards, removeCard, changeCheckbox, popUp}) {

    return (
        <div>
            <div>{cards.find(el => el.checked === false) ? "Need Todos" : ""}</div>
            {cards.length ? cards.map((newDiv) => newDiv.checked === false ? <div
                className={styles.todoItem}
                key={newDiv.id}>Task: {newDiv.title}
                <div className={styles.flex}>
                    <input id={newDiv.id} type="checkbox" checked={newDiv.checked} onChange={changeCheckbox}/>
                    <button onClick={popUp} id={newDiv.id} className={styles.change_button}> </button>
                    <button id={newDiv.id} className={styles.card_button} onClick={removeCard}>X
                    </button>
                </div>
            </div> : '') : "empty list"}
        </div>

    );
}

