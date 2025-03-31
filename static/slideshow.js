//coppied fro w3 schools + self + AI


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
  let slides = document.getElementsByClassName("mySlides fade");
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

let slideIndex = 1;
//showSlides(slideIndex);

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    showSlides(slideIndex);
});


document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case '1':
            showSlides(slideIndex = 1)
            break;
        case '2':
            showSlides(slideIndex = 2)
            break;
        case '3':
            showSlides(slideIndex = 3)
            break;
        default:
            // Do nothing for other keys
            break;
    }
});
