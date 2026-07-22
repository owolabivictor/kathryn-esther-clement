// General reveal on scroll page animations
const revealElements = document.querySelectorAll(".reveal");
const revealLeft = document.querySelectorAll(".reveal-left")
const revealRight = document.querySelectorAll(".reveal-right")

function reveal() {
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

    revealRight.forEach(function(element){
        const position = element.getBoundingClientRect()

        if (position.top < window.innerHeight * 0.8){
            element.classList.add("show")
        }
    })
}

reveal()

window.addEventListener("scroll", reveal);
