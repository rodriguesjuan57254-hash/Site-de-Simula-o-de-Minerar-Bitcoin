let botaoDeMinerar = document.getElementById("botao-Minerar")
let botaoDeConfigurar = document.getElementById("botao-Tempo")
let velocidadeDeExibir = document.getElementById("velocidadeExibir")
let historicoDeMoeda = document.getElementById("historico-Moeda")
let somClick = new Audio("songAlertSimples.mp3")
let saldoDeMoeda = document.getElementById("saldo")
let saldoTotal = 0
let minerando = false
let intervalo
let velocidade = 1000

botaoDeMinerar.addEventListener("click", alterarMinerar)
botaoDeConfigurar.addEventListener("click", configurar)

function alterarMinerar(){
  if(minerando){
    clearInterval(intervalo)
    minerando = false
    botaoDeMinerar.innerText = "Minerar"
    botaoDeMinerar.style.background = "#FFEC00"
    botaoDeMinerar.style.border = "3px solid #FAF864"
    botaoDeMinerar.style.boxShadow = "0px 0px 10px #FAF864"
  }else{
    intervalo = setInterval(minerar, velocidade)
    minerando = true
    botaoDeMinerar.innerText = "Parar"
    botaoDeMinerar.style.background = "#ff0000"
    botaoDeMinerar.style.border = "3px solid #fa6464"
    botaoDeMinerar.style.boxShadow = "0px 0px 10px #fa6464"
    somClick.currentTime = 0
    somClick.play()
  }
}

function minerar(){
  let valor = 1/(Math.random() * 1000000 + 1)
  historicoDeMoeda.innerHTML += "<p>Minerou: " + valor + "</p>"
  saldoTotal = saldoTotal + valor
  saldoDeMoeda.innerText = `Bitcoins: ${saldoTotal}`
  if(historicoDeMoeda.children.length > 50){
    historicoDeMoeda.firstElementChild.remove()
  }
  historicoDeMoeda.scrollTop = historicoDeMoeda.scrollHeight
}

function configurar(){
  let promptConfig = Number(prompt("Altere a velocidade de minerar! (1000 = 1 Segundo)"))
  velocidade = promptConfig
  velocidadeDeExibir.innerText = `Velocidade de Mineração: ${promptConfig}ms`
  somClick.currentTime = 0
  somClick.play()
  if(velocidade <= 0 || isNaN(velocidade)){
    velocidade = 1000
    velocidadeDeExibir.innerText = `Velocidade de Mineração: ${velocidade}ms`
  }else{
    
  }
}