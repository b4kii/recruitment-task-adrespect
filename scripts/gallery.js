import 'photoswipe/style.css';
import PhotoSwipeLightbox from "photoswipe/lightbox";

const lightbox = new PhotoSwipeLightbox({
    gallery: "#gallery",
    children: "a",
    pswpModule: () => import('photoswipe')
})

const masonry = new Macy({
    container: "#gallery",
    mobileFirst: true,
    columns: 1,
    breakAt: {
        300: 2,
        1000: 3,
        1500: 4
    },
    margin: {
        x: 44,
        y: 44
    }
})

const expandButton = document.querySelector("#btn-expand-gallery");
const shrinkButton = document.querySelector("#btn-shrink-gallery");
const gallery = document.querySelector("#projects");
const overlay = document.querySelector("#overlay");

expandButton.addEventListener("click", () => {
    gallery.style = "max-height: 9999px; overflow-hidden: none;";
    overlay.style.opacity = "0";
    expandButton.style= "opacity: 0; pointer-events: none;";
    shrinkButton.style= "opacity: 1; pointer-events: auto;";
})

shrinkButton.addEventListener("click", () => {
    gallery.style = "max-height: 1200px; overflow-hidden: none;";
    overlay.style = "opacity: 1;";
    expandButton.style= "opacity: 1; pointer-events: auto;";
    // shrinkButton.style= "opacity: 0; pointer-events: auto;";
    shrinkButton.removeAttribute("style");
})

lightbox.init();