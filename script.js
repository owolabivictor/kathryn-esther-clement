// About section reveal on scroll
const aboutText = document.querySelector(".about-text");

window.addEventListener("scroll", function () {
    const position = aboutText.getBoundingClientRect();

    if (position.top < window.innerHeight * 0.7) {
        aboutText.classList.add("show");
    }
});

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

