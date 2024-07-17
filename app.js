let parrafo = document.querySelector("p");
parrafo.innerHTML= "Entre 1 y 10 ¿Cuál es el número secreto?"

let NumeroSecreto = 0;
let Intentos = 0;
let ListaNumSorteados = [];
let NumMax = 10

function AsignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function VerificarIntento () {
    console.log(Intentos);
    let NumeroUsuario = parseInt(document.getElementById("NumeroUs").value);
    
    if (NumeroSecreto === NumeroUsuario) {
        AsignarTextoElemento ("p", `¡Acertaste el número secreto! Lo lograste en ${Intentos} ${(Intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById ("reiniciar").removeAttribute ("disabled");
    } else {
        // usuario no acerto
        if (NumeroUsuario>NumeroSecreto){
            AsignarTextoElemento("p","El número secreto es menor al que ingresaste")
        } else {
            AsignarTextoElemento ("p", "El número secreto es mayor al que ingresaste")
        }
        Intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja (){
    document.querySelector("#NumeroUs").value = "";
}
function GenerarNumeroSecreto(){
    let NumGenerado = Math.floor (Math.random()* NumMax)+1;

    console.log (NumGenerado);
    console.log (ListaNumSorteados);

    if (ListaNumSorteados.length == NumMax) {
        AsignarTextoElemento("p","Ya se sortearon todos los números")
    } else {

    if (ListaNumSorteados.includes(NumGenerado)){
        return GenerarNumeroSecreto();
    }
    else {
        ListaNumSorteados.push(NumGenerado);
        return NumGenerado;
    }
}
}
function CondicionesIniciales (){
    AsignarTextoElemento("h1","Juego del número secreto");
    AsignarTextoElemento("p",`Entre 1 y ${NumMax} ¿Cuál es el número secreto`);
    NumeroSecreto = GenerarNumeroSecreto();
    Intentos = 1;
}
function ReiniciarJuego (){
    limpiarCaja();
    CondicionesIniciales();
     //Deshabilitar el boton de nuevo juego
     document.querySelector("#reiniciar").setAttribute("disabled","true");
}

CondicionesIniciales();
