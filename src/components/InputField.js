import React from 'react'

function InputField({ handleClickAddGrocery, handleOnChange, addGroceryItem }) {
    return (
        <form>
            <input type="text" name='addGroceryItem' value={addGroceryItem} onChange={handleOnChange} />
            <button onClick={handleClickAddGrocery}> Toevoegen aan winkelmandje </button>
        </form>
    )
}

export default InputField