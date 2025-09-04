function add(num1, num2) {
	return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "¡No se puede dividir por cero!";
  }
  return num1 / num2;
}

/* =============== PROGRAMA PRINCIPAL =============== */
function calculator() {
	let operation, num1, num2, result;

	while(true){
		operation = prompt("🔢 ELIGE UNA OPERACIÓN:\n -------------------------------\n ➕ 1. Suma\n ➖ 2. Resta\n ✖️ 3. Multiplicación\n ➗ 4. División\n ❌ 5. Salir");

		operation = parseInt(operation);

		if (operation === 5) {
			alert("¡Hasta la próxima!");
			break;
		}

		if (operation < 1 || operation > 4) {
			alert("Opción no válida. Por favor, elige un número del 1 al 5.");
			continue;
		}

		num1 = parseFloat(prompt("Ingresa el primer número:")); 
    	num2 = parseFloat(prompt("Ingresa el segundo número:"));

		if (isNaN(num1) || isNaN(num2)) {
			alert("Por favor, ingresa solo números.");
			continue;
		}

		switch (operation) {
			case 1:
				result = add(num1, num2);
				break;
			case 2:
				result = subtract(num1, num2);
				break;
			case 3:
				result = multiply(num1, num2);
				break;
			case 4:
				result = divide(num1, num2);
				break;
		}

		alert(`El resultado es: ${result}`);
	}
}

// Iniciar la calculadora
calculator();