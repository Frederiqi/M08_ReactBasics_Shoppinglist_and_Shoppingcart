import React from 'react'
import List from './List'

function ShoppingCart({ shoppingListItems, emptyCart, componentTitle }) {

    return (
        <div>
            <h2>Winkelmandje </h2>
            <button
                onClick={emptyCart}
                className="button"
            >
                Winkelmandje legen
            </button>
            <List
                componentTitle={componentTitle}
                className="shoppingCart"
                listItems={shoppingListItems}
            />
        </div>
    )

}

export default ShoppingCart