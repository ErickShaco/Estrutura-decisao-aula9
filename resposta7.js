const prompt = require(`prompt-sync`)()

const feedback = parseInt(prompt(`De 1 a 5, Qual é o seu nivel de Satisfaçaõ?:`))

if(feedback == 1){
    console.log(`Muito Insatisfeito`)
}
else if(feedback == 2){
    console.log(`Insatisfeito`)
}
else if(feedback == 3){
    console.log(`Neutro`)
}
else{
    console.log(`Satisfeito`)
}