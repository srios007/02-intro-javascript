// Funciones en JSON
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar('Pedro'));
console.log(saludar2('Santiago '));
console.log(saludar3('Rios '));
console.log(saludar4('Valero '));
// Función de flecha
const getUser = () => {
    return {
        uid: '123',
        userName: 'El_PAPI'
    };
};
// Fnción de flecha que retorna un objeto implicito
const getUser2 = () =>
    ({
        uid: '456',
        userName: 'El_PAPI2'
    });
const user = getUser();
console.log(user);

// Tarea
// 1. Transormen a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABCD123',
        username: nombre,
    };
};
const usuarioActivo = getUsuarioActivo('Juan');
console.log(usuarioActivo);
// 1.
const getUsuarioActivo = (nombre) => {
    return {
        uid: 'ABCD123',
        username: nombre,
    };
};
// 2.
const getUsuarioActivo = (nombre) => ({
    uid: 'ABCD123',
    username: nombre,
});