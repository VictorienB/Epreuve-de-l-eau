function padNumber(number) {
    // Cette fonction ajoute un zéro en tête si le nombre est inférieur à 10
    return number < 10 ? `0${number}` : `${number}`;
}
  
let combinaisons = [];
  
for (let premierNombre = 0; premierNombre <= 99; premierNombre++) {
    for (let deuxiemeNombre = premierNombre + 1; deuxiemeNombre <= 99; deuxiemeNombre++) {
      const combinaison = `${padNumber(premierNombre)} ${padNumber(deuxiemeNombre)}`;
      combinaisons.push(combinaison);
    }
}
  
console.log(combinaisons.join(', '));
  