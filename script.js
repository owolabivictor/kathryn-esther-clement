// Navigation animate on scroll
const nav = document.querySelector("nav")
const body = document.querySelector("body")

window.addEventListener("scroll", function () {

    if (window.scrollY > nav.offsetHeight){
        nav.classList.add("sticky")
        body.style.paddingTop = nav.offsetHeight + "px"
    }
    else {
        nav.classList.remove("sticky")
        body.style.paddingTop = 0
    }
})

// Hamburger menu
const hamburger = document.querySelector(".fa-bars")
const closeBtn = document.querySelector(".fa-xmark")
const navLists = document.querySelector(".nav-lists")
const overlay = document.querySelector(".overlay")

hamburger.addEventListener("click", function () {
    navLists.classList.add("show")
    navLists.style.top = nav.offsetHeight + "px"
    overlay.style.display = "block"
})

function closeMenu(){
    navLists.classList.remove("show")
    overlay.style.display = "none"
}

overlay.addEventListener("click", function (){
    navLists.classList.remove("show")
    overlay.style.display = "none"
})

// Calculate and assign the hero height
const hero = document.querySelector(".hero")
hero.style.height = `${window.innerHeight - nav.offsetHeight}px`


// General reveal on scroll page animations
const revealElements = document.querySelectorAll(".reveal");
const homePageBook = document.querySelector(".home-page-book")

window.addEventListener("scroll", function () {
    revealElements.forEach(function(element) {
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight * 0.8) {
            element.classList.add("show");
        }
    });

    const position = homePageBook.getBoundingClientRect()
    if (position.top < window.innerHeight * 0.8){
        homePageBook.classList.add("slide-in-left")
    }
});
