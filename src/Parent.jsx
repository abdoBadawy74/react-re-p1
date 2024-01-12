import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    product: {
      id: 1,
      name: "Toshipa c3",
      price: 8000,
      onSale: false,
      count: 10,
    },
  };
  render() {
    return (
      <div className="bg-dark p-3">
        <h3 className="text-white">Parent</h3>
        <Child productInfo={this.state.product}></Child>
      </div>
    );
  }
}
