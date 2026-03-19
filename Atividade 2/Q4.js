let linhas = parseInt(prompt("Digite o número de linhas:"))

if (isNaN(linhas) || linhas <= 0) {
    console.log("Por favor, digite um número válido.")
} else {
    for (let i = 1; i <= linhas; i++) {
        let linhaDeAsteriscos = ""
        
        for (let j = 1; j <= i; j++) {
            linhaDeAsteriscos += "*"
        }
        
        console.log(linhaDeAsteriscos)
    }
}