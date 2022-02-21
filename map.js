const cliente = new Map();

//set --> agregar elementos
cliente.set('nombre','carla');
cliente.set('edad',23);
cliente.set('saldo',3000);

//size --> retorna el tamanio del map
console.log(cliente.size);

//has --> consulta si existe unn elemento
console.log(cliente.has('edad2'));

//get --> retoran un elemento
console.log(cliente.get('saldo'));

//delete --> elimina un elemento
cliente.delete('nombre');

//clear --> limpia el map
cliente.clear();

console.log(cliente);

//Otra forma de crear un map
const estudiante = new Map([ ['nombre','juan'], ['edad',34] ]);
console.log(estudiante);
