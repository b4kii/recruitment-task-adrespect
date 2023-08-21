const button = document.querySelectorAll("[data-slide-button]");

button.forEach((button) => {
    button.addEventListener("click", () => {
        const offset = button.dataset.slideButton === "next" ? 1 : -1;
        const slides = document
            .querySelector("#intro")
            .querySelector("[data-slider]");
        const active = slides.querySelector("[data-active]");

        let index = [...slides.children].indexOf(active) + offset;
        if (index < 0) index = slides.children.length - 1;
        if (index >= slides.children.length) index = 0;

        slides.style = `transform: translateX(-${index * 100}%)`

        slides.children[index].dataset.active = true;
        slides.children[index].setAttribute("aria-hidden", false);
        delete active.dataset.active;
        active.setAttribute("aria-hidden", true)
    });
});
