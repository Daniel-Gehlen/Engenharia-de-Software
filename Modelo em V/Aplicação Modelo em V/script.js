document.addEventListener("DOMContentLoaded", function () {
    const stages = document.querySelectorAll(".stage");
    const btnAdvance = document.getElementById("btnAdvance");
    const completionMessage = document.getElementById("completionMessage");
    let currentStageIndex = 0;

    // Mostra a etapa atual e avança quando o botão é clicado
    function showCurrentStage() {
        if (currentStageIndex < stages.length) {
            stages[currentStageIndex].style.display = "block";
            currentStageIndex++;

            if (currentStageIndex === stages.length) {
                btnAdvance.style.display = "none";
                completionMessage.textContent = "O projeto foi concluído!";
            }
        }
    }

    btnAdvance.addEventListener("click", showCurrentStage);
    showCurrentStage(); // Mostra a primeira etapa ao carregar a página
});
