import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="footerContent">
            <ul className="footerul">
              <li className="footeritem">
                <div className="footerB">
                  <div className="footerIcon">
                    <ul className="iconMenu">
                      <li className="iconItem">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="iconItem">
                        <a href="#">
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                      <li className="iconItem">
                        <a href="#">
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
                  <a href="#">
                    <i className="fa fa-paper-plane" />
                  </a>
                  <a href="#">
                    <span>Đăng ký để nhận bảng tin</span>
                  </a>
                </div>
              </li>
              <li className="footeritem">
                <div className="sentMail">
                  <a href="#">
                    <i className="fa fa-envelope" />
                  </a>
                  <a href="#">
                    <span>customerservice@hignhtcoffee.com.vn</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
