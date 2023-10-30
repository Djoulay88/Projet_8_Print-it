// Vérification chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
    console.log("HTML chargé");
    addEvent();
});

// Ajout des EventListener sur les deux flèches
function addEvent() {
    prevButton.addEventListener("click", () => { // Event sur la flèche gauche
        console.log("Le bouton Prev fonctionne");
        prevSlide();
    });
    nextButton.addEventListener("click", () => { // Event sur la flèche droite
        console.log("Le bouton Next fonctionne");
        nextSlide();
    });
}

console.log("Le nombre d'éléments dans le tableau est : " + nbDots); // Contrôle du nombre de dots

// Ajout des dots en bas de l'image
function addDots() {
    for (let i = 0; i < nbDots; i++) { // Ajout d'un dot par slide dans le tableau
        let dot = document.createElement('span'); // Pour chaque point, création d'une balise "span"
        dot.classList.add('dot'); // Ajout de la class "dot" à chaque balise "span"
        dot.id = "dot " + (i + 1)
        dots.appendChild(dot); // Ajout de chaque balise "span" (dot) à l'élément conteneur
    }
    if (nbDots > 0) { // Activation du 1er dot au chargement du DOM
        const firstDot = document.querySelector('.dot');
        firstDot.classList.add('dot_selected');
    }    
}
addDots()

function changeDot() { // Mise à jour de l'activation de la classe "dot_selected" selon la slide active
    const allDots = document.querySelectorAll('.dot');
    allDots.forEach((dot, i) => {
        if (i === slideIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}
changeDot()

// Suppression de la slide déjà presente et création de la structure des slides en fonction de l'index
function createSlide (i) {
    let HTML = `
        <img id="img" src="${slides[i].image}" alt="Image ${i + 1}" class="banner-img">
        <p id="p">${slides[i].tagLine}</p>
        `;
    console.log("slide ajoutée");
    slide.innerHTML = HTML // Ajout du nouveau contenu HTML
}

function prevSlide() {
    slideIndex--; // Décrémentation de 1 de la valeur de l'index
    if (slideIndex < 0) {
        slideIndex = nbDots - 1; // Retour à l'index 3 si l'index était à 0
    }
    createSlide(slideIndex);
    changeDot();
}

function nextSlide() {
    slideIndex++; // Incrémentation de 1 de la valeur de l'index
    if (slideIndex >= nbDots) {
        slideIndex = 0; // Retour à l'index 0 si l'index était à 3
    }
    createSlide(slideIndex);
    changeDot();
}
