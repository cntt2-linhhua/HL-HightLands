import React, { Component } from "react";

class MenuRight extends Component {
  render() {
    return (
      <div className="col-12 col-lg-12 td_bloc2 td_block">
        <div className="col-6 col-lg-6 td_right td_content content-1">
          <div className="td_tl">
          <h1 className="td_tt1">{this.props.name}</h1>
          </div>
          <div
            className="td_txt_detail"
            style={{
              display: "block",
              textAlign: "right",
              fontSize: "20px",
              fontWeight: 700,
              color: "#016501",
              lineHeight: "1.2"
            }}
          >
            <p>
             {this.props.content}
            </p>
          </div>
          <div className="td_button left-dt buttonItem tem2">
            <button className="item_2">Khám phá thêm</button>
          </div>
        </div>
        <div
          className="td_img col-6 col-lg-6 td_left"
          style={{ zIndex: 2, top: 0 }}
        >
          <img
            src={this.props.anh}
            alt="Freeze"
            style={{ bottom: 0, marginTop: "-22px", marginLeft: "58px" }}
          />
        </div>
      </div>
    );
  }
}

export default MenuRight;
