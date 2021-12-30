let chute = 0
let computador = 0

function sortear(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)

}
function advinhar() {
    chute = Number(window.prompt('Qual número você acho que eu escolhi?'))
    var res = document.getElementById('res')
    if (chute < computador){
        res.innerHTML += `<p>O número escolhido é <strong>MAIOR</strong> do que ${chute}</p>`
    } else if (chute > computador){
        res.innerHTML += `<p>O número escolhido é <strong>MENOR</strong> do que ${chute}</p>`
    } else {
        res.innerHTML += `
        <p> <strong>CORRETO</strong>! O número escolhido foi ${chute}</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}