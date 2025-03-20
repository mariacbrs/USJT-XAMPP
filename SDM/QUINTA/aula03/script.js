function lerJSON(){

    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            var objJSON = JSON.parse( this.responseText );
            var conteudo = "<br>brand: " + objJSON.brand;
            conteudo += "<br>model: " + objJSON.model;
            conteudo += "<br>color: ";
            objJSON.colors.forEach( color => {
                conteudo += color + " - ";
            });
            conteudo += "<br>optional: ";
            objJSON.optional.forEach( op => {
                conteudo += "<br>name: " + op.name + " | brand: " + op.brand;
            });
            document.getElementById("divJSON").innerHTML = conteudo;
        }
    }

    req.open( "GET" , "dados.json" , true );
    req.send();

}

function lerProdutos(){
    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            objJSON = JSON.parse(this.responseText);
            if(objJSON.resposta){
                alert(objJSON.resposta);
            }else{
                txt = '<br><table border="1">';
                txt += '<tr>';
                txt +='<th>ID</th>';
                txt +='<th>Nome</th>';
                txt +='<th>Preço</th>';
                txt += '</tr>';

                produtos = objJSON.produtos;
                produtos.sort((a, b) => a.id - b.id);
                produtos.forEach( prod =>{
                    txt += '<tr>';
                    txt += '<td>'+ prod.id + '</td>';
                    txt += '<td>'+ prod.nome + '</td>';
                    txt += '<td>'+ prod.preco + '</td>';
                    txt += '</tr>';
                })
                txt += '</table>';
                document.getElementById("divProdutos").innerHTML=txt;
            }

        }
    }

    // get usado para buscar/ler dados
    req.open( "GET" , "server.php?buscar" , true );
    req.send(); 
}

function cadastrar(){
    txtNome = document.getElementById("txtNome");
    nome = document.getElementById("txtNome").value;

    if(nome == ""){
        alert("O nome deve ser preenchido!");
    }else{
        txtPreco = document.getElementById("txtPreco");
        preco = txtPreco.value.replace("," , ".");
        if(preco == ""){
            preco = 0.0;
        }

        var req = new XMLHttpRequest();
    
        req.onreadystatechange = function(){
            if( this.readyState == 4 && this.status == 200){
                objJSON = JSON.parse(this.responseText);
                if(objJSON.resposta){
                    alert(objJSON.resposta);
                }else{
                    alert("ID gerado: " + objJSON.id);
                    lerProdutos();
                    txtNome.value = "";
                    txtPreco.value ="";
                }
    
            }
        }
    
        //post é usado para enviar dados 
        req.open( "POST" , "server.php?inserir" , true );
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send("name=" + nome + "&price=" + preco); 
    }
}