import React, { Component } from "react";

class SecProduct extends Component {
  render() {
    return (
      <div className="relacePro">
        <div className="imgrelace">
          <img src={this.props.anhPr} alt="CLASSIC-FREEZE" />
        </div>
        <div className="detailRelace">
          <h1>{this.props.name}</h1>
          <p>
            Giá : <span className="pro-span">{this.props.price}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default SecProduct;
