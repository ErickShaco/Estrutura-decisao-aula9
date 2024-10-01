const prompt = require(`prompt-sync`)()

const indice = parseInt(prompt(`Informe o Numero`))

if(indice < 30){
    console.log(`Seco`)
}
else if(indice >= 30 && indice < 70){
    console.log(`Umido`)
}
else{
    console.log(`Chuvoso`)
}