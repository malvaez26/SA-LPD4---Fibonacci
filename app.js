function fibonacci(n) {
    let serie = [0, 1]; 

    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }

    return serie;
}

function generarSerieFibonacci() {
    while (true) {
        var numero = parseInt(prompt("Ingresa un número para generar la serie de Fibonacci:"));

        if (isNaN(numero)) {
            alert("Por favor, ingresa un número válido.");
            continue;
        }

        let serie = fibonacci(numero);

        alert("Serie de Fibonacci para " + numero + " números: " + serie.join(", "));
        console.log("Serie de Fibonacci para " + numero + " números: " + serie.join(", "));
        break;
    }
}

generarSerieFibonacci();
