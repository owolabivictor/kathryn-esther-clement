// Navigation animate on scroll
const nav = document.querySelector("nav");
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

closeBtn.addEventListener("click", function (){
    navLists.classList.remove("show")
    overlay.style.display = "none"
})

overlay.addEventListener("click", function (){
    navLists.classList.remove("show")
    overlay.style.display = "none"
})

// About section reveal on scroll
const aboutParagraph = document.querySelector(".about-paragraph");

window.addEventListener("scroll", function () {
    const position = aboutParagraph.getBoundingClientRect();

    if (position.top < window.innerHeight * 0.85) {
        aboutParagraph.classList.add("show");
    }
});


