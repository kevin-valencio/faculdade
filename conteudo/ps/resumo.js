registrarResumo({
  disciplina: "ps",
  visaoGeral: `<p>Resumo rápido de Projeto de Software para reler antes da prova, montado a partir das anotações do próprio aluno e conferido com os slides e os livros da pasta. Cada tópico é curto; os detalhes estão na aba Revisão.</p>
    <div class="caixa nota" data-titulo="Ajustes feitos sobre as anotações originais"><ul>
      <li><strong>MVP</strong>: o nome correto é Produto Mínimo Viável (Minimum Viable Product), não "Mínimo Produto Viável".</li>
      <li><strong>Ideação</strong>: o slide manda gerar soluções <em>sem julgar</em> as ideias (anotação original dizia "sem juntar").</li>
      <li><strong>CMMI nível 3</strong>: acrescentado "gerenciamento de riscos" à descrição do livro.</li>
      <li><strong>Risco assumido</strong>: exemplo com a conta feita (8 mil de perda esperada contra 50 mil de custo).</li>
      <li>Grafia: Design Thinking, Environmental, Planejamento.</li>
    </ul></div>`,
  fontes: [
    "Anotações do aluno (resumo feito a punho)",
    "Unidade 3a.pdf e 3b.pdf (riscos, qualidade, PDCA)",
    "HAMI_PRO_SOFT_ U3 e U4 - Livro Didático.pdf",
    "Unidade 4.pdf e Unidade 4 DS_DTV2.pdf (SCM, ESG, MVP, Design Thinking, Design Sprint)"
  ],
  modulos: [
    {
      id: "rs-riscos",
      titulo: "1. Gerenciamento de riscos",
      topicos: [
        {
          id: "rs-processo-riscos",
          titulo: "Processo de gerenciamento de riscos",
          fonte: "Unidade 3a.pdf (Riscos)",
          html: `
            <ol>
              <li>Planejar o gerenciamento dos riscos</li>
              <li>Identificar os riscos</li>
              <li>Análise qualitativa</li>
              <li>Análise quantitativa</li>
              <li>Planejamento de resposta</li>
              <li>Controlar os riscos (monitoramento e controle)</li>
            </ol>
            <table>
              <thead><tr><th>Análise</th><th>O que faz</th><th>Técnicas</th></tr></thead>
              <tbody>
                <tr><td>Qualitativa</td><td>Mede probabilidade e impacto; <strong>prioriza</strong></td><td>Matriz de probabilidade e impacto</td></tr>
                <tr><td>Quantitativa</td><td>Atribui classificação <strong>numérica</strong> ao risco</td><td>Simulação de Monte Carlo; análise de árvore de decisão</td></tr>
              </tbody>
            </table>
            <div class="caixa prova"><p>Qualitativa prioriza; quantitativa dá número.</p></div>`
        },
        {
          id: "rs-fontes-classificacao",
          titulo: "Fontes e classificação dos riscos",
          fonte: "Unidade 3a.pdf; HAMI_PRO_SOFT_ U3 - Livro Didático.pdf",
          html: `
            <table>
              <thead><tr><th>Fontes de risco</th><th>Classificação (natureza)</th></tr></thead>
              <tbody>
                <tr><td><ul><li>Instabilidade no escopo</li><li>Fornecedores</li><li>Envolvimento de partes interessadas</li><li>Estimativa não realista</li></ul></td>
                <td><ul><li>Técnica</li><li>Requisitos</li><li>Externo</li><li>Organizacional</li><li>Gestão de projeto</li></ul></td></tr>
              </tbody>
            </table>
            <p>Classificar o risco indica quem precisa se envolver e facilita a mitigação. Novas naturezas podem ser criadas (por exemplo, segurança).</p>`
        },
        {
          id: "rs-respostas",
          titulo: "Mitigação, contingência e risco assumido",
          fonte: "Unidade 3a.pdf (Monitoramento e Controle; Planejamento de Resposta)",
          html: `
            <table>
              <thead><tr><th>Plano</th><th>Ligado a</th><th>Quando age</th><th>Tipo de ação</th></tr></thead>
              <tbody>
                <tr><td>Mitigação</td><td>Monitoramento e controle</td><td>Antes: visa <strong>diminuir a ocorrência</strong> do risco</td><td>Preventiva</td></tr>
                <tr><td>Contingência</td><td>Planejamento de resposta (e controle)</td><td>Depois: trabalha o risco <strong>após a ocorrência</strong></td><td>Corretiva</td></tr>
              </tbody>
            </table>
            <div class="caixa definicao" data-titulo="Risco assumido (aceito)"><p>Quando mitigar ou conter custa mais do que o prejuízo esperado, assume-se o risco.</p></div>
            <div class="caixa exemplo" data-titulo="Exemplo"><p>Probabilidade de 80% e prejuízo de R$ 10 mil: perda esperada = 0,8 x 10.000 = R$ 8 mil. Mitigar custa R$ 50 mil, bem acima de 8 mil: não compensa, assume-se o risco.</p></div>`
        }
      ]
    },
    {
      id: "rs-qualidade",
      titulo: "2. Qualidade, métricas e melhoria",
      topicos: [
        {
          id: "rs-triangulo-agil",
          titulo: "Triângulo ágil",
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf",
          html: `
            <ul>
              <li><strong>Valor</strong> (estabelecer valor a entregar)</li>
              <li><strong>Qualidade</strong> (aceitável)</li>
              <li><strong>Restrições</strong>: custo, escopo e prazo</li>
            </ul>`
        },
        {
          id: "rs-metricas-ieee",
          titulo: "Métricas de qualidade (termos IEEE)",
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf (exemplo OliVirgem)",
          html: `
            <table>
              <thead><tr><th>Termo</th><th>Significado</th><th>Exemplo</th></tr></thead>
              <tbody>
                <tr><td>Atributo</td><td>Propriedade mensurável</td><td>Quantidade de falhas encontradas</td></tr>
                <tr><td>Métrica</td><td>Medida quantitativa do atributo</td><td>Falhas na execução do produto na Sprint</td></tr>
                <tr><td>Medição</td><td>Atribuir número ou categoria</td><td>Contagem ou classificação das falhas</td></tr>
                <tr><td>Medida</td><td>Resultado da medição</td><td>8 falhas na Sprint</td></tr>
              </tbody>
            </table>`
        },
        {
          id: "rs-cmmi",
          titulo: "Maturidade: níveis do CMMI (segundo o livro)",
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf",
          html: `
            <table>
              <thead><tr><th>Nível</th><th>Nome</th><th>Ideia</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Executada</td><td>Atividades do projeto para entregar o produto</td></tr>
                <tr><td>2</td><td>Controlada</td><td>Atividades e implantação de processos de desenvolvimento</td></tr>
                <tr><td>3</td><td>Padronizada</td><td>Processo: soluções, validação, gestão, gerenciamento de riscos</td></tr>
                <tr><td>4</td><td>Medido</td><td>Processo gerenciado com base em métricas</td></tr>
                <tr><td>5</td><td>Em otimização</td><td>Processos em melhoria contínua</td></tr>
              </tbody>
            </table>
            <div class="caixa nota" data-titulo="Atenção"><p>Os nomes acima são os do livro (use-os na prova). A nomenclatura oficial do CMMI 1.3 é diferente (Inicial, Gerenciado, Definido, Gerenciado quantitativamente, Em otimização). Não existe nível 0.</p></div>`
        },
        {
          id: "rs-pdca",
          titulo: "PDCA",
          fonte: "Unidade 3b.pdf (Gerenciamento da qualidade)",
          html: `
            <table>
              <thead><tr><th>Etapa</th><th>O que é</th></tr></thead>
              <tbody>
                <tr><td>Plan</td><td>Planejamento</td></tr>
                <tr><td>Do</td><td>Execução</td></tr>
                <tr><td>Check</td><td>Avaliação e medição</td></tr>
                <tr><td>Act</td><td>Se deu certo, normatizar e padronizar; se não, entender o problema e reiniciar o ciclo</td></tr>
              </tbody>
            </table>`
        },
        {
          id: "rs-sequencial-agil",
          titulo: "Sequencial x ágil",
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf (caso TicketExpress)",
          html: `
            <table>
              <thead><tr><th>Modelo</th><th>Levantamento de requisitos</th></tr></thead>
              <tbody>
                <tr><td>Sequencial</td><td>Tudo é levantado antes</td></tr>
                <tr><td>Ágil</td><td>Levantamento por iteração, com reestruturação do design e refatoração do código</td></tr>
              </tbody>
            </table>`
        }
      ]
    },
    {
      id: "rs-mudancas",
      titulo: "3. Mudanças, governança e ESG",
      topicos: [
        {
          id: "rs-scm",
          titulo: "SCM (Software Configuration Management)",
          fonte: "HAMI_PRO_SOFT_ U4 - Livro Didático.pdf",
          html: `
            <p>Quatro elementos do SCM:</p>
            <table>
              <thead><tr><th>Elemento</th><th>O que é</th></tr></thead>
              <tbody>
                <tr><td>Componente</td><td>Conjunto de ferramentas (ex.: banco de dados) que dá acesso à gestão de cada item de configuração</td></tr>
                <tr><td>Processo</td><td>Procedimentos e tarefas que definem a gestão de alterações</td></tr>
                <tr><td>Construção</td><td>Ferramentas que automatizam a construção do software (conjunto apropriado de componentes validados, versão correta)</td></tr>
                <tr><td>Humanos</td><td>Características de processo usadas pela equipe para implementar um SCM eficaz</td></tr>
              </tbody>
            </table>`
        },
        {
          id: "rs-esg",
          titulo: "ESG",
          fonte: "HAMI_PRO_SOFT_ U4 - Livro Didático.pdf",
          html: `
            <table>
              <thead><tr><th>Sigla</th><th>Foco</th></tr></thead>
              <tbody>
                <tr><td>E (Environmental)</td><td>Recursos naturais: carbono, aquecimento global, energia, resíduos, poluição</td></tr>
                <tr><td>S (Social)</td><td>Fator humano e bem-estar; inclusão, diversidade, relação com a sociedade</td></tr>
                <tr><td>G (Governance)</td><td>Remuneração do alto escalão, transparência e ética; proteção de dados e privacidade</td></tr>
              </tbody>
            </table>`
        }
      ]
    },
    {
      id: "rs-inovacao",
      titulo: "4. MVP, Design Thinking e Design Sprint",
      topicos: [
        {
          id: "rs-mvp",
          titulo: "MVP (Produto Mínimo Viável)",
          fonte: "Unidade 4 DS_DTV2.pdf (slide MVP)",
          html: `
            <p>Protótipo de <strong>baixo custo e complexidade</strong> que mais se aproxima da realidade, para avaliar a ideia e obter feedback. Cada iteração entrega algo funcional.</p>`
        },
        {
          id: "rs-design-thinking",
          titulo: "Design Thinking: pilares e etapas",
          fonte: "Unidade 4 DS_DTV2.pdf",
          html: `
            <p>Abordagem <strong>centrada nas pessoas</strong> para solucionar problemas complexos e criar soluções inovadoras.</p>
            <p><strong>Pilares:</strong> empatia, colaboração e experimentação.</p>
            <table>
              <thead><tr><th>#</th><th>Etapa</th><th>O que acontece</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Entendimento</td><td>Organização da equipe e levantamento (regras, cronograma)</td></tr>
                <tr><td>2</td><td>Observação</td><td>Observar e entender as pessoas</td></tr>
                <tr><td>3</td><td>Ponto de vista</td><td>Cada integrante compartilha informações e impressões</td></tr>
                <tr><td>4</td><td>Ideação</td><td>Gerar soluções <strong>sem julgar</strong>; liberdade de expressão</td></tr>
                <tr><td>5</td><td>Prototipagem</td><td>Criar a versão mais próxima da realidade</td></tr>
                <tr><td>6</td><td>Teste</td><td>Observar satisfação e insatisfação; gerar melhorias</td></tr>
                <tr><td>7</td><td>Iteração</td><td>Feedback e decisão do que fica, sai ou melhora; pode voltar a etapas anteriores</td></tr>
              </tbody>
            </table>`
        },
        {
          id: "rs-design-sprint",
          titulo: "Design Sprint (1.0, 5 dias) e 2.0 (4 dias)",
          fonte: "Unidade 4 DS_DTV2.pdf",
          html: `
            <table>
              <thead><tr><th>Dia (1.0)</th><th>Etapa</th><th>Objetivo</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Mapear</td><td>Entender o problema e definir o alvo</td></tr>
                <tr><td>2</td><td>Esboçar</td><td>Desenhar ideias de solução</td></tr>
                <tr><td>3</td><td>Decidir</td><td>Escolher 1 ideia e transformá-la em hipótese testável</td></tr>
                <tr><td>4</td><td>Prototipar</td><td>Criar protótipo rápido e realista</td></tr>
                <tr><td>5</td><td>Testar</td><td>Validar ou invalidar hipóteses com usuários</td></tr>
              </tbody>
            </table>
            <table>
              <thead><tr><th>Dia (2.0)</th><th>Etapa</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Mapear</td></tr>
                <tr><td>2</td><td>Esboçar e Decidir (condensados no mesmo dia)</td></tr>
                <tr><td>3</td><td>Prototipar</td></tr>
                <tr><td>4</td><td>Testar</td></tr>
              </tbody>
            </table>
            <div class="caixa prova"><p>A 2.0 tem um dia a menos: Esboçar e Decidir foram unidos no dia 2.</p></div>`
        }
      ]
    }
  ]
});
