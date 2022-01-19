let nuns = document.getElementById('nuns')
let lista = document.getElementById('lista')
let result = document.createElement('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isNumero(nuns.value) && !inLista(nuns.value, valores)){
        valores.push(Number(nuns.value))
        let item = document.createElement('option')
        item.text = `nuns ${nuns.value} adicionado` 
        lista.appendChild(item)
    } else {
        window.alert("nuns inválido ou já encontrado no lista.")
    }
    num.value ='';
    num.focus()
}


function finalizar() {
    if (valores.length == 0) {
        window.alert("Adicione valores antes de continuar")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if(maior  = valores[pos]){
                maior = valores[pos]
            } else if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> A soma de todos os valores informados é ${soma}</p>`
        res.innerHTML += `<p> A média dos valores informados é ${media}</p>`
    }
}