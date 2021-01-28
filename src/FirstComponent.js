import React from "react";
import PropTypes from 'prop-types'
/* -------------------------------------------------------------------------- */
/*                            FUNCTIONAL COMPONENTE                           */
/* -------------------------------------------------------------------------- */
// no es comun usar props en los parametros del componente , hoy en dia lo que se hace es directamente una destructuracion de los datos que se mandan en las props
// para validar a que se tiene que enviar cierto parametro en las props, hay varias formas
const FirstComponent = ({ greeting,subtitle }) => {

  // dependiendo la manera en la que vayamos a usar el retorno hay que tener en cuenta que js en el return solo puede devolver un objeto , por lo cual si vamos a poner mas de una etiqueta en el return pues tendriamos que poner todo en un solo div , con esto suele generar el problema que podriamos llenarnos de muchos divs en el html y esto muchas veces no es lo deseado , para eso esta el fragmente que es una etiqueta propia de react que me permite retornar mas de una etiqueta pero que no me va a generar mas div en el cofigo , dependiendo del uso sirve , si el componente que se retorna necesita ciertas clases de css pues ahi si se podria meter en un div
  // react tiene una forma corta de importar fragment
  // y es solo abriendo y cerrando llaves sin ninguna etiqueta dentro de ellas
  // dentro de las llaves se puede escribir cualquier sentencia js que retorne un valor ( se puede imprimir muchas cosas pero no todo) por ejemplo los booleanos no los va a imprimir,los objetos tampoco se pueden imprimir de manera directa , se podria imprimir con un json.stringify ,
  return (
    <>
      <h1>{greeting}</h1>
      <p>{subtitle}</p>
    </>
  );
};
// de esta manera podemos indicar a otros usuarios u otros programadores de que tienen que mandar algo de cierta manera en las props
FirstComponent.propTypes={
    greeting:PropTypes.string.isRequired,
}
// de esta manera definimos un valor por defecto de las propiedades , en dado caso de que asi lo quisieramos y no quisieramos usar la forma que nos da js
// de igual manera otro manejo que se le suele dar a los valores por defecto es sencillamente dejarle un string vacio que al menos nos dejara ver en las herramientas de desarrollo de chrome que la prop era necesaria
FirstComponent.defaultProps={
    subtitle:'subtitle default  '
}
export default FirstComponent;
