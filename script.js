document.addEventListener('DOMContentLoaded', function() {

    const body = document.body;
    const starCount = 200;
    let stars = [];

    function createStars() {
        stars.forEach(star => star.remove());
        stars = [];

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            const x = Math.random() * 100; 
            const y = Math.random() * 100; 
            
            star.style.left = `${x}vw`;
            star.style.top = `${y}vh`;

            const size = Math.random() * 2 + 1;
            const duration = Math.random() * 5 + 5;
            const delay = Math.random() * 5;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animation = `twinkle ${duration}s linear ${delay}s infinite`;

            body.appendChild(star);
            stars.push(star);
        }
    }

    createStars();

    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5
    });

    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const words = ["Introductio", "Digital Creator!", "Future Developer!"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            let displayText = '';

            if (isDeleting) {
                displayText = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                displayText = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            typewriterElement.textContent = displayText;

            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => { isDeleting = true; }, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            const typingSpeed = isDeleting ? 100 : 170;
            setTimeout(type, typingSpeed);
        }
        type();
    }
});