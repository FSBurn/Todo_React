import React, {useState} from 'react';
import styles from "./TodoSubmit.module.css"

export default function TodoSubmit({addCard}) {
    const [inputValue, setInputValue] = useState("");

    const inputChange = (event) =>  {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault()

        addCard(inputValue)
        setInputValue("")
    }

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
