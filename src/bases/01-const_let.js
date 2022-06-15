// Variables y Constantes
// const: Variables que no van a cambiar o no se van a renombrar
// let: Variables que van a cambiar

const nombre = 'Santiago';
const apellido = 'Rios';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado)

// var No se debe usar
if (true) {
    const nombre = 'Prueba';
    console.log(valorDado)
}

console.log(valorDado);