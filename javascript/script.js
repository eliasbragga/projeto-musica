function enviar() {
    var txt = window.document.getElementById('txt1')
    var res = window.document.getElementById('res')
    var resultado = String(txt.value) 
    var resu = resultado[0].toUpperCase() + resultado.substring(1)
    var texto = `A nota enarmonica de ${resu}`
    
    

    res.innerHTML = `A nota que você digitou foi ${resu}.`
    if (resu == 'C#' ){
        res.innerHTML += ` ${texto} é Db`
    }else if (resu == 'D#') {
        res.innerHTML += `${texto} é Eb`
    }else if (resu == 'E#') {
        res.innerHTML += `${texto} é F`
    }else if (resu == 'F#') {
        res.innerHTML += `${texto} é Gb`
    }else if (resu == 'G#') {
        res.innerHTML += `${texto} é Ab`
    }else if (resu == 'A#') {
        res.innerHTML += `${texto} é Bb`
    }else if (resu == 'B#') {
        res.innerHTML += `${texto} é C`
    }else if (resu == 'Cb'){
        res.innerHTML += `${texto} é B`
    } else if (resu == 'Db') {
        res.innerHTML += `${texto} é C#`
    } else if (resu == 'Eb') {
        res.innerHTML += `${texto} é D#`
    } else if (resu == 'Fb') {      
        res.innerHTML += `${texto} é E`
    } else if (resu == 'Gb') {
        res.innerHTML += `${texto} é F#`
    } else if (resu == 'Ab') {
        res.innerHTML += `${texto} é G#`
    } else if (resu == 'Bb') {
        res.innerHTML += `${texto} é A#`
    } else if (resu == 'C') {
        res.innerHTML += `${texto} é B#`
    } else if (resu == 'D') {
        res.innerHTML += `${texto} é C## ou Ebb`
    } else if (resu == 'E') {
        res.innerHTML += `${texto} é D## ou Fb`
    } else if (resu == 'F') {
        res.innerHTML += `${texto} é E# ou Gbb`
    } else if (resu == 'G') {
        res.innerHTML += `${texto} é F## ou Abb `
    } else if (resu == 'A') {
        res.innerHTML += `${texto} é G## ou Bbb`
    } else if (resu == 'B') {
        res.innerHTML += `${texto} é A## ou Cb`
    }else {
        window.alert('[ERRO] Digite apenas notas!')
        res.innerHTML ='Tente novamente!'
    }
    

  }