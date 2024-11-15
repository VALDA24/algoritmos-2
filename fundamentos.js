//variables y tipos de datos

//TIPOS DE DATOS PRIMITIVOS
let nombres="Deivi Santiago Cardenas Rojas"
let edad= 20
let mayorEdad= true
let estatura

console .log(typeof nombres)
console .log(typeof edad)
console .log(typeof mayorEdad)
console .log(typeof estatura)


//TIPOS DE DATOS COMPLEJOS
let frutas = ['Pera','Manzana','Mango','Durazno']

let auto ={
    placa: 'MCN79C',
    marca:'Chevrolet',
    modelo:2024,
    tipo: 'Camioneta',
    unicodueño: true,
    kilometraje: 20000
}


//CONCATENANDO VARIABLES

console .log('Bienvenido usuario ' + nombres + ' Su edad es ' + edad + ' Su fruta favorita es ' + frutas [3] )


//ESTRUCTURAS DE CONTOL CONDICIONAL

let edad2 = 18
let genero = 'Masculino'

if (edad2>17 && edad2<26){
    if(genero == 'Masculino')
        console .log('Pal camion manito')
    else{
        console .log ('No eres APTA')
    }
}      
   
    


else{
    console .log('Se salvo de la trasquilada por viejo o por chinche')
}


let tipoSuscripcion = 'Gold'
switch (tipoSuscripcion) {
    case 'Bronze':
            console .log('No le alcanzo para más, Pobre')    
        break;
    case 'Silver':
            console .log('Aun le falta medio pobre')
        break;
    case 'Gold':
        console .log ('Ya tiene el mejor plan, casi que no')
        break;
    default:
        console .log('No existe este tipo de suscripcion')
        break;
}


//ESTRUCTURA DE CONTROL DE BUCLES

let contador = 0

while (contador<11){
    console .log ('El contador es el numero ' + contador)
    contador = contador + 1
}

for(let i=100; i>0; i = i -10 ){
    console .log ('El contador con for es ' +i )

}