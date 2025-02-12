document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 600, // Animation duration in milliseconds
        easing: 'ease-in-out', // Easing function
        once: true, // Whether animation should happen only once
    });

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