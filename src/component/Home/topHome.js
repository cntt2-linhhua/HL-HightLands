import React, { Component } from "react";
import * as ROUTES from "../Router/routers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class TopHome extends Component {
  render() {
    return (
      <section className="contentTop">
        <div className="imgContent">
          <ul>
            <li>
              <div className="slideshow-container">
                <div className="mySlides fade">
                  <div className="contentItem">
                  <img src="img/hl_about.jpg" alt="About 1" />
                  </div>
                </div>
                <div className="mySlides fade">
                  <div className="contentItem">
                  <img src="img/hl_about4.png" alt="About 1" />
                  </div>
                </div>
                <div className="mySlides fade">
                  <div className="contentItem">
                  <img src="img/VIET.Brand_Campaign_WEBBANNER.jpg" alt="about" />
                    <div
                      className="buttonItem"
                      style={{
                        right: "0px",
                        position: "absolute",
                        left: "59%",
                        top: "72%",
                        color: "#F0BB7B"
                      }}
                    >
                      <button className="item2">CÙNG NHAU TỰ HÀO</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  position: "absolute",
                  zIndex: 10,
                  transform: "translateY(-100%)",
                  left: "47%"
                }}
              >
                <span className="dot" onclick="currentSlide(0)" />
                <span className="dot" onclick="currentSlide(1)" />
                <span className="dot" onclick="currentSlide(2)" />
              </div>
            </li>
            <li>
              <div className="contentItem">
                <Link ><img src="img/hl_about2.jpg" alt="About 1" /></Link>
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
                <Link ><img src="img/hl_about3.jpg" alt="About 1" /></Link>
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
               <Link ><img src="img/hl_about4.png" alt="About 1" /></Link>
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
    );
  }
}

export default TopHome;
