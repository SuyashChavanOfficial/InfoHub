// TYPEWRITER EFFECT 

const delay = 50; // Delay between characters in milliseconds
const elements = document.getElementsByClassName("typewriter-text");

function typeWriterForElement(element, text, i) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(function () {
            typeWriterForElement(element, text, i + 1);
        }, delay);
    } else {
        setTimeout(function () {
            element.innerHTML = '';
            typeWriterForElement(element, text, 0);
        }, 2000); // Delay before starting over
    }
}

// Apply typewriter effect to all elements with the class "typewriter-text"
for (let i = 0; i < elements.length; i++) {
    const textContent = elements[i].textContent;
    elements[i].innerHTML = ''; // Clear existing content
    typeWriterForElement(elements[i], textContent, 0);
}

// SCROLLING ANIMATION 

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            } else {
                entry.target.style.opacity = "0";
                entry.target.style.transform = "translateY(-20px)";
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });
});

