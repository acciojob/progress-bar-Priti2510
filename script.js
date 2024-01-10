//your JS code here. If required.
let activeCircle = 0;

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

nextButton.addEventListener('click', () => {
    if (activeCircle < 4) {
        activeCircle++;
        updateProgressBar();
    }

    if (activeCircle === 4) {
        nextButton.disabled = true;
    }

    if (activeCircle > 0) {
        prevButton.disabled = false;
    }
});

prevButton.addEventListener('click', () => {
    if (activeCircle > 0) {
        activeCircle--;
        updateProgressBar();
    }

    if (activeCircle === 0) {
        prevButton.disabled = true;
    }

    if (activeCircle < 4) {
        nextButton.disabled = false;
    }
});

function updateProgressBar() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        if (index <= activeCircle) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
}