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

//   -=======================================================counter
// Set the date we're counting down to
var countDownDate = new Date("Feb 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("counter").innerHTML = 
  ` <div class="d-flex align-items-center justify-content-center">
  <div class="d-flex flex-column">
   <h1 class="m-0 p-0 text-center f-26 w-700">16</h1>
   <p class="mb-0 pb-0 f-14 text-gray-light text-center w-600">Giorno</p>
  </div>
  <div class="mx-2 f-30 w-700 mb-4">:</div>
  <div class="d-flex flex-column">
   <h1 class="m-0 p-0 text-center f-26 w-700">5</h1>
   <p class="mb-0 pb-0 f-14 text-gray-light text-center w-600">Hours</p>
  </div>
  <div class="mx-2 f-30 w-700 mb-4">:</div>
  <div class="d-flex flex-column">
   <h1 class="m-0 p-0 text-center f-26 w-700">10</h1>
   <p class="mb-0 pb-0 f-14 text-gray-light text-center w-600">Min</p>
  </div>
  <div class="mx-2 f-30 w-700 mb-4">:</div>
  <div class="d-flex flex-column">
   <h1 class="m-0 p-0 text-center f-26 w-700">16</h1>
   <p class="mb-0 pb-0 f-14 text-gray-light text-center w-600">Sec</p>
  </div>
</div>`
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);


