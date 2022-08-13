import React, {useState} from 'react';

function Todo() {

    const [cards, setCards] = useState([]);

    const addCard = () => {
        const newArray = [...cards,
            {
                title: '11',
                id: Date.now()
            }];
        setCards(newArray)
    }
    const removeCard = () => {
        setCards(cards.filter((element, index) => index < cards.length - 1))
    }
    return (
        <div>
            <button onClick={addCard}>Add
            </button>
            <button onClick={removeCard}>Delete
            </button>
            <div>{cards.length ? cards.map((newDiv, index) => <div
                key={index}>{index + 1}</div>) : "empty list"}</div>
        </div>
    );
}

export default Todo;