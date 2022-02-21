
const ciudades = ['miami', 'Roma', 'Madrid', 'Paris'];
const pedidos = new Set([123, 234,34, 343]);
const datos =  new Map();

datos.set('nombre','juan');
datos.set('profesion','abogado');

//default iterators
for (let city of ciudades) {
    console.log(city);
}
for (let city of pedidos) {
    console.log(city);
}
for (let city of datos) {
    console.log(city);
}

//key iterator
/* for (let key of ciudades.keys()) {
    console.log(key);
}
for (let key of pedidos.keys()) {
    console.log(key);
}
for (let key of datos.keys()) {
    console.log(key);
} */

//value iterator
/* for (let value of ciudades.values()) {
    console.log(value);
}
for (let value of pedidos.values()) {
    console.log(value);
}
for (let value of datos.values()) {
    console.log(value);
} */


//Entri iterator
/* for (let entri of ciudades.entries()) {
    console.log(entri);
}
for (let entri of pedidos.entries()) {
    console.log(entri);
}for (let entri of datos.entries()) {
    console.log(entri);
} */
