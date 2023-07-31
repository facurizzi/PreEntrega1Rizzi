//IMC=peso(kg)/(estatura(m))2
let altura,peso,imc;
const pesoInferior = 18.5;
const normal = 24.9;
const pesoSuperior = 29.9;
let seguir,inicio;

const Persona = function(nombre,altura,peso){
    this.nombre=nombre;
    this.altura=altura;
    this.peso=peso;
}

let persona1 = new Persona("facundo", 1.59, 80)
let persona2 = new Persona("alejandro", 1.65, 86)
let persona3 = new Persona("matias", 1.67, 73)
let persona4 = new Persona("lucas", 1.84, 91)
let persona5 = new Persona("juan", 1.81, 85)

let lista = [persona1,persona2,persona3,persona4,persona5]

    inicio = parseInt(prompt("ingresa 1 para buscar una persona, 2 para agregar persona , 3 para calcular el IMC"))

    if(inicio==1)
    {
        filtrarPersona();
    }
    if(inicio==2)
    {
        agregarPersona();
    }
    if(inicio==3)
    {
        while(true){
            altura = parseInt(prompt("Ingresá tu altura en centímetros(Ejemplo: 170cm)"))
    
                if(!isNaN(altura) && altura != null && altura != "" && altura < 250 && altura > 30){
                    altura = altura / 100 ; 
                    break;
                }else{
                    alert("No es una altura valida, vuelva a ingresar");
                    continue;
                }
        }
        while(true){
            peso = parseInt(prompt("Ingresá tu peso en kilos(Ejemplo: 85kg)"))
    
                if(!isNaN(peso) && peso != null && peso != "" && peso < 300 && peso > 30){
                    break;
                }else{
                    alert("no es un peso valido");
                    continue;
                }
        }
    
        calculo(altura,peso);
    
        if(imc < pesoInferior){
            alert("Tu peso es inferior al normal, tu IMC es "+imc);
        }else if(imc < normal){
                alert("Tu peso es Normal, tu IMC es "+imc);
        }else if(imc < pesoSuperior){
            alert("Tu peso es superior al normal, tu IMC es "+imc);
        }else{
            alert("Tu peso ya es Obesidad, tu IMC es "+imc);
        }
    }


   

function calculo(altura,peso){
    imc = peso / (altura * altura);
    imc = imc.toFixed(2);
}

function filtrarPersona(){
    let palabraclave = prompt("Ingresa el nombre de la persona que queres buscar").trim().toUpperCase()
    let resultado = lista.filter( (persona)=> persona.nombre.toUpperCase().includes(palabraclave) )
    
    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("No se encontro a la persona que buscas")
        return
    }
}

function agregarPersona(){

    let nombrenuevo = prompt("ingresa el nombre de la persona")
    let alturanueva = parseFloat(prompt("ingresa la altura en metros"))
    let pesonuevo = parseFloat(prompt("ingresa el peso de la persona "))

    if(isNaN(alturanueva) || isNaN(pesonuevo || nombrenuevo==="")){
        alert("ingresa datos de personas validos")
        return
    }

    let personanueva = new Persona(nombrenuevo,alturanueva,pesonuevo)
    lista.push(personanueva)
    console.table(lista)
}

