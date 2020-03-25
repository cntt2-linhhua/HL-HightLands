import React, { Component } from "react";

class MenuRight1 extends Component {
  render() {
    return (
      <div>
        <div
          className="col-12 col-lg-12 td_block4 td_block"
          style={{ padding: 0 }}
        >
          <div
            className="col-6 col-lg-6 td_right td_content"
            style={{
              marginTop: "50px",
              textAlign: "right",
              color: "#fff",
              paddingRight: "63px"
            }}
          >
            <div className="td_tl">
              <h1 className="td_tt1">
                {this.props.name}
              </h1>
            </div>
            <div className="td_txt_detail" style={{ textAlign: "right" }}>
              <p>
                {this.props.content}
              </p>
            </div>
            <div className="td_button left-dt buttonItem">
              <button className="item_1">Khám phá thêm</button>
            </div>
          </div>
          <div className="td_img col-6 col-lg-6 td_left">
            <img src={this.props.anh} alt="Bánh Mì" />
          </div>
        </div>
      </div>
    );
  }
}

export default MenuRight1;
