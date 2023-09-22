// Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.
function mySelectSort(array) {
    // Vérifier si l'entrée est un tableau de nombres
    if (!Array.isArray(array) || !array.every(element => typeof element === 'number')) {
      throw new Error('Les éléments de la liste doivent être des nombres.');
    }
  
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        // Échanger les éléments si nécessaire
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
  
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
    const sortedNumbers = mySelectSort(numbers);
    console.log(sortedNumbers.join(' '));
} catch (error) {
    console.error('error');
}
  