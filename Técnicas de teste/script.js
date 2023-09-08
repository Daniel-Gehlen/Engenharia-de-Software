let currentStep = 1;

function nextStep() {
    const currentStepElement = document.getElementById(`step${currentStep}`);
    currentStepElement.classList.remove('active');
    currentStepElement.classList.add('completed');
    if (currentStep >= 3) {
        // Se o passo atual for o último, volte para o primeiro (reinicie)
        currentStep = 1;
        // Remova as cores verdes das etapas concluídas ao reiniciar
        document.querySelectorAll('.completed').forEach(step => {
            step.classList.remove('completed');
        });
    } else {
        currentStep++;
    }
    const nextStepElement = document.getElementById(`step${currentStep}`);
    nextStepElement.classList.add('active');
}

function returnToStart() {
    const currentStepElement = document.getElementById(`step${currentStep}`);
    currentStepElement.classList.remove('active');
    currentStepElement.classList.remove('completed');
    currentStep = 1;
    const firstStepElement = document.getElementById(`step1`);
    firstStepElement.classList.add('active');
    // Inicializa a primeira etapa como ativa
    document.getElementById(`step${currentStep}`).classList.add('active');
}
