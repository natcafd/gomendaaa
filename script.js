const texts = [
    "sayangg acaa minta maaf",
    "acaa janjii enggak gitu lagi ke ayang",
    "acaa nakal udah ngomong gitu ke ayang",
    "gakk mauu lagi bikin ndaa nangiss",
    "ndaaaa mauu kann maaafin acaa",
    "gak mau?",
    "nangis acaa kalo gak mauu",
    "heheehe gakk kokkk"
];

let currentIndex = 0;

const textContainer = document.getElementById('textContainer');
const textDisplay = document.getElementById('textDisplay');

textContainer.addEventListener('click', () => {
    textDisplay.classList.remove('fade-in');
    textDisplay.classList.add('fade-out');
    
    setTimeout(() => {
        if (currentIndex < texts.length) {
            textDisplay.textContent = texts[currentIndex];
            currentIndex++;
        } else {
            textDisplay.textContent = "ituu ajaa ya sayangg, i love youu";
            currentIndex = 0; // Optional: Reset the sequence if you want to restart
        }

        textDisplay.classList.remove('fade-out');
        textDisplay.classList.add('fade-in');
    }, 500); // Timing matches the CSS animation duration
});

        // Ensuring the audio plays when the page is loaded
        window.addEventListener('load', function() {
            var audio = document.getElementById('background-audio');
            audio.play().catch(function(error) {
                console.log('Autoplay is not allowed, or audio playback failed:', error);
            });
        });
