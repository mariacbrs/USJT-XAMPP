console.log("vamos jogar palitinhos?");
// alert("vamos jogar palitinhos?");

// let response = prompt("vamos jogar palitinhos?");
// document.getElementById("resp").innerHTML(response);
// response = parseInt(response);
// console.log(response+6);

// let nomeJogador = prompt("Qual seu nome?");
let palitosJogador = 3;
let qntEscolhaJogador = 0;
let qntPalpiteJogador = 0;

let nomeComp = "Computador";
let palitosComputador = 3;
let qntEscolhaComputador = 0;
let qntPalpiteComputador = 0;

// console.log(nomeJogador);

function calculaPalpiteComp(){
    let qntSorteada = parseInt(Math.random()*10 % palitosComputador + 1);
    let palpite = qntEscolhaComputador + qntSorteada;
    return palpite; 
}

while(palitosJogador>0 && palitosComputador >0){
    qntEscolhaJogador = parseInt(prompt("quantos palitos deseja separar?"));
    qntEscolhaComputador =parseInt(Math.random()*10 % palitosComputador) + 1;

    qntPalpiteJogador = prompt("qual o palpite?");
    qntPalpiteComputador = calculaPalpiteComp();
    
    console.log("escolha do jogador:", qntEscolhaJogador);
    console.log("escolha do computador:", qntEscolhaComputador);

    let soma = qntEscolhaComputador + qntEscolhaJogador;
    if(qntEscolhaJogador == soma){
        alert("user ganhou");
        qntEscolhaJogador--
    }else if(qntPalpiteComputador ==soma){
        alert("computador ganhou");
        qntEscolhaComputador--
    }else{
        alert("sem ganhador");
    }
    let texto = nomeJogador +" com"+palitosJogador+" palitos";
    texto = texto + nomeComp+" com"+palitosComputador+ "palitos";
    alert(texto);
}



// let teste = calculaPalpiteComp();
// console.log(teste);
