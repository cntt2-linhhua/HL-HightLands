import React, { Component } from "react";

class MenuRight extends Component {
  render() {
    return (
      <div className={"td_block"+ " " + this.props.background}>
        <div className="td_img menuimg2  td_left">
          <img src={this.props.anhCate} alt="Freeze" />
        </div>
        <div className=" td_right td_content content-1">
          <div className="td_tl">
            <h1 className="td_tt1">{this.props.nameCate}</h1>
          </div>
          <div className="td_txt_detail detail2">
            <p>
              {this.props.description}
            </p>
          </div>
          <div className="td_button left-dt buttonItem tem2">
            <button className="item_2">Khám phá thêm</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuRight;
