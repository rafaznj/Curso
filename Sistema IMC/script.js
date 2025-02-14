let peso;
let altura;
let imc;
let resultado;

function calcularIMC(event) {
    event.preventDefault(); // evita que os dados sumam ao enviar os dados pelo input, n dá o refresh

    peso = document.getElementById("peso").value; // pega o valor do input, por meio do ID colocado no input
    altura = document.getElementById("altura").value;

    imc = peso / (altura ** 2);

    resultado = document.getElementById('resultado');

    if(imc < 17){
        resultado = document.getElementById("resultado");
        resultado.style.color = "red";
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, você está muito abaixo do peso.`
    }
    else if(imc >= 17 && imc <= 18.49){
        resultado.style.color = "red";
        resultado = document.getElementById("resultado");
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, você está abaixo do peso.`
    }
    else if(imc >= 18.5 && imc <= 24.99){
        resultado.style.color = "green";
        resultado = document.getElementById("resultado");
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, você está com peso normal.`
    }
    else if(imc >= 25.0 && imc <= 29.99){
        resultado.style.color = "red";
        resultado = document.getElementById("resultado");
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, você está acima do peso.`
    }
    else if(imc >= 30){
        resultado.style.color = "red";
        resultado = document.getElementById("resultado");
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)}, você está com grau de obesidade.` // to fixed é pra definir o numero de casas decimais, .toFixed(numero de casas decimais escolhidas)
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = ""; // vai limpar as inputs apos apertar o button

}