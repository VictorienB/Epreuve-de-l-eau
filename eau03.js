// Vérifie si le nombre d'arguments est insuffisant
if (process.argv.length !== 3) {
    console.error("Erreur : Vous devez fournir un seul argument (N-ème élément de Fibonacci).");
    process.exit(1); // Quitte le programme avec un code d'erreur
}
  
// Récupère le N-ème élément de Fibonacci à partir de l'argument en ligne de commande
const n = parseInt(process.argv[2]);
  
// Vérifie si l'argument est un nombre positif
if (isNaN(n) || n < 0) {
    console.error("Erreur : L'argument doit être un nombre positif.");
    process.exit(1); // Quitte le programme avec un code d'erreur
}
  
// Fonction pour calculer le N-ème élément de Fibonacci
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
}
  
// Calcul et affichage du N-ème élément de Fibonacci
const resultat = fibonacci(n);
console.log(resultat);
  