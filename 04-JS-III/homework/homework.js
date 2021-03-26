// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var rta = array[0];
  return rta;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var rta = array[array.length - 1];
  return rta;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var rta = array.length;
  return rta;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var largo = array.length;
  var rta = array;
  var i = 0;
  while(i < largo)
  {
    rta[i] = rta[i] + 1;
    i++;
  }
  return rta;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var i = 1;
  var rta = palabras[0];
  while(i < palabras.length)
  {
    rta = rta + " " + palabras[i];
    i++;
  }
  return rta;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var rta = false;
  var i = 0;
  while(rta === false && i < array.length)
  {
    if(array[i] === elemento)
      rta = true;
    i++;
  }
  return rta;
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var i = 1;
  var rta = numeros[0];
  while(i < numeros.length)
  {
    rta = rta + numeros[i];
    i++;
  }
  return rta;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes.
  // Tu código:
  var rta = resultadosTest[0];
  var i = 1;
  while(i < resultadosTest.length)
  {
    rta = rta + resultadosTest[i];
    i++;
  }
  rta = rta / resultadosTest.length;
  return rta;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var rta = numeros[0];
  var i = 1;
  while(i < numeros.length)
  {
    if(numeros[i] > rta){rta = numeros[i];};
    i++;
  }
  return rta;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var rta = arguments[0];
  if(rta === undefined)
    rta = 0;
  var i = 1;
  while(i < arguments.length)
  {
    rta = rta * arguments[i];
    i++;
  }
  return rta;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  var rta = 0;
  var i = 0;
  while(i < arreglo.length)
  {
    if(arreglo[i] > 19){rta++;};
    i++;
  }
  return rta;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var rta = "Es dia Laboral";
  if(numeroDeDia === 1 || numeroDeDia === 7){rta = "Es fin de semana";};
  return rta;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var rta = true;
  while(n >= 10)
  {
    n = n / 10;
  }
  if(Math.floor(n) !== 9)
    rta = false;
  return rta;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var rta = true;
  var i = 0;
  while(i < (arreglo.length - 1) && rta === true)
  {
    if(arreglo[i] !== arreglo[i + 1])
      rta = false;
    i++;
  }
  return rta;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var rta = [];
  var i = 0;
  var j = 0; 
  while(i < array.length)
  {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre")
    {
      rta[j] = array[i];
      j++;
    }
    i++;
  }
  if(j !== 3)
    rta = "No se encontraron los meses pedidos";
  return rta;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var rta = [];
  var i = 0;
  while(i < array.length)
  {
    if(array[i] > 100){rta.push(array[i]);};
    i++;
  }
  return rta;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var rta = [];
  var num = numero;
  var i = 0;
  while(i < 10 && rta !== "Se interrumpió la ejecución")
  {
    num = num + 2;
    rta.push(num);
    if(num === i)
    {
      rta = "Se interrumpió la ejecución";
      break;
    }
    i++;
  }
  return rta;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var rta = [];
  var i = 1;
  var num = numero;
  while(i < 10)
  {
    num = num + 2;
    rta.push(num);
    if(i === 5)
    {
      i++;
      continue;
    }
    i++;
  }
  return rta;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
