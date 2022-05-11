const trees = document.querySelectorAll(".tree");
const togglers = document.querySelectorAll(".toggler");

trees.forEach((tree) => {
    tree.addEventListener("click", () => {
        tree.classList.toggle("active");
    });
});

togglers.forEach((toggler) => {
    toggler.addEventListener("click", () => {
        toggler.classList.toggle("active");
        toggler.nextElementSibling.classList.toggle("active");
    });
});