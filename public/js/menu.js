window.onload = function(){
  var body =document.getElementsByTagName('body')[0];
  // xu ly mune header 
  var menu=document.getElementById('menu');
  var ctmenu = document.getElementById('ctmenu');
  console.log( 'aaaaaaaaaaaaaa');
  menu.onclick = function () {
   
    
    ctmenu.style.display="flex";
    // rmCol3.forEach(item => {
    //   if(item.classList.contains('col-3')){
    //     item.classList.remove('col-3');
    //   }
    // })
  }
  var btnX = document.getElementsByClassName('btnX')[0];
  btnX.onclick = function () {
    ctmenu.style.display="none";
  }
  


  // var menuxt2 = document.getElementsByClassName('menuxt2');
  // // var menuxtct =document.getElementsByClassName('menuxt2-show');

  // for (var i =0; i<menuxt2.length;i++){
  //   console.log(i);
  //   // menuxtct[i].style.display = "none";
  //   var menuxt2n = document.getElementsByClassName('menuxt2')[i];
  // var menuxtctx =document.getElementsByClassName('menuxt2-show')[i];
  //   var temp = i; ;
  //   // body.removeChild(menuxtctx);
  //   // menuxtctx.style.display="none";
  //   console.log(menuxtctx);
  //   menuxt2n.onclick = function (temp) {
  //     menuxtctx.style.display = "block";
  //     console.log(menuxtctx);
  //     console.log(menuxt2n);
  //   }
  //   // {a(menuxtctx) ;
  //   //   // console.log(i);
  //   //   console.log('aa');
      
  //   //   // menuxtct[temp].style.display = "block";
  //   // };
  
  // }
  // function a(el) {
  //   el.style.display="block";
  //   console.log('aag');
  //   // alert("Dạng 2 thêm event bằng gán js");
  //   return false;
  //   // body.appendChild(el);

  // }
  const list = document.querySelectorAll('.header-drop');
  list.forEach(item => {
    // console.log(item.getElementsByClassName('menuxt')[0]);
    item.getElementsByClassName('menuxt')[0].addEventListener('click', e => { 
      const submenu1 = item.getElementsByClassName('an')[0];
      //  const menuxt = item.getElementsByClassName('menuxt')[0];
      if(submenu1.classList.contains('active')) {
        submenu1.classList.remove('active');
        item.classList.remove('active')
      } else {
        submenu1.classList.add('active');
        item.classList.add('active');
      }       
    })
    })

  const lis = document.querySelectorAll('.xemthemtd');
  // console.log(lis);
  lis.forEach(item => {
    console.log(item);
    item.getElementsByClassName('menuxt2')[0].addEventListener('click', e => { 
console.log(item.getElementsByClassName('menuxt2')[0]);
      const submenu = item.getElementsByClassName('menuxt2-show')[0];
      console.log(submenu);
      const menuxt2div = item.getElementsByTagName('div')[0];
      if(submenu.classList.contains('active')) {
        submenu.classList.remove('active');
        menuxt2div.classList.remove('active');
      } else {
        submenu.classList.add('active');
        menuxt2div.classList.add('active');
      }       
    })
    })


  
  
 

}