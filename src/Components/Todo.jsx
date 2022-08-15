import React, {useState} from 'react';
import "./Todo.css"

function Todo() {

    const [cards, setCards] = useState([]);

    const addCard = (event) => {
        const newArray = [...cards,
            {
                title: "event.target.value",
                id: Date.now()
            }];
        setCards(newArray)
        event.preventDefault()
    }
    const removeCard = () => {
        setCards(cards.filter((element, index) => index < cards.length - 1))
    }
    return (
        <div>
            <div className="todoContainer">
            <div className={"padding10"}>{cards.length ? <div>You have {cards.length} Todos</div> : null}</div>

            <div>{cards.length ? cards.map((newDiv, index) => <div className={"todoItem padding10 gray_line"}
                key={index}>Task: {index + 1}
                <button className={"card_button"} onClick={removeCard}>X
                </button>
            </div>) : "empty list"}</div>
            <form onSubmit={addCard} className={"todoItem padding10"}>
                <label>
                    <input  className={"input_size"} type="text" placeholder={"Enter item"} />
                </label>
                <input className={"submit_button"} type="submit" value="Submit" />
            </form>
            </div>
        </div>
    );
}

export default Todo;