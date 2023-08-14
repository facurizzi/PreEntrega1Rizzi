//IMC=peso(kg)/(estatura(m))2
let altura,peso,imc,nombre;
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


let miFormulario=document.getElementById("formulario");
miFormulario.addEventListener("submit", iniciar);

function iniciar(e){
    e.preventDefault();

    nombre=document.getElementsByName('Nombre')[0].value
    altura=document.getElementsByName('Altura')[0].value;
    peso=document.getElementsByName('Peso')[0].value;

    
    
                    if(!isNaN(altura) && altura != null && altura != "" && altura < 250 && altura > 30){
                    altura = altura / 100 ; 
                    
                }else{
                    alert("No es una altura valida, vuelva a ingresar");
                }
        
        
            if(!isNaN(peso) && peso != null && peso != "" && peso < 300 && peso > 30){
                    
                }else{
                    alert("no es un peso valido");
                }
        
    
        calculo(altura,peso);

        agregarPersona(nombre,altura,peso);

        guardarlista();

        let container = document.getElementById("contenedor")
    
        if(imc < pesoInferior){
            container.innerHTML ="Tu peso es inferior al normal, tu IMC es "+imc;
        }else if(imc < normal){
            container.innerHTML ="Tu peso es Normal, tu IMC es "+imc;
        }else if(imc < pesoSuperior){
            container.innerHTML ="Tu peso es superior al normal, tu IMC es "+imc;
        }else{
            container.innerHTML ="Tu peso ya es Obesidad, tu IMC es "+imc;
        }

        mostrar();

        

}

function guardarlista(){
    const listaJSON = JSON.stringify(lista);
    localStorage.setItem("listaData",listaJSON);
}

function mostrar(){
    const muestra =document.getElementById("mostrados");
    muestra.innerHTML = "";

    lista.forEach((Persona)=>{
        const listlista = document.createElement("li")
        listlista.textContent= `${Persona.nombre} - Altura: ${Persona.altura} - Peso: ${Persona.peso}`
        muestra.appendChild(listlista)
    })
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

function agregarPersona(nombre,altura,peso){

    let nombrenuevo = nombre;
    let alturanueva = altura;
    let pesonuevo = peso;

    let personanueva = new Persona(nombrenuevo,alturanueva,pesonuevo)
    lista.push(personanueva)
}

