import { encrypt } from "./criptografia.js";
import readlinesync from "readline-sync";
import chalk from "chalk";


//  ENCRYPT

// let ret = encrypt("oi");
// console.log(ret);


// REDSYNC E CHALK 01:

// let nome = readlinesync.question('Digite seu nome:');
// console. log('oi ' + nome + '! Tudo bem com vc?');
// console. log(chalk. red('Hello world'));


// REDSYNC E CHALK 02:

function bomdia(nome){
    console.log("bom dia " + chalk.blue(nome));
}

// let nome = readlinesync.question('Digite seu nome:');
// bomdia(nome);

// console.log(bomdia);

// Quando a variavel guarda uma function ela vira uma funtion

// let algo =  bomdia;

// console.log(algo);
// algo("Ana");

let algo = function(nome){
    console.log("bom dia " + chalk.blue(nome));
}
algo("Ana");

