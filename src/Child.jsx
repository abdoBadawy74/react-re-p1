import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { name, price, count } = this.props.productInfo;
    return (
      <div className="col-md-3 bg-light p-2">
        {/* <h6>name from parent is {this.props.productInfo.name}</h6> */}
        <h6>name from parent is {name}</h6>
        <h6>price from parent is {price}</h6>
        <h6>count from parent is {count}</h6>
        
      </div>
    );
  }
}
