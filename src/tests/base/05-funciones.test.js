import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("05-funciones tests", () => {
  test("getUser must to return an object", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    // hay que tener cuidado dado que los objetos a pesar de tener las mimsmas propiedades , por lo que se encuentran en lugares distintos de memoria , al compararlos asi no son iguales
    // por esta razon es que para este ejemplo usamos el toEqual
    expect(user).toEqual(userTest);
  });
  test("getUsuarioActivo must to return an object", () => {
    const name = "Julian";
    const user = getUsuarioActivo(name);
    const userTest = {
      uid: "ABC567",
      username: name,
    };
    expect(user).toEqual(userTest);
  });
});
