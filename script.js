const dynamicText = document.querySelector("h1 span");
const words = ["configuring settings...", "troubleshooting errors...", "installing patches...","automating tasks...", "digging through logs...", "monitoring deployment...", "taking a nap...", "securing ports...", "checking backups...", "validating mapping...", "analyzing data...", "restarting servers...", "writing documentation...", "collaborating...", "implementing...", "planning release...", "coordinating specifications...", "testing...",  "eating...."];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 50);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 25);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        
        //sequential list
        //wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;

        //random list
        wordIndex = !isDeleting ? (Math.floor(Math.random() * words.length)) % words.length : wordIndex;

        setTimeout(typeEffect, 1200);
    }
}

typeEffect();
