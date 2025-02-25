// let lista = ["Rafael", 4, 8, "João", 9];
// let listagem = lista.find((item) => {
//     if (item === "Rafael") {
//         console.log("ITEM ENCONTRADO")

//     }
// })

// console.log(listagem);

let nomes = ["Roberto", "Carlos", "Rogerio", "Davi", "Ana", "Bia"];

let listagem = nomes.filter((item)=>{
    return item.length <= 3;
})

console.log(listagem);