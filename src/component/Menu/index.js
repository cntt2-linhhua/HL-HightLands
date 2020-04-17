import React, { Component, Fragment } from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import info from "./data.json";

// var listPro = [];

class Menu extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: []
  //   }
  // }

  

  // componentDidMount () {
  //   fetch(info)
  //   .then( result => result.json())
  //   .then((res) => {
  //     console.log(res.data);
      
  //     this.setState({
  //       data: res.data
  //     });
  //   }).catch (console.log);    
  // }

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
      ]
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
    
  }
  
  // getList =()=>{
  //   listPro = [];
  //  this.state.data.map((item,key) => {
  //     // console.log(key);
  //     if(key%2===0) {
        
        
  //       listPro.push(<MenuLeft
  //       key= {key}
  //       id={item._id}
  //       anhCate={item.image}
  //       // anhCate="img/menu-caphe.png"
  //       background="td_block1"
  //       nameCate={item.product_name}
  //       description="Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica
  //     thượng hạng được trồng trên những vùng cao nguyên cao Việt Nam
  //     màu mỡ, qua những bí quyết rang xay độc đáo, Hightlands Coffee
  //     chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang
  //     hương vị đậm đà và tinh tế."
  //     ></MenuLeft>
  //   )} 
  //   else {
  //     listPro.push (
  //       <MenuRight
  //       key= {key}
  //       anhCate="img/menu-FREEZE.png"
  //       background="td_bloc2"
  //       nameCate="FREEZE"
  //       description="Sảng khoái với thức uống đá xay phong cách Việt. Freeze là
  //     thức uống đá xay mát lạnh được pha chế từ những nguyên liệu
  //     thuần túy của Việt Nam."
  //     ></MenuRight>
   
  //     )
  //   }
  //   } )
  // }

  // getCatePro = () =>{

  // }
  render() {
    //console.log(this.state.catePro);
    
    return (
      <nav className="td_content">
          {/* { console.log(info)} */}
        <div className="td_container">
        {/* {this.state.data.map((item,key) => { */}
        {   
        this.state.catePro.map((item,key) => {
          // console.log(key);
          if(key%2===0 ) {
            
            
            return(<MenuLeft
            key= {key}
            id={item.cate_id}
            anhCate={item.products[0] ? item.products[0].image : null}
            // anhCate="img/menu-caphe.png"
            background="td_block1"
            nameCate={item.cate_name}
            description={item.products[0] ? item.products[0].description : null}
          ></MenuLeft>
        )} 
        else {
          return (
            <MenuRight
            key= {key}
            id={item.cate_id}
            anhCate={item.products[0] ? item.products[0].image : null}
            background="td_bloc2"
            nameCate={item.cate_name}
            description={item.products[0] ? item.products[0].description : null}
          ></MenuRight>
       
          )
        }
        } )
        }
          {/* <MenuLeft
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
          ></MenuRight> */}
        </div>
      </nav>
    );
  }
}

export default Menu;
