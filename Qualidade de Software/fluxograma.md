``` mermaid
graph TD

subgraph Início
    A[Qualidade do Produto]
    B[CMMI - Capability Maturity Model Integration]
    C[NPS.BR - Norma de Processos em Software Brasileira]
    D[Medição]
    E[Custo da Qualidade]
    F[Documentação]
end

subgraph Detalhes
    clickDetailsA["Saiba Mais"]
    clickDetailsB["Saiba Mais"]
    clickDetailsC["Saiba Mais"]
    clickDetailsD["Saiba Mais"]
    clickDetailsE["Saiba Mais"]
    clickDetailsF["Saiba Mais"]
end

subgraph Avançar
    clickA["Próxima Etapa"]
    clickB["Próxima Etapa"]
    clickC["Próxima Etapa"]
    clickD["Próxima Etapa"]
    clickE["Próxima Etapa"]
    clickF["Próxima Etapa"]
end

subgraph Concluir
    clickReset["Reiniciar"]
end

A -->|Clique em Saiba Mais| clickDetailsA
B -->|Clique em Saiba Mais| clickDetailsB
C -->|Clique em Saiba Mais| clickDetailsC
D -->|Clique em Saiba Mais| clickDetailsD
E -->|Clique em Saiba Mais| clickDetailsE
F -->|Clique em Saiba Mais| clickDetailsF

clickDetailsA -->|Clique em Próxima Etapa| clickA
clickDetailsB -->|Clique em Próxima Etapa| clickB
clickDetailsC -->|Clique em Próxima Etapa| clickC
clickDetailsD -->|Clique em Próxima Etapa| clickD
clickDetailsE -->|Clique em Próxima Etapa| clickE
clickDetailsF -->|Clique em Próxima Etapa| clickF

clickA -->|Concluir Etapa| clickReset
clickB -->|Concluir Etapa| clickReset
clickC -->|Concluir Etapa| clickReset
clickD -->|Concluir Etapa| clickReset
clickE -->|Concluir Etapa| clickReset
clickF -->|Concluir Etapa| clickReset

clickReset -->|Reiniciar| A
```