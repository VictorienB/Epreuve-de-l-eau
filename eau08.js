//Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.

// Vérifier si le nombre d'arguments est valide
if (process.argv.length !== 3) {
    console.error('Usage: node exo.js <chaîne de caractères>');
    process.exit(1);
}
  
// Récupérer la chaîne de caractères depuis les arguments de la ligne de commande
const inputString = process.argv[2];
  
// Fonction pour vérifier si une chaîne de caractères ne contient que des chiffres
function containsOnlyDigits(inputString) {
    return /^\d+$/.test(inputString);
}
  
// Appliquer la fonction et afficher le résultat
try {
    const isOnlyDigits = containsOnlyDigits(inputString);
    console.log(isOnlyDigits);
} catch (error) {
    console.error('error');
}
  

