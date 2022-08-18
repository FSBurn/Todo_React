import React, {useState} from 'react';
import styles from "./Todo.module.css"
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoCard from "./TodoCard/TodoCard";
import TodoSubmit from "./TodoSubmit/TodoSubmit";

export default function Todo() {

    const [cards, setCards] = useState([]);
    let newCardTitle = {};

    const addCard = (event) => {
        event.preventDefault()
        setCards([...cards,
            {
                title: newCardTitle.title,
                id: Date.now()
            }
        ])
    };
    const changeCard = (event) => {
        newCardTitle = {
            title: event.target.value
        }
    };

    const removeCard = (event) => {
        setCards(cards.filter(element => (element.id !== event.target.id) ? element : null))
    }
    return (
        <div>

            <div className={styles.todoContainer}>
                <TodoHeader cards={cards}/>
                <TodoCard cards={cards} removeCard={removeCard}/>
                <TodoSubmit addCard={addCard} changeCard={changeCard}/>
            </div>
        </div>
    );
}
