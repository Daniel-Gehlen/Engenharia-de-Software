``` mermaid
graph TD

  A(Iniciar) --> B[Exibir Etapa 1]
  B --> C{Botão Anterior clicado?}
  C -- Não --> D{Botão Próxima clicado?}
  D -- Não --> B
  C -- Sim --> E[Exibir Etapa Anterior]
  E --> B
  D -- Sim --> F[Exibir Próxima Etapa]
  F --> B

```