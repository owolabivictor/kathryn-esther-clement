// General reveal on scroll page animations
const revealElements = document.querySelectorAll(".reveal");
const revealLeft = document.querySelectorAll(".reveal-left")

window.addEventListener("scroll", function () {
    revealElements.forEach(function(element) {
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight * 0.8) {
            element.classList.add("show");
        }
    });

    revealLeft.forEach(function(element) {
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight * 0.8) {
            element.classList.add("show");
        }
    });
    
});