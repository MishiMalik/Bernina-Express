// ===================================header
$(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $(".navbar").css("background-color" , "#d32f2f");
      }

      else{
          $(".navbar").css("background-color" , "rgba(0, 0, 0, 0.237)");  	
      }
  })
  $('.navbar-toggler').on('click', function(){
      $('.navbar').toggleClass('color-changed');
  });
})

$(".show-date").on("click",function(){
  $(".display-more").css("display","flex");
})
// =====================select2
$(document).ready(function() {
  $('.js-example-basic-single').select2();
});

// ====================================inc/dec
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", ()=>{
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", ()=>{
  if(a > 1){
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }
});



//  ====================================search input

//  $('.search-btn').on('click', function(){
//         $('.search-input').css('display','block');
//         $('.search-btn').css('display','none');
//         $('.search-input').css('width','80%');
//     });




