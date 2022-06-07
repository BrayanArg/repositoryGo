for (let contador = 0; contador < 3; contador++) {
    console.log(contador);
}

// ejemplo palabra break

for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 == 0) {
        console.log(contador);
        break;
    }
}

console.log("Fin del ciclo for")

// ejemplo palabra continue

for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 !== 0) {
        continue; //Ir a la siguiente iteración del ciclo.
    } else {
        console.log(contador);
    }
}