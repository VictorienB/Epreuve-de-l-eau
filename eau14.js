// Créez un programme qui trie les éléments donnés en argument par ordre ASCII.

// Vérifier si le nombre d'arguments est valide (au moins deux arguments)
if (process.argv.length < 3) {
    console.error('Usage: node exo.js <élément1> <élément2> ...');
    process.exit(1);
}
  
// Récupérer les éléments depuis les arguments de la ligne de commande
const elements = process.argv.slice(2);
  
// Fonction pour trier les éléments par ordre ASCII
function sortElementsByASCII(elements) {
    return elements.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}
  
// Appliquer la fonction et afficher les éléments triés
try {
    const sortedElements = sortElementsByASCII(elements);
    console.log(sortedElements.join(' '));
} catch (error) {
    console.error('error');
}
