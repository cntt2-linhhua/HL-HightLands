import React, { Component } from "react";

class SecProduct extends Component {
  render() {
    return (
      <div className="relacePro">
        <div className="imgrelace">
          <img src="../img/CLASSIC-FREEZE.png" alt="CLASSIC-FREEZE" />
        </div>
        <div className="detailRelace">
          <h1>CLASSIC PHIN FREEZE</h1>
          <p>
            Giá : <span className="pro-span">49,000 VNĐ</span>
          </p>
        </div>
      </div>
    );
  }
}

export default SecProduct;
