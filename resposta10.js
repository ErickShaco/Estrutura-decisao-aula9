const prompt = require(`prompt-sync`)()

const altura = parseInt(prompt(`Informe a altura da planta:`))

if(altura <= 10){
    console.log(`Brotando`)
}
else if(altura >= 11 && altura <= 30){
    console.log(`Crescendo`)
}
else{
    console.log(`Adulto`)
}