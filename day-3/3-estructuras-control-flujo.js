let area = ''; // "frontEnd" o "backEnd"
let framework = ''; // "react" o "vue" (frontEnd)
let language = ''; // "csharp" o "java" (backEnd)
let careerPath = ''; // "specialization" o "fullstack"
let wantsMoreTech = true; // true o false
let technology = ''; // tecnología extra
let technologies = []; // lista de tecnologías extras

alert("Bienvenido al juego de las areas de especializacion!");
area = prompt(
	"¿Quieres seguir el camino de Front-End o Back-End? Escribe 'Front-End' o 'Back-End'."
);

area = area.toLowerCase();

if (area === "front-end") {
	framework = prompt("Has elegido Front-End. ¿Quieres aprender React o Vue? Escribe 'React' o 'Vue'.");
	framework = framework.toLowerCase();

	if (framework === "react") {
		alert("Excelente! React es una excelente opción para el desarrollo de UI.");
	} else if (framework === 'vue') {
		alert("Excelente! Vue es conocido por tener la curva de aprendizaje mas fácil de aprender y muy flexible.");
	} else {
		alert("No existe esa opción. ¡Pero sigue explorando el desarrollo web!");
	}
} else if (area === "back-end") {
	language = prompt("Has elegido Back-End. ¿Quieres aprender C# o Java? Escribe 'C#' o 'Java'.");
	language = language.toLowerCase();

	if (language === "c#") {
		alert("¡Genial! C# es muy popular para aplicaciones de escritorio y desarrollo de juegos con Unity.");
	} else if (language === "java") {
		alert("¡Genial! Java es ideal para aplicaciones empresariales a gran escala.");
	} else {
		alert("No existe esa opción. ¡Pero sigue explorando el desarrollo de software!");
	}
}

careerPath = prompt("Ahora, ¿Quieres seguir especializándote en tu área actual o desarrollarte como Fullstack? Escribe 'Especializar' o 'Fullstack'.");
careerPath = careerPath.toLowerCase();

if (careerPath === "especializar") {
	alert("¡Genial! Especializarte te hará un experto en un campo específico.");
} else if (careerPath === 'fullstack') {
	alert("¡Genial! Ser Fullstack te abrirá muchas puertas, ya que serás capaz de desarrollar tanto el Front-End como el Back-End.");
} else {
	alert("Tu elección no fue válida. ¡Pero recuerda que la clave es la pasión por aprender!");
}

while (wantsMoreTech) {
	technology = prompt("¿Qué otra tecnología te gustaría aprender? Si no quieres agregar más, escribe 'no'.");
	technology = technology.toLowerCase();

	if (technology === "no") {
		wantsMoreTech = false;
		alert("¡Genial! Mucho éxito en tu camino de aprendizaje. ¡Hasta pronto! 👋");
		break;
	} else {
		alert(`¡Qué bien! Aprender sobre ${technology} es un gran paso. ¡El mundo de la tecnología está lleno de oportunidades!`);

        technologies.push(technology);

		technology = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' para continuar o 'no' para terminar.");
		technology = technology.toLowerCase();

		if (technology !== "ok") wantsMoreTech = false;
	}
}

alert(`¡Genial! Has elegido aprender ${technologies.join(', ')}. ¡Tu camino de aprendizaje comienza! 👋`);
