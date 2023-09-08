``` mermaid
graph TD
    A[Início] --> B[Teste Funcional Validação]
    B --> C[Teste Funcional para Verificar]
    C --> D[Teste Estrutural]
    D --> E[Retorno para o Início]
    E --> B
    B --> F[Concluído]
    C --> F
    D --> F
    F --> A
```