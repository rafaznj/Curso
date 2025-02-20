// function convidados(...nomes) {
//     console.log("Sejam bem-vindos");
//     console.log(nomes);
// }

// convidados("Mathesu", "Lucas")

function sorteador(...numeros){
     console.log(numeros);

     const numeroGerado = Math.floor(Math.random() * numeros.length)
     console.log(numeros[numeroGerado]);
}

sorteador(1,15,65,36,87,32,76)