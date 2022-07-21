
//querySelectorAll: busca todos os elementos que esteja nessa mesma classe.
const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }

}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

//efetua a operação de subtração ou adição, mudando o valor.
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value)  - 1
    } else {
        peca.value = parseInt(peca.value)  + 1
//parseInt transforma  String em int : transforma em numero, para ser realizada a soma.

    }
}

function atualizaEstatisticas(peca) {

    estatistica.forEach( (elemento) => {
        //ao clicar em cada um dos elementos, vai atualizar o textContent(conteudo do texto)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })

//Mudando a cor do Robô
}
function mudarAmarelo (robotron) {
    document.getElementById("robotron").src="img/Robotron 2000 - Amarelo/RobotronAmarelo.png","img/Robotron 2000 - Azul/RobotronAzul.png";
}
function mudarAzul (robotron) {
    document.getElementById("robotron").src="img/Robotron 2000 - Azul/RobotronAzul.png";

}
function mudarBranco (robotron) {
    document.getElementById("robotron").src="img/Robotron 2000 - Branco/RobotronBranco.png";

}
function mudarPreto (robotron) {
    document.getElementById("robotron").src="img/Robotron 2000 - Preto/RobotronPreto.png";

}
function mudarRosa (robotron) {
    document.getElementById("robotron").src="img/Robotron 2000 - Rosa/RobotronRosa.png";

}
function mudarVermelho (robotron) {
    document.getElementById("robotron").src="img/Robotron 2000 - Vermelho/RobotronVermelho.png";

}
