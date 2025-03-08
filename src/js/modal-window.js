import axios from 'axios';
import swiper from 'swiper';
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

function openModal() {
    modal.classList.add("active");
    document.body.classList.add("modal-open");
}

function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
   if (event.target === closeModalBtn) {
    closeModal();
   }
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) =>  {
    if (event.key === "Escape") {
        closeModal();
    }
});

