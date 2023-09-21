// Vérifie si le nombre d'arguments est insuffisant
if (process.argv.length < 3) {
    console.error("Erreur : Vous devez fournir au moins un argument.");
    process.exit(1); // Quitte le programme avec un code d'erreur
}
  
  // Boucle à partir du dernier argument jusqu'au premier
for (let i = process.argv.length - 1; i >= 2; i--) {
    console.log(process.argv[i]);
}
  