import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="lh_container">
        <div className="lh_content">
          <div className="lh_tieude">
            <h1 className="lh_title">LIÊN HỆ VỚI CHÚNG TÔI</h1>
            <h4>CHÚNG TÔI CÓ THỂ GIÚP GÌ CHO BẠN?</h4>
          </div>
          <div className="lh-form">
            <form className="lh-f">
              <ul className="lh-list">
                <li className="lh-item">
                  <div className="lh-phan">
                    <label htmlFor className="lh-name">
                      Họ tên:
                    </label>
                    <div className="name-input">
                      <input type="text" className="inputName" />
                      <a href>
                        <i className="fa fa-user" />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="lh-item">
                  <div className="lh-phan">
                    <label htmlFor className="lh-email">
                      Email:
                    </label>
                    <div className="mail-input">
                      <input type="text" className="inputMail" />
                      <a href="#" />
                      <i className="fa fa-envelope" />
                    </div>
                  </div>
                </li>
                <li className="lh-item">
                  <div className="lh-phan">
                    <label htmlFor className="lh-noidung">
                      Nội dung liên lạc:
                    </label>
                    <div className="noidung-input">
                      <textarea name id cols={30} rows={10} defaultValue={""} />
                      <a href>
                        <i className="fa fa-pencil-square-o" />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="lh-item">
                  <div className="lh-phan">
                    <label htmlFor className="lh-ma">
                      Mã bảo vệ:
                    </label>
                    <div className="ma-input">
                      <input type="text" className="inputMa" />
                      <a href>
                        <i className="fa fa-shield" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="mabaove">
                      <img
                        src="https://highlandscoffee.com.vn/includes/sec_image.php?code=DNTQyOU4&h=40&w=100"
                        alt="security code"
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <div className="lh-sub">
                <button className="lh-button">GỬI</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
