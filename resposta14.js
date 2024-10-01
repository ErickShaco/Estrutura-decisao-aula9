const prompt = require(`prompt-sync`)()

const vel = parseInt(prompt(`Informe Velocidade:`))

if(vel < 80){
    console.log(`Dentro do Limite`)
}
else{
    console.log(`Acima do Limite`)
}