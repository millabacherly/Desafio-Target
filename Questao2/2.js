let numero = 200;

let a = 0;
let b = 1;
let c = a + b;
let numeroIgual = false;

while (c <= numero) {
        if (numero == c) {
            numeroIgual = true;
            console.log(numero + ' pertence à sequência de Fibonacci');
        }
        a = b;
        b = c;
        c = a + b;
    }

if (numeroIgual == false) {
    console.log(numero + ' não pertence à sequência')
}