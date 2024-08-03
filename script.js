const burgerMenu = document.getElementsByClassName("burger-menu")[0]
const ul = document.getElementsByTagName("ul")[0]

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger-menu-open")
    ul.classList.toggle("ul-open")
})