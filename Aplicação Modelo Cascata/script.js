document.addEventListener('DOMContentLoaded', function () {
    const stages = document.querySelectorAll('.stage');
    let currentStage = 0;

    function showStage(stageIndex) {
        stages.forEach((stage, index) => {
            if (index === stageIndex) {
                stage.style.display = 'block';
            } else {
                stage.style.display = 'none';
            }
        });
    }

    const nextStageButtons = document.querySelectorAll('[id^="nextStage"]');
    nextStageButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            if (currentStage < stages.length - 1) {
                currentStage++;
                showStage(currentStage);
            } else {
                document.getElementById('projectCompletion').textContent = 'O projeto foi concluído!';
                nextStageButtons.forEach((btn) => {
                    btn.style.display = 'none'; // Esconde todos os botões após a conclusão
                });
            }
        });
    });

    showStage(currentStage);
});
