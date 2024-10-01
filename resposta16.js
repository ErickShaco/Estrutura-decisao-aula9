const prompt = require(`prompt-sync`)()

const estresse = parseInt(prompt(`Informe de 1 a 10`))

if(estresse <=3){
    console.log(`Baixo`)
}
else if(estresse >= 4 && estresse <=7){
    console.log(`Moderado`)
}
else{
    console.log(`Alto`)
}