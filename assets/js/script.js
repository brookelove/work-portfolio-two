console.log("I am linked");
// HTML elements 
var navbar = document.getElementById("navbar");
var nav__list = document.getElementById("header");
var sections = documnet.querySelectorAll("section[id]");

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
    // add event listenter to listen for the scroll 
window.addEventListener('scroll', navnotice);
function navnotice {
    var scrollY = window.pageYOffset;
    sections.forEach(current => {
        var sectionheight = current.offsetHeight

        var sectiontop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
        sectionID = current.getAttribute("id")
        if ( 
            scrollY > sectiontop && scrollY <= sectiontop + sectionheight
        ) {
            document.querySelector(".nav a[href*=" + sectionID )
        }

    })
}
