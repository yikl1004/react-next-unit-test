import React, { useState } from 'react'

const NameList = (props) => {

    const renderList = () => {
        const { names } = props;
        const nameList = names.map((name, i) => (
            <li key={i}>{name}</li>
        ));

        return nameList;
    }

    return (
        <ul>{ renderList() }</ul>
    )
}

NameList.defaultProps = {
    names: []
}

export default NameList
