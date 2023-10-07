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
    dot.id = i
    dots.appendChild(dot); // Ajout de chaque balise "span" (dot) à l'élément conteneur
    dot.addEventListener("click", () => { // Ajout d'un event listener sur chaque dot
        createSlide(i);
        console.log("Index à " + i); // Contrôle de l'index actif
    });
}

// Ajout de la fonction qui va créer chaque slide au clic
function createSlide(i) {
    if (imgSuppr) {
        imgSuppr.remove();
    }
    if (pSuppr) {
        pSuppr.remove();
    }
    slide.innerHTML += `<img src="${slides[i].image}" alt="Slide ${i + 1}" class="banner-img"><p>${slides[i].tagLine}</p>`;
    console.log("dot cliqué n°" + (i + 1)); // Affiche un message dans la console indiquant quel dot a été cliqué
    allDots.forEach(dot => { //Supprime la class ".dot_selected" de toutes les slides
        dot.classList.remove('dot_selected');
    });
    const activeDot = document.getElementById(i);// Ajoute la classe .dot_selected uniquement au dot correspondant à la slide active
    activeDot.classList.add('dot_selected');
}

