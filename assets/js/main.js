const scene = document.getElementById("scene");
const logo = document.getElementById("logo");

const TEXT = "CREATIVE";
const LETTER_COUNT = 120;
const randomLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let letters = [];

// Generate floating chaotic letters
for (let i = 0; i < LETTER_COUNT; i++) {
    const span = document.createElement("span");
    span.classList.add("letter");
    span.innerText = randomLetters[Math.floor(Math.random() * randomLetters.length)];

    span.style.left = Math.random() * window.innerWidth + "px";
    span.style.top = Math.random() * window.innerHeight + "px";
    span.style.fontSize = 10 + Math.random() * 30 + "px";
    span.style.transform = `rotate(${Math.random() * 360}deg)`;

    scene.appendChild(span);
    letters.push(span);

    animateRandom(span);
}

// random floating
function animateRandom(el) {
    setInterval(() => {
        el.style.left = Math.random() * window.innerWidth + "px";
        el.style.top = Math.random() * window.innerHeight + "px";
        el.style.transform = `rotate(${Math.random() * 360}deg) translateZ(0)`;
    }, 1000 + Math.random() * 2000);
}

// After delay → Morph into logo
setTimeout(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const spacing = 60;
    const startX = centerX - (TEXT.length * spacing) / 2;

    letters.slice(0, TEXT.length).forEach((el, i) => {
        el.innerText = TEXT[i];
        el.style.fontSize = "70px";
        el.style.color = "#fff";
        el.style.textShadow = "0 0 15px #0ff";
        el.style.left = startX + i * spacing + "px";
        el.style.top = centerY + "px";
        el.style.transform = "rotate(0deg)";
    });

    // Show final logo text
    setTimeout(() => {
        logo.style.opacity = 1;
        logo.style.transform = "translate(-50%, -50%) scale(1.05)";
    }, 2200);
}, 4000);
