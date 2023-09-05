``` mermaid
graph TD
    subgraph clusterA
    Requisitos --> Design
    Design --> Implementacao
    Implementacao --> Teste
    Teste --> Manutencao
    end

    Requisitos("Requisitos") -->|Clique para avançar| Design("Design")
    Design -->|Clique para avançar| Implementacao("Implementação")
    Implementacao -->|Clique para avançar| Teste("Teste")
    Teste -->|Clique para avançar| Manutencao("Manutenção")
    Manutencao -->|Projeto Concluído| Fim("O projeto foi concluído!")
```