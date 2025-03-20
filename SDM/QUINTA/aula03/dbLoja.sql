CREATE DATABASE loja;

USE loja;

CREATE TABLE produto (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    nome VARCHAR(100) NOT NULL ,
    preco DOUBLE 
    );
    
INSERT INTO produto ( nome, preco) VALUES 
( "Coca-cola" , 9.89 ) ,
( "Pepsia" , 7.29 ) ,
( "Trakinas" , 3.99 );
