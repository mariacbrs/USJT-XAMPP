CREATE DATABASE cliente;

USE cliente;

CREATE TABLE pessoa (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    nome VARCHAR(100) NOT NULL ,
    altura DOUBLE 
    );
    
INSERT INTO pessoa ( nome, altura) VALUES 
( "Maria" , 1.50 ) ,
( "Joao" , 1.80 ) ,
( "Ana" , 1.70 ),
( "Vitor" , 1.70 ),
( "Julio" , 1.72 ),
( "Julia" , 1.60 ),
( "Vitoria" , 1.62 );

select * from pessoa;
