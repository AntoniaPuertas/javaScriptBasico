//Booleanos
//Es un tipo de dato que puede tener dos valores: true y false


//Condicionales
/*
 Sintáxis:
 if(condición){
    instrucciones a ejecutar
 }
*/

let nombre = "Andrés";
let tienePermiso = false;
let salida;

//mostrar por pantalla Andrés tiene permiso si realmente tiene permiso

if(tienePermiso){
    salida = nombre + " Tiene permiso";
    document.getElementById("mensaje").textContent = salida;
}

/*
if(condición){
    código que se ejecuta cuando la condición es verdadera
}else{
    código que se ejecuta cuando la condición es falsa
}
*/

if(tienePermiso){
    salida = nombre + " Tiene permiso";
    document.getElementById("mensaje").textContent = salida;
}else{
    salida = nombre + " NO tiene permiso";
    document.getElementById("mensaje").textContent = salida;
}

let alumno = "María";
let nota = 10;

//Mostrar por pantalla si (alumno) está aprobado o suspenso
let estaAprobado = nota >= 5;
if(estaAprobado){
    salida = alumno + " está aprobado";
}else{
    salida = alumno + " está suspenso";
}

document.getElementById("resultado").textContent = salida;

//Mostrar por pantalla si la nota es igual a 5 el mensaje Esta aprobada por los pelos
if(nota == 5){
    salida = alumno + " está aprobado por los pelos";
}else if(nota == 10){
    salida = alumno + " enhorabuena, tienes matrícula de honor";
}else if(nota > 5){
    salida = alumno + " está aprobado";
}else{
    salida = alumno + " está suspenso";
}

document.getElementById("resultado2").textContent = salida;