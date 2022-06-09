// Función constructor de objetos tipo persona

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    }
}
Persona.prototype.tel = "44332211";

let padre = new Persona("Juan", "Perez", "jperez@mail.com");
console.log(padre.nombreCompleto());
padre.tel = "367";
console.log(padre.tel);


let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
console.log(madre.nombreCompleto());
console.log(madre.tel);