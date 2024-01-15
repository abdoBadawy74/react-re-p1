import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    products: [
      { id: 1, name: "Toshipa c3", price: 8000, onSale: false, count: 10 },
      { id: 2, name: "oppo", price: 8000, onSale: true, count: 13 },
      { id: 3, name: "samsung 173 c3", price: 8000, onSale: false, count: 35 },
      { id: 4, name: "National c54", price: 8000, onSale: true, count: 2 },
      { id: 5, name: "LG y3", price: 8000, onSale: false, count: 7 },
      { id: 6, name: "Apple macBook", price: 8000, onSale: true, count: 8 },
      { id: 7, name: "Toshipa c3", price: 8000, onSale: false, count: 10 },
      { id: 8, name: "oppo", price: 8000, onSale: true, count: 13 },
      { id: 9, name: "samsung 173 c3", price: 8000, onSale: false, count: 35 },
      { id: 10, name: "National c54", price: 8000, onSale: true, count: 2 },
      { id: 11, name: "LG y3", price: 8000, onSale: false, count: 7 },
      { id: 12, name: "Apple macBook", price: 8000, onSale: true, count: 8 },
    ],
  };

  deleteProduct = (id) => {
    // deep copy
    let newProducts = [...this.state.products];
    //action
    newProducts = newProducts.filter((product) => product.id !== id);
    //setState
    this.setState({products:newProducts});
  };

  render() {
    return (
      <div className="container bg-dark py-4">
        <div className="bg-dark p-3 row">
          {this.state.products.map((product, i) => (
            <Child key={i} delete={this.deleteProduct} productInfo={product}></Child>
          ))}
        </div>
      </div>
    );
  }
}
