``` mermaid
graph TD;
    A[Início] --> B[Mostrar Conceito 1];
    B --> C[Mostrar Conceito 2];
    C --> D[Mostrar Conceito 3];
    D --> E[Mostrar Conceito 4];
    E --> F[Mostrar Conceito 5];
    F --> G[Mostrar Conceito 6];
    G --> B;
    B --> H[Anterior];
    C --> H;
    D --> H;
    E --> H;
    F --> H;
    G --> H;
    H --> B;
    H --> I[Próxima];
    B --> J[Voltar ao Topo];
    I --> J;
    J --> A;
```