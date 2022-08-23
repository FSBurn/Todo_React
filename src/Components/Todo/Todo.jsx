import React, {useState} from 'react';
import styles from "./Todo.module.css"
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoCard from "./TodoCard/TodoCard";
import TodoSubmit from "./TodoSubmit/TodoSubmit";

export default function Todo() {
    const [cards, setCards] = useState([]);

    const addCard = (value) => {
        setCards([...cards, {
            title: value,
            id: Date.now(),
        }])
    };

    const removeCard = (event) => {
        setCards(cards.filter(element => element.id !== Number(event.target.id)))
    }

    return (
        <div>
            <div className={styles.todoContainer}>
                <TodoHeader cards={cards.length}/>
                <TodoCard cards={cards} removeCard={removeCard}/>
                <TodoSubmit addCard={addCard}/>
            </div>
        </div>
    );
}
