const prompt = require(`prompt-sync`)()

const pontos = parseInt(prompt(`Digite sua pontuação? `))

if(pontos <= 33){
    console.log(`Novato`)
}
else if(pontos <= 66){
    console.log(`Intermediario`)
}
else{
    console.log(`Experiente`)
}