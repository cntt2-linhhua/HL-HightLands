import React, { Component } from "react";
import Products from "./Products";
import SecProduct from "./SecProduct";
import Order from "../Checkout/Order";

class Product extends Component {
  render() {
    return (
      <nav className="td_content">
        <div className="tdct">
          <Products
            nameP="CARAMEL PHIN PREEZE"
            anhP="img/caramel.png"
            desc="Thơm ngon khó cưỡng! Được kết hợp từ cà phê truyền thống chỉ
            có tại Highlands Coffee, cùng với caramel, thạch cà phê và
            đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và
            caramel ngọt ngào. Món nước phù hợp trong những cuộc gặp gỡ
            bạn bè, bởi sự ngọt ngào thường mang mọi người xích lại gần
            nhau."
          ></Products>
          <Order titles="Xem giỏ hàng"></Order>
        </div>
        <div className="relace">
          <ul className="relaceList">
            <li className="relaceItem">
              <SecProduct
                anhPr="img/CLASSIC-FREEZE.png"
                name="CLASSIC PHIN FREEZE"
                price="49,000 VNĐ"
              ></SecProduct>
            </li>
            <li className="relaceItem">
              <SecProduct
                anhPr="img/CLASSIC-FREEZE.png"
                name="CLASSIC PHIN FREEZE"
                price="49,000 VNĐ"
              ></SecProduct>
            </li>
            <li className="relaceItem">
              <SecProduct
                anhPr="img/CLASSIC-FREEZE.png"
                name="CLASSIC PHIN FREEZE"
                price="49,000 VNĐ"
              ></SecProduct>
            </li>
            <li className="relaceItem">
              <SecProduct
                anhPr="img/CLASSIC-FREEZE.png"
                name="CLASSIC PHIN FREEZE"
                price="49,000 VNĐ"
              ></SecProduct>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Product;
