function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERROR] Verifique as informações e tente novamente!")
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                //crianca
                img.setAttribute('src', 'crianca-homem.jpg')
            } else if(idade < 21){
                //adolescente
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if(idade < 50){
                img.setAttribute('src', 'homem-adulta.jpg')
                //adulto
            } else{
                img.setAttribute('src', 'idoso-jpg')
                //idoso
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //crianca
                img.setAttribute('src', 'crianca-mulher.jpg')
            } else if(idade < 21){
                //adolescente
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if(idade < 50){
                img.setAttribute('src', 'mulher-adulta.jpg')
                //adulto
            } else{
                //idoso
                img.setAttribute('src', 'idosa-jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}