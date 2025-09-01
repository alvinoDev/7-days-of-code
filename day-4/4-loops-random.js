const secretNumber = Math.floor(Math.random() * 11); // Math.floor(Math.random() * (10 - 0 + 1) + 0)
let userGuess = 0;
let attempts = 3; // Número de intentos

alert("Bienvenido al juego de adivinar el número!");

for(let i = 0; i < attempts; i++) {
    userGuess = parseInt(prompt(`Intento ${i + 1} de ${attempts}. Adivina el número entre 0 y 10.`));
    if(isNaN(userGuess)) {
        alert("Ese no es un número válido. Por favor, introduce un número.");
        continue;
    }

    if(userGuess === secretNumber) {
        alert(`¡Felicitaciones! Adivinaste el número en ${i + 1} intentos.`);
        break;
    }
    
    if(i === attempts - 1) {
        alert(`Lo siento, has agotado tus intentos. El número era ${secretNumber}.`);
        break;
    }
    
    if(userGuess < secretNumber) {
        alert("El número que buscas es mayor.");
    } else {
        alert("El número que buscas es menor.");
    }
}