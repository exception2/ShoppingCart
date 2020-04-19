
import React, { Component } from 'react';
import './App.css';
import ItemsListComponent from './components/ItemsListComponent';
import FooterComponent from './components/FooterComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItems : {},
      itemListdata: []
    };
  }

  addHandler = ({name, price}) => {
    const {cartItems} = this.state
    const prevOb = cartItems[name] || {quant: 0, price}
    const addedItem = Object.assign(prevOb, {quant: prevOb.quant +1})
    const updatedCartItems = Object.assign(cartItems, {[name]: addedItem})
    this.setState({cartItems: updatedCartItems})
    }
    
    subHandler = ({name, price}) => {
    const {cartItems} = this.state
    const prevOb = cartItems[name] || {quant: 0, price}
    const removedItem = Object.assign(prevOb, {quant: prevOb.quant -1})
    const updatedCartItems = Object.assign(cartItems, {[name]: removedItem})
    this.setState({cartItems: updatedCartItems})
    }



  componentDidMount() {
    fetch("items.json")
      .then(res => res.json())
      .then(itemListdata => this.setState({ itemListdata }));
  }

  render() {
    return (
      <div className="App">

        <ItemsListComponent itemListdata={this.state.itemListdata}
                             cartItems={this.state.cartItems} 
                             addHandler={this.addHandler} subHandler={this.subHandler}    />
         <FooterComponent cartItems={ this.state.cartItems}/>

      </div>
    );


  }

}

export default App;
