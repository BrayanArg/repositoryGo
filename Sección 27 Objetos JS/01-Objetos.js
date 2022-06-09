// Creación de objetos simplificado

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@gmail.com",
    edad: 28,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);

console.log(persona["apellido"]);

console.log(persona);

console.log(persona.nombreCompleto());

// Imprimir objeto: for in
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

// Agregar propiedades al objeto
persona.tel = "8888"
persona.tel = "367";

console.log(persona);

// Eliminar propiedad de objetos
delete persona.tel;
console.log(persona);

// Imprimir objetos: concatenar cada valor de cada propiedad

console.log(persona.nombre + " " + persona.apellido);

// Imprimir objeto Object.values

let personaArray = Object.values(persona);
console.log(personaArray);

// Imprimir objeto convirtiendolo a una cadena
let personaString = JSON.stringify(persona);
console.log(personaString);

// Creación de objetos 2
let persona2 = new Object();

persona2.nombre = "Carlos";
persona2.apellido = "Ramirez";
persona2.dir = "Calle 71a#1-20"
persona2.tel = "354545"

console.log(persona2.tel);