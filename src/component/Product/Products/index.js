import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
      <div className="tdct">
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
        <div className="ct-xemgiohang">
          <div className="ct-gh-title">
            <a href>XEM GIỎ HÀNG</a>
          </div>
          <div>
            <div className="dathang">
              <div className="sp-dat">
                <ul className="list-spd">
                  <li className="spd">
                    <div className="sanpham-item">
                      <button className="sanpham-item-button">1</button>
                      <div className="ten-spd">
                        <h6>Cà phê Đen đá</h6>
                        <p>Nhỏ</p>
                      </div>
                      <span>50.000 Đ</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tong-spd">
                <div className="tong-ten">
                  <span className="tong-l">
                    Cộng(<span>1</span>món)
                  </span>
                  <span className="tong-l">Vận chuyển</span>
                </div>
                <div className="tong-tien">
                  <span className="tien-r">50.000 Đ</span>
                  <span className="tien-r">0 Đ</span>
                </div>
                <div className="mauudai">
                  <input type="text" placeholder="Nhập mã ưu đãi tại đây" />
                  <button>ÁP DỤNG</button>
                </div>
              </div>
              <div className="tongtien">
                <span className="tt-tien">Tổng cộng</span>
                <span className="tien-tong">50.000 Đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
