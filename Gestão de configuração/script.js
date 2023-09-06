let currentStep = 1;

function nextStep(step) {
    // Adicione a classe 'completed' à etapa atual
    document.getElementById(`step${currentStep}`).classList.add('completed');
    document.getElementById(`step${currentStep}`).classList.remove('active');

    // Adicione a classe 'active' à próxima etapa
    step++;
    document.getElementById(`step${step}`).classList.add('active');
    
    currentStep = step;
}

function resetSteps() {
    // Remova as classes 'active' e 'completed' de todas as etapas
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`step${i}`).classList.remove('active', 'completed');
    }
    currentStep = 1;

    // Adicione a classe 'active' à primeira etapa
    document.getElementById('step1').classList.add('active');
}
