var total=0
function sumador(valor,tipo){
    var detalle =document.getElementById("detalle")
    var elemento=document.createElement("p")
    elemento.innerHTML=tipo+"$"+valor;
    appendChill(elemento)
total=total+valor
var precio=document.getElementById("preciototal")
precio.innerHTML=total
    total
}