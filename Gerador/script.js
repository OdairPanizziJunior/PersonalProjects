//let <- criar variável em JS

let sliderElement = document.querySelector("#slider"); //pegando o elemento slider do html
let buttonElement = document.querySelector("#button"); //pegando o clique do botão

let sizePassword = document.querySelector("#valor"); //pegar o valor do tamanho da barra
let password = document.querySelector("#password"); //pegar o campo da senha gerada no Span password

let containerPassword = document.querySelector("#container-password"); //pegar o id do container input

let charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!@"; //intervalo de caracteres que podem ser gerados
let novaSenha = ""; //vazio pq ainda não foi gerada

sizePassword.innerHTML = sliderElement.value; //exibe o tamanho setado em "value"

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value; //passando para o sizePassword o valor que tem atualmente
}


// sliderElement.value
// pega o tamanho que o usuário está passando na barra


function generatePassword(){
    alert("Vamos gerar a senha!");
}