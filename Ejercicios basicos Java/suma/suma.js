var resultado = 0;
do {
    var suma = prompt("tu numero")
    if (Number(suma == suma)){
        suma = Number(suma);
        resultado = resultado + suma;
    }
    else{
        if(suma != undefined){
            alert(suma + "No es un numero lerdo")
        }
    }

}
 while (confirm("Si desea seguir agregando numero precione Aceptar de lo contrario pulse Cancelar"));


document.write(resultado);