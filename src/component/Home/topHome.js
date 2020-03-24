import React, { Component } from "react";

class TopHome extends Component {
  render() {
    return (
      <div>
        <section className="contentTop">
          <div className="imgContent">
            <ul>
              <li>
                <div className="contentItem">
                  <a href="#">
                    <img src="img/hl_about.jpg" alt="About 1" />
                  </a>
                </div>
              </li>
              <li>
                <div className="contentItem">
                  <a href="#">
                    <img src="img/hl_about2.jpg" alt="About 1" />
                  </a>
                  <div
                    className="buttonItem"
                    style={{
                      position: "absolute",
                      transform: "translateY(-149px)",
                      right: "15%"
                    }}
                  >
                    <button
                      className="item1"
                      style={{ float: "right", right: "40px" }}
                    >
                      KHÁM PHÁ THÊM
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="contentItem">
                  <a href="#">
                    <img src="img/hl_about3.jpg" alt="About 1" />
                  </a>
                  <div
                    className="buttonItem"
                    style={{
                      right: "0px",
                      position: "absolute",
                      transform: "translateY(-377%)",
                      left: "22%"
                    }}
                  >
                    <button className="item2">KHÁM PHÁ THÊM</button>
                  </div>
                </div>
              </li>
              <li>
                <div className="contentItem">
                  <a href="#">
                    <img src="img/hl_about4.png" alt="About 1" />
                  </a>
                  <div
                    className="buttonItem"
                    style={{
                      bottom: "10%",
                      float: "right",
                      position: "absolute",
                      left: "59%"
                    }}
                  >
                    <button className="item3">KHÁM PHÁ THÊM</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default TopHome;
