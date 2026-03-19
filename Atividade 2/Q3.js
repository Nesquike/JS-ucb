let numero = parseInt(prompt("Digite um numero para ver a tabuada:"))

if (isNaN(numero)) {
    console.log("Digite um número válido")
} else {
    console.log(`Tabuada do ${numero}:`)
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}