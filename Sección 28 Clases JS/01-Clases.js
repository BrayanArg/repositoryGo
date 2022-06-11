class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    nombreCompleto() {
            return this._nombre + " " + this._apellido;
        }
        //Sobrescribiendo el metodo de la clase padre (Object)
    toString() {
        //Se aplica polimorfismo(multiples formas en tiempo de ejecución)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo.
        return this.nombreCompleto();
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); //Llamar al constructor de la clase padre(Persona)
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
            this._departamento = departamento;
        }
        //Sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ", " + this._departamento;
    }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1.toString());

let empleado1 = new Empleado("Maria", "Gonzales", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());