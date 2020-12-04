function mostrarNome(){
    let divNova = document.createElement("h1");
    let inputNome = document.querySelector("#nome");
    let inputName = document.querySelector("#idade");
    let textoNovo = document.createTextNode(`Bem vindo ${inputNome.value}, voce tem ${inputName.value} anos`);

    divNova.appendChild(textoNovo);
    document.body.appendChild(divNova);
}

let botaoOk = document.querySelector("#botao");
botaoOk.onclick = mostrarNome;