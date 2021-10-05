/**LE FORMULAIRE */
let b_nom = false; let b_prenom = false; let b_naissance = false; let b_nbreTournoi = false;
let b_chkBx = false; let b_email = false; let b_location = false;
/** 1. Récupérer les valeurs entrées
 *  2. Vérifier leurs conformités
 *  3. Si vaalide,  envoi du formulaire, sinon retour à la saisie
 */
/** Nom */
/** On cible l'élément html id nom */
const nom = document.querySelector("#nom");
/** à la sortie du champ, afficher le nom dans la console */
nom.onblur = afficherNom;
/**Fonction afficher str s'il est valide */
function afficherNom() {
    console.log(isValidNom(nom.value));
}
/** Fonction vérifiant la validité du nom par les règles du regexNom, alphabetic entre 3 et 40 characters */
function isValidNom(str) {
    var regexNom = /^([a-zA-Z ]){4,40}$/;
    if (regexNom.test(str) === true) {
        nom.style.border = "2px solid green";
        b_nom = true;
        return str;
    } else {
        nom.style.border = "2px solid red";
        b_nom = false;
        return false;
    }
}
/** Fin de Nom */
/** Prenom */
/** On cible l'élément html id Prenom */
const prenom = document.querySelector("#prenom");
const errorMessage = document.querySelector(".error-message");
/** à la sortie du champ, afficher le Prenom dans la console */
prenom.onblur = afficherPrenom;
/**Fonction afficher str s'il est valide */
function afficherPrenom() {
    return isValidPrenom(prenom.value);
}
/** Fonction vérifiant la validité du Prenom par les règles du regexPrenom, alphabetic entre 3 et 40 characters */
function isValidPrenom(str) {
    var regexPrenom = /^([a-zA-Z -_]){4,40}$/;
    if (regexPrenom.test(str) === true) {
        errorMessage.style.display = "none";
        prenom.style.border = "2px solid green";
        b_prenom = true;
        console.log(str);
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Le prénom doit comporter entre 4 et 40 characters alphabetics";
        prenom.style.border = "2px solid red";
        b_prenom = false;
    }
}
/** Fin de Prenom */
/** Email */
/** On cible l'élément html id Email */
const email = document.querySelector("#email");
/** à la sortie du champ, afficher le Prenom dans la console */
email.onblur = afficherEmail;
/**Fonction afficher str s'il est valide */
function afficherEmail() {
    console.log(isValidEmail(email.value));
}
/** Fonction vérifiant la validité du Prenom par les règles du regexPrenom, alphabetic entre 3 et 40 characters */
function isValidEmail(str) {
    var regexEmail = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
    if (regexEmail.test(str) === true) {
        email.style.border = "2px solid green";
        b_email = true;
        return str;
    } else {
        email.style.border = "2px solid red";
        b_email = false;
        return false;
    }
}
/** Fin de Email */
/** Date de naissance */
/** On cible l'élément html id naissance */
const naissance = document.querySelector("#naissance");
/** à la sortie du champ, afficher le Prenom dans la console */
naissance.onblur = afficherNaissance;
/**Fonction afficher str s'il est valide */
function afficherNaissance() {
    if (isValidNaissance(naissance.value)) {
        b_naissance = true;
        console.log("date de naissance : " + naissance.value);
    } else {
        b_naissance = false;
    }
}
/** Fonction vérifiant la validité du Prenom par les règles du regexPrenom, alphabetic entre 3 et 40 characters */
function isValidNaissance(str) {
    var regexNaissance = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g;
    if (regexNaissance.test(str) === true) {
        naissance.style.border = "2px solid green";
        return str;
    } else {
        naissance.style.border = "2px solid red";
        return false;
    }
}
/** Fin de Naissance */
/** nbreTournoi */
/** On cible l'élément html input qui a pour id nbreTournoi */
const nbreTournoi = document.querySelector("#nbreTournoi");
/** à la sortie du champ, afficher le nbre de tournoi dans la console */
nbreTournoi.onblur = afficherNbreTournoi;
/**Fonction afficher str s'il est valide */
function afficherNbreTournoi() {
    if (isValidNbreTournoi(nbreTournoi.value)) {
        b_nbreTournoi = true;
        console.log("nbre de tournoi : " + nbreTournoi.value);
    } else {
        b_nbreTournoi = false;
    }
}
/** Fonction vérifiant la validité du nbreTournoi par les règles du regexNbreTournoi, numeric entre 0 et 99, 2 characters max */
function isValidNbreTournoi(str) {
    var regexNbreTournoi = /^([0-9]){1,2}$/;
    if (regexNbreTournoi.test(str) === true) {
        nbreTournoi.style.border = "2px solid green";
        return str;
    } else {
        nbreTournoi.style.border = "2px solid red";
        return false;
    }
}
/** Fin de Fin de NbreTournoi */

/** Ville */
/** On cible l'élément html input qui a pour id location1 etc */
const loc = document.querySelectorAll("[id^=location]");
/**Ecouter évènement clic sur chaque id location, renvoie vers fonction loca */
loc.forEach((rd) => rd.addEventListener("click", loca));
function loca() {
    for (let j = 0; j < 6; j++) {
        if (loc[j].checked === true) {
            b_location = true;
            console.log(loc[j].value);
        }
    }
}
/** Fin de Fin de ville */
/** cgu et newsletters*/
var chk = document.querySelectorAll("[id^=checkbox]");
chk.onblur = chkbx;
function chkbx() {
    chk[0].defaultChecked = true;
    if (chk[0].checked === true && chk[1].checked === true || chk[1].checked === false) {
        b_chkBx = true;
        console.log("Agreements : " + chk[0].value);
        console.log("Newsletters : " + chk[1].value);
        return chk[0].checked;
    } else {
        b_chkBx = false;
        chk[0].value = "No";
        chk[1].value = "No";
        console.log("Agreements : " + chk[0].value);
        console.log("Newsletters : " + chk[1].value);
    }
}
/**Fin cgu et newsletters */
/**Envoi de la notification */
const notif = document.querySelector(".sendForm");
function openNotif() {
    notif.style.display = "block";
}
function closeNotif() {
    notif.style.display = "none";
    form.reset();
}
/**
 * Fin Notification
 */
/** Envoi formulaire par la fermeture de la notification */
const envoi = document.querySelector(".btn-send");
envoi.addEventListener("click", sendForm);
function sendForm(){
    form.submit();
    form.reset();
}
const form = document.querySelector("#formulaire");
form.addEventListener("submit", function (evenement) {
    evenement.preventDefault();
    if (chk[0].checked === true && b_email === true && b_location === true &&
        b_naissance === true && b_nbreTournoi === true && b_nom === true && b_prenom === true) {
        console.log("OK, sent");
        // true or false
        //si le formulaire est valide 
        // - fermer le modal display none
        closeModal();
        //Envoi du form
        //form.submit();
        // - ouvrir la notification d'envoi
        openNotif();
        //vider le formulaire
        //form.reset();
    } else {
        console.log("Not sent");
    }
    console.log(b_prenom);
    console.log(b_nom);
    console.log(b_email);
    console.log(b_naissance);
    console.log(b_location);/**pb */
    console.log(b_nbreTournoi);
    console.log(chk[0].checked);
    console.log(chk[1].checked);
});