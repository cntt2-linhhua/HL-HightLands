import React, { Component } from "react";

class MenuLeft1 extends Component {
  render() {
    return (
      <div className="col-12 col-lg-12 td_block3 td_block">
        <div className="col-6 col-lg-6 td_left td_content ">
          <div className="td_tl">
    <h1 className="td_tt1">{this.props.name}</h1>
          </div>
          <div className="td_txt_detail">
            <p>
             {this.props.content}
            </p>
          </div>
          <div
            className="td_button left-dt buttonItem"
            style={{ top: "113%", left: "12%" }}
          >
            <button className="item_1">Khám phá thêm</button>
          </div>
        </div>
        <div
          className="td_img col-6 col-lg-6 td_right"
          style={{ marginTop: "66px" }}
        >
          <img src={this.props.anh} alt="Cà phê" />
        </div>
      </div>
    );
  }
}

export default MenuLeft1;
