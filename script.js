const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const noImage = document.getElementById("noImage");
const heartsContainer = document.getElementById("hearts-container");
const questionText = document.getElementById("questionText"); // Elemento del texto de la pregunta

let noResponses = [
    "¿Estás seguro que no?",
    "¿De verdad no?",
    "Te lo estoy preguntando en serio.",
    "¿Ningún interés?",
    "Pero, ¿seguro que no?",
    "¡Vamos, di que sí!",
    "¿Tan rápido un no?",
    "No me hagas sentir mal..."
];

let noImages = [
    "Materiales/1.gif",
    "Materiales/2.gif",
    "Materiales/3.gif",
    "Materiales/4.gif",
    "Materiales/5.gif",
    "Materiales/6.gif"
];

let noCounter = 0;
let yesBtnSize = 1; // Tamaño inicial del botón "Sí"

noBtn.addEventListener("click", () => {
    if (noBtn.disabled) return; // Si está deshabilitado, no hace nada

    // Si llegamos al final de las imágenes, reiniciar
    if (noCounter >= noImages.length) {
        noCounter = 0;
    }

    // Cambiar el texto del botón "No"
    noBtn.textContent = noResponses[noCounter];

    // Cambiar la imagen
    noImage.src = noImages[noCounter];

    // Incrementar el contador para la siguiente frase e imagen
    noCounter++;

    // Aumentar el tamaño del botón "Sí"
    yesBtnSize += 0.2;
    yesBtn.style.transform = `scale(${yesBtnSize})`;
});

yesBtn.addEventListener("click", () => {
    // Cambiar el texto cuando se presiona "Sí"
    questionText.textContent = "¡Yo sabía que dirías que sí! 💖";

    // Cambiar la imagen cuando se presiona 'Sí'
    noImage.src = "Materiales/7.gif";

    // Deshabilitar el botón "No" para que no se pueda seguir presionando
    noBtn.disabled = true;
    noBtn.style.opacity = "0.5"; // Opcional: hacer que el botón parezca desactivado

    // Generar corazones de manera continua
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💗"; // Corazón rosado

        // Posición aleatoria en ambas direcciones
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * -100 + "px";

        // Duración aleatoria para el efecto
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s"; 

        heartsContainer.appendChild(heart);

        // Eliminar el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
});
