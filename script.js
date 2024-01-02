function ejecuta(){

    //document.querySelector(".importante").onclick=saludo;
    //var elementos = document.querySelectorAll("#principal p")[0].onclick=saludo;
    var elementos = document.querySelectorAll("#principal p,span")

    for(var i =0; i<elementos.length; i++){
        elementos[i].onclick=saludo;
    }

}

function saludo(){
    alert("Que hay de nuevo?!");
}

window.onload=ejecuta;