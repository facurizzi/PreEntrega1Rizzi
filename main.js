//IMC=peso(kg)/(estatura(m))2
let altura,peso,imc;
const pesoInferior = 18.5;
const normal = 24.9;
const pesoSuperior = 29.9;

while(true){
    altura = parseInt(prompt("Ingresá tu altura en centímetros(Ejemplo: 170cm)"))

        if(!isNaN(altura) && altura != null && altura != "" && altura < 250 && altura > 1){
            altura = altura / 100 ; 
            alert("altura ingresada"+altura)
            break;
        }else{
            alert("No es una altura valida, vuelva a ingresar");
            continue;
        }
}
while(true){
    peso = parseInt(prompt("Ingresá tu peso en kilos(Ejemplo: 85kg)"))

        if(!isNaN(peso) && peso != null && peso != "" && peso < 300 && peso > 1){
            alert("peso ingresado"+peso);
            break;
        }else{
            alert("no es un peso valido");
            continue;
        }
}

calculo(altura,peso);


if(imc < pesoInferior){
    alert("Tu peso es inferior al normal, tu IMC es"+imc);
}
if(imc > pesoInferior && imc < normal){
    alert("Tu peso es Normal, tu IMC es"+imc);
}
if(imc > normal && imc < pesoSuperior){
    alert("Tu peso es superior al normal, tu IMC es"+imc);
}
if(imc > pesoSuperior){
    alert("Tu peso ya es Obesidad, tu IMC es"+imc);
}


function calculo(altura,peso){
    imc = peso / (altura * altura);
}