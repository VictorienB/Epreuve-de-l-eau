// Vérifie si le nombre d'arguments est insuffisant
if (process.argv.length !== 3) {
    console.error("Erreur : Vous devez fournir un seul argument (nombre donné).");
    process.exit(1); // Quitte le programme avec un code d'erreur
}
  
// Récupère le nombre donné en argument depuis la ligne de commande
const nombreDonne = parseInt(process.argv[2]);
  
// Vérifie si l'argument est un nombre positif
if (isNaN(nombreDonne) || nombreDonne < 0) {
  console.error("Erreur : L'argument doit être un nombre positif.");
   process.exit(1); // Quitte le programme avec un code d'erreur
}
  
// Fonction pour vérifier si un nombre est premier
function estNombrePremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;
  
    if (nombre % 2 === 0 || nombre % 3 === 0) return false;
  
    for (let i = 5; i * i <= nombre; i += 6) {
      if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
    }
  
    return true;
}
  
// Fonction pour trouver le premier nombre premier supérieur à un nombre donné
function premierNombrePremierSuperieur(nombreDonne) {
    let nombre = nombreDonne + 1;
    while (true) {
      if (estNombrePremier(nombre)) return nombre;
      nombre++;
    }
}
  
// Calcul et affichage du premier nombre premier supérieur
const resultat = premierNombrePremierSuperieur(nombreDonne);
console.log(resultat);
  