import React from 'react';
import styles from "./TodoSubmit.module.css"

export default function TodoSubmit(props) {

    return (
        <form onSubmit={props.addCard} className={styles.todoItem}>
            <label>
                <input  onChange={props.changeCard}
                        className={styles.input_size}
                        type="text" placeholder={"Enter item"}
                        required
                />
            </label>
            <input   className={styles.submit_button} type="submit" value={"Submit"}/>
        </form>

    );
}
