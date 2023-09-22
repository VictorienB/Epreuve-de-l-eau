// Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.
// Vérifier si le nombre d'arguments est valide (au moins deux arguments)
if (process.argv.length < 3) {
    console.error('Usage: node exo.js <nombre1> <nombre2> ...');
    process.exit(1);
}
  
// Récupérer les nombres depuis les arguments de la ligne de commande
const numbers = process.argv.slice(2).map(Number);
  
// Vérifier si les arguments sont des nombres valides
if (numbers.some(isNaN)) {
    console.error('error');
    process.exit(1);
}
  
// Fonction pour trouver la différence minimum absolue entre deux éléments du tableau
function findMinAbsoluteDifference(arr) {
    if (arr.length < 2) {
      return 0; // Pas de différence à calculer avec moins de deux éléments
    }
  
    // Trier le tableau en ordre croissant
    arr.sort((a, b) => a - b);
  
    let minDifference = Math.abs(arr[1] - arr[0]);
  
    for (let i = 2; i < arr.length; i++) {
      const currentDifference = Math.abs(arr[i] - arr[i - 1]);
      if (currentDifference < minDifference) {
        minDifference = currentDifference;
      }
    }
  
    return minDifference;
}
  
// Appliquer la fonction et afficher le résultat
try {
    const minAbsoluteDifference = findMinAbsoluteDifference(numbers);
    console.log(minAbsoluteDifference);
} catch (error) {
    console.error('error');
}
  