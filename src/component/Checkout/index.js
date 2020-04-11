import React, { Component } from "react";
import Order from "./Order";

class Checkout extends Component {
  render() {
    return (
      <div className="C-container">
        <div className="C-contentLeft">
          <div className="confirm-infomation">
            <div className="C-title">
              <h3>1. Xác nhận thông tin đơn hàng</h3>
            </div>
            <div className="C-confirm">
              <div className="confirms">
                <div className="confirm confirm-address">
                  <p className="C-icon">
                    <i className="fa fa-map-marker-alt" />
                  </p>
                  <input
                    type="text"
                    placeholder="Nhập địa chỉ giao hàng"
                    id="address"
                  />
                </div>
                <div className="confirm confirm-user">
                  <p className="C-icon">
                    <i className="fa fa-user-circle" />
                  </p>
                  <input type="text" placeholder="Người nhận" id="user" />
                </div>
                <div className="confirm confirm-phone">
                  <p className="C-icon">
                    <i className="fa fa-phone-alt" />
                  </p>
                  <input type="text" placeholder="Số điện thoại" id="phone" />
                </div>
                <div className="confirm confirm-note">
                  <input type="text" placeholder="Ghi chú" id="note" />
                </div>
              </div>
            </div>
          </div>
          <div className="pay">
            <div className="title-httt">
              <h4>Hình thức thanh toán</h4>
            </div>
            <div className="ds-httt">
              <ul className="httt-list">
                <li className="httt-item">
                  <div className="item-httt">
                    <input type="checkbox" name="cash" id="cash" />
                    <a href>
                      <img src="../img/cash.png" alt="cash" />
                    </a>
                    <a href>
                      <span>Thanh toán khi giao hàng</span>
                    </a>
                  </div>
                </li>
                <li className="httt-item">
                  <div className="item-httt">
                    <input type="checkbox" name="visa" id="visa" />
                    <a href>
                      <img src="../img/visa.png" alt="visa" />
                    </a>
                    <a href>
                      <span>isa/Master/JCB</span>
                    </a>
                  </div>
                </li>
                <li className="httt-item">
                  <div className="item-httt">
                    <input type="checkbox" name="atm" id="atm" />
                    <a href>
                      <img src="../img/atm.png" alt="atm" />
                    </a>
                    <a href>
                      <span>Thẻ ATM nội địa</span>
                    </a>
                  </div>
                </li>
                <li className="httt-item">
                  <div className="item-httt">
                    <input type="checkbox" name="momo" id="momo" />
                    <a href>
                      <img src="../img/momo.png" alt="momo" />
                    </a>
                    <a href>
                      <span>Mo Mo</span>
                    </a>
                  </div>
                </li>
                <li className="httt-item">
                  <div className="item-httt">
                    <input type="checkbox" name="zalo" id="zalo" />
                    <a href>
                      <img src="../img/zalo.png" alt="zalo" />
                    </a>
                    <a href>
                      <span> ZaloPay</span>
                    </a>
                  </div>
                </li>
                <li className="httt-item">
                  <div className="item-httt">
                    <input type="checkbox" name="airpay" id="airpay" />
                    <a href>
                      <img src="../img/airpay.png" alt="airpay" />
                    </a>
                    <a href>
                      <span>AirPay</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Order titles="Đặt hàng"></Order>
      </div>
    );
  }
}

export default Checkout;
