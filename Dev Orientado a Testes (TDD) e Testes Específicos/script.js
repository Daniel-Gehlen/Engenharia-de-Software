// Código JavaScript para alternar classes e alterar as cores das etapas
const steps = document.querySelectorAll('.step');

steps.forEach((step, index) => {
    step.addEventListener('mouseenter', () => {
        // Ao passar o mouse sobre uma etapa, adiciona a classe 'active-step' para alterar a cor
        step.classList.add('active-step');
    });

    step.addEventListener('mouseleave', () => {
        // Ao remover o mouse de uma etapa, remove a classe 'active-step' para voltar à cor padrão
        step.classList.remove('active-step');
    });
});
