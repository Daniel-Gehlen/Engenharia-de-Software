const steps = [
    "Definir Requisitos",
    "Priorizar Requisitos",
    "Dividir em Iterações",
    "Desenvolver Funcionalidades",
    "Testar Funcionalidades",
    "Integrar e Testar Continuamente",
    "Refatorar",
    "Coletar Feedback do Cliente",
    "Cliente Satisfeito?",
    "Encerrar o Projeto",
    "Fim",
    "Ajustar Prioridades e Requisitos",
    "Reiniciar Iteração"
];

let currentStep = 0;
const stepText = document.getElementById('step-text');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const choiceButtons = document.getElementById('choice-buttons');
const choiceYesButton = document.getElementById('choice-yes');
const choiceNoButton = document.getElementById('choice-no');
const stepSquares = document.querySelectorAll('.step-square');

function updateStep() {
    stepText.textContent = steps[currentStep];

    if (currentStep === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentStep === steps.length - 1 || currentStep === 9) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }

    if (currentStep === 8 || currentStep === 12) {
        choiceButtons.style.display = 'flex';
    } else {
        choiceButtons.style.display = 'none';
    }

    // Colorir o quadrado da etapa atual como concluído
    for (let i = 0; i < stepSquares.length; i++) {
        if (i === currentStep) {
            stepSquares[i].classList.add('completed');
        } else {
            stepSquares[i].classList.remove('completed');
        }
    }
}

prevButton.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
});

nextButton.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        if (currentStep === 10) {
            // Verifica se é a etapa "Fim" após a confirmação "Sim" do cliente satisfeito
            const isClientSatisfied = confirm("O cliente está satisfeito?");
            if (isClientSatisfied) {
                currentStep = 11; // Mude para "Fim" após a confirmação "Sim"
                nextButton.disabled = true; // Desativa o botão "Avançar"
            }
        }
        updateStep();
    } else if (currentStep === 8) {
        choiceButtons.style.display = 'flex';
    }
});

choiceYesButton.addEventListener('click', () => {
    if (currentStep === 8) {
        currentStep = 9; // Mude para "Encerrar o Projeto" após a confirmação "Sim"
    } else if (currentStep === 12) {
        currentStep = 3; // Retorne a "Desenvolver Funcionalidades" após a confirmação "Sim" em "Reiniciar Iteração"
    }
    updateStep();
});

choiceNoButton.addEventListener('click', () => {
    if (currentStep === 8) {
        currentStep = 11; // Vá para "Ajustar Prioridades e Requisitos" após a confirmação "Não"
    }
    updateStep();
});

// Inicialize o passo inicial
updateStep();
