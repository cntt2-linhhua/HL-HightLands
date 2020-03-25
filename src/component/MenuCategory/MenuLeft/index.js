import React, { Component } from "react";

class MenuLeft extends Component {
  render() {
    return (
      <div className="col-12 col-lg-12 td_block1 td-block">
        <div className="col-6 col-lg-6 td_left td_content">
          <div className="td_tl">
           <h1 className="td_tt1">{this.props.name}</h1>
          </div>
          <div className="td_txt_detail">
            <p>
              {this.props.content}
            </p>
          </div>
          <div className="td_button left-dt buttonItem btt">
            <button className="item_1">Khám phá thêm</button>
          </div>
        </div>
        <div className="td_img col-6 col-lg-6 td_right">
          <img src={this.props.anh} alt="Cà phê" />
        </div>
      </div>
    );
  }
}

export default MenuLeft;
