import React, {useState} from 'react';

function Todo() {

    const [divArr, setDivArr] = useState([]);

    const addCard = () => {
        const newArray = [ ...divArr, {title: '11', id: Date.now()}];
        setDivArr(newArray)
    }
    const removeCard = () => {
        setDivArr(divArr.filter((element, index) => index < divArr.length - 1))
    }
    return (
        <div>
            <button onClick={() => {
                addCard()
            }}>Add
            </button>
            <button onClick={() => {
                removeCard()
            }}>Delete
            </button>
            <div>{divArr.length ? divArr.map((newDiv, index) => <div
                key={index}>{index+1}</div>) : "empty list"}</div>
        </div>
    );
}

export default Todo;