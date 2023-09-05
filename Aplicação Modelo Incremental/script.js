document.addEventListener("DOMContentLoaded", function () {
    // Obtém referências aos elementos das fases
    const fases = [
        document.getElementById("fase1"),
        document.getElementById("fase2"),
        document.getElementById("fase3"),
        document.getElementById("fase4"),
        document.getElementById("fase5"),
        document.getElementById("fase6"),
        document.getElementById("fase7"), // Fase de incrementação
        document.getElementById("fase8"), // Fase de incrementação
        document.getElementById("fase9"), // Fase de incrementação
        document.getElementById("fase10"), // Fase de incrementação
        document.getElementById("fase11"), // Fase de incrementação
        document.getElementById("fase12"), // Fase de incrementação
        document.getElementById("fase13"), // Fase de incrementação
        document.getElementById("fase14"), // Fase de incrementação
        document.getElementById("fase15"), // Fase de incrementação
        document.getElementById("fase16"), // Fase de incrementação
        document.getElementById("fase17"), // Fase de incrementação
        document.getElementById("fase18"), // Fase de incrementação
        document.getElementById("fase19"), // Fase de incrementação
    ];

    // Inicializa a fase atual
    let faseAtual = 1;

    // Adiciona um ouvinte de evento ao botão "Avançar Fase"
    document.getElementById("avancarFase").addEventListener("click", function () {
        if (faseAtual < fases.length) {
            // Marca a fase atual como concluída (muda a cor de fundo)
            fases[faseAtual - 1].style.backgroundColor = "green";
            // Atualiza a fase atual
            faseAtual++;
        }
    });
});
