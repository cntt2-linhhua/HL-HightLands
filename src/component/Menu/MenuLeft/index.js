import React, { Component } from "react";

class MenuLeft extends Component {
  render() {
    return (
      <div className={"td-block"+ " " + this.props.background}>
        <div className="td_img  td_right menuimg1">
          <img src={this.props.anhCate} alt="Cà phê" />
        </div>
        <div className=" td_left td_content">
          <div className="td_tl">
            <h1 className="td_tt1">{this.props.nameCate}</h1>
          </div>
          <div className="td_txt_detail">
            <p>{this.props.description}</p>
          </div>
          <div className="td_button left-dt buttonItem btt">
            <button className="item_1">Khám phá thêm</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuLeft;
