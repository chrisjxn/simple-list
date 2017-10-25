import React from 'react';

export default function Form(props) {
    return (
        <div>
            <input
                placeholder="Add item"
                value={props.newItem}
                onChange={props.handleInput} />
            <button
                onClick={props.addToList}>
                Add to List
                </button>
        </div>
    )
}