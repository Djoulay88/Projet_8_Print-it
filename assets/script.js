const slides = [ // Tableau des images et leur légende
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// Etape 2 : on insert des écouteurs d'événements sur les 2 flèches
const prevButton = document.getElementById("prevButton");
    prevButton.addEventListener("click", function () {
    console.log("Le bouton fonctionne")
});

const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", function () {
    console.log("Le bouton fonctionne")
});

// Etape 3 : Création des dots en fonction du nombre de slides du carroussel

const bannerContainer = document.querySelector('.arrow'); //Sélection du conteneur de la bannière grâce à sa classe
const slidesContainer = bannerContainer.querySelector('.slides-container'); // Sélection du caroussel grâce à sa classe
const dotsContainer = bannerContainer.querySelector('.dots'); //Sélection de la div des dots grâce à sa classe

const nbDots = slides.length; // On calcule le nombre de dots nécéssaire depuis le tableau
console.log("Le nombre d'éléments dans le tableau est : " + nbDots);

for (let i = 0; i < nbDots; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
}

const allDots = dotsContainer.querySelectorAll('.dot'); //Selection de tous les dots
allDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;// Déplace le carrousel vers l'image correspondante
            setActiveDot(index); // Met en surbrillance le point actif
    });
});

function setActiveDot(index) {
    allDots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

setActiveDot(0); // Met en surbrillance le premier dot au chargement de la page

// Etape 4 : Ajout des slides dans le caroussel