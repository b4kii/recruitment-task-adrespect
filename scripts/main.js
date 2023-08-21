const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");

searchButton.addEventListener("click", () => {
    searchInput.focus();
});

const hamburgerButton = document.querySelector("#hamburger-button");
const navLinks = document.querySelector("#nav-links");
const firstHamburgerLine = document.querySelector("#first-line");
const secondHamburgerLine = document.querySelector("#second-line");
const thirdHamburgerLine = document.querySelector("#third-line");

hamburgerButton.addEventListener("click", () => {
    const isActive =
        hamburgerButton.getAttribute("data-active") === "false" ? false : true;
    if (!isActive) {
        hamburgerButton.setAttribute("data-active", "true");
        navLinks.style = "max-height: 40rem; transition: max-height 500ms";
        firstHamburgerLine.style = "transform: rotate(45deg); top: 50%;";
        secondHamburgerLine.style = "transform: translateX(-100%); opacity: 0; pointer-events: none;";
        thirdHamburgerLine.style = "transform: rotate(-45deg); top: 50%;";
    } else {
        hamburgerButton.setAttribute("data-active", "false");
        navLinks.style = "max-height: 0px; transition: max-height 250ms";
        firstHamburgerLine.style = "transform: rotate(0); top: 50%;";
        thirdHamburgerLine.style = "transform: rotate(0); top: 50%;";

        setTimeout(() => {
            firstHamburgerLine.style = "";
            secondHamburgerLine.style = "transform: translateX(0); opacity: 1;";
            thirdHamburgerLine.style = "";
        }, 500)
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navLinks.removeAttribute("style");
    }
});
