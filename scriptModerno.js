console.log("Hello world world!!");

// El return está metido en la función.

let a = 2;
const multi = a => a * 2;
console.log("Resultado función multi:", multi(a));

// Función con condicional dentro

let b = prompt("Introduce un número:");;

const estaFuncion = b => {
    if(b > 3){
        return "El número es mayor de tres";
    } else{
        return "El número es menor de tres";
    }
}

console.log(estaFuncion(b));