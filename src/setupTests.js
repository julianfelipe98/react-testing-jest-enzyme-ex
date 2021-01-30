// archivo de configuracion por defecto que se leera en todas las pruebas de react , esta importacion me permite acceder a funciones y metodos de jest dom
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
