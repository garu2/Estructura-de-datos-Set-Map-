const weakmap = new WeakMap();

const producto = {
    id: 12,
    nombre: 'camisa'
}

//set --> agregar elemento
weakmap.set(producto, 'julio');

//has --> consulta si existe un elemento
console.log(weakmap.has(producto));

//get --> retorna un elemento
console.log(weakmap.get(producto));

//delete --> elimina un elemento
weakmap.delete(producto);

console.log(weakmap);