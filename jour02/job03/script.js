const button = document.getElementById("button");
const compteur = document.getElementById("compteur");
let count = 0;
function addOne() {
    count++;
    compteur.textContent = count;
}
button.addEventListener("click", addOne);
