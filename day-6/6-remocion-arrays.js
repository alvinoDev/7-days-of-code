const shoppingList = {
	frutas: [], lacteos: [], congelados: [], dulces: [], verduras: [], carnes: [], panaderia: [], bebidas: [],
};

function addItemToList() {
	const food = prompt('¿Qué alimento deseas agregar?').toLowerCase();
	let validCategory = false;

	while (!validCategory) {
		let category = prompt('¿Escribe una categoría de este alimento? (frutas, lacteos, congelados, dulces, verduras, carnes, panaderia, bebidas)').toLowerCase();

		if (shoppingList.hasOwnProperty(category)) {
			shoppingList[category].push(food);
			validCategory = true;
		} else {
			alert('Categoría no válida. Por favor, elige una de las opciones predefinidas.');
		}
	}
}

function deleteItemFromList() {
	let hasItems = false;
	for(const category in shoppingList) {
		if(shoppingList[category].length > 0) { hasItems = true; break; }
	}

	if(!hasItems) { alert('Tu lista de compras está vacía. No hay elementos para eliminar.'); return; }

	showFinalList();

	const foodToDelete = prompt('¿Qué alimento deseas eliminar?').toLowerCase();
	let itemFound = false;

	for(const category in shoppingList) {
		const index = shoppingList[category].indexOf(foodToDelete);
		if (index !== -1) {
			shoppingList[category].splice(index, 1);
			alert(`🗑️ ¡"${foodToDelete}" ha sido eliminado de la lista!`);
			itemFound = true;
			showFinalList();
			break;
		}
	}
	if (!itemFound) alert('¡No fue posible encontrar el elemento en la lista! 🧐');
}

function showFinalList() {
	let finalMessage = '📝 LISTA DE COMPRAS:\n -------------------------------\n';

	for (const category in shoppingList) {
		const itemsInCategory = shoppingList[category];
		if (itemsInCategory.length > 0) {
			const formattedList = itemsInCategory.join(', ');
			finalMessage += `✅ ${category.toUpperCase()}: ${formattedList}\n`;
		} else {
			finalMessage += `⚪ ${category.toUpperCase()}:\n`;
		}
	}
	alert(finalMessage);
}

/* =============== PROGRAMA PRINCIPAL =============== */
while (true) {
	let action = prompt("¿Qué deseas hacer?\n\n1. Agregar un alimento a tu lista de compras? (Escribe 'add' o 1)\n2. Eliminar un alimento de la lista de compras? (Escribe 'del' o 2)\n3. Ver la lista y salir. (Escribe 'exit' o 3)").toLowerCase();

	if (action === '1' || action === 'add') {
		addItemToList();
	} else if (action === '2' || action === 'del') {
		deleteItemFromList();
	} else if (action === '3' || action === 'exit') {
		showFinalList();
		break;
	} else {
		alert('Respuesta no válida. Por favor, elige una de las opciones.');
	}
}