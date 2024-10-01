const prompt = require(`prompt-sync`)()
//crian um prompt para informar a Nota

const nota = parseInt(prompt(`Informe a Nota: `))

//Usando if e else if para definir o nivel de satisfaçao pela nota

if(nota > 80){
    console.log(`Muito Bom :D`);
}
else if(nota >= 70){
    console.log(`Bom :)`)
}
else if(nota >= 51){
    console.log(`Satisfatorio :/`)
}
else {
    console.log(`Insatisfatorio :C`)
}