"use strict";
var DesignColors;
(function (DesignColors) {
    // white = "a", // ele é enumerador, se eu definir o enum com um numero ele vai reconhecer e definir o proximo de mnr crescente
    // black // black nao recebe o valor de b, por ser uma string ele nao faz essa função
    DesignColors[DesignColors["white"] = 1] = "white";
    DesignColors[DesignColors["black"] = 2] = "black";
})(DesignColors || (DesignColors = {}));
console.log(DesignColors.black);
