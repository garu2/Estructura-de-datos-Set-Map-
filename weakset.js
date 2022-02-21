const weakset = new WeakSet();

const producto ={
    nombre: 'teclado',
    cantidad: 3
}
const producto2 ={
    nombre: 'raton',
    cantidad: 3
}


//add --> agregar elementos
weakset.add(producto);
weakset.add(producto2);

//delete --> elimina un elemento
weakset.delete(producto2);

//has --> consulta si existe un elemento
console.log(weakset.has(producto2));


console.log(weakset);