import React, { Component } from "react";

class Order extends Component {
  render() {
    return (
      <div className="C-cart">
        <div className="C-dathang">
          <div className="C-titleDat">
            <button>{this.props.titles}</button>
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

export default Order;
