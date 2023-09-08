let currentStep = 1;

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((s) => {
        s.classList.remove('active');
    });

    const stepToDisplay = document.querySelector(`#step${step}`);
    stepToDisplay.classList.add('active');
}

function nextStep() {
    if (currentStep < 6) {
        currentStep++;
        showStep(currentStep);
    }

    if (currentStep === 6) {
        document.getElementById('nextButton').disabled = true;
    }

    if (currentStep > 1) {
        document.getElementById('prevButton').disabled = false;
    }

    updateStepColors();
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }

    if (currentStep === 1) {
        document.getElementById('prevButton').disabled = true;
    }

    if (currentStep < 6) {
        document.getElementById('nextButton').disabled = false;
    }

    updateStepColors();
}

function updateStepColors() {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        if (index < currentStep - 1) {
            step.classList.add('completed');
        } else {
            step.classList.remove('completed');
        }
    });
}

showStep(1);
