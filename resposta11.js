const prompt = require(`prompt-sync`)()

const credito = parseInt(prompt(`Informe o valor:`))

if(credito >= 700){
    console.log(`Baixo`)
}
else if(credito >= 500 ){
    console.log(`Moderado`)
}
else{
    console.log(`Alto`)
}