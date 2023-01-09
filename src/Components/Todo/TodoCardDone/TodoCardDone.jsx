import React from 'react';
import styles from "./TodoCardDone.module.css"

export default function TodoCardDone({cards, removeCard, changeCheckbox, popUp}) {
    return (
        <div>
            <div>{cards.find(el => el.checked === true) ? "Done Todos" : ""}</div>
            {cards.length ? cards.map(newDiv => newDiv.checked !== false ? <div
                className={styles.todoItem}
                key={newDiv.id}>Task: {newDiv.title}
                <div className={styles.flex}>
                    <input id={newDiv.id} type="checkbox" checked={newDiv.checked} onChange={changeCheckbox}/>
                    <button onClick={popUp} className={styles.change_button} id={newDiv.id}> </button>
                    <button id={newDiv.id} className={styles.card_button} onClick={removeCard}>X
                    </button>
                </div>
            </div> : "") : ""}
        </div>

    );
}

