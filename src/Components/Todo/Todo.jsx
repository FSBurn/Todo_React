import React, {useState, useEffect} from 'react';
import styles from "./Todo.module.css"
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoCard from "./TodoCard/TodoCard";
import TodoSubmit from "./TodoSubmit/TodoSubmit";
import {CARDS_KEY} from "../../Constants/localStorageKeys"

export default function Todo() {
    const [cards, setCards] = useState(localStorage.getItem(CARDS_KEY) ? () => {
        try {
            const localStorageData = localStorage.getItem(CARDS_KEY);
            return JSON.parse(localStorageData);
        } catch (e) {
            console.log(e)
        }
    } : []);

    const addCard = (value) => {
        setCards([...cards, {
            title: value,
            id: Date.now(),
        }])
    };

    const removeCard = (event) => {
        setCards(cards.filter(element => element.id !== Number(event.target.id)))
    }

    try {
        useEffect(() => {
            localStorage.setItem(CARDS_KEY, JSON.stringify(cards));
        }, [cards]);
    } catch (e) {
        console.log(e)
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
