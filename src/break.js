
// Déclare un tableau vide appelé 'numbers' pour stocker des nombres aléatoires
const numbers = [];

// Première boucle 'for' : Cette boucle va exécuter son contenu 10 fois (de i = 0 à i < 10)
for (let i = 0; i < 10; i++) {
    // Math.random() génère un nombre aléatoire entre 0 et 1 (exclusif)
    // Math.random() * 100 génère un nombre flottant entre 0 et 100
    // Math.floor() arrondit ce nombre flottant à l'entier inférieur
    // Le nombre aléatoire ainsi obtenu est ajouté au tableau 'numbers' avec la méthode .push()
    numbers.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}