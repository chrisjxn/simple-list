import React from 'react';
import ListItem from './ListItem';

export default function List(props) {

    let list = props.list.map((item, i) => {
        return (
            <ListItem key={i} item={item} />
        )
    })
    return (
        <div>{list}</div>
    )
}