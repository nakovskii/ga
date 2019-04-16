import React, { Component } from 'react';

class HomePage extends Component {
    constructor(){
        super();
        this.state = {
            itemCurrentlyOnSale: '14" Chainsaw',
            editSaleItem: true
        }
    }
    togggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({editSaleItem});
    }
    handleOnChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({itemCurrentlyOnSale})
    }
    render(){
        return(
            <div>
                <h1>Jeopardy HW Store Homepage</h1>
                <div>Currently On Sale: {this.state.itemCurrentlyOnSale}! 
                {this.state.editSaleItem === true ? <div><input onChange={this.handleOnChange} value={this.state.itemCurrentlyOnSale} type="text"></input></div> : null} 
                <button onClick={this.togggleEditSaleItem}>{this.state.editSaleItem ? `Hide` : `Edit Sale Item`}</button>
                </div>
            </div>
        );
    }
}

export default HomePage;