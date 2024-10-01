const prompt = require(`prompt-sync`)()

const temp = parseFloat(prompt(`Informe a Temperatura:`))

if(temp < 35 ){
    console.log(`Hipotermia`)
}
else if(temp >= 35 && temp <= 37.5){
    console.log(`Normal`)
}
else{
    console.log(`Febre`)
}