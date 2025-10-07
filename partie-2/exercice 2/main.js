// élément contenant le texte
const paragraphe = document.querySelector("#text");

// boutons (dans le HTML ce sont des id uniques, on utilise donc querySelector)
const btnAfficher = document.querySelector("#tag1");
const btnMasquer = document.querySelector("#tag2");

// fonction pour masquer le paragraphe
function masquerParagraphe(event) {
  event.preventDefault(); // empêche le saut d'ancre
  if (paragraphe) paragraphe.classList.add("hidden");
}

// fonction pour afficher le paragraphe (retire la classe .hidden)
function afficherParagraphe(event) {
  event.preventDefault();
  if (paragraphe) paragraphe.classList.remove("hidden");
}

// attacher les écouteurs si les boutons existent
if (btnMasquer) btnMasquer.addEventListener("click", masquerParagraphe);
if (btnAfficher) btnAfficher.addEventListener("click", afficherParagraphe);











