// Declaración de la función
function miFuncion(a, b) {
    console.log(arguments.length);
    return a + b;
}

// Llamando a la función
let resultado = miFuncion(2, 3);

console.log(resultado);

// Declaración de una función de tipo expresión

let x = function(a, b) { return a + b };

resultado = x(1, 2);
console.log(resultado);

//Declaración de una función self-invoking
(function(a, b) {
    console.log("Ejecutando la función " + (a + b));
})(3, 4);

var mifuncionTexto = miFuncion.toString();
console.log(mifuncionTexto);

// Función de tipo flecha
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);