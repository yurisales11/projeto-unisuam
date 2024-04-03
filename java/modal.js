const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const botao = document.querySelector(".btnmodal")

const toggleModal = () => {
    [modal,fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade, botao].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
;})