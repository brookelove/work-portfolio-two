console.log("I am linked");
// HTML elements 
var header = document.getElementById("header");
var sticky = header.offsetTop;
// var nav__title = document.getElementById("nav__title");

// Sticky element
    // try to get sticky element to work on all elements
window.onscroll = function (){stickynavbar ()};

function stickynavbar () {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
        console.log(header);
    } else {
        header.classList.add("sticky");
        console.log()
    }
}

//     if (window.pageYOffset >= nav__list.offsetTop){
//         nav__list.classList.add("sticky");
//     } else {
//         console.log(nav__list)
//         nav__list.classList.remove("sticky");
//     }


// scroll on navigation 
// function activemenu () {
//     var len = section.length;
//     while( - - len && window.scrollY + 97 < section[len].offsetTop){}
//     list.forEach (ltx.classList.remove("active"));
//     li[len].classList.add("active");
// }
// activemenu();
// window.addEventListener("scroll", activemenu);

