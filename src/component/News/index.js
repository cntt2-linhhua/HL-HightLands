import React, { Component } from "react";
import SecNews from "./SecNews";

class News extends Component {
  render() {
    return (
      <div className="tt_content">
        <div className="tt_tintuc">
          <h1>TIN TỨC</h1>
        </div>
        <div className="tt_container ">
          <ul className="tt_list col-lg-12 col-sm-12">
          <li className="tt_item col-lg-4 col-sm-4">
              <SecNews 
              anh="img/470_crop_HL20_470x314-01.png"
              title="Thư xin lỗi chính thức khác hàng Lê Văn Trường"
              time="20/02/2020, 07:35"></SecNews>
            </li>
            <li className="tt_item col-lg-4 col-sm-4">
              <SecNews anh="img/tin2.png" title="Lịch mở của tết 2020 - HIGHLANDS Coffee" time="22/01/2020, 15:37"></SecNews>
            </li>
            <li className="tt_item col-lg-4 col-sm-4">
              <SecNews anh="img/tin3.png" title="Danh sách quán có áp dụng khung giá mới" time="17/01/2020, 14:45"></SecNews>
            </li>
            <li className="tt_item col-lg-4 col-sm-4">
              <SecNews anh="img/tin4.png" title="Điều kiện áp dụng chương trình ưu đãi" time="10/01/2020, 11:48"></SecNews>
            </li>
            <li className="tt_item col-lg-4 col-sm-4">
              <SecNews anh="img/470_crop_tra-sen-vang-moi.png" title="Uống trà sen vàng mới - Nhận vô vàng ưu đãi sẽ vàng" time="04/12/2020, 23:50"></SecNews>
            </li>
            <li className="tt_item col-lg-4 col-sm-4">
              <SecNews anh="img/tin5.jpg" title="Đại tiệc âm nhạc: HighLands Coffee 20 năm - Gắn kết niềm tự
                    hào đất Việt" time="28/10/2019, 12:05"></SecNews>
            </li>
            <li className="tt_item col-lg-4 col-sm-4">
              <SecNews anh="img/tin1.png" title="HighLands Coffee: Trọn vẹn tuổi 20 cùng hành trình gắn kết
                    Niềm tự hào đất Việt" time="">22/10/2019, 15:59</SecNews>
            </li>
            <li className="tt_item col-lg-4 col-sm-4">
              <SecNews anh="img/tin.png" title="HighLands Coffee: 20 năm - Gắn kết niềm tự hào đất Việt" time=">01/10/2019, 18:14"></SecNews>
            </li>
            <li className="tt_item col-ls-4 col-sm-4">
              <SecNews anh="img/tin7.jpg" title="Tận hưởng Freeze trà xanh - Trà xanh đậm đà, thạch giòn khó
                    cưỡng!" time="05/08/2019, 17:52"></SecNews>
            </li>
          </ul>
        </div>
        <div className="tt_xemthem">
          <button className="tt_button">Xem thêm</button>
        </div>
      </div>
    );
  }
}

export default News;
