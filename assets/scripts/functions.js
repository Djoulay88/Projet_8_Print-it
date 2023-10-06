// Ajout des EventListener sur les deux flèches
prevButton.addEventListener("click", () => { // Event sur la flèche gauche
    console.log("Le bouton Prev fonctionne")
});
nextButton.addEventListener("click", () => { // Event sur la flèche droite
    console.log("Le bouton Next fonctionne")
});

// Ajout des dots en bas de l'image
console.log("Le nombre d'éléments dans le tableau est : " + nbDots); // Contrôle du nombre de dots

for (let i = 0; i < nbDots; i++) { // Ajout d'un dot par slide dans le tableau
    let dot = document.createElement('span'); // Pour chaque point, création d'une balise "span"
    dot.classList.add('dot'); // Ajout de la class "dot" à chaque balise "span"
    dots.appendChild(dot); // Ajout de chaque balise "span" (dot) à l'élément conteneur
}

// Mise ne place d'une class spécifique sur le dot de la slide au chargement de page
function firstSlide (array) {
    for (let i = 0; i < nbDots; i++) {
        if (i === 0) { // Selection de l'index 0 du tableau
            let dotClass = document.querySelector('.dot') //Appel de la balise ayant la class ".dot"
            dotClass.classList.add('dot_selected'); // Ajout de la class ".dot_selected"
            dotClass.classList.remove('dot'); // Suppression de la class ".dot"
            console.log("Index à " + i) // Contrôle de l'index actif
        }
    }
}
firstSlide() // Appel de la fonction

