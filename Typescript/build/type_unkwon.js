"use strict";
let desconhecido;
desconhecido = 'A';
console.log(typeof desconhecido);
// Com any você pode atribuir qualquer tipo e usar como se fosse qualquer tipo. Já unknown você pode atribuir qualquer tipo, mas ao usar ele não é nenhum tipo e você precisará verificar qual é o tipo.
// Uma variável do tipo any você pode ser usada como uma string ou como uma função e até mesmo como um objeto, mostrando que any é equivalente a todos os tipos.
// Já o unknown, mesmo podendo receber qualquer tipo, ele da erro quando se tenta usa-lo como qualquer tipo, portanto não se pode usa-lo como uma string, função, objeto ou qualquer outro tipo diferente de unknown.
