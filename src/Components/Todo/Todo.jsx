import React, {useState, useEffect} from 'react';
import styles from "./Todo.module.css"
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoCard from "./TodoCard/TodoCard";
import TodoSubmit from "./TodoSubmit/TodoSubmit";
import TodoCardDone from "./TodoCardDone/TodoCardDone";
import ChangeCardPopUp from "./ChangeCardPopUp/ChangeCardPopUp";
import {CARDS_KEY} from "../../Constants/localStorageKeys"

export default function Todo() {
    const [cards, setCards] = useState(() => {
        let initState = [];

        try {
            const data = localStorage.getItem(CARDS_KEY);

            if (data) {
                initState = JSON.parse(data);
            }
        } catch (e) {
            console.log(e)
        }

        return initState;
    })
    const [changeInputValue, setChangeInputValue] = useState("");

    const popUpInputChange = (event) =>  {
        setChangeInputValue(event.target.value);
    }
    const [inputValue, setInputValue] = useState("");

    const inputChange = (event) =>  {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault()

        addCard(inputValue)
        setInputValue("")
    }
    const addCard = (value) => {
        setCards([...cards, {
            title: value,
            id: Date.now(),
            checked: false,
            visible: false
        }])
    };

    const changeCheckbox = (event) => {
        setCards(cards.map(element => Number(event.target.id) === element.id ?
            {
                title: element.title,
                id: element.id,
                checked: !element.checked,
                visible: element.visible
            } : {
                title: element.title,
                id: element.id,
                checked: element.checked,
                visible: element.visible
            }
        ))
    }
    const popUp = (event) => {
        setCards(cards.map(element => Number(event.target.id) === element.id ?
            {
                title: element.title,
                id: element.id,
                checked: element.checked,
                visible: !element.visible
            } : {
                title: element.title,
                id: element.id,
                checked: element.checked,
                visible: element.visible
            }
        ))
    }

    const approveChangeCard = (event) => {
        event.preventDefault()

        setCards(cards.map(element => element.visible?
            {
                title: changeInputValue,
                id: element.id,
                checked: element.checked,
                visible: false
            } : {
                title: element.title,
                id: element.id,
                checked: element.checked,
                visible: element.visible
            }
        ))
    }
    const removeCard = (event) => {
        setCards(cards.filter(element => element.id !== Number(event.target.id)))
    }

    useEffect(() => {
        try {
            localStorage.setItem(CARDS_KEY, JSON.stringify(cards));
        } catch (e) {
            console.log(e)
        }
    }, [cards]);

    return (
        <div>
            <div className={styles.todoContainer}>
                <TodoHeader cards={cards.length}/>
                <TodoSubmit inputValue={inputValue} inputChange={inputChange} handleSubmit={handleSubmit} addCard={addCard}/>
                <TodoCard popUp={popUp} cards={cards} changeCheckbox={changeCheckbox} removeCard={removeCard}/>
                <TodoCardDone popUp={popUp} cards={cards} changeCheckbox={changeCheckbox} removeCard={removeCard}/>
            </div>
            <ChangeCardPopUp
                cards={cards}
                popUpInputChange={popUpInputChange}
                approveChangeCard={approveChangeCard}
                changeCheckbox={changeCheckbox}
                removeCard={removeCard}
                popUp={popUp}
            />
        </div>
    );
}
