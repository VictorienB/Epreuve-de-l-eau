//Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.
// Vérifier si le nombre d'arguments est valide
if (process.argv.length !== 4) {
    console.error('Usage: node exo.js <nombre min> <nombre max>');
    process.exit(1);
}
  
// Récupérer les nombres min et max depuis les arguments de la ligne de commande
const min = parseInt(process.argv[2]);
const max = parseInt(process.argv[3]);
  
// Vérifier si les arguments sont des nombres valides
if (isNaN(min) || isNaN(max)) {
    console.error('error');
    process.exit(1);
}
  
// Fonction pour afficher les valeurs entre min et max
function printValuesBetween(min, max) {
    let minSuite =min;
    let maxSuite =max;
    if (max < min) {
        minSuite = max;
        maxSuite = min;
    }
    for (let i = minSuite; i < maxSuite; i++) {
      process.stdout.write(i + ' ');
    }
    process.stdout.write('\n');
}
  
// Appliquer la fonction et afficher les valeurs
try {
    printValuesBetween(min, max);
} catch (error) {
    console.error('error');
}
  