let faseAtual = 1;
const fases = ['Planejamento', 'Análise de Riscos', 'Engenharia', 'Avaliação do Cliente'];

document.getElementById('btnAvancar').addEventListener('click', () => avancarFase());

function avancarFase() {
        const fase = fases[faseAtual];
        

        // Atualiza a fase atual exibida na página
        document.getElementById('stage').textContent = 'Fase Atual: ' + fase;
        
        faseAtual++;

        // Verifica se todas as fases foram concluídas
        if (faseAtual === fases.length +1) {
            document.getElementById('conclusao').style.display = 'block';
            document.getElementById('btnAvancar').style.display = 'none'; // Esconde o botão após a conclusão
        }   
    }
