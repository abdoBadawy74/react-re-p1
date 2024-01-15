import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { name, price, onSale, count,id } = this.props.productInfo;
    return (
      <div className="col-md-3 p-2">
        {/* <h6>name from parent is {this.props.productInfo.name}</h6> */}
        <div className="bg-light h-100 p-2 position-relative">
          <h6>name from parent is {name}</h6>
          <h6>price from parent is {price}</h6>
          <h6>count from parent is {count}</h6>
          {onSale == true ? (
            <div className="sale p-1 bg-danger text-white position-absolute top-0 end-0">
              Sale
            </div>
          ) : (
            ""
          )}
          <button onClick={()=>this.props.delete(id)} className="btn btn-outline-danger w-100">Delete</button>
        </div>
      </div>
    );
  }
}
