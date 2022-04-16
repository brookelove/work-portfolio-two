console.log("I am linked");
// HTML elements 
var navbar = document.getElementById("navbar");
var nav__list = document.getElementById("header");
var nav__title = document.getElementById("nav__title");

// Sticky element
window.onscroll = function (){
    if (window.pageYOffset >= nav__list.offsetTop){
        navbar.classList.add("sticky");
        nav__title.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        nav__title.classList.remove("sticky");
    }
}