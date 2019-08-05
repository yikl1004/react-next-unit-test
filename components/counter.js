import React, { useState } from 'react'

const Counter = (props) => {

    const [ value, setValue ] = useState(1);

    const onIncrease = () => {
        setValue(value + 1);
    };

    const onDecrease = () => {
        setValue(value - 1);
    }

    return (
        <div>
            <h1>카운터</h1>
            <h2>{value}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Counter;
