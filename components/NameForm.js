import React, { useState } from 'react'

const NameForm = (props) => {

    const [ name, setName ] = useState('');

    const onChange = (evt) => {
        setName(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.onInsert(name);
        setName('');
    }

    return (
        <form onSubmit={onSubmit}>
            <label>이름</label>
            <input type="text" value={name} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    )
}

NameForm.defaultProps = {
    onSubmit: () => console.warn('onSubmit not defined')
}

export default NameForm
