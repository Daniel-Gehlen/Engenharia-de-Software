let currentStep = 1;

function nextStep() {
    document.getElementById('step' + currentStep).classList.remove('active-step');
    currentStep = (currentStep % 5) + 1;
    document.getElementById('step' + currentStep).classList.add('active-step');
}

function prevStep() {
    document.getElementById('step' + currentStep).classList.remove('active-step');
    currentStep = (currentStep - 2 + 5) % 5 + 1;
    document.getElementById('step' + currentStep).classList.add('active-step');
}

// Inicialmente, tornar a primeira etapa ativa
document.getElementById('step1').classList.add('active-step');
