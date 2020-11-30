import React from 'react'
import List from './List'
import InputField from './InputField'

function GroceryList({ groceryItems,
    handleClickGroceryItem,
    handleClickAddGrocery,
    addGroceryItem,
    handleOnChange }) {
    return (
        <div>
            <h2>Boodschappen</h2>
            <InputField
                handleOnChange={handleOnChange}
                addGroceryItem={addGroceryItem}
                handleClickAddGrocery={handleClickAddGrocery}
            />
            <List
                className="groceryList"
                handleClickGroceryItem={handleClickGroceryItem}
                listItems={groceryItems}
            />
        </div>
    )
}

export default GroceryList