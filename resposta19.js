
const prompt = require(`prompt-sync`)()

const indice = parseInt(prompt(`Digite o Numero de 1 a 5:`))

if(indice <= 2){
    console.log(`Baixo`)
}
else if(indice <=4){
    console.log(`Moderado`)
}
else{
    console.log(`Alto`)
}