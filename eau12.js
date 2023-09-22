//Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle.
function myBubbleSort(array) {
    // Vérifier si l'entrée est un tableau de nombres
    if (!Array.isArray(array) || !array.every(element => typeof element === 'number')) {
      throw new Error('Les éléments de la liste doivent être des nombres.');
    }
  
    const n = array.length;
    let swapped;
  
    do {
      swapped = false;
  
      for (let i = 0; i < n - 1; i++) {
        if (array[i] > array[i + 1]) {
          // Échanger les éléments si ils sont dans le mauvais ordre
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          swapped = true;
        }
      }
    } while (swapped);
  
    return array;
}
  
// Vérifier si le nombre d'arguments est valide (au moins deux arguments)
if (process.argv.length < 3) {
    console.error('Usage: node exo.js <nombre1> <nombre2> ...');
    process.exit(1);
  }
  
try {
    // Convertir les arguments en une liste de nombres
    const numbers = process.argv.slice(2).map(Number);
    const sortedNumbers = myBubbleSort(numbers);
    console.log(sortedNumbers.join(' '));
} catch (error) {
    console.error('error');
}
  