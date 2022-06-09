let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel) {
        return titulo + ": " + this.nombre + " " + this.apellido + " " + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

// Uso de apply
console.log(persona1.nombreCompleto("Lic", "6688995"));

let arreglo = ["Ing", "4776578"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

// Uso de call para usar el metodo persona1.nombreCompleto con los datos de persona2

console.log(persona1.nombreCompleto("Licenciado", "44337766"));

console.log(persona1.nombreCompleto.call(persona2, "Ingeniero", "5332254"));