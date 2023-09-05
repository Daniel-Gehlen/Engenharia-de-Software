``` mermaid
graph TD
    A[Carregar Página] --> B[Mostrar Etapa 1 - Planejamento]
    B --> C[Mostrar Etapa 2 - Análise]
    C --> D[Mostrar Etapa 3 - Design]
    D --> E[Mostrar Etapa 4 - Implementação]
    E --> F[Mostrar Etapa 5 - Teste]
    F --> G[Mostrar Etapa 6 - Implantação]
    G --> H[Exibir Mensagem: O projeto foi concluído!]
    H --> I[Ocultar Botão de Avanço]
    I --> J[Fim]
    J --> A
    A --> B
```