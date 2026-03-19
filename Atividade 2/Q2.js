const opcoes = ["pedra", "papel", "tesoura"]
let escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura?").toLowerCase()

const indiceAleatorio = Math.floor(Math.random() * 3)
const escolhaComputador = opcoes[indiceAleatorio]

console.log(`Você escolheu: ${escolhaUsuario}`)
console.log(`O computador escolheu: ${escolhaComputador}`)

if (!opcoes.includes(escolhaUsuario)) {
    console.log("Escolha inválida")
} else if (escolhaUsuario === escolhaComputador) {
    console.log("Empate")
} else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
) {
    console.log("Você venceu")
} else {
    console.log("O computador venceu")
}