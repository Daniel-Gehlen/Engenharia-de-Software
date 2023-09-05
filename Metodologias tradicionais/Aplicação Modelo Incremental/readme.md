``` mermaid
flowchart TD
    subgraph cluster1
        A[Planejamento] --> B[Requisitos] --> C[Design] --> D[Desenvolvimento] --> E[Testes] --> F[Implantação]
    end

    subgraph cluster2
        G[Planejamento 2] --> H[Requisitos 2] --> I[Design 2] --> J[Desenvolvimento 2] --> K[Testes 2] --> L[Implantação 2]
    end

    A -->|Concluído| B -->|Concluído| C -->|Concluído| D -->|Concluído| E -->|Concluído| F -->|Concluído| G -->|Concluído| H -->|Concluído| I -->|Concluído| J -->|Concluído| K -->|Concluído| L

    subgraph cluster3
        M[Planejamento 3] --> N[Requisitos 3] --> O[Design 3] --> P[Desenvolvimento 3] --> Q[Testes 3] --> R[Implantação 3]
    end

    L -->|Concluído| M -->|Concluído| N -->|Concluído| O -->|Concluído| P -->|Concluído| Q -->|Concluído| R
    R -->|Concluído| M
```