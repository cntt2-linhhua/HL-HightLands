import React, { Component } from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import MenuLeft1 from "./MenuLeft1";
import MenuRight1 from "./MenuRight1";

class MenuCategory extends Component {
  render() {
    return (
      <nav class="td_content">
        <div class="td_container">
          <MenuLeft
            name="CÀ PHÊ"
            anh ="img/menu-caphe.png"
            content="Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica thượng hạng được trồng trên những vùng cao nguyên cao Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Hightlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế."
          />
          <MenuRight
            name="FREEZE"
            anh="img/menu-FREEZE.png"
            content="Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt Nam."
          />
          <MenuLeft1 
            name="Trà"
            content="Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới."
            anh="img/menu-TEA.png"
          />
          <MenuRight1
            name="Bánh Mì"
            content="Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một miếng Bánh mì ngon, giòn, nóng hổi tại Highlands Coffee. Một kết hợp hoàn hảo giữa lớp nhân chua, cay, mặn, ngọt quyện với lớp vỏ bánh mì giòn tan, mịn màng tạo ra tầng tầng lớp lớp dư vị cho thực khách."
            anh ="img/menu-banhmi.png"
          />
        </div>
      </nav>
    );
  }
}

export default MenuCategory;
