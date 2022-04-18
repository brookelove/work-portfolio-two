console.log("I am linked");
// HTML elements 
var navbar = document.getElementById("navbar");
var nav__list = document.getElementById("header");
var sections = document.querySelectorAll("section");
var list = document.querySelectorAll(".links");
// var nav__title = document.getElementById("nav__title");

// Sticky element
    // try to get sticky element to work on all elements
window.onscroll = function (){
    if (window.pageYOffset >= nav__list.offsetTop){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
// scroll on navigation 
// function activemenu () {
//     var len = section.length;
//     while( - - len && window.scrollY + 97 < section[len].offsetTop){}
//     list.forEach (ltx.classList.remove("active"));
//     li[len].classList.add("active");
// }
// activemenu();
// window.addEventListener("scroll", activemenu);

