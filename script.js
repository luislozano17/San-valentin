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
let yesBtnSize = 1; 

noBtn.addEventListener("click", () => {
if (noBtn.disabled) return; 

if (noCounter >= noImages.length) {
noCounter = 0;
}

noBtn.textContent = noResponses[noCounter];
noImage.src = noImages[noCounter];

noCounter++;

yesBtnSize += 0.2;
yesBtn.style.transform = `scale(${yesBtnSize})`;
});

yesBtn.addEventListener("click", () => {
    questionText.textContent = "¡Yo sabía que dirías que sí! 💖";
    noImage.src = "Materiales/7.gif";

    noBtn.disabled = true;
    noBtn.style.opacity = "0.5";

    // Ocultar los botones después de hacer clic en "Sí"
    noBtn.style.display = "none";
    yesBtn.style.display = "none";

    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💗"; // Corazón rosado
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * -100 + "px";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s"; 
        heartsContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
});
