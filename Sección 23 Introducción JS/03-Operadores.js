/*
let a = 3,
    b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b;
console.log("Resultado de operación módulo (Residuo): " + z);

z = a ** b;
console.log("Resultado de operador exponente: " + z);*/
/*
let a = 3,
    b = 2;
let = z = a + b;

// Incremento
// Pre-incremento(el operador ++ antes de la variable)

z = ++a;
console.log(a);
console.log(z);

//Post-incremento (el operatod ++ después de la variable)

z = b++;
console.log(b);
console.log(z);

// Decremento
// Pre-decremento
z = --a;
console.log(a);
console.log(z);

// Post-decremento
z = b--;
console.log(b);
console.log(z);
*/
/*
let a = 3,
    b = 2,
    c = 1,
    d = 4;
let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);
*/

/*
let a = 1;

a += 3; //a = a + 3
console.log(a);

a -= 2; // a = a - 2;
console.log(a);
*/

/*
let a = 3,
    b = 2,
    c = "3";

let z = a == c; //Se revisa el valor sin importar el tipo.
console.log(z);

z = a === c; //Revisa si los valores son iguales pero también los tipos.
console.log(z);

z = a != c; //Se revisa el valor sin importar el tipo.
console.log(z);

z = a !== c; //Revisa si los valores son iguales pero también los tipos.
console.log(z);
*/

/*
let a = 3,
    b = 2,
    c = "3";

let z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);
*/

/*
// Ejercicio número par

let a = 10;

if (a % 2 == 0) {
    console.log("Es un número par");
} else {
    console.log("Es un número impar");
}
*/
/*
// Ejercicio es mayor de edad

let edad = 20,
    adulto = 18;

if (edad >= adulto) {
    console.log("Es un adulto")
} else {
    console.log("Es menor de edad")
}
*/
/*
// Operadores lógicos
// Ej And (&&)
let a = 5;
let valMin = 0;
let valMax = 10;

if (a >= valMin && a <= valMax) {
    console.log("Dentro de rango")
} else {
    console.log("Fuera de rango")
}

// Ej Or (||)

let vacaciones = true,
    diaDescanso = false;

if (vacaciones || diaDescanso) {
    console.log("Padre puede asistir al juego del hijo");
} else {
    console.log("El padre está ocupado");
}
*/
/*
// Operador ternario

let resultado = (1 > 2) ? "Verdadero" : "Falso";
console.log(resultado);

let numero = 9;
resultado = (numero % 2 == 0) ? "Número par" : "Número impar";
console.log(resultado);
*/
/*
// Conversión de String a number

let miNumero = "18x";

let edad = Number(miNumero);

if (isNaN(edad)) {
    console.log("No es un número")
} else {
    if (edad >= 18) {
        console.log("Puede votar")
    } else {
        console.log("Muy joven para votar")
    }
}

let edadTernario = (edad >= 18) ? "Puede votar" : "Muy joven para votar";
console.log(edadTernario);
*/

let x = 5;
let y = 10;
let z = ++x + y--;

console.log(x);
console.log(y);
console.log(z);

let resultado = 4 + 5 * 6 / 3;
console.log(resultado);

resultado = (4 + 5) * 6 / 3;
console.log(resultado);