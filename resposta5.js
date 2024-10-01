const prompt = require(`prompt-sync`)()

const distancia = parseFloat(prompt(`Informe a Distancia percorrida!:`))

if(distancia <= 5){
    console.log(`Curta`)
}
else if(distancia >= 6 && distancia <= 10){
    console.log(`Media`)
}
else {
    console.log(`Longa`)
}