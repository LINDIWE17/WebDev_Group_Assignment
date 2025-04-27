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

function countUp(elementId, targetNumber, duration) {
    let start = 0;
    let increment = targetNumber / (duration / 10);
    let counter = setInterval(() => {
        start += increment;
        document.getElementById(elementId).textContent = Math.round(start);
        if (start >= targetNumber) {
            document.getElementById(elementId).textContent = targetNumber;
            clearInterval(counter);
        }
    }, 10);
}

// Observe when stats section is visible
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            countUp("finished-projects", 1500, 2000);
            countUp("working-hours", 2500, 2000);
            countUp("online-support", 1280, 2000);
            countUp("happy-customers", 3020, 2000);
        }
    });
}, { threshold: 0.5 }); // Triggers when 50% of the section is visible

observer.observe(document.querySelector(".stats-section"));