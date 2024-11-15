function saludar(){
    console .log ("Hola Mundo")
    alert("Hello World")
}

//ALGORITMO QUE REALICE UNA SUMA ENTRE DOS VALORES INGRESADOS POR EL USUARIO

function sumar(){
    //DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION DEL ALGORITMO
    let n1 = 0;
    let n2 = 0;
    let sumar = 0;
    //SOLICITAR Y CAPTURAR LOS VALORES INGRESADO POR PARTE DEL USUARIO
    n1 = parseInt (prompt('Por favor ingrese el primer valor a sumar '))
    n2 = parseInt (prompt('Por favor ingrese el segundo valor a sumar '))
    //REALIZAR EL PROCEDIMIENTO
    sumar = n1 + n2
    //IMPRIMIR EL RESULTADO EN PANTALLA
    console .log('El resultado de la suma es ' + sumar)
    alert('El resultado de la suma es ' + sumar )    
}

// ALGORITMO QUE REALICE UNA SUMA, RESTA, MULTIPLICACION O DIVISION ENTRE DOS VALORES INGRESADOS POR EL USUARIO

function operaciones(){
    let op1 = 0
    let op2 = 0
    let sumaop = 0
    let restaop = 0
    let multipliacionop = 0
    let divisionop = 0
    op1 = parseInt (prompt('Ingrese el valor'))
    op2 = parseInt (prompt('Ingrese el valor'))

    sumaop = op1 + op2
    restaop = op1 - op2 
    multiplicacionop = op1 * op2
    divisionop = op1 / op2

    alert('El resultado de la suma es ' + sumaop)
    alert('El resultado de la resta es ' + restaop)
    alert('El resultado de la multipliacion es ' + multipliacionop)
    alert('El resultado de la division es ' + divisionop)

}

//ALGORITMO QUE DETERMINE EL CUADRADO DE UN NUMERO
function numCuadrado(){
    let num1 = 0 
    let total = 0
    num1 = parseInt(prompt('ingrese el numero para hayar el cuadrado '))
    total = num1 * num1
    alert('El cuadrado de su numero es ' + total )
}

//REALIZAR UN ALGORITMO QUE DETERMINE EL AREA DE UN CUADRADO
function areaTriangulo() {
    let base = 0;
    let altura = 0;
    let area = 0;

    base = parseFloat(prompt('Ingrese el valor de la base del triángulo'));
    altura = parseFloat(prompt('Ingrese el valor de la altura del triángulo'));
    area = (base * altura) / 2;
    alert('El área de su triángulo es ' + area);
}


//REALIZAR UN ALGORITMO QUE DETERMINE 
//LA MEDIDA EN KILOMETROS METROS Y CENTRIMETROS DE UN VALOR DADO EN PULGADAS

function convertirPulgadas() {
    let pulgadas = parseFloat(prompt('Ingrese el valor en pulgadas'));
    
    let kilometros = pulgadas * 0.0000254;
    let metros = pulgadas * 0.0254;
    let centimetros = pulgadas * 2.54;

    alert('La medida en kilómetros es:   ' + kilometros + 
          '\nLa medida en metros es:   ' + metros + 
          '\nLa medida en centímetros es:   ' + centimetros);
}

//realizaer un algoritmo que pregunte al usuario a que moneda quiere convertir el cop entre dolar,euro y yenes

function conversiondepes() {
    
    let cop=0;
    let moneda;
    let dol=0.00023;
    let eur=0.00021;
    let yen= 0.035;

 cop = parseInt(prompt('ingresela cantidad en cop a convertir: '));
 moneda = prompt('ingrese el tipo de moneda que quiere convertir entre dolar, euro y yenes ');

 switch (moneda) {
    case 'dolar':
        operacion = cop*dol
        console.log('en dolar es: ' + operacion)
        alert('en dolar es: ' + operacion)
        break;

        case 'euro':
            operacion= cop*eur
            console.log('en euro es: ' + operacion)
            alert('en euro es: ' + operacion)
        break;

        case 'yenes':
            operacion = cop*yen 
            console.log('en yenes es: ' + operacion)
            alert('en yenes es ' + operacion)
        break;
    }
}

//algoritmo que determine si un numero es par o impar 

function parImpar () {
    let valorIngresado = 0;

    valorIngresado= parseInt (prompt ("ingrese el valor"));
    if (valorIngresado %2 == 0){
    console.log ("El numero es par");
    alert ("el numero es par")
}else{
console.log ("el numero es impar")
}
}

//algoritmo que determine el mayor entre dos numeros ingresados por el usuario

 function NumeroMayor (){
    let num1=0;
    let num2=0;
    alert ("valida el mayor de dos numeros")
 
    num1= parseInt ( prompt ("ingrese el primer numero"))
    num2= parseInt (prompt ("ingrese el segundo numero"));
    if (num1==num2){
        alert ("no hay un numero mayor");
    } 
    else if (num1 > num2){
        alert (num1 + "es mayor que" + num2);
    }
    else if (num2>num1){
        alert (num2 + "es menor que" + num1)};
    }

//algoritmo que determine el menor de 3 numeros ingresados por el usuario 
function menor3 (){
    let num0 = 0;
    let num1 = 0;
    let num2 = 0;

    num0 = parseInt (prompt("ingrese el numero para saber cual es menor"));
    num1 = parseInt (prompt ("ingrese el segundo numero para saber cual es menor"))
    num2 = parseInt (prompt("ingrese el tercer numero para saber cual es menor"))
if ((num0==num1) && (num0==num2)){
    alert ("el primer numero ingresado es el menor");
}
else if ((num1<num0) && (num2<num0)){
    alert ("el segundo numero ingresado es el menor");
}
else if ((num0>num1) && (num2 >num1)){
    alert ("el tercer numero ingresado es el menor");
}
}

//el colegio a b c requiere un sistema que le permita validar a x estudiante si aprobo o reprobo x materia teniendo en cuenta que son 9 notas del 1 al 10 y se aprueba con una nota de 6.1 en adelante 
function promedio(){
    let nombre=""
    let materia=""
    let n1,n2,n3,n4,n5,n6,n7,n8,n9=0
    let promedio
    promedio =(n1+n2+n3+n4+n5+n6+n7+n8+n9) /9
    if (promedio >=6.1){
        alert ("Usted aprobo la materia:)")
    } else {
        alert ("Usted ha reprovado:(")
    }
}



//un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el banco paga un interes mensual del 0,7%
function DineroGanado (){
    let capital =0;
    let tiempo =0;
    interes = 0;
    let total = 0;

    interes=(capital*0.084) * tiempo;
    total = capital + interes
    alert ("el dinero ganado es" + total)

}