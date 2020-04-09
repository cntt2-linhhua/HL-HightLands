import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <nav className="ms_content">
        <div className="ms_container">
          <div className=" ms_block1 ms-block">
            <div className=" ms_right ms_1">
              <img src="img/vct1.png" alt="Khởi nguồn" />
            </div>
            <div className=" ms_left ms_content">
              <div className="ms_tl">
                <h1 className="ms_tt1">Khởi nguồn</h1>
                <p>Thương hiệu bắt nguồn từ cà phê Việt Nam</p>
              </div>
              <div className="ms_txt_detail">
                <p>
                  Highlands Coffee® được sinh ra từ niềm đam mê bất tận với hạt
                  cà phê Việt Nam. Qua một chặng đường dài, chúng tôi đã không
                  ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm
                  trong không gian thoải mái và lịch sự với mức giá hợp lý.
                  Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống
                  quen thuộc mà còn mang trên mình một sứ mệnh văn hóa phản ánh
                  một phần nếp sống hiện đại của người Việt Nam.
                </p>
              </div>
              <div className="ms_button left-dt buttonItem btt1">
                <button className="ms-item_1">Xem chi tiết</button>
              </div>
            </div>
          </div>
          <div className=" ms_block">
            <div className="ms_img  ms_left ms_2">
              <img src="img/About_Customer_service_2.jpg" alt="Freeze" />
            </div>
            <div className=" ms_right ms_content content-1 container-3">
              <div className="ms_tl">
                <h1 className="ms_tt1">DỊCH VỤ KHÁCH HÀNG</h1>
                <p>Chào mừng bạn đến với Highlands Coffee®</p>
              </div>
              <div className="ms_txt_detail">
                <p>
                  Chúng tôi mong muốn mang đến cho bạn những trải nghiệm đáng
                  nhớ mỗi lần đến Highlands Coffee®. Hãy chia sẻ với chúng tôi
                  để chúng tôi có thể mang đến cho bạn những trải nghiệm tuyệt
                  vời hơn thế.
                </p>
              </div>
              <div className="ms_button left-dt buttonItem tem2">
                <button className="ms-item_2">Xem chi tiết</button>
              </div>
            </div>
          </div>
          <div className=" ms_block3 ms_block">
            <div className="ms_img  ms_right-3 ms_3">
              <img src="img/ABOUT-CAREER3.jpg" alt="Cà phê" />
            </div>
            <div className=" ms_left-3 ms_content-3 ">
              <div className="ms_tl">
                <h1 className="ms_tt1">NGHỀ NGHIỆP</h1>
                <p>Hãy khởi đầu sự nghiệp cùng với Highlands Coffee®</p>
              </div>
              <div className="ms_txt_detail">
                <p>
                  Với sứ mệnh trở thành thương hiệu cà phê Việt Nam dẫn đầu,
                  Highlands Coffee® luôn tìm kiếm những ứng cử viên tiềm năng có
                  chung niềm đam mê và nỗ lực cùng chúng tôi vươn tới thành
                  công. Chúng tôi luôn chào đón các bạn gia nhập vào đội ngũ
                  chuyên nghiệp của gia đình Highlands Coffee®.
                </p>
              </div>
              <div className="ms_button left-dt buttonItem">
                <button className="ms-item_3">Xem chi tiết</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default About;
