var Turn = function(x, y){
    x = document.querySelector(y);
    x.onblur = show;
    function show(){
        if(isValidText(x.value) === true){
            console.log(x.value);
            if(x == nom){
                x.style.border = "none";
                document.querySelector(".error-messageN").innerHTML="";
            }
            if(x == prenom){
                x.style.border = "none";
                document.querySelector(".error-message").innerHTML="";
            }
        }else{
            if(x == nom){
                x.style.border = "1px solid red";
                document.querySelector(".error-messageN").innerHTML="Mot alphhabétique de 2 à 40 caractères";
            }
            if(x == prenom){
                    x.style.border = "1px solid red";
                    document.querySelector(".error-message").innerHTML="Mot alphhabétique de 2 à 40 caractères";
                }    
            }
}
    function isValidText(str){
        let regexText =  /^([a-zA-Z-_ ]){2,40}$/;
        if(regexText.test(str) === true){
            return true;
        }else{
            return false;
        }
    }
};
let a = new Turn(nom, "#nom");
let b = new Turn(prenom, "#prenom");
console.log(a, b);
/*
let nom = document.querySelector("#nom");
nom.onblur = showValue;
function showValue(){
    return isValidText(nom.value);
}
function isValidText(str){
    let regexText =  /^([a-zA-Z-_ ]){2,40}$/;
    if(regexText.test(str) === true){
        return true;
    }else{
        nom.style.border = "1px solid red";
        document.querySelector(".error-messageN").innerHTML="Mot alphhabétique de 2 à 40 caractères";
        return false;
    }
}*/
const form = document.querySelector("#formulaire");
form.addEventListener("submit", function (evenement) {
    evenement.preventDefault();
    if (a.nom === true) {
        console.log(a.nom);
            console.log("OK, sent");
        }else{
            console.log("try again !");
        }
});