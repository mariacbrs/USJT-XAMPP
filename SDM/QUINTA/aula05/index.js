// NODE
// or const http = require('http');
import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res)=>{
// or const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //or res.writeHead('Content-Type', 'text/plain'); 
    res.end('teste');
});

server.listen(port, hostname, () =>{
    console.log(`Servidor sendo executado em: http://${hostname}: ${port}/`);
});