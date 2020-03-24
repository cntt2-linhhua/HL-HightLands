import React, { Component } from "react";

class BottomHome extends Component {
  render() {
    return (
      <div>
        <section className="contentBottom">
          <div className="col col-sm-12 content">
            <div className="col-6  col-sm-6 contentLeft">
              <div className="boxHome">
                <div className="title v2">
                  <h2>QUÁN MỚI</h2>
                </div>
                <div className="content">
                  <h3>HÀM CÁ MẬP</h3>
                  <p>
                    <a href="#">
                      Tầng 3, 1-3-5 Đinh Tiên Hoàng, Phường Hàng Trống, Quận
                      Hoàn Kiếm, Hà Nội
                    </a>
                  </p>
                  <p>
                    <a href="#">TÌM ĐƯỜNG &gt; </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 contentRignht">
              <div className="titleR">
                <div className="titleRl">
                  <h2>TIN MỚI NHẤT</h2>
                </div>
                <div className="linkRl">
                  <span>
                    <a href="#">Xem toàn bộ .</a>&gt;
                  </span>
                </div>
              </div>
              <div className="contentRl">
                <div className="contentItemB">
                  <div className="imgContentB">
                    <img src="img/hl_about4.png" alt="Trà sen vàng" />
                  </div>
                  <div className="detailContent">
                    <h4>UỐNG TRÀ SEN VÀNG MỚI - NHẬN VÔ VÀN ƯU ĐÃI SEN VÀNG</h4>
                    <div className="timeContent">
                      <span>
                        <i className="fa fa-calendar-alt" />
                      </span>
                      <span>04/12/2019</span>
                    </div>
                  </div>
                </div>
                <div className="contentItemB">
                  <div className="imgContentB">
                    <img
                      src="img/hl_about.jpg"
                      alt="Đại tiệc âm nhạc: Hightlands coffee 20 năm - gắn kết niềm tự hào đất Việt"
                    />
                  </div>
                  <div className="detailContent">
                    <h4>
                      Đại tiệc âm nhạc: Hightlands coffee 20 năm - gắn kết niềm
                      tự hào đất Việt
                    </h4>
                    <div className="timeContent">
                      <span>
                        <i className="fa fa-calendar-alt" />
                      </span>
                      <span>28/10/2019</span>
                    </div>
                  </div>
                </div>
                <div className="contentItemB">
                  <div className="imgContentB">
                    <img
                      src="img/hl_about.jpg"
                      alt="HightLans Coffee: Trọn vẹn tuổi 20 cùng hành trình gắn kết 'Niềm tự hào'"
                    />
                  </div>
                  <div className="detailContent">
                    <h4>UỐNG TRÀ SEN VÀNG MỚI - NHẬN VÔ VÀN ƯU ĐÃI SEN VÀNG</h4>
                    <div className="timeContent">
                      <span>
                        <i className="fa fa-calendar-alt" />
                      </span>
                      <span>04/12/2019</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contentContact">
                <form className="contectB">
                  <input
                    type="text"
                    placeholder="Nhập email của bạn để nhận thông tin"
                  />
                  <button>
                    <span>
                      <i className="fa fa-paper-plane" />
                      GỬI
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BottomHome;
