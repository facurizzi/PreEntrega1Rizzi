//IMC=peso(kg)/(estatura(m))2
document.addEventListener("DOMContentLoaded", function () {
    let altura, peso, imc, nombre, valido;

    const pesoInferior = 18.5;
    const normal = 24.9;
    const pesoSuperior = 29.9;
    let lista = [];

    const Persona = function (nombre, altura, peso) {
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
    }

    traerlista();
    mostrar();

    let miFormulario = document.getElementById("formulario");
    miFormulario.addEventListener("submit", iniciar);

    let obtenerInfoIMCBtn = document.getElementById("obtenerInfoIMCBtn");
    obtenerInfoIMCBtn.addEventListener("click", obtenerInfoIMC);

    function iniciar(e) {
        e.preventDefault();

        nombre=document.getElementsByName('Nombre')[0].value
        altura=document.getElementsByName('Altura')[0].value;
        peso=document.getElementsByName('Peso')[0].value;
        valido = true;

        let errorContainer = document.getElementById("error");
        errorContainer.innerHTML = "";

        
        if (!altura || isNaN(altura) || altura <= 30 || altura >= 250) {
            mostrarError("Por favor, ingrese una altura válida (entre 30 y 250 cm).");
            valido = false;
        } else {
            altura = altura / 100;
        }

        if (!peso || isNaN(peso) || peso <= 30 || peso >= 300) {
            mostrarError("Por favor, ingrese un peso válido (entre 30 y 300 kg).");
            valido = false;
        }

        if (valido) {
            calculo(altura, peso);
            agregarPersona(nombre, altura, peso);
            guardarlista();
            mostrar();

            if (imc < pesoInferior) {
                mostrarMensaje("Tu peso es inferior al normal, tu IMC es " + imc);
            } else if (imc < normal) {
                mostrarMensaje("Tu peso es Normal, tu IMC es " + imc);
            } else if (imc < pesoSuperior) {
                mostrarMensaje("Tu peso es superior al normal, tu IMC es " + imc);
            } else {
                mostrarMensaje("Tu peso ya es Obesidad, tu IMC es " + imc);
            }
        }



}

    function mostrarError(mensaje) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: mensaje,
            showCancelButton: true,
            confirmButtonText: 'Reintentar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById('Nombre').value = "";
                document.getElementById('Altura').value = "";
                document.getElementById('Peso').value = "";
            }
        });
    }

    function mostrarMensaje(mensaje) {
        Swal.fire({
            icon: 'info',
            title: 'Resultado',
            text: mensaje
        });
    }

    function guardarlista() {
        const listaJSON = JSON.stringify(lista);
        localStorage.setItem("listaData", listaJSON);
    }

    function traerlista() {
        if (localStorage.getItem("listaData")) {
            almacenados = JSON.parse(localStorage.getItem("listaData"));

            for (const objeto of almacenados)
                lista.push(new Persona(objeto.nombre, objeto.altura, objeto.peso))
        }
    }

    function mostrar() {
        const muestra = document.getElementById("mostrados");
        muestra.innerHTML = "";

        if (lista)
            lista.forEach((Persona) => {
                const listlista = document.createElement("li")
                listlista.textContent = `${Persona.nombre} - Altura: ${Persona.altura} - Peso: ${Persona.peso}`
                muestra.appendChild(listlista)
            })
    }

    function calculo(altura, peso) {
        imc = peso / (altura * altura);
        imc = imc.toFixed(2);
    }

    function agregarPersona(nombre,altura,peso){

        let nombrenuevo = nombre;
        let alturanueva = altura;
        let pesonuevo = peso;
    
        let personanueva = new Persona(nombrenuevo,alturanueva,pesonuevo)
        lista.push(personanueva)
    }

    function obtenerInfoIMC() {
        fetch("info.json")
            .then(response => response.json())
            .then(data => {
                let infoIMC = document.getElementById("infoIMC");
                infoIMC.innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                `;
            })
            .catch(error => {
                console.error("Error al cargar info.json: " + error);
                mostrarError("No se pudo obtener información en este momento. Inténtalo más tarde.");
            });
    }

    
});

