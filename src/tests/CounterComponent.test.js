import { shallow } from "enzyme";
import CounterComponent from "../CounterComponent";
// aun se puede simplificar codigo en estas pruebas
describe("CounterComponent Tests", () => {
  // podriamos solo declaralo pero se deja asi dado que si no perderiamos la ayuda del editor de texto
  let wrapper = shallow(<CounterComponent />);
  //   sentencia de cofigo que se ejecuta antes de ejecutar cada una de las pruebas , para el caso se instancia antes de cada prueba el wrapper
  beforeEach(() => {
    wrapper = shallow(<CounterComponent />);
  });

  test("It must to show the <CounterComponent/> component in the correct way", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("It must to show the 100 default value", () => {
    const defaultValue = 100;
    wrapper = shallow(<CounterComponent value={defaultValue} />);
    const textCounterComponent = parseInt(wrapper.find("h2").text());
    expect(textCounterComponent).toBe(defaultValue);
  });
  test('it must to increase with the "+1" button', () => {
    //   al simulate tambien le podemos enviar un segundo argumento seria los valores del evento
    const expectedResult = 11;
    wrapper.find("button").at(0).simulate("click");
    const textCounter = parseInt(wrapper.find("h2").text());
    expect(textCounter).toBe(expectedResult);
  });
  test('it must to decrease with the "-1" button', () => {
    //   al simulate tambien le podemos enviar un segundo argumento seria los valores del evento
    const expectedResult = 9;
    wrapper.find("button").at(2).simulate("click");
    const textCounter = parseInt(wrapper.find("h2").text());
    expect(textCounter).toBe(expectedResult);
  });
  test("It must to reset the CounterComponent default value", () => {
    const defaultValue = 100;
    const wrapper = shallow(<CounterComponent value={defaultValue} />);
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const textCounter = parseInt(wrapper.find("h2").text());
    expect(textCounter).toBe(defaultValue);
  });
});
