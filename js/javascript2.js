//alert("Ya es viernes");

let nombre = "Lucía";
let profesion = "Maestra";
let antiguedad = 35;
let sueldo = 2500;
let plusAntiguedad = 10;
let salida;
let sueldoPlus;

//Mostrar por consola: (nombre) es (profesion) y lleva (antiguedad) años trabajando

console.log("Mensaje a mostrar");

console.log(nombre + " es " + profesion + " y lleva " + antiguedad + " trabajando.");

salida = nombre + " es " + profesion + " y lleva " + antiguedad + " trabajando.";

document.getElementById("mensaje").textContent = salida;

profesion = "Directora";
antiguedad = antiguedad + 1;



document.getElementById("mensaje").textContent = nombre + " es " + profesion + " y lleva " + antiguedad + " trabajando.";

//La empresa ha decidido dar un plus a los trabajadores de 10€ por año trabajado
//Mostrar por pantalla cuanto gana (nombre)

//cálculo del sueldo con el plus de antiguedad
sueldoPlus = antiguedad * plusAntiguedad + sueldo;

salida = nombre + " gana " + sueldoPlus + " con plus de antiguedad incluido";

document.getElementById("sueldo").textContent = salida;
