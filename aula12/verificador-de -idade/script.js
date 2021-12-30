function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = window.document.getElementById('txtnasc')
    var foto = window.document.getElementById('foto')

    if ( nasc.value.length == 0|| nasc.value > ano ) {
        window.alert('Verifique os dados e tente novamente')
    } else{
        var sexo = window.document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var gênero =''
        img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if (sexo[0].checked){
            gênero = 'Homem'

            if (idade == 0 || idade <= 10){
                img.setAttribute('src', 'imagens/bebê-m.png')

            } else if (idade < 20){
                img.setAttribute('src', 'imagens/adolescente-m.png')

            } else if (idade == 20 || idade < 50){
                img.setAttribute('src', 'imagens/adulto-m.png')

            } else if (idade >= 50){
                img.setAttribute('src', 'imagens/velho-m.png')
            }
                
        } else{
            gênero = 'Mulher'

            if (idade == 0 || idade <= 10){
                img.setAttribute('src', 'imagens/bebê-f.png')

            } else if (idade < 20){
                img.setAttribute('src', 'imagens/adolescente-f.png')

            } else if (idade == 20 || idade < 50){
                img.setAttribute('src', 'imagens/adulto-f.png')

            } else if (idade >= 50){
                img.setAttribute('src', 'imagens/velho-f.png')
            }
        }
        foto.style.textAlign = 'center'
        foto.innerHTML = `Você é um(a) ${gênero} com ${idade} anos de idade`
        foto.appendChild(img)
    }
}