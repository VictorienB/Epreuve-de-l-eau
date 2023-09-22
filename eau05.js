// Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.
// Vérifier si le nombre d'arguments est valide
if (process.argv.length !== 4) {
    console.error('Usage: node eau05.js <chaîne dans laquelle chercher> <chaîne à chercher>');
    process.exit(1);
}
  
// Récupérer les arguments
const searchString = process.argv[3];
const targetString = process.argv[2];
  
// Vérifier si la chaîne à chercher se trouve dans la chaîne cible
const isSubstring = targetString.includes(searchString);
  
// Afficher le résultat
console.log(isSubstring);
