const header = document.querySelector(".header-nav");
const links = document.querySelectorAll("a");

links.forEach((el) => {
    el.addEventListener("click", (e) => {
        let key = e.target.hash.replace("#", "");
        smoothScroll(key);
    });
});

function smoothScroll(key) {
    document.querySelector(`.${key}`).scrollIntoView({
        behavior: "smooth",
    });
}
