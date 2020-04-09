import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div id="vnt-header">
          <div className="wrapper">
            <div className="logo">
              <h1>
                <Link to="/" title="Home"> <img
                    src="https://highlandscoffee.com.vn/vnt_upload/weblink/logo.svg"
                    alt="Hightlands Coffee"
                  /></Link>
                {/* <a href="./home.html" target="_self" title="Hightlands Coffee">
                  <img
                    src="https://highlandscoffee.com.vn/vnt_upload/weblink/logo.svg"
                    alt="Hightlands Coffee"
                  />
                </a> */}
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
                      <a href="./home.html">
                        <img src="img/flag-vn.jpg" alt="VN" />
                      </a>
                    </li>
                    <li>
                      <a href="./home.html">
                        <img src="img/flag-en.jpg" alt="EN" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu_default">
                  <div className="icon_menu">
                    <a
                      href="./home.html"
                      className="icon"
                      id="menu"
                      // onClick="myFunction()"
                    >
                      <i className="fa fa-bars" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="menuTop hidden-sm hidden-xs" id="ctmenu">
                <button className="btn-close btnX">
                  <i className="fa fa-times" aria-hidden="true" />
                </button>
                <ul>
                  <li className="menu-list">
                    <Link to="/" title="home"><span>QUÁN CÀ PHÊ</span></Link>
                    {/* <a href="home.html" target="_self">
                      <span>QUÁN CÀ PHÊ</span>
                    </a> */}
                  </li>
                  <li className="menu-mega header-drop">
                    <a href="./home.html" target="_self">
                      <span>THỰC ĐƠN</span>
                    </a>
                    <a className="menuxt" href="./home.html">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                      <i className="fa fa-angle-down" aria-hidden="true" />
                    </a>
                    <div className=" an thucdon menuMega">
                      <div className="col-12 col-sm-12 mega1 caphe ">
                        <div className="grid">
                          <div className="col-9 col-sm-9 mega-left ">
                            <ul className="listL">
                              <li className="mega-item xemthemtd">
                                <div>
                                  <a href="./home.html">CÀ PHÊ</a>
                                  <a className="menuxt2" href="./home.html">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </div>
                                <ul className="item-list menuxt2-show">
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Cà Phê Phin</a>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Cà Phê Espresso</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-item xemthemtd">
                                <div>
                                  <a href="./home.html">FREEZE</a>
                                  <a className="menuxt2" href="./home.html">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </div>
                                <ul className="item-list menuxt2-show">
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">
                                      {" "}
                                      Freeze Cà Phê Phin
                                    </a>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">
                                      {" "}
                                      Freeze Không Cà Phê
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-item xemthemtd">
                                <div>
                                  <a href="./home.html">TRÀ</a>
                                  <a className="menuxt2" href="./home.html">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </div>
                                <ul className="item-list menuxt2-show">
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Trà Sen Vàng</a>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Trà Thạch Đào</a>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Trà Thanh Đào</a>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Trà Thạch Vải</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-item xemthemtd">
                                <div>
                                  <a href="./home.html">BÁNH MÌ</a>
                                  <a className="menuxt2" href="./home.html">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </div>
                                <ul className="item-list menuxt2-show">
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Thịt Nướng</a>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Xíu Mại</a>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Chả Lụa Xá Xíu</a>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Gà Xé Nước Tương</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-item xemthemtd">
                                <div>
                                  <a href="./home.html">KHÁC</a>
                                  <a className="menuxt2" href="./home.html">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </div>
                                <ul className="item-list menuxt2-show">
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Bánh Ngọt</a>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Merchandise</a>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Cà Phê Đóng Gói</a>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <a href="./home.html">Thực Đơn Giao Hàng</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="col-2 col-sm-2 banner">
                            <div className="bannerMenu">
                              <div className="txt">
                                <a href="./home.html">
                                  Phin Sữa Đá Đậm Đà Chất Pin! 29.000đ
                                </a>
                              </div>
                              <div className="img">
                                <a href="./home.html">
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
                  <li className="menu-mega header-drop">
                    <div>
                      <a href="./home.html">TIN TỨC</a>
                      <a className="menuxt" href="./home.html">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="an tin menuMega">
                      <div className="col-12 col-sm-12 mega1">
                        <div className="grid">
                          <div className="col-9 col-sm-9 mega-left">
                            <ul className="listL">
                              <li className="mega-item ">
                                <a href="./home.html">TIN TỨC &amp; SỰ KIỆN</a>
                              </li>
                              <li className="mega-item">
                                <a href="./home.html">TIN KHUYẾN MÃI</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-2 col-sm-2 banner">
                            <div className="bannerMenu">
                              <div className="txt">
                                <a href="./home.html">
                                  Tự hào sinh ra từ đất Việt, 1999!
                                </a>
                              </div>
                              <div className="img">
                                <a href="./home.html">
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
                  <li className="menu-mega header-drop">
                    <div>
                      <a href="./home.html" target="_self">
                        <span>TRÁCH NHIỆM CỘNG ĐỒNG</span>
                      </a>
                      <a className="menuxt" href="./home.html">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="an congdong menuMega">
                      <div className="col-12 col-sm-12 mega1">
                        <div className="grid">
                          <div className="col-9 col-sm-9 mega-left">
                            <ul className="listL">
                              <li className="mega-item xemthemtd">
                                <div>
                                  <a href="./home.html" target="_self">
                                    <span>GIÁ TRỊ VĂN HÓA VIỆT</span>
                                  </a>
                                  <a className="menuxt2" href="./home.html">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </div>
                                <ul className="item-list menuxt2-show">
                                  <li className="items">
                                    <a href="./home.html">
                                      Đương Đại Hóa Tranh Đông Hồ
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-item xemthemtd">
                                <div>
                                  <a href="./home.html" target="_self">
                                    <span>Cộng đồng</span>
                                  </a>
                                  <a className="menuxt2" href="./home.html">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </div>
                                <ul className="item-list menuxt2-show">
                                  <li className="items">
                                    <a href="./home.html">Lớp Học Cho Em</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="col-2 col-sm-2 banner">
                            <div className="bannerMenu">
                              <div className="txt">
                                <a href="./home.html">
                                  Đương Đại Hóa Tranh Đông Hồ
                                </a>
                              </div>
                              <div className="img">
                                <a href="./home.html">
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
                  <li className="menu-mega header-drop">
                    <div>
                      <Link to="/vechungtoi" title="Về chúng tôi" ><span>VỀ CHÚNG TÔI</span></Link>
                      {/* <a href="./home.html" target="_self">
                        <span>VỀ CHÚNG TÔI</span>
                      </a> */}
                      <a className="menuxt" href="./home.html">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="an vechungtoi menuMega">
                      <div className="col-12 col-sm-12 mega1">
                        <div className="grid">
                          <div lass="col-9 col-sm-9 mega-left">
                            <ul className="listL">
                              <li className="mega-item">
                                <a href="./home.html">KHỞI NGUỒN</a>
                              </li>
                              <li className="mega-item">
                                <a href="./home.html">DỊCH VỤ KHÁCH HÀNG</a>
                              </li>
                              <li className="mega-item">
                                <a href="./home.html">NGHỀ NGHIỆP</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-2 col-sm-2 banner vct">
                            <div className="bannerMenu">
                              <div className="txt">
                                <a href="./home.html">
                                  Thương hiệu bắt nguồn từ cà phê Việt
                                </a>
                              </div>
                              <div className="img">
                                <a href="./home.html">
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
                    <a href="./home.html">LIÊN HỆ</a>
                  </li>
                  <li className="menu-mega rpsearch">
                    {" "}
                    <div className="div_search">
                      <input type="text" placeholder="Từ khóa" />
                      <img
                        className="search_icon"
                        src="https://www.highlandscoffee.com.vn/skins/default/images/i-search.svg"
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
