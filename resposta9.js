const prompt = require(`prompt-sync`)()

const horas = parseInt(prompt(`Informe suas horas trabalhadas:`))

if(horas <= 20){
    console.log(`Leve`)
}
else if(horas >= 21 && horas <=40){
    console.log(`Moderada`)
}
else{
    console.log(`Intensa`)
}