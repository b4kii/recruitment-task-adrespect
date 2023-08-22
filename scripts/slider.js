import { SLIDES_DATA } from "./content-data";

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector("#slider");
    const template = document.querySelector("#slide-template");

    SLIDES_DATA.forEach((item) => {
        const slide = template.content.cloneNode(true);
        slide.querySelector(".slide-title").innerText = item.title;
        slide.querySelector(".slide-content").innerText = item.content;
        slide.querySelector(".slide-first-link").querySelector("span").innerText = item.firstLinkContent;
        slide.querySelector(".slide-second-link").querySelector("span").innerText = item.secondLinkContent;
        slide.querySelector(".slide-image").setAttribute("alt", item.alt);
        slide.querySelector(".slide-image").setAttribute("src", item.image);
        slider.append(slide);
    })
});

const button = document.querySelectorAll("[data-slide-button]");

button.forEach((button) => {
    button.addEventListener("click", () => {
        const offset = button.dataset.slideButton === "next" ? 1 : -1;
        const slides = document
            .querySelector("#intro")
            .querySelector("#slider");
        const active = slides.querySelector("[data-active]");

        let index = [...slides.children].indexOf(active) + offset;
        if (index < 0) index = slides.children.length - 1;
        if (index >= slides.children.length) index = 0;

        slides.style = `transform: translateX(-${index * 100}%)`;

        slides.children[index].dataset.active = true;
        slides.children[index].setAttribute("aria-hidden", false);
        delete active.dataset.active;
        active.setAttribute("aria-hidden", true);
    });
});
