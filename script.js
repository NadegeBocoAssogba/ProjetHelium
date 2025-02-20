let navbar = document.querySelector("header") 
let section = document.querySelector(".unique")

window.addEventListener("scroll", (e) => {
    navbar.classList.toggle("headerScroll")
    section.classList.toggle("uniqueScroll")
})
