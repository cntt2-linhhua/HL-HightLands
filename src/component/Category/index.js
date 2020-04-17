import React, { Component } from "react";
import SecCategory from "./SecCategory";
import OtherCategory from "./OtherCategory";
import info from "../Menu/data.json";


class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      catePro : [
        {
          cate_id : 'ca_phe',
          cate_name: 'Cà phê',
          products : []
        },
        {
          cate_id : 'tra',
          cate_name : 'Trà',
          products : []
        },
        {
          cate_id : 'thuc_uong_da_xay',
          cate_name : 'Thức uống đá xay',

          products : []
        },
        {
          cate_id : 'thuc_uong_trai_cay',
          cate_name : 'Thức uống trái cây',
          products : []
        },
        {
          cate_id : 'banh_snack',
          cate_name : 'Bánh snack',
          products : []
        },
        {
          cate_id : 'mon_noi_bat',
          cate_name : 'Món nổi bật',
          products : []
        }
      ],
      category :{}
    }
  }

  componentDidMount () {
    this.setState({
      data: info.data
    }); 
    var proCates = this.state.catePro;
    // console.log(proCates);
    
    this.state.catePro.map((value,key) => {
      let products = [];  // ni để lấy ra cái list products mà có cate= ...
      info.data.map ( (val,key) => {
        if(val.product_category_id === value.cate_id){
          products.push(val);
        }

      })
      // console.log(products);
      // yến cái dòng chỗ ni để làm j á
      proCates[key].products= products; // ni để push cái list product vô cái mảng chứa đối tượng của cate á 
      
    })
    this.setState({
      catePro: proCates
    });
    this.getCate();
    
  }

  getCate =() =>{
    this.state.catePro.map((val,key)=>{
      if(val.cate_id === this.props.match.params.id) {
        this.setState({
          category :val
        });
      }
    })
  }
  
  render() {
    console.log(this.state.category );
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