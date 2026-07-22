// Calculate and assign the hero height
const hero = document.querySelector(".hero")
function setHeroHeight() {
    const heroHeight = Math.max(
        window.innerHeight - nav.offsetHeight,
        500
    );

    hero.style.height = `${heroHeight}px`;
}

setHeroHeight()
window.addEventListener("resize", setHeroHeight)