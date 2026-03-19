const randomNumber = Math.floor(Math.random() * 20) + 1
let palpite = null

alert("Jogo para acertar um numero de 1 a 20")

while(palpite != randomNumber){
    parseInt(prompt("Digite seu numero: "))

    if (typeof palpite !== Number){
        alert("Digite um numero:")
    }
    else if(palpite > randomNumber){
        alert("o numero é maior q esse")
    }
    else if(palpite < randomNumber){
        alert("o numero é menor q esse")
    }
    else{
        alert("Voce acertou")
    }
}
