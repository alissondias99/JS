function calcular() {
    let num = document.getElementById('tabuada')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Digite um número válido')
    } else{
        let n = Number(num.value)
        let c = 0
        tab.innerHTML = ""
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}