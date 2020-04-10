import React, { Component } from "react";
import SecNews from "../News/SecNews";

class Publics extends Component {
  render() {
    return (
      <div className="tt_content">
        <div className="tt_tintuc">
          <h1>TRÁCH NHIỆM CỘNG ĐỒNG</h1>
        </div>
        <div className="tt_container ">
          <ul className="tt_list col-lg-12 col-sm-12">
            <li className="tt_item col-lg-4 col-sm-4">
              <SecNews anh="img/dongHoCongDong.jpg" title="HighLands Coffee cùng ý tưởng Lồng đèn xanh tháp sáng
                    Trung thu" time="13/09/2019, 15:59" ></SecNews>
            </li>
            <li className="tt_item col-lg-4 col-sm-4">
            <SecNews anh="img/tc1.png" title="Đương đại hóa tranh đông hồ" time="08/02/2019, 08:26" ></SecNews>
            </li>
            <li className="tt_item col-lg-4 col-sm-4">
              <SecNews anh="img/tc2.jpg" title="Trung thu lớp học cho em" time="09/10/2017, 21:39"></SecNews>            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Publics;
