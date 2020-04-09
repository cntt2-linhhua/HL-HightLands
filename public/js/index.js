window.onload = function(){
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // console.log(slides[slideIndex]);
    
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


function currentSlide(n) {
  showSlides(slideIndex = n);
}


// menu

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
