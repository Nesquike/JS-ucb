let n = parseInt(prompt("Digite a quantidade de termos:"));
let termoAtual = 0;
let soma = 0;
let serieTexto = "";

for (let i = 1; i <= n; i++) {
    termoAtual = termoAtual * 10 + 1;
    soma += termoAtual;
    
    if (i === 1) {
        serieTexto += termoAtual;
    } else {
        serieTexto += " + " + termoAtual;
    }
}

console.log(serieTexto);
console.log(`A soma é: ${soma}`);