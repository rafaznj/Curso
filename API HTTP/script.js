let listElement = document.querySelector("#app");

let posts = [];

function nutriAPP(){
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")

    .then((response) => response.json()) // se der certo a requisição
    .then((json) => {
        posts = json;

        posts.map((item)=>{
           let liElement = document.createElement("li");
           let titleElement = document.createElement("strong");
           let imgElement = document.createElement("img");
           let descriptionElement = document.createElement("a");

           let titleText = document.createTextNode(item.titulo);
           titleElement.appendChild(titleText);
            liElement.append(titleElement);

            imgElement.src = item.capa;
            liElement.appendChild(imgElement);

            let descriptionText = document.createTextNode(item.subtitulo);
            descriptionElement.appendChild(descriptionText);
            liElement.appendChild(descriptionElement);
            
            liElement.appendChild();

        })
    })

    .catch(() =>{
        console.log("ERRO");
    })
}


nutriAPP();