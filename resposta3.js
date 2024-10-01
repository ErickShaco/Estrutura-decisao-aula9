const prompt = require(`prompt-sync`)()

const medida = prompt(`Informe sua Medida: `)

if(medida == `P`){
    console.log(`Pequeno`)
}
else if(medida == `M`){
    console.log(`Medio`)
}
else {
    console.log(`Grande`)
}