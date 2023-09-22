// Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.
// Vérifier si le nombre d'arguments est valide (au moins deux arguments)
if (process.argv.length < 3) {
    console.error('Usage: node exo.js <élément1> <élément2> ... <élément à rechercher>');
    process.exit(1);
}
  
// Récupérer les éléments du tableau (tous les arguments sauf le dernier)
const elements = process.argv.slice(2, -1);
  
// Récupérer l'élément à rechercher (le dernier argument)
const searchElement = process.argv[process.argv.length - 1];
  
// Fonction pour rechercher l'élément dans le tableau
function findIndex(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        return i;
      }
    }
    return -1; // Retourne -1 si l'élément n'est pas trouvé
}
  
// Appliquer la fonction et afficher le résultat
try {
    const index = findIndex(elements, searchElement);
    console.log(index);
} catch (error) {
    console.error('error');
}
  