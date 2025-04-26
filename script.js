function toggleDropdownTheme() {
    let mainDropdown = document.getElementById("main-dropdown");
    let subDropdown = document.getElementById("sub-dropdown");

    if (mainDropdown.classList.contains("dark-mode")) {
        mainDropdown.classList.remove("dark-mode");
        subDropdown.classList.remove("dark-mode");
    } else {
        mainDropdown.classList.add("dark-mode");
        subDropdown.classList.add("dark-mode");
    }
}

function toggleSubDropdown() {
    let mainDropdown = document.getElementById("main-dropdown").value;
    let subDropdown = document.getElementById("sub-dropdown");
    let subLabel = document.getElementById("sub-label");

    if (mainDropdown === "pages") {
        subDropdown.style.display = "inline-block";
        subLabel.style.display = "inline-block";
    } else {
        subDropdown.style.display = "none";
        subLabel.style.display = "none";
    }
}

// Typewriter effect
const words = ["Web Developer", "Freelancer", "Web Designer", "Photographer"];
let index = 0;
let letterIndex = 0;
const textElement = document.getElementById("animated-text");

function typeWord() {
    if (letterIndex < words[index].length) {
        textElement.textContent += words[index][letterIndex];
        letterIndex++;
        setTimeout(typeWord, 100);
    } else {
        setTimeout(eraseWord, 1000);
    }
}

function eraseWord() {
    if (letterIndex > 0) {
        textElement.textContent = words[index].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(eraseWord, 50);
    } else {
        index = (index + 1) % words.length;
        setTimeout(typeWord, 500);
    }
}

typeWord();


