``` mermaid
graph TD
    Start((Start)) --> corretude
    corretude[Corretude] --> eficiencia[Eficiência]
    eficiencia --> usabilidade[Usabilidade IHC, UX]
    usabilidade --> portabilidade[Portabilidade]
    portabilidade --> interoperabilidade[Interoperabilidade]
    interoperabilidade --> iso9126[Norma ISO 9126]
    iso9126 --> iso9000[Norma ISO 9000]
    iso9000 --> iso9001[Norma ISO 9001]
    iso9001 --> vantagensIso[Vantagens das Normas ISO]
    vantagensIso --> End((End))
    corretude --> detailsCorretude((Detalhes))
    eficiencia --> detailsEficiencia((Detalhes))
    usabilidade --> detailsUsabilidade((Detalhes))
    portabilidade --> detailsPortabilidade((Detalhes))
    interoperabilidade --> detailsInteroperabilidade((Detalhes))
    iso9126 --> detailsIso9126((Detalhes))
    iso9000 --> detailsIso9000((Detalhes))
    iso9001 --> detailsIso9001((Detalhes))
    vantagensIso --> detailsVantagensIso((Detalhes))
    detailsCorretude --> corretude
    detailsEficiencia --> eficiencia
    detailsUsabilidade --> usabilidade
    detailsPortabilidade --> portabilidade
    detailsInteroperabilidade --> interoperabilidade
    detailsIso9126 --> iso9126
    detailsIso9000 --> iso9000
    detailsIso9001 --> iso9001
    detailsVantagensIso --> vantagensIso
    corretude --> reset(Reiniciar)
    eficiencia --> reset
    usabilidade --> reset
    portabilidade --> reset
    interoperabilidade --> reset
    iso9126 --> reset
    iso9000 --> reset
    iso9001 --> reset
    vantagensIso --> reset
    reset --> corretude


```