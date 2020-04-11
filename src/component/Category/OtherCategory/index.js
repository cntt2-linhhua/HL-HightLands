import React, { Component } from "react";
import { Link } from "react-router-dom";

class OtherCategory extends Component {
  render() {
    return (
      <li className="col-3 col-lg-3 muc">
        <div className="muc-content">
          <div className="mucAnh">
            <Link to="ca-phe">
              <img src={this.props.imgOc} alt="Cà phê" />
            </Link>
          </div>
          <div className="mucDe">
          <Link to="ca-phe">
              <h1>{this.props.namrOc}</h1>
            </Link>
          </div>
          <div className="mucND">
            <p>
              {this.props.des}
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default OtherCategory;
