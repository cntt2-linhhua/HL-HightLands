import React, { Component } from "react";
import SecCategory from "./SecCategory";
import OtherCategory from "./OtherCategory";

class Category extends Component {
  render() {
    return (
      <div className="category">
        <nav className="ct_container">
          <div className="ct-top">
            <SecCategory
              nameCategory="CÀ PHÊ"
              anhC="img/ct_caphe1.jpg"
              description="Hãy quên đi những bộn bề cuộc sống để tìm thấy những niềm
            vui nho nhỏ từ ly Cà phê Espresso của Highlands Coffee. Bí
            quyết để cho ra hương vị đậm đà, tinh tế của một tách cà phê
            Espresso là phương pháp phối trộn độc đáo, công phu giữa hai
            loại cà phê Arabica và Robusta thượng hạng, và đặc biệt là
            không thể thiếu được kĩ năng pha chế điêu luyện từ các
            Barista của chúng tôi."
            ></SecCategory>
          </div>
        </nav>
        {/* content top */}
        {/* noi dung gơi ý */}
        <section className="loai">
          <div className="col-12 col-lg-12 goiy">
            <ul className="danhsach">
              <OtherCategory
                imgOc="img/menu-caphe.png"
                namrOc="CÀ PHÊ"
                des="Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica
                      thượng hạng được trồng trên những vùng cao nguyên Việt Nam
                      màu mỡ, qua những bí quyết rang..."
              ></OtherCategory>
              <OtherCategory
                imgOc="img/menu-FREEZE.png"
                namrOc="FREEZE"
                des=" Sảng khoái với thức uống đá xay phong cách Việt. Freeze là
                      thức uống đá xay mát lạnh được pha chế từ những nguyên
                      liệu thuần túy của Việt Nam..."
              ></OtherCategory>
              <OtherCategory
                imgOc="img/menu-TEA.png"
                namrOc="TRÀ"
                des="Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách
                      hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác
                      của bản thân và tận hưởng một cảm..."
              ></OtherCategory>
              <OtherCategory
                imgOc="img/menu-banhmi.png"
                namrOc="BÁNH MÌ"
                des="Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử
                      một miếng Bánh mì ngon, giòn, nóng hổi tại Highlands
                      Coffee. Một kết hợp hoàn hảo giữa..."
              ></OtherCategory>
              <OtherCategory
                imgOc="img/khac.jpg"
                namrOc="KHÁC"
                des="Sẽ càng ngon miệng hơn khi bạn kết hợp đồ uống với những
                      chiếc bánh ngọt thơm ngon được làm thủ công hàng ngày ngay
                      tại bếp bánh của Highlands..."
              ></OtherCategory>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Category;
