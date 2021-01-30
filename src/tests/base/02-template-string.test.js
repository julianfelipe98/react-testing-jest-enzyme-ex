import { getSaludo } from "../../base/02-template-string";

describe("Template String tests", () => {
  test("getSaludo must to return Hola Julian", () => {
    const name = "Julian";
    const greeting = getSaludo(name);
    expect(greeting).toBe("Hola Julian");
  });
  test("getSaludo(no args) must to return Hola anonimo", () => {
    const greeting = getSaludo();
    const result = "Hola anonimo";
    expect(greeting).toBe(result);
  });
});
