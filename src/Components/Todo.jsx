import React, {useState} from 'react';

function Todo() {

    const [count, setCount] = useState(0);
    const [divArr, setDivArr] = useState([]);




    return (
        <div>
            <button onClick={() => (setCount(count + 1), setDivArr(divArr.concat(count + 1)))}>
                Add
            </button>
            <button onClick={() => (setCount(count > 0 ? count - 1 : null), setDivArr({divArr} = divArr.pop()))}>
                Delete
            </button>

            <div>{count ? divArr.map((newDiv) => <div key={''}>{newDiv}</div>) : "empty list"}</div>


        </div>
    );
}

export default Todo;