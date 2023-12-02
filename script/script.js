//CREACIÓN DE LA FUNCIONES PARA LOS EJERCICIOS

//EJERCICIO 1 

function metodoMap(array) {
    let ejercicio1 = array.map(function(elementArray){
        return elementArray * elementArray;
    });  
    const mensajeRespuesta = `
    Resultado Ejercicio 1
    Nuevo Array = [${ejercicio1.join(', ')}]
    Array Original = [${array.join(', ')}]
    `;
    alert(mensajeRespuesta);
}

//EJERCICIO 2

function metodoFilter(array) {
    let ejercicio2 = array.filter(function(nombreArray){
        return nombreArray.length > 5;
    });
    const mensajeRespuesta = `
    Resultado Ejercicio 2
    Nuevo Array = [${ejercicio2.join(', ')}]
    Array Original = [${array.join(', ')}]
    `;
    alert(mensajeRespuesta);
}

//EJERCICIO 3 

function metodoReduce(array) {
    let ejercicio3 = array.reduce(function(a,b){
        return a + b ;
    });
    const mensajeRespuesta = `
    Resultado Ejercicio 3
    Suma de los elementos = ${ejercicio3}
    Array Original = [${array.join(', ')}]
    `;
    alert(mensajeRespuesta);
}

//EJERCICIO 4

function metodoEvery(array) {
    let mensajeRespuesta;
    let ejercicio4 = array.every(function(elementArray){
        return elementArray.length > 3 
    });
    if (ejercicio4 === true) {

        mensajeRespuesta = `
        Resultado Ejercicio 4
        Todas las palabras tienen más de 3 caracteres
        Array Original = [${array.join(', ')}]
        `;
    } else {
        mensajeRespuesta = `
        Resultado Ejercicio 4
        Alguna de las palabras tiene 3 o menos caracteres
        Array Original = [${array.join(', ')}]
        `;
    }
    alert(mensajeRespuesta);
}

//ejercicio 5

function metodoSort(array) {
    let ejercicio5 = array.sort();
    const mensajeRespuesta = `
    Resultado Ejercicio 5
    Nuevo Array ordenado en forma ascendente  = [${ejercicio5.join(', ')}]
    `;
    alert(mensajeRespuesta);
}

//EJERCICIO 6

function mostrarObjeto(object) {
    console.log(" Resultado Ejercicio 6");
    for (const clave in object) {
        console.log(`${clave}: ${object[clave]}`);
      } 
}

//EJERCICIO 7

function sumaCicloFor(array) {
    let ejercicio7 = 0;
    for (let index = 0; index < array.length; index++) {
       ejercicio7 = ejercicio7 + array[index];    
    }
    const mensajeRespuesta = `
    Resultado Ejercicio 7
    Suma de los elementos = ${ejercicio7}
    Array Original = [${array.join(', ')}]
    `;
    console.log(mensajeRespuesta);
    
}

//DECLARACIÓN DE VARIABLES 

const arrayEjercicio1 = [2,4,6,8,10];
const arrayEjercicio2 = [`Juan`, `María`, `Carlos`, `Ana`, `Pedro`, `Luisa`];
const arrayEjercicio3 = [10, 25, 83, 41, 5];
const arrayEjercicio4 = [`Hola`, `Mundo`, `JavaScript`, `Web`];
const arrayEjercicio5 = [5, 3, 8, 1, 2];
const objetoEjercicio6 = {nombre : `Juan`, edad : 25, ciudad : `Ejemplo`};
const arrayEjercicio7 = [1, 2, 3, 4, 5];

