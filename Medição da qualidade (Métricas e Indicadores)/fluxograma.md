``` mermaid
flowchart TB

subgraph Aplicação
    click[Iniciar]
    click --> step0
    click --> step1
    click --> step2
    click --> step3
    click --> step4
    click --> step5
    click --> step6
    click --> step7
    click --> step8
    click --> step9

    subgraph step[Passo 0]
        step0 --> Avançar --> step1
        step0 --> SaibaMais --> sub_step0
    end

    subgraph step1[Passo 1]
        step1 --> Avançar --> step2
        step1 --> SaibaMais --> sub_step1
    end

    subgraph step2[Passo 2]
        step2 --> Avançar --> step3
        step2 --> SaibaMais --> sub_step2
    end

    subgraph step3[Passo 3]
        step3 --> Avançar --> step4
        step3 --> SaibaMais --> sub_step3
    end

    subgraph step4[Passo 4]
        step4 --> Avançar --> step5
        step4 --> SaibaMais --> sub_step4
    end

    subgraph step5[Passo 5]
        step5 --> Avançar --> step6
        step5 --> SaibaMais --> sub_step5
    end

    subgraph step6[Passo 6]
        step6 --> Avançar --> step7
        step6 --> SaibaMais --> sub_step6
    end

    subgraph step7[Passo 7]
        step7 --> Avançar --> step8
        step7 --> SaibaMais --> sub_step7
    end

    subgraph step8[Passo 8]
        step8 --> Avançar --> step9
        step8 --> SaibaMais --> sub_step8
    end

    subgraph step9[Passo 9]
        step9 --> Reiniciar --> step0
        step9 --> SaibaMais --> sub_step9
    end
end

clickIniciaraplicação



```