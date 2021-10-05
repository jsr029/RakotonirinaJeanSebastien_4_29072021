function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalClose = document.querySelector(".close");
const modalSend = document.querySelector(".sendForm");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// listen click event on bground selector
modalClose.addEventListener("click", closeModal);
// listen click event on sendForm selector
modalSend.addEventListener("click", closeModalSend);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// close modal form send
function closeModalSend() {
  modalSend.style.display = "none";
  form.reset();
}


