function toggleMenu() {
    document.querySelector(".burger_icon").classList.toggle("change");
    document.querySelector("#burger_menu").classList.toggle("show");
}

document.querySelector(".burger_icon").addEventListener("click", toggleMenu);
document.querySelector("#burger_menu").addEventListener("click", toggleMenu);
