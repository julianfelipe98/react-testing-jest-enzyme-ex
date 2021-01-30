import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("08-imp-exp tests", () => {
  test("get hero by id must return a hero", () => {
    const id = 1;
    const hero = getHeroeById(id);
    const heroData = heroes.find((heroTest) => heroTest.id === id);
    expect(hero).toEqual(heroData);
  });
  test("get hero by id must return undefined id hero doesn't exist", () => {
    const id = 10;
    const hero = getHeroeById(id);
    expect(hero).toBe(undefined);
  });
  test("get heroes by owner should to return an array with the marvel heroes", () => {
    const owner = "Marvel";
    const heroesTest = getHeroesByOwner(owner);
    const heroResult = heroes.filter((heroData) => heroData.owner === owner);
    expect(heroesTest).toEqual(heroResult);
  });
  test("get heroes by owner should to return an array with the DC heroes", () => {
    const owner = "DC";
    const heroesTest = getHeroesByOwner(owner);
    const heroResult = heroes.filter((heroData) => heroData.owner === owner);
    expect(heroesTest).toEqual(heroResult);
});
test("get heroes by owner should to return an empty array if the owner is not in the array", () => {
    const owner = "other";
    const heroesTest = getHeroesByOwner(owner);
    const heroResult = heroes.filter((heroData) => heroData.owner === owner);
    expect(heroesTest).toEqual(heroResult);
});

  //   evaluar los heroes de dc =debe retornar un arreglo con los heroes de dc

  //   evaluar los heroes de marvel = debe retornar un arreglo con los heroes de marvel
});
