let num = [1, 5, 5, 8, 2, 4]
/*
for(var pos = 0; pos < num.length; pos++){
    console.log(`O valor na posição ${pos} é ${num[pos]}`)

Ambos funcionam da mesma forma
}*/

for (var pos in num){
    console.log(`O valor na posição ${pos} é ${num[pos]}`)
}