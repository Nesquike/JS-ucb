// Botões incremento
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let container = document.getElementById("container")
let valorAtual = 0
button1.onclick = function(){
    valorAtual ++
    document.getElementById("contador").innerText = valorAtual
}
button2.onclick = function(){
    if(valorAtual > 0){
        valorAtual --
        document.getElementById("contador").innerText = valorAtual
    }
    else{
        alert("Minimo = 0")
    }
}

// Contador de caracteres e add de txt

let entrada = document.getElementById("campoEntrada")
let contador = document.getElementById("caracteres")

entrada.oninput = function(){
    let total = entrada.value.length
    contador.innerText = total


}

entrada.onkeydown = function(){
    if(event.key == "Enter"){
        let novoParagrafo = document.createElement("p")
        novoParagrafo.innerText = entrada.value
        
        container.appendChild(novoParagrafo)

        entrada.value = ""

    }
}

// Listas

const itens = ["miojo", "surubim", "coca cola zero açucares e zero calorias"]
let addLista = document.getElementById("addLista")
let containerLista = document.getElementById("containerListas")
let tipoSelecionado = document.getElementById("tipoLista")

addLista.onclick = function(){
    let novaLista = document.createElement(tipoSelecionado.value)

    itens.forEach(function(texto){
        let li =  document.createElement("li")
        li.innerText = texto
        novaLista.appendChild(li)
    })

    containerLista.innerHTML = ""

    containerLista.appendChild(novaLista)
}

// reset

let reset = document.getElementById("rstButton")

reset.onclick = function(){
    valorAtual = 0
    document.getElementById("contador").innerText = valorAtual
    document.getElementById("campoEntrada").value = ""
    containerLista.innerHTML = "" 
    container.innerHTML = ""
    document.getElementById("caracteres").innerText = "0"
}