let currentStep = 1;

function nextStep() {
    if (currentStep < 4) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        document.getElementById(`step${currentStep}`).classList.add('completed');
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add('active');

        if (currentStep === 4) {
            document.getElementById('nextButton').innerText = 'Concluir';
        }
    } else {
        // Redirecionar ou fazer algo quando todas as etapas forem concluídas
        alert('Todas as etapas foram concluídas.');
    }
}

function resetSteps() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`step${i}`).classList.remove('active', 'completed');
    }
    currentStep = 1;
    document.getElementById('step1').classList.add('active');
    document.getElementById('nextButton').innerText = 'Iniciar';
}

// Chame resetSteps() para iniciar a aplicação com apenas o primeiro passo ativo
resetSteps();
