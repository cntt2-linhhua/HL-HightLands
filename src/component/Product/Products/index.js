import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
        <div className="ct_sp">
          <div className="ct_ten">
    <h1 className="ten_sp">{this.props.nameP}</h1>
          </div>
          <div className="product">
            <div className="imgProduct">
              <img src={this.props.anhP} alt="CARAMEL PHIN PREEZE" />
            </div>
            <div className="description">
              <div className="desContent">
                <p className="desDetail">
                  {this.props.desc}
                </p>
              </div>
              <div className="dessize">
                <div className="size">
                  <span>
                    Size :
                    <ul className="sizeList">
                      <li className="sizeItem">
                        <a href="#">S</a>
                      </li>
                      <li className="sizeItem">
                        <a href="#">M</a>
                      </li>
                      <li className="sizeItem">
                        <a href="#">L</a>
                      </li>
                    </ul>
                  </span>
                  <p>
                    Giá :{" "}
                    <span
                      style={{
                        display: "inline",
                        color: "#53382C",
                        fontWeight: "bold",
                      }}
                    >
                      49,000 VNĐ
                    </span>
                  </p>
                  <button>Mua ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Products;
