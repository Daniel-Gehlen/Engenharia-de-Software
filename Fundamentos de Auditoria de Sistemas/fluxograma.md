``` mermaid
graph TD;
    Start --> step1;
    step1 --> step2;
    step2 --> step3;
    step3 --> step4;
    step4 --> step5;
    step5 --> End;

    Start[Início] --> prevButton[Anterior];
    prevButton --> nextButton[Próxima];
    nextButton --> End[Fim];

    step1[Etapa 1] --> step2[Etapa 2];
    step2[Etapa 2] --> step3[Etapa 3];
    step3[Etapa 3] --> step4[Etapa 4];
    step4[Etapa 4] --> step5[Etapa 5];
```