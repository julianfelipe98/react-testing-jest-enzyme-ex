import { shallow } from "enzyme";
import FirstComponent from "../FirstComponent";
// realizo esta importacion dado a que si no lo importo no me reconoce la funcion de tobe in the document

describe("First component tests", () => {
  // test('Must to show the message "Hello World!"', () => {
  // const greeting = "Hello World!";
  // // el wrapper representa el producto renderizado de lo que yo quiero mostrar
  // const { getByText } = render(<FirstComponent greeting={greeting} />);
  // expect( getByText(greeting) ).toBeInTheDocument(true);

  // });
  test("it must to show <FirstComponent/> in the correct way", () => {
    // debemos asegurarnos de que se renderize con los valores que nosotros esperamos
    // shallow es muy parecido al render pero nos dara nuevas opciones como simular un click o tener acceso al documento si quisieramos trabajar como algun tipo de selector o algo asi
    const greeting = "hello world";
    const wrapper = shallow(<FirstComponent greeting={greeting} />);
    // hay que tener cuidado con la parte de las fotografias dado a que si cambiamos asi sea un espacio en el documento y queremos que asi sea la correcta pues tendriamos que actualizar el snapshot, este error que no arroja cada que actualizamos algo tambien nos permite tener una nocion de las diferencias que hay entre la fotografia que tenemos y el documento actual renderizado
    expect(wrapper).toMatchSnapshot();
  });
  test("must to show the sended subtitile by props", () => {
    const greeting = "hello world";
    const subtitle = "subtitle test";
    // hay que tener en cuenta que wrapper tiene toda la info del componente renderizado
    const wrapper = shallow(
      <FirstComponent greeting={greeting} subtitle={subtitle} />
    );
    // esta sentencia es muy similar al document.querySelector de js en el dom de un html normal
    // para este caso va a buscar todas las etiquetas p , como solo hay una y es la del subtitulo pues nos retorna esa , pero si hubiera mas nos retornaria un arreglo
    const textParagraf = wrapper.find("p").text();
    expect(textParagraf).toBe(subtitle);
  });
});
