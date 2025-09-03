const shoppingList = {
	frutas: [],
	lacteos: [],
	congelados: [],
	dulces: [],
	verduras: [],
	carnes: [],
	panaderia: [],
	bebidas: [],
};

let addItem = '';
let food = '';
let category = '';
let finalMessage = '';

while (true) {
	addItem = prompt('¿Deseas agregar un alimento a tu lista de compras? Escribe "si" o "no"').toLowerCase();

	if (addItem === 'no') break;

	if (addItem !== 'si') {
		alert('Respuesta no válida. Por favor, responde con "si" o "no".');
		continue;
	}

	food = prompt('¿Qué alimento deseas agregar?').toLowerCase();
    
    let validCategory = false;
	while (!validCategory) {
		category = prompt('¿Escribe una categoría de este alimento? (frutas, lacteos, congelados, dulces, verduras, carnes, panaderia, bebidas)').toLowerCase();

		// Verifica si la categoría ingresada es una CLAVE del objeto shoppingList
		if (shoppingList.hasOwnProperty(category)) {
			shoppingList[category].push(food);
			validCategory = true;
		} else {
			alert('Categoría no válida. Por favor, elige una de las opciones predefinidas.');
		}
	}
}

finalMessage = 'LISTA DE COMPRAS:\n -------------------------\n';

// Utiliza un ciclo for...in para recorrer el objeto shoppingList, obteniendo las claves (categorías) y los valores (listas de alimentos)
for (const category in shoppingList) {
  const itemsInCategory = shoppingList[category];
  
  if (itemsInCategory.length > 0) {
    const formattedList = itemsInCategory.join(', ');
    finalMessage += `${category}: ${formattedList}\n`;
  } else {
    finalMessage += `${category}:\n`;
  }
}

alert(finalMessage);