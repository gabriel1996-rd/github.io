//objeto
const persona = {nombre:"Gabriel",sexo:"Masculino"};
console.log("Objeto inicial",persona);

// Agregar a objeto
persona.ocupacion="Estudiante";
console.log("Objeto luego de agregar propiedades",persona);

//Delete de objeto
delete persona.sexo;
console.log("Objeto despues del delete",persona);


// Arreglo
const numeros=[50,60,70];
console.log("Arreglo inicial",numeros);

// Agregar elementos
numeros.push(80,90);
console.log("Arreglo con elementos agregados",numeros);

//Eliminar elemento
numeros.shift();
console.log("Arreglo con el primer elemento eliminado",numeros);

//Funcion suma
function add(a,b) {
    return a+b;
}
console.log("Suma de dos numeros",add(4,5))

//Funcion comparar
function comparar(c,d){
    if (c>d) {
        return c+" Es mayor que "+ d;
    }
    else if (d>c) {
        return d + " Es mayor que " + c;
    }
    else{
        return " Los valores son iguales "
    }
}
 
console.log("Comparacion (9 vs 5):",comparar(9,5));
 
// Do while
function contador(){
    let Contador=1;
    console.log("\n Contador en un do while:");
    do {console.log("Suma Contador",Contador)
        Contador++;
    }while(Contador<=4);
}
contador();

// switch

function EvaluarMes(mes){
    switch(mes){
        case 1: return "Enero";
        case 2: return "Febrero";
        case 3: return "Marzo";
        case 4: return "Abril";
        case 5: return "Mayo";
        case 6: return "Junio";
        case 7: return "Julio";
        case 8: return "Agosto";
        case 9: return "Septiembre";
        case 10: return "Octubre";
        case 11: return "Noviembre";
        case 12: return "Diciembre";
    }
}
console.log("Mes 7: ",EvaluarMes(7));
//Funcion sumar de 5 en 5 con while

function jumpfive(){
    let a=1;
    console.log("\nNumeros del 1-100 saltando de 5 en 5:");
    while (a<=100){
        console.log(a);
        a+=5;
    }

}
jumpfive();
//funcion con una Matriz 

function recorrerMatriz(){
    const matriz=[
        [1,4,6],
        [5,8,9],
        [0,2,3]
    ];
    console.log("\n Recorriendo matriz: ");
    for(let j=0;j< matriz.length;j++){
        for( let k=0; k< matriz[j].length;k++){
            console.log(matriz[j][k]);
        }
    }

}
recorrerMatriz();
// boton Alerta
function alertaboton(){
    alert("Acabas de activar una alerta");
}

// boton Cambio estilo texto
function CambiarEstilo(){
    const elemento=document.getElementById('Elementstyle');
    elemento.classList.toggle('cambio_estilo')

}
