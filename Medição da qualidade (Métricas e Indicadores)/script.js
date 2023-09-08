const steps = [
    "Falha, Erro, Defeitos e Bug",
    "Métricas",
    "Medidas, Métricas e Indicadores",
    "Princípios da Medição",
    "Métricas: Ciclo de Vida das Métricas",
    "Métricas para Modelos de Requisitos",
    "Métricas para o Modelo de Projeto",
    "Métricas de Projeto para WebApp e Aplicativos Móveis",
    "Métricas para o Código Fonte",
    "Métricas para Testes"
];

let currentStep = 0;

function updateStep() {
    const stepText = document.getElementById('step-text');
    stepText.textContent = steps[currentStep];
}

function toggleStep(stepIndex) {
    const stepSquare = document.querySelectorAll('.step-square')[stepIndex];
    const stepContent = stepSquare.querySelector('.step-content');
    const toggleButton = stepSquare.querySelector('.toggle-button');

    if (stepContent.style.display === 'none' || !stepContent.style.display) {
        stepContent.style.display = 'block';
        toggleButton.textContent = 'Recolher';
        stepSquare.classList.add('expanded');
    } else {
        stepContent.style.display = 'none';
        toggleButton.textContent = 'Saiba Mais';
        stepSquare.classList.remove('expanded');
    }
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        toggleStep(currentStep);
        currentStep++;
        updateStep();
        toggleStep(currentStep);
    }
}

function previousStep() {
    if (currentStep > 0) {
        toggleStep(currentStep);
        currentStep--;
        updateStep();
        toggleStep(currentStep);
    }
}

updateStep();
