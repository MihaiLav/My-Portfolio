window.addEventListener('scroll', function() {
    const readingIndicator = document.querySelector('.reading-indicator');
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (window.scrollY / maxScroll) * 100;
    readingIndicator.style.width = percentage + '%';
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 600, // Animation duration in milliseconds
        easing: 'ease-in-out', // Easing function
        once: true, // Whether animation should happen only once
    });

    const texts = [
        "UX Designer",
        "UI Designer",
        "Web Developer",
        "Dreamer",
    ];

    let speed = 100;

    const textElement = document.querySelector('.typewriter-text');

    if (!textElement) {
        console.error('Element with class "typewriter-text" not found.');
        return;
    }

    let textIndex = 0;
    let characterIndex = 0;

    function typewriter() {
        if (characterIndex < texts[textIndex].length) {
            textElement.innerHTML += texts[textIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(typewriter, speed);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (characterIndex > 0) {
            textElement.innerHTML = textElement.innerHTML.slice(0, -1);
            characterIndex--;
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typewriter, 500);
        }
    }

    typewriter(); // Call the typewriter function directly

    const handleOnMouseMove = e => {
        const { currentTarget: target } = e;

        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    for (const card of document.querySelectorAll('.card-container')) {
        card.onmousemove = e => handleOnMouseMove(e);
    }
});