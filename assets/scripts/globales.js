// Tableau de déclaration des slides et leur description
const slides = [
	{ // Index 0
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{ // Index 1
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{ // Index 2
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{ // Index 3
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration des variables :
const prevButton = document.getElementById("Prev") // Flèche gauche
const nextButton = document.getElementById("Next") // Flèche droite
const nbDots = slides.length // Nombre de dots nécéssaires
const dots = document.querySelector('.dots') // Déclaration de la class "dots" en tant que conteneur pour les span dont la class est "dot"
const allDots = document.querySelectorAll('.dot') //Selection de toutes les balises contenant la class ".dot"
const slide = document.getElementById("banner")
const imgSuppr = slide.querySelector("img"); // Déclaration de variable à supprimer
const pSuppr = slide.querySelector("p"); // Déclaration de variable à supprimer
