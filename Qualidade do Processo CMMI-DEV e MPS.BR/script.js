const maturityLevels = [
    {
        model: "CMMI-DEV",
        levels: [
            "Nível Inicial",
            "Nível Gerenciado",
            "Nível Definido",
            "Nível Quantitativo",
            "Nível em Otimização"
        ]
    },
    {
        model: "MPS.BR",
        levels: [
            "Nível F: Inicial",
            "Nível E: Gerenciado",
            "Nível D: Definido",
            "Nível C: Gerenciado Quantitativamente",
            "Nível B: Definido Quantitativamente",
            "Nível A: Em Otimização",
            "Nível R: Nível em Realização"
        ]
    }
];

let currentModelIndex = 0;
let currentLevelIndex = 0;

function updateStepText(model) {
    const currentModel = maturityLevels[currentModelIndex].model;
    const currentLevel = maturityLevels[currentModelIndex].levels[currentLevelIndex];
    const stepText = document.getElementById(`${model}-stepText-${currentLevelIndex}`);
    stepText.textContent = `${currentLevel}`;
}

function nextStep(model, index) {
    currentLevelIndex = index + 1;
    const totalLevels = maturityLevels[currentModelIndex].levels.length;

    if (currentLevelIndex >= totalLevels) {
        currentLevelIndex = 0;
        currentModelIndex = (currentModelIndex + 1) % maturityLevels.length;
    }

    updateStepStyles(model);
}

function updateStepStyles(model) {
    for (let i = 0; i < maturityLevels[currentModelIndex].levels.length; i++) {
        const step = document.getElementById(`${model}-step-${i}`);
        step.classList.remove("current-step", "completed-step");

        if (i === currentLevelIndex) {
            step.classList.add("current-step");
        } else if (i < currentLevelIndex) {
            step.classList.add("completed-step");
        }
    }
}

updateStepText('cmmi-dev');
updateStepText('mps-br');
function toggleExplicacao(explicacaoId) {
    const explicacao = document.getElementById(explicacaoId);
    explicacao.style.display = explicacao.style.display === "block" ? "none" : "block";
}