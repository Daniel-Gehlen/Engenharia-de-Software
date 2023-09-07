``` mermaid
graph TD;

subgraph HTML
    doctype[DOCTYPE]
    html[html]
    head[head]
    charset[meta charset]
    viewport[meta viewport]
    link[link stylesheet]
    title[title]
    body[body]
    container[div container]
    h1[h1 Processos de Maturidade]
    model-container1[div model-container]
    h2-1[h2 CMMI-DEV]
    step-container1[div step-container]
    step1-0[div step Nível Inicial]
    p1-0[p Nível Inicial]
    button1-0[button Saiba Mais]
    explicacao1-0[div explicacao Nível Inicial]
    button1-0-2[button Avançar]
    step1-1[div step Nível Gerenciado]
    p1-1[p Nível Gerenciado]
    button1-1[button Saiba Mais]
    explicacao1-1[div explicacao Nível Gerenciado]
    button1-1-2[button Avançar]
    step1-2[div step Nível Definido]
    p1-2[p Nível Definido]
    button1-2[button Saiba Mais]
    explicacao1-2[div explicacao Nível Definido]
    button1-2-2[button Avançar]
    step1-3[div step Nível Quantitativo]
    p1-3[p Nível Quantitativo]
    button1-3[button Saiba Mais]
    explicacao1-3[div explicacao Nível Quantitativo]
    button1-3-2[button Avançar]
    step1-4[div step Nível em Otimização]
    p1-4[p Nível em Otimização]
    button1-4[button Saiba Mais]
    explicacao1-4[div explicacao Nível em Otimização]
    button1-4-2[button Avançar]
end

subgraph HTML
    model-container2[div model-container]
    h2-2[h2 MPS.BR]
    step-container2[div step-container]
    step2-0[div step Nível F: Inicial]
    p2-0[p Nível F: Inicial]
    button2-0[button Saiba Mais]
    explicacao2-0[div explicacao Nível F: Inicial]
    button2-0-2[button Avançar]
    step2-1[div step Nível E: Gerenciado]
    p2-1[p Nível E: Gerenciado]
    button2-1[button Saiba Mais]
    explicacao2-1[div explicacao Nível E: Gerenciado]
    button2-1-2[button Avançar]
    step2-2[div step Nível D: Definido]
    p2-2[p Nível D: Definido]
    button2-2[button Saiba Mais]
    explicacao2-2[div explicacao Nível D: Definido]
    button2-2-2[button Avançar]
    step2-3[div step Nível C: Gerenciado Quantitativamente]
    p2-3[p Nível C: Gerenciado Quantitativamente]
    button2-3[button Saiba Mais]
    explicacao2-3[div explicacao Nível C: Gerenciado Quantitativamente]
    button2-3-2[button Avançar]
    step2-4[div step Nível B: Definido Quantitativamente]
    p2-4[p Nível B: Definido Quantitativamente]
    button2-4[button Saiba Mais]
    explicacao2-4[div explicacao Nível B: Definido Quantitativamente]
    button2-4-2[button Avançar]
    step2-5[div step Nível A: Em Otimização]
    p2-5[p Nível A: Em Otimização]
    button2-5[button Saiba Mais]
    explicacao2-5[div explicacao Nível A: Em Otimização]
    button2-5-2[button Avançar]
    step2-6[div step Nível R: Nível em Realização]
    p2-6[p Nível R: Nível em Realização]
    button2-6[button Saiba Mais]
    explicacao2-6[div explicacao Nível R: Nível em Realização]
    button2-6-2[button Avançar]
end

script[script]
html --> head
head --> charset
head --> viewport
head --> link
head --> title
html --> body
body --> container
container --> h1
container --> model-container1
h1 --> model-container1
model-container1 --> h2-1
model-container1 --> step-container1
h2-1 --> step-container1
step-container1 --> step1-0
step1-0 --> p1-0
step1-0 --> button1-0
step1-0 --> explicacao1-0
step1-0 --> button1-0-2
step1-0 --> step1-1
step1-1 --> p1-1
step1-1 --> button1-1
step1-1 --> explicacao1-1
step1-1 --> button1-1-2
step1-1 --> step1-2
step1-2 --> p1-2
step1-2 --> button1-2
step1-2 --> explicacao1-2
step1-2 --> button1-2-2
step1-2 --> step1-3
step1-3 --> p1-3
step1-3 --> button1-3
step1-3 --> explicacao1-3
step1-3 --> button1-3-2
step1-3 --> step1-4
step1-4 --> p1-4
step1-4 --> button1-4
step1-4 --> explicacao1-4
step1-4 --> button1-4-2
body --> script

html --> model-container2
model-container2 --> h2-2
model-container2 --> step-container2
h2-2 --> step-container2
step-container2 --> step2-0
step2-0 --> p2-0
step2-0 --> button2-0
step2-0 --> explicacao2-0
step2-0 --> button2-0-2
step2-0 --> step2-1
step2-1 --> p2-1
step2-1 --> button2-1
step2-1 --> explicacao2-1
step2-1 --> button2-1-2
step2-1 --> step2-2
step2-2 --> p2-2
step2-2 --> button2-2
step2-2 --> explicacao2-2
step2-2 --> button2-2-2
step2-2 --> step2-3
step2-3 --> p2-3
step2-3 --> button2-3
step2-3 --> explicacao2-3
step2-3 --> button2-3-2
step2-3 --> step2-4
step2-4 --> p2-4
step2-4 --> button2-4
step2-4 --> explicacao2-4
step2-4 --> button2-4-2
step2-4 --> step2-5
step2-5 --> p2-5
step2-5 --> button2-5
step2-5 --> explicacao2-5
step2-5 --> button2-5-2
step2-5 --> step2-6
step2-6 --> p2-6
step2-6 --> button2-6
step2-6 --> explicacao2-6
step2-6 --> button2-6-2

```