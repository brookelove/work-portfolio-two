console.log("I am linked");
// HTML elements 
var navbar = document.getElementById("navbar");
var nav__list = document.getElementById("nav__list");

// Sticky element
window.onscroll = function (){
    if (window.pageYOffset >= nav__list.offsetTop){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}