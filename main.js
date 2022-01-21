
// Se solicita al usuario que ingrese la forma y se setean las variables

let forma = prompt("Ingrese una forma o ESC para salir");
let cuadrado = 0, circulo = 0, rectangulo = 0, triangulo = 0;

console.log(forma);

//Entrada al bucle, condicion de fin: que el usuario ingrese ESC
while (forma != 'ESC')
{
    switch (forma) {
        //caso si la forma es un cuadrado
        case 'cuadrado':
            cuadrado++;
            alert ("usted tiene: " + cuadrado + " cuadrados, " + circulo + " circulos, " + rectangulo + " rectangulos, y " + triangulo + " triangulos");
            console.log ("cantidad de cuadrados ingresados = " + cuadrado);
            break;
        case 'circulo':
            //caso si la forma es un circulo
            circulo++;
            alert ("usted tiene: " + cuadrado + " cuadrados, " + circulo + " circulos, " + rectangulo + " rectangulos, y " + triangulo + " triangulos");
            console.log ("cantidad de circulos ingresados = " + circulo);
            break;
        case 'rectangulo':
            //caso si la forma es un rectangulo
            rectangulo++;
            alert ("usted tiene: " + cuadrado + " cuadrados, " + circulo + " circulos, " + rectangulo + " rectangulos, y " + triangulo + " triangulos");
            console.log ("cantidad de rectangulos ingresados = " + rectangulo);
            break;
        case 'triangulo':
            //caso si la forma es un triangulo
            triangulo++;
            alert ("usted tiene: " + cuadrado + " cuadrados, " + circulo + " circulos, " + rectangulo + " rectangulos, y " + triangulo + " triangulos");
            console.log ("cantidad de triangulos ingresados = " + triangulo);
            break;              
        case 'ESC':
            //condicion de fin
            break;
    }


 forma = prompt("Ingrese una forma o ESC para salir");
}