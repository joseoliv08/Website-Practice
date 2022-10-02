var navBar = document.getElementById('navBar');
window.onscroll = function() {
    if(window.scrollY > 22){
        navBar.classList.add('scrolled');
    }else{
        navBar.classList.remove('scrolled');
    }
};

function displayResult()
   {
   document.getElementById("bText").style.fontWeight="bold";
   }

   let slideIndex = 1;
   showSlides(slideIndex);
   
   // Next/previous controls
   function plusSlides(n) {
     showSlides(slideIndex += n);
   }
   
   // Thumbnail image controls
   function currentSlide(n) {
     showSlides(slideIndex = n);
   }
   
   function showSlides(n) {
     let i;
     let slides = document.getElementsByClassName("mySlides");
     let dots = document.getElementsByClassName("dot");
     if (n > slides.length) {slideIndex = 1}
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex-1].style.display = "block";
     dots[slideIndex-1].className += " active";
   }

   function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  

function validateEmail(email) {
  let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return res.test(email);
}
function validate() {
  let result = $("#result");
  let email = $("#email").val();
  result.text("");
  if(validateEmail(email)) {
    result.text(email + " is valid");
    result.css("color", "white");
  } else {
    result.text(email + " is not valid");
    result.css("color", "red");
  }
  return false;
}
$("#validate").on("click", validate);