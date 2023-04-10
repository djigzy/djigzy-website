let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let imageSlideshow = document.getElementsByClassName("image-slideshow");

  for (i = 0; i < imageSlideshow.length; i++) {
    imageSlideshow[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > imageSlideshow.length) {slideIndex = 1}
  {
    imageSlideshow[slideIndex-1].style.display = "block";
  }


  
  

  setTimeout(carousel, 3000); // Change image every 2 seconds
}