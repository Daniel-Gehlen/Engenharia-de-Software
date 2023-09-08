let currentStep = 1;

function showStep(stepChange) {
    const steps = document.querySelectorAll('.step');

    if (stepChange === -1) {
        currentStep -= 1;
    } else {
        currentStep += 1;
    }

    if (currentStep < 1) {
        currentStep = 6;
    } else if (currentStep > 6) {
        currentStep = 1;
    }

    steps.forEach((stepElement) => {
        stepElement.classList.remove('active');
    });

    steps[currentStep - 1].classList.add('active');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep);
});
