``` mermaid
graph LR
    subgraph Início
        A[Início]
    end

    subgraph Planejamento do Cronograma
        B[Mostrar Etapa 1]
        C[Próxima Etapa]
    end

    subgraph Planejamento da Auditoria
        D[Mostrar Etapa 2]
        E[Próxima Etapa]
        F[Etapa Anterior]
    end

    subgraph Condução
        G[Mostrar Etapa 3]
        H[Próxima Etapa]
        I[Etapa Anterior]
    end

    subgraph Reporte
        J[Mostrar Etapa 4]
        K[Etapa Anterior]
    end

    subgraph Fim
        L[Fim]
    end

    A --> B
    B --> C
    C --> D
    D --> E
    D --> F
    E --> G
    G --> H
    G --> I
    H --> J
    J --> K
    F --> C
    I --> D
    K --> L
```