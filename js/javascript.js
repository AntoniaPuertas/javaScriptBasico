//alert("Hola Mundo");

// declarar variables
let nombreAlumno = "Manolo";
let apellidoAlumno = "Pérez";
let edad = 28;
let calificacion = 8;

//alert("Hola" + " " + nombreAlumno + " " + apellidoAlumno);

console.log("Hola desde consola");

//Mostrar por consola el siguiente mensaje: Hola Manolo, has sacado un 8 este trimestre;
//Hola nombreAlumno, has sacado un calificacion este trimestre
console.log("Hola " + nombreAlumno + " has sacado un " + calificacion + " este trimestre.");

calificacion = 9.5;

console.log("Hola " + nombreAlumno + " has sacado un " + calificacion + " este trimestre.");

calificacion = calificacion + 1; 

console.log(`Hola ${nombreAlumno} has sacado un ${calificacion} este trimestre`);

//Operaciones numéricas
let produco = "Jamón Ibérico";
let precio = 100;
const iva = 21;

//Mostrar por consola: El (producto) cuesta (precio + iva) €
//let precioConIva = precio + precio * iva / 100;
let precioDelIva = precio * iva / 100;
let pvp = precio + precioDelIva;

let oferta = 10;

//Bajar el precio de los productos un tanto por ciento que tenemos en la variable oferta y volver a mostrar el precio

let descuento = precio * oferta / 100;

let precioConDescuento = precio - descuento;

pvp = precioConDescuento + (precioConDescuento * iva / 100);

//mostrar: Hoy el (producto) está de oferta y cuesta (pvp)

//Llega la navidad, la empresa quiere repartir los jamones que quedan entre los empleados. Muestra cuantos jamones le corresponden a cada empleado y cuantos jamones sobran

let empleados = 10;
let jamones = 23;

let cantidad = jamones / empleados;

console.log(cantidad);

let cantidad_entero = parseInt(cantidad);

console.log(cantidad_entero);

let sobran = jamones % empleados;
console.log(sobran);

