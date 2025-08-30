let name = '';
let age = 0;
let languageStudying = '';
let likeStudying = 0;

name = prompt('¿Cual es tu nombre?');
age = parseInt( prompt('¿Cuanto tienes?') );
languageStudying = prompt('¿Que lenguaje de programacion estudias?');

alert(`"Hola ${name}, tienes ${age} años y ya estás aprendiendo ${languageStudying}!"`);

while (likeStudying < 1 || likeStudying > 2) {
    likeStudying = parseInt( prompt(`¿Te gusta estudiar ${languageStudying}? Responde con el numero 1 para SI o 2 para NO.`) );
}

if (likeStudying === 1) {
    alert('¡Muy bien! Sigue estudiando y tendrás mucho exito.');
} else {
    alert('Oh, que pena... ¿Ya intentaste aprender otros lenguajes?');
}