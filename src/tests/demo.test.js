// cuando se corre el comando run test , se ejecutan todos los archivos con la extension .test.js , todos los archivos son los que el teste suite son los que va a buscar o leer para ejecutar las pruebas
// el primer argumento es un string , con el nombre de la prueba , se dice lo qu estamos probando
// la funcion test viene de jest
// se considera como test suite cada uno de los archivos de pruebas
describe("demo.test.js tests", () => {
  test("String must be equal", () => {
    // const isActive=true;
    // // generalmente no se escriben este tipo de condiciones
    // if (isActive) throw new Error('Is not active');

    //   1. inicializacion
    const message = "Hello World";

    //   2.estimulo
    const message2 = "Hello World";

    //   3.observar el comportamiento
    expect(message).toBe(message2);
  });
});