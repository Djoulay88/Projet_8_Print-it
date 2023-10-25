// Vérification chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
    console.log("HTML chargé");
});

// Ajout des EventListener sur les deux flèches
prevButton.addEventListener("click", () => { // Event sur la flèche gauche
    console.log("Le bouton Prev fonctionne")
});
nextButton.addEventListener("click", () => { // Event sur la flèche droite
    console.log("Le bouton Next fonctionne")
});

// Ajout des dots en bas de l'image
console.log("Le nombre d'éléments dans le tableau est : " + nbDots); // Contrôle du nombre de dots

function add_dots() {
    for (let i = 0; i < nbDots; i++) { // Ajout d'un dot par slide dans le tableau
        let dot = document.createElement('span'); // Pour chaque point, création d'une balise "span"
        dot.classList.add('dot'); // Ajout de la class "dot" à chaque balise "span"
        dot.id = "dot " + (i + 1)
        dots.appendChild(dot); // Ajout de chaque balise "span" (dot) à l'élément conteneur
        dot.addEventListener("click", () => { // Ajout d'un event listener sur chaque dot
            console.log("Index à " + i); // Contrôle de l'index actif
            dot.classList.add('dot_selected'); // Activation de la class "dot-selected"
            const allDots = document.querySelectorAll('.dot');
            allDots.forEach(otherDot => { 
                if (otherDot !== dot) { // Désactivation de la class "dot_selected" des autres dots
                    otherDot.classList.remove('dot_selected');
                }
            });
            //createSlide (i);
        });
        if (i === 0) { // Activation du 1er dot au chargement du DOM
            dot.classList.add('dot_selected');
        }
    }
}
add_dots()

// Suppression de la slide déjà presente et création de la structure des slides en fonction de l'index
function createSlide (i) {
    if (imgSuppr) { 
        imgSuppr.remove();
    }
    if (pSuppr) {
        pSuppr.remove();
    }
    slide.innerHTML += `<img src="${slides[i].image}" alt="Image ${i + 1}" class="banner-img"><p>${slides[i].tagLine}</p>`;
}