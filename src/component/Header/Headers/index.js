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
                    <button
                      className="icon"
                      id="menu"
                    >
                      <i className="fa fa-bars" aria-hidden="true" />
                    </button>
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
                    <Link to="/menu"><span>THỰC ĐƠN</span></Link>
                    <a className="menuxt" >
                      <i className="fa fa-angle-right downR" aria-hidden="true" />
                      <i className="fa fa-angle-down downB" aria-hidden="true" />
                    </a>
                    <div className=" an thucdon menuMega">
                      <div className="col-12 col-sm-12 mega1 caphe ">
                        <div className="grid">
                          <div className="col-9 col-sm-9 mega-left ">
                            <ul className="listL">
                              <li className="mega-item xemthemtd">
                                <div>
                                  <Link to="/ca_phe">CÀ PHÊ</Link>
                                  <a className="menuxt2">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down downB"
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
                                    <Link to="/san-pham">Cà Phê Phin</Link>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <Link to="/san-pham">Cà Phê Espresso</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-item xemthemtd">
                                <div>
                                  <Link to="/ca_phe">FREEZE</Link>
                                  <a className="menuxt2" >
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down downB"
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
                                    <Link to="/san-pham">Freeze Cà Phê Phin</Link>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <Link to="/san-pham">Freeze Không Cà Phê</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-item xemthemtd">
                                <div>
                                  <Link to="/ca_phe">TRÀ</Link>
                                  <a className="menuxt2">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down downB"
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
                                    <Link to="/san-pham">Trà Sen Vàng</Link>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <Link to="/san-pham">Trà Thạch Đào</Link>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <Link  to="/san-pham">Trà Thanh Đào</Link>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <Link to="/san-pham">Trà Thạch Vải</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-item xemthemtd">
                                <div>
                                  <Link to="/caphe">BÁNH MÌ</Link>
                                  <a className="menuxt2">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down downB"
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
                                    <Link to="/san-pham">Thịt Nướng</Link>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <Link to="/san-pham">Xíu Mại</Link>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <Link to="/san-pham">Chả Lụa Xá Xíu</Link>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <Link to="/san-pham">Gà Xé Nước Tương</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-item xemthemtd">
                                <div>
                                  <Link to="/ca_phe">KHÁC</Link>
                                  <a className="menuxt2">
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
                                    <Link to="/san-pham">Bánh Ngọt</Link>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <Link to="san-pham">Merchandise</Link>
                                  </li>
                                  <li className="items">
                                    <i
                                      className="fa fa-caret-right muiten"
                                      aria-hidden="true"
                                    />
                                    <Link to="/san-pham">Cà Phê Đóng Gói</Link>
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
                      <Link to="/tin-tuc">TIN TỨC</Link>
                      <a className="menuxt">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        <i className="fa fa-angle-down downB" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="an tin menuMega">
                      <div className="col-12 col-sm-12 mega1">
                        <div className="grid">
                          <div className="col-9 col-sm-9 mega-left">
                            <ul className="listL">
                              <li className="mega-item ">
                                <Link to="/tin-tuc">TIN TỨC &amp; SỰ KIỆN</Link>
                              </li>
                              <li className="mega-item">
                                <Link to="/tin-tuc">TIN KHUYẾN MÃI</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-2 col-sm-2 banner">
                            <div className="bannerMenu">
                              <div className="txt">
                                <a href="/tin-tuc">
                                  Tự hào sinh ra từ đất Việt, 1999!
                                </a>
                              </div>
                              <div className="img">
                                <a href="/tin-tuc">
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
                      <Link to="/cong-dong"><span>TRÁCH NHIỆM CỘNG ĐỒNG</span></Link>
                      <a className="menuxt">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        <i className="fa fa-angle-down downB" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="an congdong menuMega">
                      <div className="col-12 col-sm-12 mega1">
                        <div className="grid">
                          <div className="col-9 col-sm-9 mega-left">
                            <ul className="listL">
                              <li className="mega-item xemthemtd">
                                <div>
                                  <Link to="/cong-dong"><span>GIÁ TRỊ VĂN HÓA VIỆT</span></Link>
                                  <a className="menuxt2">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down downB"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </div>
                                <ul className="item-list menuxt2-show">
                                  <li className="items">
                                    <Link to="/cong-dong">Đương Đại Hóa Tranh Đông Hồ</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-item xemthemtd">
                                <div>
                                  <Link to="/cong-dong"><span>Cộng đồng</span></Link>
                                  <a className="menuxt2">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-angle-down downB"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </div>
                                <ul className="item-list menuxt2-show">
                                  <li className="items">
                                    <Link to="/cong-dong">Lớp Học Cho Em</Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="col-2 col-sm-2 banner">
                            <div className="bannerMenu">
                              <div className="txt">
                                <a href="/cong-dong">
                                  Đương Đại Hóa Tranh Đông Hồ
                                </a>
                              </div>
                              <div className="img">
                                <a href="/cong-dong">
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
                      <a className="menuxt">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        <i className="fa fa-angle-down downB" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="an vechungtoi menuMega">
                      <div className="col-12 col-sm-12 mega1">
                        <div className="grid">
                          <div lass="col-9 col-sm-9 mega-left">
                            <ul className="listL">
                              <li className="mega-item">
                                <Link to="/vechungtoi">KHỞI NGUỒN</Link>
                              </li>
                              <li className="mega-item">
                                <Link to="/vechungtoi">DỊCH VỤ KHÁCH HÀNG</Link>
                              </li>
                              <li className="mega-item">
                                <Link to="/vechungtoi">NGHỀ NGHIỆP</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-2 col-sm-2 banner vct">
                            <div className="bannerMenu">
                              <div className="txt">
                                <a href="/vechungtoi">
                                  Thương hiệu bắt nguồn từ cà phê Việt
                                </a>
                              </div>
                              <div className="img">
                                <a href="/vechungtoi">
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
                    <Link to="/lien-he">LIÊN HỆ</Link>
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
