``` mermaid
graph TD

subgraph Início
    A[Início]
end

subgraph DefinirRequisitos
    B[Definir Requisitos]
    B --> C[Priorizar Requisitos]
end

subgraph PriorizarRequisitos
    C --> D[Dividir em Iterações]
end

subgraph DividirIteracoes
    D --> E[Desenvolver Funcionalidades]
end

subgraph DesenvolverFuncionalidades
    E --> F[Testar Funcionalidades]
end

subgraph TestarFuncionalidades
    F --> G[Integrar e Testar Continuamente]
end

subgraph IntegrarTestarContinuamente
    G --> H[Refatorar]
end

subgraph Refatorar
    H --> I[Coletar Feedback do Cliente]
end

subgraph ColetarFeedbackCliente
    I --> J[Cliente Satisfeito?]
    J --> K[Encerrar o Projeto]
    J --> L[Ajustar Prioridades e Requisitos]
    K --> M[Fim]
    L --> B
end

subgraph Fim
    M --> N[Fim]
end

subgraph AjustarPrioridadesRequisitos
    L --> D
end

subgraph ReiniciarIteracao
    N --> O[Reiniciar Iteração]
    O --> D
end

```