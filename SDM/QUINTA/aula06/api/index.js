var express = require("express");
var http = require("http");
var mysql = require("mysql2");

var connLoja = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mcbrs",
    database: "loja"
});

var connCliente = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mcbrs",
    database: "cliente"
}); 

try{
    if(conn.state !="authenticated"){
        conn.connect(function(erro){
            if(erro){
                console.log(erro);
            }
        });
    }
}catch(error){
    console.log(error);
};


var app = express();

app.get( "/" , (req, res)=>{ 
    res.status(200).send("Welcome to my API REST!");

});

app.get( "/produto" , (req, res)=>{ 
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    var sql = 'SELECT * FROM produto';
    connLoja.query(sql, function(err, result, fields){
        if(err){
            res.send('{"resposta " : "Erro ao executar resposta"}');
        }else{
            res.send(JSON.stringify(result));
        }
    });

});
app.get( "/cliente" , (req, res)=>{ 
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    var sql = 'SELECT * FROM pessoa';
    connCliente.query(sql, function(err, result, fields){
        if(err){
            res.send('{"resposta " : "Erro ao executar resposta"}');
        }else{
            res.send(JSON.stringify(result));
        }
    });

});

http.createServer(app).listen(8001, ()=>{
    console.log('Server listening on http://localhost:8001');
});
