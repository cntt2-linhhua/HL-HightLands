import React, { Component } from "react";
import { Link } from "react-router-dom";
import CateProduct from "../CateProduct";

class SecCategory extends Component {
  render() {
    return (
      <div className="ct-content-top col-lg-12 col-12">
        <div className="col-8 col-lg-8 ctc-left">
          <div className="tieude">
            <h1>
              <Link to="ca_phe">{this.props.nameCategory}</Link>
            </h1>
          </div>
          <div className="anh">
            <Link to="ca_phe" className="img">
              <img src={this.props.anhC} alt="Cà phê" />
            </Link>
          </div>
          <div className="noidung">
            <p>
              {this.props.description}
            </p>
          </div>
          <div className="td_button buttonItem classct-but">
            <button className="item_1">Khám phá thêm</button>
          </div>
        </div>
        <div className="col-4 col-lg-4 ctc-right">
          <CateProduct 
          img="img/caphedenda.png"
          name="Phin Sữa Đá"
          descript="Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng
          được chọn bằng tay, phối..."></CateProduct>
          <CateProduct 
          img="img/caphedenda.png"
          name="Phin Đen Đá"
          descript="Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền
          thống được phối trộn..."></CateProduct>
          </div>
      </div>
    );
  }
}

export default SecCategory;
