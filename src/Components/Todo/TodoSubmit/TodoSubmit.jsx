import React from 'react';
import styles from "./TodoSubmit.module.css"

export default function TodoSubmit({handleSubmit, inputChange, inputValue}) {

    return (
        <form onSubmit={handleSubmit} className={styles.todoItem}>
            <label>
                <input
                    onChange={inputChange}
                    value={inputValue}
                    className={styles.input_size}
                    type="text" placeholder={"Enter item"}
                    required
                />
            </label>
            <input className={styles.submit_button} type="submit" value={"Submit"}/>
        </form>

    );
}
