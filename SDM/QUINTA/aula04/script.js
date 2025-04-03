function lerXML(){

    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
           txt=this.responseText + "<hr>";

            var dadosXML = this.responseXML;

            var marcas = dadosXML.getElementsByTagName("marca");
            txt +="Marca: "+ marcas[0].childNodes[0].nodeValue;

            txt +="<br> Modelo: "+ dadosXML.getElementsByTagName("modelo")[0].childNodes[0].nodeValue;

            txt+="<br> Cores: ";
            var tagcores = dadosXML.getElementsByTagName("cores");
            var cores= tagcores[0].getElementsByTagName("cor");
            for(i=0; i< cores.length; i++){
                txt+=cores[i].childNodes[0].nodeValue + " - ";
            }

            txt+="<br> Opcionais:";
            var tagOpcionais =  dadosXML.getElementsByTagName("opcionais");
            var opcionais= tagOpcionais[0].getElementsByTagName("opcional");
            for(i=0; i< opcionais.length; i++){
                nome= opcionais[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue;

                marcaOP= opcionais[i].getElementsByTagName("marca")[0].childNodes[0].nodeValue;

                txt+="<br> -Nome:" + nome + "<br> -Marca:" + marcaOP + "<br>";
            }
            


            document.getElementById("divXML").innerHTML = txt;
        }
    }

    req.open( "GET" , "dados.xml" , true );
    req.send();

}