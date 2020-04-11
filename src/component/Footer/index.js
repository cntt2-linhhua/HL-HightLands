import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="timquan">
          <Link>
            <i className="fa fa-map-marker" />
            <span>VIEW MAP</span>
          </Link>
        </div>
        <div className="footer-bxt">
          <div className="bxt-top">
            <a href="#header">
              <i className="fa fa-angle-up" />
            </a>
          </div>
          <div className="bxt-mail">
            <a href="/">
              <i className="fa fa-envelope" />
            </a>
          </div>
        </div>
        <div className="footerContent">
          <ul className="footerul">
            <li className="footeritem">
              <div className="footerB">
                <div className="footerIcon">
                  <ul className="iconMenu">
                    <li className="iconItem">
                      <a href="./home.html">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="iconItem">
                      <a href="./home.html">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li className="iconItem">
                      <a href="./home.html">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="footeritem">
              <div className="copyright">
                <span>© 2018 Highlands Coffee. All rights reserved</span>
              </div>
            </li>
            <li className="footeritem">
              <div className="dangky">
                <a href="./home.html">
                  <i className="fa fa-paper-plane" />
                </a>
                <a href="./home.html">
                  <span>Đăng ký để nhận bảng tin</span>
                </a>
              </div>
            </li>
            <li className="footeritem">
              <div className="sentMail">
                <a href="./home.html">
                  <i className="fa fa-envelope" />
                </a>
                <a href="./home.html">
                  <span>customerservice@hignhtcoffee.com.vn</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
