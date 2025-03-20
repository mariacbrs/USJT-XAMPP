<?php
 
    header("Content-type: application/json" );

    $local = "localhost";
    $user = "root";
    $senha = "mcbrs";
    $banco = "loja";
    
    if( isset( $_REQUEST["buscar"] ) ){
        try{
            $conn = mysqli_connect($local , $user , $senha , $banco);
 
            if( $conn ){
                $query = "SELECT * FROM produto ORDER BY nome";
                $result = mysqli_query( $conn , $query );
                $linhas = array();
                while( $row = mysqli_fetch_assoc( $result ) ){
                    $linhas[] = $row;
                }
                mysqli_close( $conn );
                echo '{ "produtos" : ' . json_encode($linhas) . ' } ';
            }else{
                echo '{ "resposta" : "Erro ao conectar com o banco de dados" } ';
            }
        }catch( \Throwable $th ){
            echo '{ "resposta" : "Erro no servidor" } ';
        }  
    }
    if( isset( $_REQUEST["inserir"] ) ){
        try{
            $conn = mysqli_connect($local , $user , $senha , $banco);
 
            if( $conn ){

                $nome = $_POST["name"];
                $preco = $_POST["price"];

                // preco é valor numerico por isso não vai entre ''
                $query = "INSERT INTO produto(nome, preco) VALUES ('$nome', $preco)";

                mysqli_query( $conn , $query );
                $id = mysqli_insert_id( $conn );

                mysqli_close( $conn );
                echo '{ "id" : '.$id.' } ';
            }else{
                echo '{ "resposta" : "Erro ao conectar com o banco de dados" } ';
            }
        }catch( \Throwable $th ){
            echo '{ "resposta" : "Erro no servidor" } ';
        }  
    }

    
 
?>