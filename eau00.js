

// Showing results
function isGoodNumber(number) {
    // Vérifiez que les chiffres sont en ordre croissant
    if (number[0] >= number[1] || number[1] >= number[2]) {
      return false;
    }
  
    // Vérifiez que les chiffres sont tous différents
    if (number[0] === number[1] || number[1] === number[2] || number[0] === number[2]) {
      return false;
    }
  
    return true;
}
  
let numbers = [];
  
for (let centaines = 0; centaines <= 9; centaines++) {
    for (let dizaines = 0; dizaines <= 9; dizaines++) {
      for (let unites = 0; unites <= 9; unites++) {
        const number = `${centaines}${dizaines}${unites}`;
        if (isGoodNumber(number)) {
          numbers.push(number);
        }
      }
    }
}
  
console.log(numbers.join(', '));
  
