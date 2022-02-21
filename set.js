const carrito = new Set();

//add --> agregar elementos
carrito.add('producto 1');
carrito.add('producto 2');
carrito.add('producto 3');
carrito.add(223);
carrito.add(true);

//size --> retorna tamanio del set
console.log(carrito.size);

//Delete --> borra un elemento
carrito.delete('producto 1');

//has --> consulta si existe un elemento
console.log(carrito.has(2233));

//clear --> limpia el set
carrito.clear();

console.log(carrito);

//ejercicio --> eliminar los duplicados
const arr = [1,2,3,34,4,5,6,62,2,11,2,2];
console.log(arr);
const removeDuplicates = new Set(arr);
console.log(removeDuplicates);
const arr2 = [...removeDuplicates];
console.log(arr2);