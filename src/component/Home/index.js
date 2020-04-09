import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-contentTop">
          <div className="home-listTopContent">
            <ul>
              <li>
                <div className="slideshow-container">
                  <div className="mySlides fade sl1" >
                    <div className="contentItem">
                      <a href="./home.html">
                        <img src="img/hl_about.jpg" alt="About 1" />
                      </a>
                    </div>
                  </div>
                  <div className="mySlides fade sl2" >
                    <div className="contentItem">
                      <a href="./home.html">
                        <img src="img/hl_about4.png" alt="About 1" />
                      </a>
                    </div>
                  </div>
                  <div className="mySlides fade sl3">
                    <div className="contentItem">
                      <a href="./home.html">
                        <img
                          src="img/VIET.Brand_Campaign_WEBBANNER.jpg"
                          alt=""
                        />
                      </a>
                      <div className="buttonItem h-button-slider">
                        <button className="item2 h-button1">
                          CÙNG NHAU TỰ HÀO
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listdot">
                  <div className="home-dot">
                    <span className="dot active"  />{" "}
                  </div>
                  {/* onClick="currentSlide(0)"  onClick="currentSlide(1)"onClick="currentSlide(2)" */}
                  <div className="home-dot">
                    <span className="dot" />{" "}
                  </div>
                  <div className="home-dot">
                    <span className="dot"  />{" "}
                  </div>
                </div>
              </li>
              <li>
                <div className="contentItem">
                  <a href="./home.html">
                    <img src="img/hl_about2.jpg" alt="About 1" />
                  </a>
                  <div className="buttonItem h-button2">
                    <button className="item1 b2-item1">KHÁM PHÁ THÊM</button>
                  </div>
                </div>
              </li>
              <li>
                <div className="contentItem">
                  <a href="./home.html">
                    <img src="img/hl_about3.jpg" alt="About 1" />
                  </a>
                  <div className="buttonItem h-button3">
                    <button className="item2">KHÁM PHÁ THÊM</button>
                  </div>
                </div>
              </li>
              <li>
                <div className="contentItem">
                  <a href="./home.html">
                    <img src="img/hl_about4.png" alt="About 1" />
                  </a>
                  <div className="buttonItem h-button4">
                    <button className="item3">KHÁM PHÁ THÊM</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-content-bottom">
          <div className="contentLeft">
            <div className="boxHome">
              <div className="title v2">
                <h2>QUÁN MỚI</h2>
              </div>
              <div className="content">
                <h3>HÀM CÁ MẬP</h3>
                <p>
                  <a href="./home.html">
                    Tầng 3, 1-3-5 Đinh Tiên Hoàng, Phường Hàng Trống, Quận Hoàn
                    Kiếm, Hà Nội
                  </a>
                </p>
                <p>
                  <a href="./home.html">TÌM ĐƯỜNG &gt; </a>
                </p>
              </div>
            </div>
          </div>
          <div className="contentRignht">
            <div className="titleR">
              <div className="titleRl">
                <h2>TIN MỚI NHẤT</h2>
              </div>
              <div className="linkRl">
                <span>
                  <a href="./home.html">Xem toàn bộ .</a>&gt;
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
                    Đại tiệc âm nhạc: Hightlands coffee 20 năm - gắn kết niềm tự
                    hào đất Việt
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
      </div>
    );
  }
}

export default Home;
