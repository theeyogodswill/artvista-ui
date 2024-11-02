let Create = document.getElementById("Create");
let creep = document.getElementById("creep");
let cloose = document.getElementById("cloose");
let keep = document.getElementById("keep")
Create.onclick = function () {
    if (creep.type == "password") {
        creep.type = "text";
        Create.src = "./Assests/Logos/Type=outline, Library=eye-slash.png";
    } else if (creep.type == "text") {
        creep.type = "password";
        Create.src = "./Assests/Logos/Type=outline, Library=eye-slash.png";
    }
}
cloose.onclick = function () {
    keep.value="";
}
let createAccount = document.getElementById("createAccount");
let email = document.forms["form"]["email"];


