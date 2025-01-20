function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheitConverter(celsiusTemperatue) {
  return celsiusTemperatue * (9 / 5) + 32;
}

module.exports = { generateRandomNumber, celciusToFahrenheitConverter };
