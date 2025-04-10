const prompt = require("prompt-sync")()

let numero1 = parseFloat(prompt("Por favor imgresa el primer número: "))
let numero2 = parseFloat(prompt("Por favor imgresa el segundo número: "))
let numero3 = parseFloat(prompt("Por favor imgresa el tercer número: "))

let mayor
let menor
let centro

if(numero1 === numero2 && numero2 === numero3 ) {
    console.log("Los números son iguales")
} else {
    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2
    } else {
        mayor = numero3
    }
}

if(numero1 <= numero2 && numero1 <= numero3) {
   menor = numero1
} else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2
} else {
    menor = numero3
}

centro = numero1 + numero2 + numero3 - mayor - menor

console.log(`Orden de mayor a menor: ${mayor}, ${centro}, ${menor}`)
console.log(`Orden de menor a mayor: ${menor}, ${centro}, ${mayor}`)