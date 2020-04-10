import React, { Component } from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

class Menu extends Component {
  render() {
    return (
      <nav className="td_content">
        <div className="td_container">
          <MenuLeft
            anhCate="img/menu-caphe.png"
            background="td_block1"
            nameCate="CÀ PHÊ"
            description="Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica
          thượng hạng được trồng trên những vùng cao nguyên cao Việt Nam
          màu mỡ, qua những bí quyết rang xay độc đáo, Hightlands Coffee
          chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang
          hương vị đậm đà và tinh tế."
          ></MenuLeft>
          <MenuRight
            anhCate="img/menu-FREEZE.png"
            background="td_bloc2"
            nameCate="FREEZE"
            description="Sảng khoái với thức uống đá xay phong cách Việt. Freeze là
          thức uống đá xay mát lạnh được pha chế từ những nguyên liệu
          thuần túy của Việt Nam."
          ></MenuRight>
          <MenuLeft
            anhCate="img/menu-TEA.png"
            background="td_block3"
            nameCate="Trà"
            description=" Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện
          đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản
          thân và tận hưởng một cảm giác thật khoan khoái, tươi mới."
          ></MenuLeft>
          <MenuRight
            anhCate="img/menu-banhmi.png"
            background="td_block4"
            nameCate="BÁNH MÌ"
            description="Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một
          miếng Bánh mì ngon, giòn, nóng hổi tại Highlands Coffee. Một
          kết hợp hoàn hảo giữa lớp nhân chua, cay, mặn, ngọt quyện với
          lớp vỏ bánh mì giòn tan, mịn màng tạo ra tầng tầng lớp lớp dư
          vị cho thực khách."
          ></MenuRight>
        </div>
      </nav>
    );
  }
}

export default Menu;
