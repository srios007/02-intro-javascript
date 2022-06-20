const persona = {
    nombre: 'Santiago',
    apellido: 'Rios',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 4234234,
        lat: 14.4313232,
        lng: 34.9321123
    },
};

// console.table(persona);
console.log(persona);
const persona2 = {...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);