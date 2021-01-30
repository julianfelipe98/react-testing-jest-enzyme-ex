import { retornaArreglo } from "../../base/07-deses-arr";

describe("07-deses-arr tests", () => {
  test("must return a string and a number", () => {
    const [str,numbers] = retornaArreglo();
    // expect(arr).toEqual(["ABC", 123]);
    // hacemos una doble evaluacion para el caso del numero y de la cadena de caracteres nos asguramos primero que es el valor que nosotros esperamos y que es el tipo de dato correcto
    expect(str).toBe("ABC")
    expect(typeof str).toBe("string")
    expect(numbers).toBe(123)
    expect(typeof numbers).toBe("number")

  });
});
