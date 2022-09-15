//MENU SCROLL
window.onscroll = function() {menuScroll()};

function menuScroll() {
    let box= document.querySelector("header");
    let height = box.offsetHeight;
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        document.getElementById("menu-bar").style.backgroundColor = "black";
    }
    else {
        document.getElementById("menu-bar").style.backgroundColor = "initial";
    }
};


//SLIDESHOW
let slideIndex = 1;     //When you load the document, slideIndex starts at slide index position 1
showSlides(slideIndex); //Calls the function showSlides with value slideIndex: which then shows the slide assigned by slideIndex, rather than all the photos at once

//NEXT AND PREVIOUS CONTROLS
function plusSlides(n) {  //n is the index number of slide you want to display - it gets n from clicking the left or right arrow, which in the html document have (-1) and (1) values.
    showSlides(slideIndex += n); //every time you click the left/right arrows, it changes the index number += 1
}

//THUMBNAIL IMAGE CONTROLS
function currentSlide(n) {    //n is the index number of slide you want to display, using 
  showSlides(slideIndex = n); //changes the global variable slideIndex to n (as defnied by the html)
}

function showSlides(n) {  //n is the index number that is passed to this function, by other functions above
    let i;                //introduces an unassigned variable
    let slides = document.getElementsByClassName("mySlides"); //collects all the slide elements from the document
    let dots = document.getElementsByClassName("dot");    //collects all the dot elements from the document
    if (n > slides.length) {slideIndex = 1} //length counts the number of objects in the slides array. This makes the slideshow go back to the first slide when it reaches beyond the end. 
    if (n < 1) {slideIndex = slides.length} //This makes the slideshow go back to the last slide when it reaches beyond the beginning. 
    for (i = 0; i < slides.length; i++) {   //i is the index used to reference an element in the slideshow array - this code is saying all index numbers
      slides[i].style.display = "none";     //Sets all the slides to invisible
    }
    for (i = 0; i < dots.length; i++) {     //Sets the dots to not active
      dots[i].className = dots[i].className.replace(" active", ""); //this replaces the class name wiht "", which is an empty value, so it doesn't trigger anything 
    }
    slides[slideIndex-1].style.display = "block"; //turns on the slide you want to see
    dots[slideIndex-1].className += " active";  //turns on the dot you want to see by adding "active" to it's class name, trigging that css
  }
//END SLIDESHOW

//CONTACT FORM
function validateForm() {
    let x = document.forms["contact"]["Name"].value;
    if (x == "") {
        alert("First Name must be filled out.");
        return false;
    }
    let em= document.forms["contact"]["Email"].value;
    if (em == "") {
        alert("Email must be filled out.");
        return false;
    }
}
//STICKY CONTACT FORM
function openForm() {
  document.getElementById("contact").style.display = "block";
}

function closeForm() {
  document.getElementById("contact").style.display = "none";
}
//END STICKY CONTACT FORM

//END CONTACT FORM