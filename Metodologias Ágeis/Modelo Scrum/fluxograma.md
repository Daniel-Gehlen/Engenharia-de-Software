``` mermaid
graph TD
  subgraph Início
    A[Carregar Página] --> B[Exibir Etapa 1]
  end

  subgraph Etapas
    B --> C[Exibir Etapa 2]
    C --> D[Exibir Etapa 3]
    D --> E[Exibir Etapa 4]
    E --> F[Exibir Etapa 5]
  end

  subgraph Botões
    F -->|Próximo| C
    C -->|Próximo| D
    D -->|Próximo| E
    E -->|Próximo| F
    C -->|Anterior| B
    D -->|Anterior| C
    E -->|Anterior| D
    F -->|Anterior| E
    F -->|Reiniciar| B
  end
```