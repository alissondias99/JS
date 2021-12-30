let num = [1, 5, 5, 8, 2, 4]
num.push(6) //Coloca um item na ultima posição
num.sort() //Coloca os números em ordem crescente
console.log(num)
console.log(`${num}`)
console.log(`O tamanho da lista é ${num.length}`) //Verifica o tamanho da array
console.log(`${num[0]} é o primeiro item da lista`)
let pos = num.indexOf(2)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

