const paragraphe = document.querySelector("#text p");

// récupérer toutes les pastilles de couleur
const pastilles = document.querySelectorAll('.color');

// si on a des pastilles, ajouter un listener sur chacune
pastilles.forEach(p => {
	p.addEventListener('click', (e) => {
		// lire la couleur de fond actuelle de la pastille
		const bg = getComputedStyle(e.currentTarget).backgroundColor;
		// appliquer comme couleur de texte du paragraphe
		if (paragraphe) paragraphe.style.color = bg;
	});
});








