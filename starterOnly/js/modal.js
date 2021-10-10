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
  // On récupère l'url dans le navigateur
  const url = window.location.href;
  // s'il contient &, donc soumission du formulaire, alors
  if(url.includes("&")){
  // affiche dans la console l'url
    console.log(url);
    //sépare la chaine de caractères avant et après ? et stock les dans dividePoint
      const divideByPoint = url.split('?');
    //affiche la chaine à droite de ?
      console.log(divideByPoint[1]);
      //sépare la chaine avant et après & et stocke dans dividebyAnd
      const dividebyAnd = divideByPoint[1].split('&');
      // si la première occurence n'est pas vide alors
      if(dividebyAnd[0] !== ''){
        // affiche dans la console le contenu
        console.log(dividebyAnd[0]);  
        // puis ouvre la notification pour dire à l'utilisateur qu'il a déjà envoyé le formulaire
        // cela empeche d'en renvoyer un autre au même moment
        openNotif();
      }else{
        // autrement fait apparaitre le sélecteur modal-btn
        modalbg.style.display = "block";
      }
  }else{
    modalbg.style.display = "block";
  }
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
const logo = document.querySelector(".logoImage");
logo.addEventListener("click", redirectHome);
function redirectHome(){
  window.location.href = "https://jsr029.github.io/RakotonirinaJeanSebastien_4_29072021/starterOnly/";
}

