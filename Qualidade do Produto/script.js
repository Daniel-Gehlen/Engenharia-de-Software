// Função para alternar a visibilidade dos detalhes
function toggleDetails(stepId) {
    const details = document.querySelector(`#${stepId} .details`);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// Função para avançar para a próxima etapa
function nextStep(step, button) {
    const currentStep = document.querySelector('.current-step');
    const nextStep = document.getElementById(step);

    currentStep.classList.remove('current-step');
    currentStep.classList.add('completed-step');
    button.disabled = true;

    nextStep.classList.add('current-step');
}

// Função para reiniciar o processo
function reset() {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('current-step', 'completed-step');
    });

    const initialStep = document.getElementById('corretude');
    initialStep.classList.add('current-step');

    document.querySelectorAll('.step button').forEach(button => {
        button.disabled = false;
    });
}
