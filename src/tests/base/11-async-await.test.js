import { getImagen } from "../../base/11-async-await";

describe("11-async-await tests and fetch", () => {
  // otra forma de llamar o testear funciones asincronas a parte del done y que le indicabamos donde ibamos a acabar
  test("must return the image url", async () => {
    const url = await getImagen();
    expect(url.includes("https://")).toBe(true);
  });
});
