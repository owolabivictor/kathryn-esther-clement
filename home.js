// Calculate and assign the hero height
const hero = document.querySelector(".hero")
function setHeroHeight(){
    const navHeight = nav.offsetHeight

    const calculatedHeight = window.innerHeight - navHeight

    const minHeight = 500
    const maxHeight = 900

    hero.style.height = `${Math.min(Math.max(calculatedHeight, minHeight), maxHeight)}px`
}

setHeroHeight()
window.addEventListener("resize", setHeroHeight)