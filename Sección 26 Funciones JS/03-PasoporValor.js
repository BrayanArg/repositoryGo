let x = 10;

function cambiarValor(a) {
    a = 20;
}

cambiarValor(x);
console.log(x); //La variable "x" no se edita ya que le pasa una copia del valor a la variable "a".