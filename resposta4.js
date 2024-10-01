const prompt = require(`prompt-sync`)()

const status = parseInt(prompt(`Infrome o codigo de 1 a 5:`))

if(status <= 5){
    console.log(`Pedido em Preparo`)
}
else if(status == 1){
    console.log(`Pedido em Preparo`)
}
else {
    console.log(`Produto Invalido`)
}