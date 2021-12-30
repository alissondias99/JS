function contar() {
    var inicio = document.getElementById("início");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("passo");
    var contagem = document.getElementById("contagem")

    if (inicio.value.length == 0 || fim.value.length == 0 ||passo.value.length == 0 ){
        window.alert('[ERRO], revise os dados')
    } else{
        contagem.innerHTML = "Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('[ERRO], passo inválido, vou considerar o passo = 1')
            p = 1
        }

        if (i < f){
            for (let c = i; c <= f; c += p){
                contagem.innerHTML += `${c} \u{1F449} `
        }

    } else {
        for (let c = i; c >= f; c -= p){
            contagem.innerHTML += `${c} \u{1F449} `
        }
        
    }
    contagem.innerHTML += `FIM \u{1F3C1}`
    }
}