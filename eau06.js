//Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.
// Vérifier si le nombre d'arguments est valide
if (process.argv.length !== 3) {
    console.error('Usage: node exo.js <chaîne de caractères>');
    process.exit(1);
}
  
// Récupérer la chaîne de caractères depuis les arguments de la ligne de commande
const inputString = process.argv[2];
  
// Fonction pour mettre en majuscule une lettre sur deux
function alternateCase(inputString) {
    let result = '';
    let upper = true; // Commencer par une majuscule
    for (const char of inputString) {
      if (/[a-zA-Z]/.test(char)) {
        if (upper) {
          result += char.toUpperCase();
        } else {
          result += char.toLowerCase();
        }
        upper = !upper;
      } else {
        result += char;
      }
    }
    return result;
}
  
// Appliquer la fonction et afficher le résultat
try {
    const outputString = alternateCase(inputString);
    console.log(outputString);
} catch (error) {
    console.error('error');
}
