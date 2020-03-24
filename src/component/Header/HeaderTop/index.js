import React, { Component } from "react";

class HeaderTop extends Component {
  render() {
    return (
      <div>
        <header id="vnt-container">
          <div id="vnt-header">
            <div className="wrapper">
              <div className="logo">
                <h1>
                  <a href="#" target="_self" title="Hightlands Coffee">
                    <img
                      src="https://highlandscoffee.com.vn/vnt_upload/weblink/logo.svg"
                      alt="Hightlands Coffee"
                    />
                  </a>
                </h1>
              </div>
              <div className="header-tools">
                <div className="rowTools">
                  <div className="searchTop hidden-sm hidden-xs">
                    <form action="#" id="formSearch" className="box-search">
                      <input
                        id="keyword"
                        type="text"
                        className="text_search"
                        placeholder="Từ khóa"
                      />
                      <button>
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                  <div className="languageTop">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="img/flag-vn.jpg" alt="VN" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="img/flag-en.jpg" alt="EN" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu_mobile hidden-lg hidden-md menu_default">
                    <div className="icon_menu">
                      <span className="style_icon">Menu</span>
                    </div>
                  </div>
                </div>
                <div className="menuTop hidden-sm hidden-xs">
                  <ul>
                    <li className="menu-list">
                      <a href="home.html" target="_self">
                        <span>QUÁN CÀ PHÊ</span>
                      </a>
                    </li>
                    <li className="menu-mega">
                      <a href="#" target="_self">
                        <span>THỰC ĐƠN</span>
                      </a>
                      <div className="menuMega">
                        <div className="col-12 col-sm-12 mega1">
                          <div className="grid">
                            <div className="col-9 col-sm-9 mega-left">
                              <ul className="listL">
                                <li className="mega-item">
                                  <a href="#">CÀ PHÊ</a>
                                  <ul className="item-list">
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Cà Phê Phin</a>
                                    </li>
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Cà Phê Espresso</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-item">
                                  <a href="#">FREEZE</a>
                                  <ul className="item-list">
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#"> Freeze Cà Phê Phin</a>
                                    </li>
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#"> Freeze Không Cà Phê</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-item">
                                  <a href="#">TRÀ</a>
                                  <ul className="item-list">
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Trà Sen Vàng</a>
                                    </li>
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Trà Thạch Đào</a>
                                    </li>
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Trà Thanh Đào</a>
                                    </li>
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Trà Thạch Vải</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-item">
                                  <a href="#">BÁNH MÌ</a>
                                  <ul className="item-list">
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Thịt Nướng</a>
                                    </li>
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Xíu Mại</a>
                                    </li>
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Chả Lụa Xá Xíu</a>
                                    </li>
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Gà Xé Nước Tương</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-item">
                                  <a href="#">KHÁC</a>
                                  <ul className="item-list">
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Bánh Ngọt</a>
                                    </li>
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Merchandise</a>
                                    </li>
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Cà Phê Đóng Gói</a>
                                    </li>
                                    <li className="items">
                                      <i
                                        className="fa fa-caret-right muiten"
                                        aria-hidden="true"
                                      />
                                      <a href="#">Thực Đơn Giao Hàng</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="col-2 col-sm-2 banner">
                              <div className="bannerMenu">
                                <div className="txt">
                                  <a href="#">
                                    Phin Sữa Đá Đậm Đà Chất Pin! 29.000đ
                                  </a>
                                </div>
                                <div className="img">
                                  <a href="#">
                                    <img
                                      src="img/z1.jpg"
                                      alt="Phin Sữa Đá Đậm Đà Chất Pin! 29.000đ"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-mega">
                      <a href="#" target="_self">
                        <span>TIN TỨC</span>
                      </a>
                      <div className="menuMega">
                        <div className="col-12 col-sm-12 mega1">
                          <div className="grid">
                            <div className="col-9 col-sm-9 mega-left">
                              <ul className="listL">
                                <li className="mega-item">
                                  <a href="#">TIN TỨC &amp; SỰ KIỆN</a>
                                </li>
                                <li className="mega-item">
                                  <a href="#">TIN KHUYẾN MÃI</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-2 col-sm-2 banner">
                              <div className="bannerMenu">
                                <div className="txt">
                                  <a href="#">
                                    Tự hào sinh ra từ đất Việt, 1999!
                                  </a>
                                </div>
                                <div className="img">
                                  <a href="#">
                                    <img
                                      src="img/tuhaoTinTuc.jpg"
                                      alt="Tự hào sinh ra từ đất Việt, 1999!"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-mega">
                      <a href="#" target="_self">
                        <span>TRÁCH NHIỆM CỘNG ĐỒNG</span>
                      </a>
                      <div className="menuMega">
                        <div className="col-12 col-sm-12 mega1">
                          <div className="grid">
                            <div className="col-9 col-sm-9 mega-left">
                              <ul className="listL">
                                <li className="mega-item">
                                  <a href="#">Giá Trị Văn hóa Việt</a>
                                  <ul className="item-list">
                                    <li className="items">
                                      <a href="#">
                                        Đương Đại Hóa Tranh Đông Hồ
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-item">
                                  <a href="#">Cộng đồng</a>
                                  <ul className="item-list">
                                    <li className="items">
                                      <a href="#">Lớp Học Cho Em</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="col-2 col-sm-2 banner">
                              <div className="bannerMenu">
                                <div className="txt">
                                  <a href="#">Đương Đại Hóa Tranh Đông Hồ</a>
                                </div>
                                <div className="img">
                                  <a href="#">
                                    <img
                                      src="img/dongHoCongDong.jpg"
                                      alt="Đương Đại Hóa Tranh Đông Hồ"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-mega">
                      <a href="#" target="_self">
                        <span>VỀ CHÚNG TÔI</span>
                      </a>
                      <div className="menuMega">
                        <div className="col-12 col-sm-12 mega1">
                          <div className="grid">
                            <div lass="col-9 col-sm-9 mega-left">
                              <ul className="listL">
                                <li className="mega-item">
                                  <a href="#">KHỞI NGUỒN</a>
                                </li>
                                <li className="mega-item">
                                  <a href="#">DỊCH VỤ KHÁCH HÀNG</a>
                                </li>
                                <li className="mega-item">
                                  <a href="#">NGHỀ NGHIỆP</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-2 col-sm-2 banner">
                              <div className="bannerMenu">
                                <div className="txt">
                                  <a href="#">
                                    Thương hiệu bắt nguồn từ cà phê Việt
                                  </a>
                                </div>
                                <div className="img">
                                  <a href="#">
                                    <img
                                      src="img/about_menu.png"
                                      alt="Thương hiệu bắt nguồn từ cà phê Việt"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-mega">
                      <a href="#">LIÊN HỆ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderTop;
