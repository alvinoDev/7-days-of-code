# #7DaysOfCode - Lógica JS 5/7: Arrays y colecciones

¿Sabes cuando vas al supermercado con una lista de compras y terminas yendo y volviendo por los mismos pasillos hasta completar la lista?

Necesitas una manzana y vas al área de frutas. El siguiente ítem es una leche y te diriges a los lácteos. Pero luego anotaste una pera, y necesitas regresar de nuevo al área de frutas.

¡Después de resolver el desafío de hoy, con certeza no harás más eso!

Al igual que nuestra lista de compras, es muy común que los programas trabajen con listas de string, números y objetos.

Piensa en cada catálogo de e-commerce que has visto, en la lista de eventos de tu Google Calendar, o incluso en tu bandeja de entrada de correos electrónicos. Todos estos sitios utilizan listas para mostrar información de una manera simple y fácil de entender.

Además, puedes aprovechar las listas para hacer filtros, ordenaciones y otras funcionalidades muy útiles.

En este punto, ya debes haber notado que trabajar con estas colecciones es algo que necesitarás dominar, ¿verdad?

## Descripción del Reto

Entonces hoy, para facilitar tu visita al supermercado, debes crear un programa en Javascript que pregunte si deseas agregar un alimento a tu lista de compras, y debes poder responder con "sí" o "no".

A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".

Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas, como frutas, lácteos, congelados, dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.

Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:

Si añades a tu lista:

```txt
banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.
```

El programa debería imprimir, por ejemplo:

```txt
Lista de compras:
Frutas: banana, tomate, manzana, uva, aguacate
Lácteos: leche vegetal, leche de vaca, leche en polvo
Congelados:
Dulces: chicle y gominola
```
