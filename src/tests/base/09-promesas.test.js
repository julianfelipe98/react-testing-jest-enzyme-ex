import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("09-promesas tests", () => {
  // las pruebas cuando se ejecutan de manera normal si son tareas sincrinas
  // para las pruebas asincronas lo ideal es apesar de ya tener el llamado del expect , llamar al done para inidcarle al test suite que ya terminamos de hacer todo el proceso , porque puede que tengamos varios exptect ahi y eso nos podria arrojar un positivo falso
  test("getHeroByIdAsync must return an async hero", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroes[0]);
      done();
    });
  });

  test("must to return an error id hero by id doesnt exist", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
