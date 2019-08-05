import React, { useState } from 'react'
import NameForm from 'components/NameForm'
import NameList from 'components/NameList'

const NamesPage = () => {

    const [ names, setNames ] = useState(['yikl1004', '천명기']);

    const onInsert = (name) => {
        setNames(names.concat(name));
    }

    return (
        <div>
            <h1>이름 목록</h1>
            <NameForm onInsert={onInsert} />
            <NameList names={names} />
        </div>
    )
}

export default NamesPage
