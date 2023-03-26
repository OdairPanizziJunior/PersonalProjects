//let <- criar variável em JS

let sliderElement = document.querySelector("#slider"); //pegando o elemento slider do html
let buttonElement = document.querySelector("#button"); //pegando o clique do botão

let sizePassword = document.querySelector("#valor"); //pegar o valor do tamanho da barra
let password = document.querySelector("#password"); //pegar o campo da senha gerada no Span password

let containerPassword = document.querySelector("#container-password"); //pegar o id do container input

let charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!@"; //intervalo de caracteres que podem ser gerados
let novaSenha = ""; //vazio pq ainda não foi gerada


