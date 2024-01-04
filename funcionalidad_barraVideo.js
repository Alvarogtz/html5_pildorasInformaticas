var mivideo,reproducir,barra,progreso
var maximo = 600;

function comenzar() {
    mivideo = document.getElementById("mivideo");
    reproducir = document.getElementById("reproducir");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    reproducir.addEventListener("click",clickando,false);
    barra.addEventListener("click",desplazando,false);
}

function clickando(){
    if(!mivideo.paused && !mivideo.ended){
        mivideo.pause();
        reproducir.innerHTML="Play";
    }else{
        mivideo.play();
        reproducir.innerHTML="Pause";
        bucle=setInterval(estado,30);
    }
}

function desplazando(posicion){
        var ratonX = posicion.pageX-barra.offsetLeft;
        var tiempo = ratonX*mivideo.duration/maximo;

        mivideo.currentTime=tiempo;
        progreso.style.width=ratonX+"px";
}

function estado(){
    if(!mivideo.ended){
        var total = parseInt(mivideo.currentTime*maximo/mivideo.duration);
        progreso.style.width=total+"px"
    }
}

window.addEventListener("load",comenzar,false);