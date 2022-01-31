let comida = "";
let bebida = "";
let sobremesa = "";
let valorComida = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let valorTotal = 0;


function selecionarComida1(){
    document.getElementById("comida1").style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById("comida2").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("comida3").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("confirm1").style.display = "block";
    document.getElementById("confirm2").style.display = "none";
    document.getElementById("confirm3").style.display = "none";
    comida = "Macarronada";
    valorComida = 25.00;
    verificacao();
}

function selecionarComida2(){
    document.getElementById("comida2").style.boxShadow = "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    document.getElementById("comida1").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("comida3").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("confirm2").style.display = "block";
    document.getElementById("confirm1").style.display = "none";
    document.getElementById("confirm3").style.display = "none";
    comida = "Pizza";
    valorComida = 45.00;
    verificacao();
}

function selecionarComida3(){
    document.getElementById("comida3").style.boxShadow = "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    document.getElementById("comida2").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("comida1").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("confirm3").style.display = "block";
    document.getElementById("confirm2").style.display = "none";
    document.getElementById("confirm1").style.display = "none";
    comida = "Canelone";
    valorComida = 30.00;
    verificacao();
}

function selecionarBebida1(){
    document.getElementById("bebida1").style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById("bebida2").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("bebida3").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("confirm4").style.display = "block";
    document.getElementById("confirm5").style.display = "none";
    document.getElementById("confirm6").style.display = "none";
    bebida = "Drink"
    valorBebida = 12.00;
    verificacao();
}

function selecionarBebida2(){
    document.getElementById("bebida2").style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById("bebida1").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("bebida3").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("confirm5").style.display = "block";
    document.getElementById("confirm4").style.display = "none";
    document.getElementById("confirm6").style.display = "none";
    bebida = "Suco";
    valorBebida = 7.00;
    verificacao();
}

function selecionarBebida3(){
    document.getElementById("bebida3").style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById("bebida2").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("bebida1").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("confirm6").style.display = "block";
    document.getElementById("confirm5").style.display = "none";
    document.getElementById("confirm4").style.display = "none";
    bebida = "Coca-cola";
    valorBebida = 4.90;
    verificacao();
}

function selecionarSobremesa1(){
    document.getElementById("sobremesa1").style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById("sobremesa2").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("sobremesa3").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("confirm7").style.display = "block";
    document.getElementById("confirm8").style.display = "none";
    document.getElementById("confirm9").style.display = "none";
    sobremesa = "Frutilla"
    valorSobremesa = 9.00;    
    verificacao();
}

function selecionarSobremesa2(){
    document.getElementById("sobremesa2").style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById("sobremesa1").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("sobremesa3").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("confirm8").style.display = "block";
    document.getElementById("confirm7").style.display = "none";
    document.getElementById("confirm9").style.display = "none";
    sobremesa = "Brownie";
    valorSobremesa = 15.00;
    verificacao();
}

function selecionarSobremesa3(){
    document.getElementById("sobremesa3").style.boxShadow = "inset 0px 0px 0px 5px #32B72F";
    document.getElementById("sobremesa2").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("sobremesa1").style.boxShadow = "inset 0px 0px 10px -4px rgba(0, 0, 0, 0.25)";
    document.getElementById("confirm9").style.display = "block";
    document.getElementById("confirm8").style.display = "none";
    document.getElementById("confirm7").style.display = "none";
    sobremesa = "Torta de Limão";
    valorSobremesa = 9.00;
    verificacao();
}

// Verifica se a opção já foi selecionada
function verificacao(){
    if((comida !== "") && (bebida !== "") && (sobremesa !== "")){
        document.querySelector(".finalizar-botao").style.display = "block";
    }
}

// Faz a finalização do pedido e ajusta as informações da tela
function fecharPedido(){
    valorTotal = valorComida + valorBebida + valorSobremesa;
    document.querySelector(".tela-finalizacao").style.display = "block"
    document.querySelector(".food").innerHTML = comida;
    document.querySelector(".drink").innerHTML = bebida;
    document.querySelector(".dessert").innerHTML = sobremesa;
    document.querySelector(".valor-food").innerHTML = valorComida.toFixed(2).toString().replace('.', ',');
    document.querySelector(".valor-drink").innerHTML = valorBebida.toFixed(2).toString().replace('.', ',');
    document.querySelector(".valor-dessert").innerHTML = valorSobremesa.toFixed(2).toString().replace('.', ',');
    document.querySelector(".valor-total").innerHTML = (valorComida + valorBebida + valorSobremesa).toLocaleString('pt-BR', { style:'currency', currency: 'BRL'});
}

// Botão de cancelar
function cancelarPedido(){
    document.querySelector(".tela-finalizacao").style.display = "none";
}

// Envia a mensagem via whatsapp
function enviarMensagem(){
    let name = prompt("Qual seu nome?");
    let adress = prompt("Qual seu endereço?");
    let cellNumber = +5586999365216;
    let mensagem = "Olá, gostaria de fazer o pedido: \n- Prato: " + comida + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\nTotal: " + (valorComida + valorBebida + valorSobremesa).toLocaleString('pt-BR', { style:'currency', currency: 'BRL'}) + "\n\nNome: " + name + "\nEndereço: " + adress;
    mensagem = encodeURIComponent(mensagem);
    window.open("https://wa.me/" + cellNumber + "?text=" + mensagem);
}






