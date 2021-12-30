function verificar() {
    var agora = new Date
    var dias_sem = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maior', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let semana = agora.getDay()
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()
    var data = document.getElementById("datas")
    data.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    data.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
    data.innerHTML += `<p>Ano: <mark>${(ano)}</mark></p>`
    data.innerHTML += `<p>Dia da semana: <mark>${dias_sem[semana]}</mark></p>`
    data.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    data.innerHTML += `<p>Minutos: <mark>${minutos}</mark></p>`
    data.innerHTML += `<p>Segundos: <mark>${segundos}</mark></p>`
    
}