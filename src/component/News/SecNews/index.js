import React, { Component } from "react";
import { Link } from "react-router-dom";

class SecNews extends Component {
  render() {
    return (
      <div className="tt_sect">
        <Link to="/thu-xin-lo-i-chi-nh-thu-c-khach-hang-le-va-n-tru-o-ng">
        <img
            src={this.props.anh}
            alt="Thư xin lỗi chính thức khác hàng Lê Văn Trường"
          />
        </Link>
        {/* <a href="#">
          <img
            src="../img/470_crop_HL20_470x314-01.png"
            alt="Thư xin lỗi chính thức khác hàng Lê Văn Trường"
          />
        </a> */}
        <Link to="/thu-xin-lo-i-chi-nh-thu-c-khach-hang-le-va-n-tru-o-ng" title="chi tiet">
          <h6 className="tt_tenItem">
            {this.props.title}
          </h6>
        </Link>
        <div className="tt_time">
          <span className="tt_iconTime">
            <i className="fa fa-calendar-alt" />
          </span>
          <p>{this.props.time}</p>
        </div>
        {/*
         */}
      </div>
    );
  }
}

export default SecNews;
