import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    render() {
        const allListItems = this.props.listItems.map(item => {
            return <ListItem
                key={item.id}
                item={item}
                handleClickGroceryItem={this.props.handleClickGroceryItem}
                componentTitle={this.props.componentTitle}
            />
        })

        return (
            <ul className={this.props.className}>
                {allListItems}
            </ul>
        )
    }
}

export default List;