import React from 'react'

function ListItem({ item, handleClickGroceryItem, componentTitle }) {
    const Amount = componentTitle === 'ShoppingCart' ? 'Hoeveelheid: ' + item.amount : ''

    return (
        <li
            id={item.id}
            className="list__item"
            value={item.title}
            onClick={handleClickGroceryItem}
        >
            {item.title} <span>{Amount}</span>
        </li>
    )
}

export default ListItem