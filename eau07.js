//Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.
// Vérifier si le nombre d'arguments est valide
if (process.argv.length !== 3) {
    console.error('Usage: node exo.js <chaîne de caractères>');
    process.exit(1);
}
  
// Récupérer la chaîne de caractères depuis les arguments de la ligne de commande
const inputString = process.argv[2];
  
// Fonction pour mettre en majuscule la première lettre de chaque mot
function capitalizeWords(inputString) {
    const words = inputString.split(/\s+/); // Diviser la chaîne en mots
    const capitalizedWords = words.map((word) => {
      if (word.length > 0) {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();
        return firstLetter + restOfWord;
      } else {
        return word; // Pour les mots vides (ex: espaces consécutifs)
      }
    });
    return capitalizedWords.join(' '); // Rejoindre les mots en une seule chaîne
}
  
// Appliquer la fonction et afficher le résultat
try {
    const outputString = capitalizeWords(inputString);
    console.log(outputString);
} catch (error) {
    console.error('error');
}
