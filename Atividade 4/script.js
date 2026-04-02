const precosCombustivel = {
    gasolina: 6.79,
    etanol: 5.40,
    diesel: 6.20
};

const formatarMoeda = (valor) => 
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const calcularAbastecimento = (precoCombustivel, litros) => {
    const resultadoDisplay = document.getElementById("resultado");

    if (isNaN(litros) || litros <= 0) {
        resultadoDisplay.textContent = "Insira uma quantidade válida.";
        resultadoDisplay.style.color = "red";
        return;
    }

    const valorTotal = precoCombustivel * litros;
    resultadoDisplay.textContent = formatarMoeda(valorTotal);
    resultadoDisplay.style.color = "black";
};

const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litros = parseFloat(document.getElementById("litros").value);
    const resultadoDisplay = document.getElementById("resultado");
    const precoPorLitro = precosCombustivel[tipo];

    if (!precoPorLitro) {
        resultadoDisplay.textContent = "Selecione o combustível.";
        return;
    }

    calcularAbastecimento(precoPorLitro, litros);
};

const selectCombustivel = document.getElementById("combustivel");
const inputLitros = document.getElementById("litros");

selectCombustivel.addEventListener("change", atualizarValor);
inputLitros.addEventListener("input", atualizarValor);

inputLitros.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        if (!inputLitros.value) {
            alert("Preencha o campo de litros.");
        }
        atualizarValor();
    }
});