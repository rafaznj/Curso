/*

let lista = ["Rafael","João","Bernardo"];

lista.map((item,index ) =>{  //
    console.log(`Passando: ${item} ${index}`);
})

*/

let numeros = [2,4,3,7,5,8];

let total = numeros.reduce((acumulador, numero, indice, original) =>{
    console.log(`${acumulador} - total`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - indice atual`);
    console.log(`${original} - array original`);
    
    return acumulador+=numero; 
})

console.log(`Total do número: ${total}`);