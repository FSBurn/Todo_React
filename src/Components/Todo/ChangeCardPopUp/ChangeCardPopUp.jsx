import React from 'react';
import styles from "./ChangeCardPopUp.module.css"

export default function ChangeCardPopUp({cards, approveChangeCard, changeCheckbox, removeCard, popUp, popUpInputChange}) {

    return (
        <div>
            {cards.length ? cards.map(newDiv => newDiv.visible !== false ?
                <div className={styles.contentPopUp}>
                    <div className={styles.content}>
                        <div className={styles.todoItem} key={newDiv.id}>
                            <div className={styles.PopUpDiv}>
                                <button className={styles.Button} onClick={popUp} id={newDiv.id}>Close</button>
                                <form onSubmit={approveChangeCard} className={styles.todoItem}>
                                    <div className={styles.SpaceBetween}>
                                        <label>Task:
                                            <input className={styles.input} onChange={popUpInputChange} placeholder={newDiv.title} type="text"/>
                                        </label>
                                        <div className={styles.flex}>
                                            <input id={newDiv.id} type="checkbox" checked={newDiv.checked}
                                                   onChange={changeCheckbox}/>
                                            <button className={styles.Button} id={newDiv.id} onClick={removeCard}>Delete
                                            </button>
                                            <input className={styles.Button} type="submit" value={"Submit"}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> : "") : ""}
        </div>
    )
}