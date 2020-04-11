import React, { Component } from "react";
import { Link } from "react-router-dom";

class CateProduct extends Component {
  render() {
    return (
      <div className="right-content top-c">
        <div className="r-anh">
          <Link to="/caramel-phin-preeze">
            <img src={this.props.img} alt="Cà phê sữa đá" />
          </Link>
        </div>
        <div className="r-content">
          <div className="r-tieude">
            <Link to="/caramel-phin-preeze">{this.props.name}</Link>
          </div>
          <div className="cont">
            <p>
              {this.props.descript}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CateProduct;
