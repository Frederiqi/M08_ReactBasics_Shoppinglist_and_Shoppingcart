import React, { Component } from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'

class Container extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            groceryItems: [
                { id: 1, title: "Brood" },
                { id: 2, title: "Halvarine" },
                { id: 3, title: "Pindakaas" },
                { id: 4, title: "Appels" },
                { id: 5, title: "Aardappels" },
                { id: 6, title: "Bloemkool" },
                { id: 7, title: "Knakworstjes" },
                { id: 8, title: "Yoghurt" },
            ],
            shoppingListItems: [],
            addGroceryItem: '',
        }

        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.emptyCard = this.emptyCard.bind(this)
        this.handleClickAddGrocery = this.handleClickAddGrocery.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.clearInput = this.clearInput.bind(this)
        this.addAmountToItem = this.addAmountToItem.bind(this)
    }

    handleClickGroceryItem(e) {
        const shoppingCart = this.state.shoppingListItems

        if (shoppingCart.find(item => item.title.toLowerCase() === e.target.getAttribute('value').toLowerCase())) {
            this.addAmountToItem(e.target.getAttribute('value'))
        } else {
            shoppingCart.push({
                id: shoppingCart.length + 1,
                title: e.target.getAttribute('value'),
                amount: 1,
            })

            this.setState({ shoppingListItems: shoppingCart })
        }
    }

    addAmountToItem(searchItem) {
        const currentShoppingCart = this.state.shoppingListItems
        const updateShoppingCart = currentShoppingCart.map(item => {

            if (item.title.toLowerCase() === searchItem.toLowerCase()) {
                item.amount = item.amount + 1
            }

            return item
        })
        this.setState({ shoppingListItems: updateShoppingCart })
    }

    handleClickAddGrocery(e) {

        const currentGroceryItems = this.state.groceryItems
        currentGroceryItems.push({
            id: currentGroceryItems.length + 1,
            title: this.state.addGroceryItem
        })
        this.setState({ groceryItems: currentGroceryItems })
        this.clearInput()
        e.preventDefault()
    }

    clearInput() {
        this.setState({ addGroceryItem: '' })
    }

    emptyCard() {
        this.setState({ shoppingListItems: [] })
    }

    handleOnChange(e) {
        this.setState({ addGroceryItem: e.target.value })
    }

    render() {
        return (
            <div className="container">
                <GroceryList
                    handleOnChange={this.handleOnChange}
                    addGroceryItem={this.state.addGroceryItem}
                    handleClickAddGrocery={this.handleClickAddGrocery}
                    handleClickGroceryItem={this.handleClickGroceryItem}
                    groceryItems={this.state.groceryItems}
                />
                <ShoppingCart
                    componentTitle='ShoppingCart'
                    emptyCart={this.emptyCard}
                    shoppingListItems={this.state.shoppingListItems}
                />
            </div>
        )
    }
}

export default Container