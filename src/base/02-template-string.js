


const nombre   = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;



export function getSaludo(nombre="anonimo") {
    return 'Hola ' + nombre;
}
