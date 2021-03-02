//Variables
const marca = document.getElementById('marca');
const year = document.getElementById('year');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');
const resultados = document.getElementById('resultado');

const datosSeleccionados = {
    marca: '',
    modelo: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//Event Listeners
document.addEventListener('DOMContentLoaded', iniciaCarga);

marca.addEventListener('change', e =>{
    datosSeleccionados.marca = e.target.value;
    filtrarDatos();
});
year.addEventListener('change', e =>{
    datosSeleccionados.year = parseInt(e.target.value);
    filtrarDatos();
});
minimo.addEventListener('change', e =>{
    datosSeleccionados.minimo = parseInt(e.target.value);
    filtrarDatos();
});
maximo.addEventListener('change', e =>{
    datosSeleccionados.maximo = parseInt(e.target.value);
    filtrarDatos();
});
puertas.addEventListener('change', e =>{
    datosSeleccionados.puertas = parseInt(e.target.value);
    filtrarDatos();
});
transmision.addEventListener('change', e =>{
    datosSeleccionados.transmision = e.target.value;
    filtrarDatos();
});
color.addEventListener('change', e =>{
    datosSeleccionados.color = e.target.value;
    filtrarDatos();
});


//Funciones
function iniciaCarga(){
    mostrarYears();//Carga las options del select years
    reinicioValores();//Regresa los valores a null cuando se reinicia
}

function reinicioValores(){
    marca.value = '';
    year.value = '';
    minimo.value = '';
    maximo.value = '';
    puertas.value = '';
    transmision.value = '';
    color.value = '';
}

function mostrarYears(){
    for(i = 2020; i >= 2010; i--){
        const valor = document.createElement('option');
        valor.textContent = i;
        valor.value = i;
        year.appendChild(valor);
    }
}


function limpiarHTML(){
    while(resultados.firstChild){
        resultados.removeChild(resultados.firstChild);
    }
}

function filtrarDatos(){
    limpiarHTML();//Quita los valores del html
    const resultado = autos.filter(escogerMarca).filter(escogerYear).filter(escogerMinimo).filter(escogerMaximo).filter(escogerPuertas).filter(escogerTransmision).filter(escogerColor);
    console.log(resultado)
    if(resultado.length !== 0 && resultado.length !== 19){
        const valores = resultado.forEach( e =>{
            const busqueda = document.createElement('p');
            const {marca, modelo, year, precio, puertas, color, transmision} = e;
            busqueda.textContent = `${marca} ${modelo} ${year} - $${precio} - ${puertas} puertas ${color} ${transmision}`
            resultados.appendChild(busqueda);
        });
    }else if(resultado.length !== 19)
    {
        const busqueda = document.createElement('p');
        busqueda.textContent = 'Busqueda sin coincidencias';
        resultados.appendChild(busqueda);
    }
}

function escogerMarca(e){//La letra e trae el valor autos del arreglo higher
    if(datosSeleccionados.marca){
        return e.marca === datosSeleccionados.marca;
    }else{
        return e;
    }
}

function escogerYear(e){
    if(datosSeleccionados.year){
        return e.year === datosSeleccionados.year;
    }else{
        return e;
    }
}

function escogerMinimo(e){
    if(datosSeleccionados.minimo){
        return e.precio >= datosSeleccionados.minimo;
    }else{
        return e;
    }
}

function escogerMaximo(e){
    if(datosSeleccionados.maximo){
        return e.precio <= datosSeleccionados.maximo;
    }else{
        return e;
    }
}

function escogerPuertas(e){
    if(datosSeleccionados.puertas){
        return e.puertas === datosSeleccionados.puertas;
    }else{
        return e;
    }
}

function escogerTransmision(e){
    if(datosSeleccionados.transmision){
        return e.transmision === datosSeleccionados.transmision;
    }else{
        return e;
    }
}

function escogerColor(e){
    if(datosSeleccionados.color){
        return e.color === datosSeleccionados.color;
    }else{
        return e;
    }
}

function imprimirResultados(){
    const busqueda = document.createElement('p');
    busqueda.textContent = `

    `
}