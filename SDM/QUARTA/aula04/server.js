import express from 'express';
import bodyParser from 'body-parser'
import db from './clapback.js'

await db.init("banco.json");

// db.set("/frutas", {
//     "abacaxi" :{
//         id: 1,
//         nome: "pineapple",
//         cor: "amarelo"
//     },
//     "banana" :{
//         id:2,
//         nome: "banana",
//         cor: "creme"
//     },
//     "ameixa" :{
//         id: 3,
//         nome: "ameixa",
//         cor: "vermelha"
//     }
// });
// db.set("/vegetais", {
//     "tomate" :{
//         id: 1,
//         nome: "tomate",
//         cor: "vermelho"
//     },
//     "alface" :{
//         id:2,
//         nome: "alface",
//         cor: "verde"
//     },
//     "batata" :{
//         id: 3,
//         nome: "batata",
//         cor: "amarelo"
//     }
// });

// let dados = db.get("frutas");
// console.log("Dados:", dados);


const server = express();
server.use(bodyParser.json());       // suporte para JSON-encoded bodies
server.use(bodyParser.urlencoded({     // suporte para URL-encoded bodies
    extended: true
}));

server.get('/', (req, res) => {
    res.send('🙋‍♂️ Oi gente');
});

server.get('/frutas', (req, res) => {
    let dados = db.get("/frutas");
    console.log("dados:", dados);
    res.json(dados);
});

server.get('/vegetais', (req, res) => {
    let dados = db.get("/vegetais");
    console.log("dados:", dados);
    res.json(dados);
});

server.listen(3001, () => {
    console.log('Server escutando na porta 3001');
});