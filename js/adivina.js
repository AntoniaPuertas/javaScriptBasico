//Crear un script que muestre una frase aleatoria cada vez que cargue el html
let frases = [
    "Hoy es tu día de suerte. Aprovecha cada oportunidad!!!",
    "Un viaje inesperado te traerá grandes alegrías.",
    "La paciencia es una virtud. Espera un poco más y verás resultados.",
    "Una persona cercana necesita tu ayuda. Estar atento a las señales.",
    "Tu creatividad está en su punto máximo. Es un buen momento para iniciar un nuevo proyecto.",
    "Un antiguo amigo regresará a tu vida con noticias emocionantes.",
    "La solución a tu problema está más cerca de lo que crees. Mira a tu alrededor.",
    "Tu esfuerzo será recompensado pronto. Sigue adelante.",
    "Una decisión importante se acerca. Confía en tu intuición.",
    "Hoy es un buen día para aprender algo nuevo. Mantén tu mente abierta."
]



function generarFrase(){
    let aleatorio = Math.random() * frases.length;
    aleatorio = parseInt(aleatorio);
    console.log(aleatorio);
    let mensaje = frases[aleatorio];
    document.getElementById("resultado").textContent = mensaje;
}

document.getElementById("probar").addEventListener("click", generarFrase);

generarFrase();