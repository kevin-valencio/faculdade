registrarRevisao({
  disciplina: "ps",
  visaoGeral: `<p>Projeto de Software, em quatro unidades: (U1) conceito de projeto, gestão, equipe, ciclos de vida, processos, arquitetura e frameworks de governança (ITIL, COBIT, PMI); (U2) agilidade, Manifesto Ágil, Scrum e Product Backlog; (U3) riscos, qualidade, documentação e ferramentas de comunicação; (U4) gerenciamento de configuração, integração contínua, mudanças, UX, governança e ESG, ferramentas de gestão, MVP, Design Thinking e Design Sprint.</p>
    <div class="caixa nota" data-titulo="Limitações do material"><ul>
      <li>O arquivo do livro da U2 (HAMI_PRO_SOFT_ U2 - Livro Didático.pdf) é idêntico ao da U1; o conteúdo da U2 vem dos slides e do Guia do Scrum 2020.</li>
      <li>O livro de Scrum (ProjetosSoftware14.pdf, 302 páginas) foi usado nos capítulos sobre o que é Scrum, o ciclo do Scrum, origem e Lean, Time de Desenvolvimento, Product Owner e ScrumMaster; os capítulos sobre artefatos em detalhe, eventos em detalhe, refinamento, gráficos e retrospectiva não foram incorporados em profundidade. O livro usa a terminologia anterior ao Guia 2020 (Time de Desenvolvimento, Meta do Sprint, Definição de Pronto).</li>
      <li>Trechos marcados como "Complemento externo" vêm de conhecimento geral, não da pasta.</li>
      <li>Páginas do livro não são citadas: a origem é indicada por aula e seção.</li>
    </ul></div>`,
  fontes: [
    "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf",
    "HAMI_PRO_SOFT_ U2 - Livro Didático.pdf (idêntico ao da U1)",
    "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf",
    "HAMI_PRO_SOFT_ U4 - Livro Didático.pdf",
    "Unidade 1a.pdf, Unidade 1b.pdf, Unidade 1c.pdf",
    "Unidade 2a.pdf, Unidade 2b.pdf, Unidade 2c.pdf",
    "Unidade 3a.pdf, Unidade 3b.pdf",
    "Unidade 4.pdf, Unidade 4 DS_DTV2.pdf",
    "ProjetosSoftware13.pdf (O Guia do Scrum, novembro de 2020)",
    "ProjetosSoftware14.pdf (livro de Scrum, Sabbagh; uso parcial, ver Limitações)"
  ],
  modulos: [
    {
      id: "u1",
      titulo: "Unidade 1 — Introdução a Projeto de Software",
      intro: `<p>Conceito de projeto, gestão e equipe, ciclos de vida, processos, arquitetura de software e frameworks de governança (ITIL, COBIT, PMI). Base: livro da U1 e slides das seções 1, 2 e 3 da Unidade 1.</p>`,
      topicos: [
        {
          id: "u1-conceito-projeto",
          titulo: "Conceito de projeto, características e escopo",
          fonte: "Unidade 1a.pdf (slides Definição, Características, Escopo); U1 - Livro Didático, aula 'Importância da gestão de projetos'",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>Projeto é um esforço temporário empreendido para criar um produto, serviço ou resultado exclusivo (PMI, 2008). Temporário indica início e término definidos, mas não significa curta duração. O término ocorre quando os objetivos são atingidos, quando se conclui que não serão atingidos ou quando o projeto deixa de ser necessário. Para Vargas (2005), é um empreendimento não repetitivo, com sequência lógica de eventos (início, meio e fim), conduzido por pessoas dentro de parâmetros de tempo, custo, recursos e qualidade. Origem do termo: do latim <em>projectus</em>, plano ou planejamento feito com a intenção de realizar algo.</dd>
              <dt>Características</dt><dd><ul>
                <li>Prazo definido de começo e fim (temporário).</li>
                <li>Deve ser planejado, executado e controlado.</li>
                <li>Entrega produtos, serviços ou resultados exclusivos.</li>
                <li>Desenvolvido por etapas, com evolução progressiva.</li>
                <li>Envolve uma equipe de profissionais.</li>
                <li>Tem recursos limitados.</li>
              </ul></dd>
              <dt>Escopo</dt><dd>Objetivo do escopo: garantir que o projeto realize todo e somente o trabalho necessário para o seu sucesso. É a definição do que deve e do que não deve ser entregue. Definição pobre do escopo eleva o custo final por causa de mudanças que causam retrabalho, aumentam o prazo e reduzem produtividade e moral.</dd>
            </dl>
            <table>
              <thead><tr><th>Escopo (dentro)</th><th>Não escopo (fora)</th></tr></thead>
              <tbody>
                <tr><td>Calcular salário base</td><td>Conexão com sistema XYZ</td></tr>
                <tr><td>Relatório de vendas mensal</td><td>Cadastro de produtos terceirizados</td></tr>
                <tr><td>Funcionar na Web e no Android 7.0 ou superior</td><td>Funcionar em iOS</td></tr>
              </tbody>
            </table>
            <div class="caixa prova"><ul>
              <li>Projeto é temporário e único; operação contínua e repetitiva não é projeto.</li>
              <li>Temporário não é sinônimo de curto.</li>
              <li>O escopo define o que fica dentro e o que fica fora.</li>
            </ul></div>`
        },
        {
          id: "u1-gestao-projetos",
          titulo: "Gestão de projetos, gerente e triângulo de talentos do PMI",
          fonte: "U1 - Livro Didático, aula 'Introdução a Projeto de Software'; Unidade 1b.pdf (Fundamentos Básicos para Gestão de Projetos)",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>Gestão de projetos é a aplicação de conhecimento, habilidades, ferramentas e técnicas às atividades do projeto a fim de atender aos seus requisitos (PMBOK, 4ª ed.). Objetivos principais: alcançar o sucesso da execução, por meio do controle das fases, e acumular conhecimento para projetos futuros.</dd>
              <dt>Gerenciar um projeto inclui</dt><dd><ul>
                <li>identificar necessidades;</li>
                <li>estabelecer objetivos claros e alcançáveis;</li>
                <li>balancear as demandas conflitantes de qualidade, escopo, tempo e custo;</li>
                <li>adaptar especificações, planos e abordagem às diferentes expectativas das partes interessadas.</li>
              </ul></dd>
              <dt>Papel do gerente</dt><dd>Kerzner (2020), citado no livro: o gerente de projetos do futuro será responsável por concluir o projeto no prazo, no orçamento e também pelo retorno financeiro.</dd>
            </dl>
            <h4>Triângulo de talentos do PMI</h4>
            <table>
              <thead><tr><th>Talento</th><th>O que é</th></tr></thead>
              <tbody>
                <tr><td>Técnicas em gestão de projetos</td><td>Reunião das boas experiências de projetos anteriores.</td></tr>
                <tr><td>Liderança</td><td>Aspecto comportamental que proporciona boa relação entre pessoas e eficiência na execução das tarefas.</td></tr>
                <tr><td>Gestão estratégica e de negócios</td><td>Alinhamento para garantir que necessidades e mudanças estão sendo atendidas.</td></tr>
              </tbody>
            </table>
            <h4>Indicadores de desempenho e fatores críticos de sucesso (slides)</h4>
            <table>
              <thead><tr><th>Indicadores de desempenho (qualidade do processo)</th><th>Fatores críticos de sucesso (resultado como o cliente vê)</th></tr></thead>
              <tbody><tr>
                <td><ul><li>Uso de metodologia de gestão de projeto</li><li>Estabelecimento de processos de controle</li><li>Uso de indicadores</li><li>Qualidade dos recursos aplicados x planejados</li><li>Envolvimento do cliente</li></ul></td>
                <td><ul><li>Cumprimento da programação (tempo)</li><li>Atendimento do orçamento (custo)</li><li>Concretização da qualidade</li><li>Conveniência e oportunidade da assinatura do contrato</li><li>Cumprimento do controle de mudanças</li><li>Aditivos ao contrato de execução</li></ul></td>
              </tr></tbody>
            </table>
            <div class="caixa prova"><ul>
              <li>Os três talentos são técnicas em gestão de projetos, liderança e gestão estratégica e de negócios (questões de associação são comuns).</li>
              <li>Indicadores medem o processo; fatores críticos medem o resultado final.</li>
            </ul></div>`
        },
        {
          id: "u1-sucesso-falhas",
          titulo: "Sucesso e falhas em projetos",
          fonte: "Unidade 1a.pdf (Falhas comuns em projetos)",
          html: `
            <dl class="campos">
              <dt>Visão tradicional</dt><dd>Sucesso medido pela tripla restrição (triângulo de ferro): escopo, tempo e custo. Entregar o produto como pensado, no prazo e no orçamento seria sinal de sucesso.</dd>
              <dt>Visão ampliada</dt><dd>Além da tripla restrição (eficiência do projeto), o sucesso também é medido por impacto no cliente, impacto na equipe, resultados comerciais e preparação para o futuro (Shenhar e Dvir, 2010). Sucesso pode ser resumido como gerar valor para o cliente, e esse valor não precisa ser monetário.</dd>
            </dl>
            <table>
              <thead><tr><th>Dimensão</th><th>O que avalia</th></tr></thead>
              <tbody>
                <tr><td>Eficiência do projeto</td><td>Cumprimento das metas estipuladas (tempo, orçamento).</td></tr>
                <tr><td>Impacto no cliente</td><td>Se o resultado melhorou a vida ou o negócio do cliente e atendeu suas necessidades.</td></tr>
                <tr><td>Impacto na equipe</td><td>Satisfação, retenção dos membros e ampliação de habilidades adquiridas.</td></tr>
                <tr><td>Sucesso comercial</td><td>Vendas, lucros, redução de custos, fluxo de caixa ampliado pelo produto.</td></tr>
                <tr><td>Preparação para o futuro</td><td>Melhoria da infraestrutura para criar novas oportunidades.</td></tr>
              </tbody>
            </table>
            <div class="caixa exemplo"><p>Projeto de alto risco (produto totalmente inovador): sucesso medido pelo efeito comercial. Projeto de baixo risco (prédio semelhante a um feito meses antes): sucesso medido por eficiência e satisfação do cliente. Nenhum conjunto de dimensões serve a todos os projetos.</p></div>
            <p>Fases (início, planejamento, execução, encerramento) são interdependentes, por isso é difícil localizar onde os erros ocorrem. O PMI possui pesquisa de causas comuns de falha. O livro <em>Murphy on projects</em> (Caceres, 2015) analisa por que 70% dos projetos fracassam e lista 101 causas frequentes, 25 erros clássicos e sete pecados capitais. Maturidade alta do gerente ou da empresa aumenta os resultados positivos (Prado, 2009).</p>
            <div class="caixa prova"><ul>
              <li>Projeto no prazo e no orçamento pode falhar se não gera valor ao cliente; o inverso também ocorre.</li>
              <li>Cinco dimensões: eficiência, cliente, equipe, comercial, futuro.</li>
            </ul></div>`
        },
        {
          id: "u1-equipe-matriz",
          titulo: "Equipe do projeto, matriz de habilidades e fatores de gestão",
          fonte: "U1 - Livro Didático, aula 'Introdução a Projeto de Software', seção 'Equipe do projeto e matriz de responsabilidades'; Unidade 1b.pdf (Gerenciamento de recursos humanos)",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>Projetos são realizados por pessoas (profissionais de TI, especialistas de várias áreas, gestores, usuários), cada uma com apetites, aspirações, relacionamentos, temperamento e caráter. A equipe é formada por profissionais de diversas áreas, escolhidos por habilidades técnicas e interpessoais, e não por escalão hierárquico.</dd>
              <dt>Matriz de habilidade e responsabilidade</dt><dd>Quadro (modelo adaptado de Menezes, 2018) que cruza o nome da pessoa com habilidades técnicas (ex.: engenheiro civil, web designer) e interpessoais (ex.: automotivado, criativo, agregador). Serve para decidir pelas pessoas certas em cada atividade.</dd>
              <dt>Três fatores (Menezes, 2018)</dt><dd>A gestão de stakeholders equilibra três fatores, aumentando ou diminuindo a intensidade conforme a situação.</dd>
            </dl>
            <table>
              <thead><tr><th>Fator</th><th>Definição</th></tr></thead>
              <tbody>
                <tr><td>Autoridade</td><td>Posição que a pessoa ocupa na organização e poder que lhe é conferido, e como é exercido na condução das atividades e na delegação.</td></tr>
                <tr><td>Comunicação</td><td>Recursos e mecanismos para que a informação flua e as decisões sejam tomadas; inclui o grau de formalidade ou informalidade.</td></tr>
                <tr><td>Atividade</td><td>Como é feita a divisão do trabalho: abrangência, quantidade, forma de condução, sequência e instrumentos fornecidos.</td></tr>
              </tbody>
            </table>
            <h4>Gerenciamento de recursos humanos no PMBOK (slides)</h4>
            <ul>
              <li>No PMBOK 5ª ed. inclui os processos que organizam e gerenciam a equipe; na 6ª ed. passa a se chamar gerenciamento dos recursos do projeto, abrangendo também materiais e equipamentos.</li>
              <li>Ferramentas listadas: organogramas e descrições de cargos, rede de relacionamentos, negociação, contratação, equipes virtuais, observação e conversas, avaliações de desempenho, gerenciamento de conflitos, treinamento, regras básicas, agrupamento, reconhecimento e recompensas, ferramentas de avaliação de funcionários.</li>
              <li>Organograma: forma gráfica da estrutura organizacional do projeto (hierarquia).</li>
              <li>Matriz RACI: Responsible (responsável), Accountable (aprova), Consulted (consultada), Informed (informada). Os papéis podem ser adaptados, desde que fiquem claros (ex.: suporte, quem auxilia o responsável).</li>
              <li>Equipes virtuais: facilitadas por áudio e videoconferência, mas aumentam a complexidade e exigem bom planejamento das comunicações.</li>
            </ul>
            <div class="caixa prova"><ul>
              <li>Autoridade, comunicação e atividade: saiba a definição literal de cada um.</li>
              <li>A equipe não é composta por gestores nem pelo escalão mais alto; critério é habilidade técnica e interpessoal.</li>
            </ul></div>`
        },
        {
          id: "u1-conflitos",
          titulo: "Problemas e conflitos em projetos",
          fonte: "U1 - Livro Didático, aula 'Introdução a Projeto de Software', seção 'Problemas na gestão de projetos, conflitos no projeto'",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>Problemas e conflitos existem em qualquer projeto. As consequências são imprevisíveis quando a causa é desconhecida e não há tratamento em tempo hábil; um problema pequeno não resolvido pode levar à suspensão do projeto inteiro.</dd>
              <dt>Como tratar</dt><dd><ul>
                <li>Conter o prejuízo o mais cedo possível, com fluxo simples de resolução (Figura 2 do livro).</li>
                <li>Problemas simples são resolvidos pelos próprios envolvidos; conforme o desgaste, usam-se mediadores ou facilitadores (do time ou externos).</li>
                <li>Investigar com dados e informações: base histórica alimentada por sessões de lições aprendidas com o gerente e a equipe (Cavalcanti, 2016, p. 215).</li>
                <li>Evitar o cancelamento do projeto, no início ou no fim.</li>
                <li>Metodologias incrementais ou evolutivas corrigem o percurso naturalmente, pois possuem gatilhos em que os envolvidos avaliam resultados e tratam problemas percebidos desde a última avaliação.</li>
              </ul></dd>
            </dl>
            <div class="caixa prova"><ul>
              <li>Lições aprendidas alimentam a base histórica e orientam a investigação de problemas.</li>
              <li>Ciclos incrementais e evolutivos permitem correção de rota a cada avaliação.</li>
            </ul></div>`
        },
        {
          id: "u1-murphy-mitos",
          titulo: "Lei de Murphy e os 10 mitos da gestão de projetos",
          fonte: "Unidade 1b.pdf (slides Lei de Murphy e 10 mitos)",
          html: `
            <dl class="campos">
              <dt>Lei de Murphy</dt><dd>"Se algo pode dar errado, dará." Atribuída a Edward A. Murphy Jr., piloto militar e engenheiro de sistemas de segurança de aeronaves.</dd>
              <dt>Tolerância ao risco</dt><dd>Cada parte tem uma tolerância a riscos. O gerente deve alinhar a tolerância dos stakeholders com o nível adequado ao sucesso do projeto. Wilde (2001) propõe a homeostase de risco: pessoas e grupos têm um nível limite de risco confortável e aceitam mais ou menos risco para se manter nele.</dd>
              <dt>Controle pela gestão de risco</dt><dd>O princípio da lei é o design defensivo: descobrir o que o usuário poderia fazer de errado e reduzir ou remover essa possibilidade. A lei só considera riscos negativos; o processo formal reconhece que há riscos com oportunidades positivas. Conceituar um risco remove sua característica mais perigosa, o elemento surpresa.</dd>
            </dl>
            <h4>10 mitos</h4>
            <table>
              <thead><tr><th>#</th><th>Mito</th><th>Realidade</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Tudo dentro de um projeto é corrigível</td><td>Gerentes não são mágicos; é preciso reconhecer a hora de encerrar uma iniciativa em vez de despejar recursos numa causa perdida.</td></tr>
                <tr><td>2</td><td>Os clientes sempre sabem o que querem</td><td>Costumam saber o que esperam alcançar, não o que é necessário nem como a lista de desejos se contradiz.</td></tr>
                <tr><td>3</td><td>Um modelo de projeto anterior é receita para o sucesso futuro</td><td>Fatores internos e externos mudam o resultado; cada projeto é planejado separadamente.</td></tr>
                <tr><td>4</td><td>Todo gerente pode executar qualquer projeto com sucesso</td><td>Experiência, visão, liderança e estilo diferem entre profissionais.</td></tr>
                <tr><td>5</td><td>Novos gerentes são menos eficazes que veteranos</td><td>Experiência não garante sucesso nem a falta garante falha; às vezes é preciso um novo olhar.</td></tr>
                <tr><td>6</td><td>Gerentes podem resolver qualquer conflito</td><td>Podem precisar de patrocinadores ou mediação externa; exige predisposição de todas as partes.</td></tr>
                <tr><td>7</td><td>Alterações de escopo indicam que o projeto está fadado a problemas</td><td>São comuns e podem ser esperadas; preocupam quando frequentes, inesperadas e deixam a direção incerta.</td></tr>
                <tr><td>8</td><td>O gerente é o melhor especialista da equipe</td><td>Seu papel é facilitar e orientar, aproveitando especialistas de outras áreas.</td></tr>
                <tr><td>9</td><td>Dentro do orçamento e do prazo, será bem-sucedido</td><td>Pode-se cumprir orçamento e prazo e perder o propósito; as partes interessadas determinam o sucesso.</td></tr>
                <tr><td>10</td><td>Projetos terminam na assinatura</td><td>Sem analisar lições aprendidas o projeto não está completo.</td></tr>
              </tbody>
            </table>
            <div class="caixa prova"><ul>
              <li>Mitos 7 e 9 aparecem com frequência: mudança de escopo não é necessariamente problema; prazo e orçamento cumpridos não garantem sucesso.</li>
            </ul></div>`
        },
        {
          id: "u1-ciclos-vida",
          titulo: "Ciclos de vida: clássico, preditivo, adaptativo, incremental e iterativo",
          fonte: "U1 - Livro Didático, aula 'Ciclo de Vida do Projeto de Software' (incl. Tabela 1)",
          html: `
            <dl class="campos">
              <dt>Ciclo de vida clássico</dt><dd>Quatro fases (PMI, 2017): iniciação, planejamento, execução e finalização. A nomenclatura facilita a comunicação e o acompanhamento. Cada fase usa as disciplinas do software (elicitação de requisitos, projeto, implementação, modelagem de dados, teste e validação).</dd>
            </dl>
            <table>
              <thead><tr><th>Fase</th><th>O que acontece</th></tr></thead>
              <tbody>
                <tr><td>Iniciação</td><td>Definem-se escopo do produto e escopo do projeto e obtém-se a permissão para iniciar; objetivos alinhados ao negócio.</td></tr>
                <tr><td>Planejamento</td><td>Stakeholders se comprometem; premissas e restrições; define-se como monitorar e controlar atividades, recursos e pessoas.</td></tr>
                <tr><td>Execução</td><td>Tudo se detalha, cria, constrói, valida e entrega; fase em que os profissionais de TI são mais exigidos; registro de todos os passos.</td></tr>
                <tr><td>Finalização</td><td>Aceite formalizado de quem usufrui do software e relação de melhorias (lições aprendidas).</td></tr>
              </tbody>
            </table>
            <h4>Variações de ciclo de vida</h4>
            <table>
              <thead><tr><th>Ciclo</th><th>Grau de mudanças</th><th>Frequência de entrega</th><th>Característica</th></tr></thead>
              <tbody>
                <tr><td>Preditivo (waterfall, cascata)</td><td>Baixo</td><td>Baixa</td><td>Todo o planejado em cada fase; requisitos definidos antes da execução, sem replanejamento; entrega única ao final; andamento linear. Exemplo de projeto de 4 meses: 1 semana iniciação, 3 semanas planejamento, 11 semanas execução, 1 semana finalização.</td></tr>
                <tr><td>Incremental</td><td>Baixo</td><td>Alta</td><td>Desenvolvimento em blocos; o cliente usa o sistema à medida que as entregas ocorrem; concluído quando todos os incrementos são entregues; funcionalidades definidas previamente, detalhamento feito ao longo do projeto.</td></tr>
                <tr><td>Iterativo</td><td>Alto</td><td>Baixa</td><td>Para regras de negócio complexas e precisão do software; time de operações presente em interações (até diárias); usa prototipação; adequado a inovação e empirismo com tecnologias.</td></tr>
                <tr><td>Adaptativo (ágil)</td><td>Alto</td><td>Alta</td><td>Entregas constantes em curtíssimo prazo; requisitos voláteis; stakeholders vivenciam intensamente a rotina com o time de TI.</td></tr>
              </tbody>
            </table>
            <p>Não há ciclo certo ou errado; a escolha se justifica pelo grau de incerteza dos requisitos e dos recursos tecnológicos e pela frequência de entrega ou de mudança. O método ágil é largamente praticado desde os anos 2000.</p>
            <div class="caixa externo" data-titulo="Complemento externo"><p>A relação mudança x frequência da tabela do livro coincide com a classificação do Guia de Práticas Ágeis do PMI (2017): preditivo (pouca mudança, entrega única), iterativo (mudança alta, entrega única), incremental (entrega frequente, escopo previamente conhecido) e ágil (ambos altos). Conhecimento geral, sem divergência com o livro.</p></div>
            <div class="caixa nota" data-titulo="Atenção a divergência"><p>O livro trata o ciclo clássico com 4 fases (iniciação, planejamento, execução, finalização). Os slides da seção 3 citam os 5 grupos de processos do PMBOK (início, planejamento, execução, monitoramento e controle, encerramento). O livro, por sua vez, trata controle como parte da execução ("Processo de execução e controle"). Em questões do livro, siga a nomenclatura do enunciado.</p></div>
            <div class="caixa prova"><ul>
              <li>Decore a Tabela 1: preditivo baixo/baixa, incremental baixo/alta, iterativo alto/baixa, adaptativo alto/alta.</li>
              <li>Preditivo = waterfall = cascata.</li>
            </ul></div>`
        },
        {
          id: "u1-processos",
          titulo: "Processos do projeto: TAP, escopo, execução, controle e encerramento",
          fonte: "U1 - Livro Didático, aula 'Processos de projeto de Software' (Tabelas 1 e 2, caso BDParty)",
          html: `
            <h4>Iniciação e planejamento</h4>
            <dl class="campos">
              <dt>Iniciação</dt><dd>Etapa em que projetos são divididos em menores para facilitar a gestão de projetos complexos; stakeholders decidem continuar, postergar ou não prosseguir. O TAP (termo de abertura do projeto) reúne premissas, restrições, orçamento, prazo e demais recursos e fornece autorização formal de responsáveis, stakeholders e patrocinadores.</dd>
            </dl>
            <table>
              <thead><tr><th>Item do TAP</th><th>Conteúdo</th></tr></thead>
              <tbody>
                <tr><td>Gestor do projeto</td><td>Normalmente definido pelos patrocinadores (sponsors).</td></tr>
                <tr><td>Principais pontos</td><td>Quando, de que forma e por quem as atividades serão entregues (apoia a comunicação).</td></tr>
                <tr><td>Justificativa</td><td>Termômetro que indica quais projetos ou etapas executar primeiro e quais aguardar.</td></tr>
                <tr><td>Restrições e premissas</td><td>Limites de custo, disponibilidade de profissionais, infraestrutura da empresa e prazo final.</td></tr>
                <tr><td>Escopo</td><td>Requisitos solicitados de forma clara e completa, evitando questionamentos nas entregas.</td></tr>
              </tbody>
            </table>
            <table>
              <thead><tr><th>Escopo do projeto</th><th>Escopo do produto</th></tr></thead>
              <tbody><tr>
                <td>Todo o trabalho necessário para entregar o produto: processos, atividades, fluxo de sequência e prazos.</td>
                <td>Características que o produto precisa ter: descrição detalhada do solicitado e de alterações, requisitos funcionais e não funcionais.</td>
              </tr></tbody>
            </table>
            <div class="caixa exemplo"><p>No app de batimento cardíaco, "medir em BPM" é escopo do produto (característica do produto); "alocar a equipe na empresa" ou "criar uma EAP" tratam do trabalho do projeto.</p></div>
            <h4>Execução e controle</h4>
            <ul>
              <li>Execução é a maior fase e onde tudo acontece: design, implementação de código, integração, gerenciamento de configuração, refatoração, banco de dados, documentação e testes.</li>
              <li>O gestor dispensa menos esforço na execução, mas o esforço de controle é enorme; o controle é responsabilidade do gestor, que monitora, promove o funcionamento dos recursos e comunica o estado do projeto.</li>
              <li>Diante de imprevistos, analisar as causas e retomar o curso planejado.</li>
            </ul>
            <h4>Encerramento e avaliação</h4>
            <ul>
              <li>Documentar acertos e erros (lições aprendidas) para projetos futuros.</li>
              <li>Verificar se o escopo foi alcançado e as especificações atendidas; ponto crítico é a aceitação pelo cliente final ou patrocinador.</li>
              <li>A formalização do encerramento é obrigatória, assim como o aceite para iniciar na iniciação.</li>
            </ul>
            <h4>Caso BDParty (festa como projeto)</h4>
            <p>Resultado único, temporário (ocorre uma vez) e com escopo bem definido. Iniciação: data, premissas e restrições, recuperar feedback da festa anterior. Planejamento: pessoas e responsabilidades. Execução: comprar, contratar, locar, programar entregas. Monitoramento e controle: falta alegria, comida, foto oficial? Encerramento: o aniversariante se divertiu? as contas foram pagas? divulgar registros e agradecer.</p>
            <div class="caixa prova"><ul>
              <li>TAP pertence à iniciação; escopo do produto = características do produto; escopo do projeto = trabalho.</li>
              <li>Execução: design, código, integração, gerenciamento de configuração, refatoração. Controle: monitorar e corrigir desvios.</li>
              <li>Encerramento: aceite formal, escopo conferido e lições aprendidas documentadas.</li>
            </ul></div>`
        },
        {
          id: "u1-arquitetura",
          titulo: "Arquitetura de software: estilos, padrões e decisões",
          fonte: "U1 - Livro Didático, aula 'Arquitetura de Software' (Pressman, 2021, p. 182 e 186)",
          html: `
            <dl class="campos">
              <dt>Benefícios (Pressman, 2021, p. 182)</dt><dd><ol>
                <li>Analisar a efetividade do projeto no atendimento dos requisitos declarados.</li>
                <li>Considerar alternativas de arquitetura em um estágio em que mudanças de projeto ainda são relativamente fáceis.</li>
                <li>Reduzir os riscos associados à construção do software.</li>
              </ol></dd>
              <dt>Componente</dt><dd>Pode ser um módulo, uma classe orientada a objetos ou, em escala maior, um banco de dados; deve ter propriedades que permitam interação com os outros componentes.</dd>
              <dt>Estilo de arquitetura (Pressman, 2021, p. 186)</dt><dd><ul>
                <li>conjunto de <strong>componentes</strong> que realiza uma função exigida pelo sistema;</li>
                <li>conjunto de <strong>conectores</strong> que habilitam comunicação, coordenação e cooperação entre os componentes;</li>
                <li><strong>restrições</strong> que definem como os componentes podem ser integrados;</li>
                <li><strong>modelos semânticos</strong> que permitem compreender as propriedades gerais do sistema pelas propriedades conhecidas de suas partes.</li>
              </ul></dd>
              <dt>Padrão de arquitetura</dt><dd>Impõe uma transformação no projeto de arquitetura: uma regra que detalha como o software trata algum aspecto de sua funcionalidade em termos de infraestrutura (ex.: concorrência), tratando questões comportamentais específicas (ex.: sincronização e interrupções em tempo real).</dd>
              <dt>Arquitetura em camadas</dt><dd>A camada central opera próxima ao conjunto de instruções de máquina; depois vem a intermediária, que fornece serviços utilitários, a de interface com o sistema operacional e, na mais externa, os componentes da interface do usuário.</dd>
            </dl>
            <h4>Decisões sobre a arquitetura</h4>
            <table>
              <thead><tr><th>Critério</th><th>Definição</th></tr></thead>
              <tbody>
                <tr><td>Economia</td><td>Cuidado com recursos desnecessários; depende da abstração para evitar complexidade excessiva.</td></tr>
                <tr><td>Visibilidade</td><td>A motivação pela arquitetura escolhida deve estar tecnicamente clara e comunicada ao time.</td></tr>
                <tr><td>Espaçamento</td><td>Grau de separação por interesses; pode ficar fragmentado demais, com perda de visibilidade.</td></tr>
                <tr><td>Simetria</td><td>Projetos simétricos são mais fáceis de entender, compreender e comunicar; simetria estrutural ou comportamental.</td></tr>
                <tr><td>Emersão</td><td>Comportamento e controle emergentes e auto-organizados costumam ser o segredo de arquiteturas expansíveis, eficientes e econômicas (sistemas flexíveis).</td></tr>
              </tbody>
            </table>
            <div class="caixa exemplo" data-titulo="Exemplo: SMPA (Sistema de Monitoramento na Produção Agrícola) em camadas"><ul>
              <li><strong>Camada de dispositivos IoT</strong>: coleta de dados de sensores (temperatura, umidade do solo, níveis de água).</li>
              <li><strong>Camada de processamento e análise de dados</strong>: dados processados, limpos e analisados; pode usar aprendizado de máquina.</li>
              <li><strong>Camada de aplicação web</strong>: acesso por computadores e smartphones, informações em tempo real e alertas.</li>
              <li><strong>Camada de armazenamento de dados</strong>: banco relacional, NoSQL ou combinação.</li>
              <li>Componente adicional possível: sistema de alerta. Manter a estrutura em camadas na manutenção e evolução garante agilidade para novas funcionalidades.</li>
            </ul></div>
            <p>Estilos citados no "Saiba mais" (Pressman, seção 10.3.1): centralizadas em dados, fluxo de dados, chamada e retorno, orientados a objetos e em camadas. A arquitetura Modelo-Visão-Controlador aparece no material da U4 como favorável à interface.</p>
            <div class="caixa prova"><ul>
              <li>Os três benefícios falam em "requisitos declarados", não "requisitos não funcionais".</li>
              <li>Memorize as cinco decisões (economia, visibilidade, espaçamento, simetria, emersão) com a definição literal; é fonte frequente de questões com definições trocadas.</li>
              <li>Estilo tem 4 elementos: componentes, conectores, restrições, modelos semânticos.</li>
            </ul></div>`
        },
        {
          id: "u1-governanca-ti",
          titulo: "Governança de TI e stakeholders",
          fonte: "Unidade 1c.pdf (slides ITIL e COBIT, Stakeholders)",
          html: `
            <dl class="campos">
              <dt>Governança</dt><dd>Termo de origem grega <em>kubernan</em>, "navegação" ou "o processo de continuamente orientar e ajustar".</dd>
              <dt>Governança de TI</dt><dd>Segundo o ITGI (2007): estrutura de processos e relações para controle e direção de uma organização, para que atinja seus objetivos analisando riscos e obtendo retorno positivo dos investimentos; tem olhar para os negócios e foco no futuro. Para Fernandes e Abreu (2008), busca alinhar as decisões de TI com os gestores.</dd>
              <dt>Requisitos atendidos pela TI (Fernandes e Abreu, 2008)</dt><dd><ul>
                <li>alinhamento da TI ao negócio;</li>
                <li>continuidade do negócio contra interrupções e falhas;</li>
                <li>alinhamento da TI com normas e resoluções.</li>
              </ul></dd>
              <dt>Stakeholders</dt><dd>PMBOK (PMI, 2013): indivíduo, grupo ou organização que pode afetar, ser afetado ou perceber a si mesmo como afetado por uma decisão, atividade ou resultado do projeto. O ITGI considera responsabilidade da governança de TI a importância dos stakeholders nas estratégias. O gerente e a equipe devem identificar, analisar, classificar e preparar estratégias para gerenciar demandas e expectativas dos stakeholders.</dd>
            </dl>`
        },
        {
          id: "u1-cobit-itil",
          titulo: "COBIT e ITIL",
          fonte: "Unidade 1c.pdf (slides COBIT e ITIL); U4 - Livro Didático, aula 'Paradigmas em Projeto de Software estratégico'",
          html: `
            <table>
              <thead><tr><th></th><th>COBIT (Control Objectives for Information and Related Technology)</th><th>ITIL (Information Technology Infrastructure Library)</th></tr></thead>
              <tbody>
                <tr><td>O que é</td><td>Framework de governança e gestão de TI, mantido pela ISACA (associação global de profissionais de auditoria e controle de sistemas de informação). Cria valor ótimo da TI equilibrando benefícios, risco e uso de recursos.</td><td>Conjunto coerente de melhores práticas para gestão de serviços de TI (ITSM), baseado em experiência de empresas e governos. Criado nos anos 1980 no Reino Unido.</td></tr>
                <tr><td>Foco</td><td>Parâmetros de controle para alcançar o resultado desejado; usado por auditores e gestores de TI.</td><td>Processos para gerenciar a infraestrutura de TI de forma eficiente e garantir níveis de serviço contratados (Vieira, 2007).</td></tr>
                <tr><td>Estrutura</td><td>4 domínios: planejamento e organização; aquisição e implementação; entrega e suporte; monitoração.</td><td>Processos: planejamento de serviços, incidentes, problemas, mudanças, configurações, operações, segurança, capacidade, disponibilidade, custos, entrada em produção e testes.</td></tr>
              </tbody>
            </table>
            <h4>Domínios do COBIT (Sortica, Clementi e Carvalho, 2004)</h4>
            <table>
              <thead><tr><th>Domínio</th><th>Abrange</th></tr></thead>
              <tbody>
                <tr><td>Planejamento e Organização</td><td>Estratégias de uso da TI, processos, arquitetura da informação, investimentos, riscos, gerenciamento de projetos e da qualidade.</td></tr>
                <tr><td>Aquisição e Implementação</td><td>Implementação conforme o PDI (Plano Diretor de Informática): identificação de soluções, manutenção de sistemas, aquisição, infraestrutura, desenvolvimento, gerência de mudanças, instalação.</td></tr>
                <tr><td>Entrega e Suporte</td><td>Questões operacionais: atendimento e manutenção dos serviços, gestão de fornecedores, desempenho e segurança.</td></tr>
                <tr><td>Monitoração</td><td>Acompanhamento dos serviços e dos demais processos, coleta de dados operacionais e auditoria.</td></tr>
              </tbody>
            </table>
            <h4>Áreas do ITIL listadas nos slides</h4>
            <ul>
              <li><strong>Entrega de serviço</strong>: planejar e entregar serviços de TI com qualidade.</li>
              <li><strong>Suporte de serviço</strong>: atividades diárias de manutenção e suporte.</li>
              <li><strong>Gerenciamento de infraestrutura de TI e comunicação</strong>.</li>
              <li><strong>Gerenciamento para implementar a gestão de serviço</strong>: planejamento, implementação e melhoria dos processos gerenciais.</li>
              <li><strong>Gerenciamento de aplicação</strong>: ciclo de vida das aplicações a partir das necessidades de negócio.</li>
              <li><strong>Perspectiva de negócio</strong>: ajuda a equipe de TI a entender o negócio.</li>
              <li><strong>Gerenciamento de segurança</strong>: nível definido de segurança dos serviços.</li>
            </ul>
            <div class="caixa prova"><ul>
              <li>COBIT = governança e controle de TI (ISACA), 4 domínios. ITIL = gestão de serviços de TI, biblioteca de boas práticas.</li>
              <li>No livro da U4: ITIL é largamente aplicável ao gerenciamento da tecnologia, com estrutura prática e flexível para a transformação digital.</li>
            </ul></div>`
        },
        {
          id: "u1-pmi-pmbok",
          titulo: "PMI, PMO e PMBOK",
          fonte: "Unidade 1c.pdf (slides PMI, PMBOK); U1 - Livro Didático (triângulo de talentos)",
          html: `
            <table>
              <thead><tr><th>Sigla</th><th>O que é</th></tr></thead>
              <tbody>
                <tr><td>PMI</td><td>Project Management Institute: associação global sem fins lucrativos para profissionais de gerenciamento de projetos, fundada em 1969, sede em Newton Square (Filadélfia). Atua em certificação (oito certificações, entre elas a PMP), padrões globais (12) e formação e educação (REPs, programa de pesquisa).</td></tr>
                <tr><td>PMO</td><td>Project Management Office (escritório de gerenciamento de projetos): estrutura organizacional que padroniza os processos de governança de projetos e facilita o compartilhamento de recursos, metodologias, ferramentas e técnicas.</td></tr>
                <tr><td>PMBOK</td><td>Project Management Body of Knowledge: conjunto de diretrizes organizado pelo PMI; base de conhecimento da atividade.</td></tr>
              </tbody>
            </table>
            <h4>Elementos e áreas</h4>
            <ul>
              <li>Cinco elementos recorrentes citados nos slides: início, planejamento, execução, monitoramento e controle, encerramento.</li>
              <li>10 áreas de conhecimento: integração, escopo, custos, qualidade, aquisições, recursos, comunicações, riscos, cronograma e partes interessadas.</li>
              <li>Pelo slide sobre o PMBOK 7ª ed., o foco muda de processos rígidos para entrega de valor e adaptabilidade; as 10 áreas dão lugar a 8 domínios de desempenho: partes interessadas, equipe, abordagem de desenvolvimento e ciclo de vida, planejamento, trabalho no projeto, entrega, medição e incerteza.</li>
            </ul>
            <table>
              <thead><tr><th>Vantagens</th><th>Desvantagens</th></tr></thead>
              <tbody><tr>
                <td><ul><li>Gestão de custos eficiente</li><li>Padronização de processos</li><li>Controle do ciclo de vida</li><li>Qualidade nas entregas e satisfação do cliente</li></ul></td>
                <td><ul><li>Burocratização (projetos pequenos ou pontuais)</li><li>Engessamento do processo</li><li>Envolve pouco o cliente no desenvolvimento (princípios ágeis ficam de fora nos modelos tradicionais)</li></ul></td>
              </tr></tbody>
            </table>
            <p>Requisito da certificação PMP (slides): formação de 4 anos, 3 anos de experiência em gerenciamento de projetos, 4.500 horas de liderança e direção de projetos e 35 horas de formação; ou ensino médio, 5 anos de experiência e 7.500 horas.</p>
            <div class="caixa nota"><p>Os slides afirmam "10 áreas" e, em outro trecho, "8 domínios" (PMBOK 7). Ambas as informações estão no material; as 10 áreas pertencem às edições anteriores.</p></div>
            <div class="caixa prova"><ul>
              <li>PMI é a associação; PMBOK é o guia; PMO é a estrutura da organização; PMP é a certificação.</li>
              <li>Triângulo de talentos do PMI: ver tópico de gestão de projetos.</li>
            </ul></div>`
        },
        {
          id: "u1-estudo-caso-prodont",
          titulo: "Estudo de caso do livro: PrOdont (clínica odontológica)",
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, Videoaula de Encerramento ('É Hora de Praticar' e 'Resolução do Estudo de Caso')",
          html: `
            <div class="caixa exemplo" data-titulo="Cenário"><p>O diretor de operação da PrOdont quer agregar um time de TI ao programa de crescimento da clínica. Desafios: atendimento ao paciente por <strong>aplicativo de comunicação, agendamento e histórico de tratamento</strong>, e gerenciamento dos recursos da clínica em função dos atendimentos e tratamentos.</p></div>
            <p>Perguntas de reflexão do livro: a arquitetura adotada facilitará a manutenção após a implantação, fase inevitável de evolução? O time tem competência para resolver problemas e conflitos? Os processos do ciclo de vida estão perceptíveis a todos, facilitando a comunicação?</p>
            <h4>Resolução (pontos da resposta esperada)</h4>
            <table>
              <thead><tr><th>Decisão</th><th>Justificativa do livro</th></tr></thead>
              <tbody>
                <tr><td>Papéis da equipe</td><td>Coordenação das atividades de desenvolvimento, analistas de negócio e de dados especializados em clínica odontológica, arquitetos com experiência em componentes para serviços e tratamentos, designer de UX e responsável pelos requisitos funcionais pelo time de operações.</td></tr>
                <tr><td>Ciclo de vida</td><td>Escolher o adequado à realidade; como exemplo, o <strong>modelo iterativo</strong>, com entregas periódicas e muitas mudanças devido às constantes necessidades de regras da clínica.</td></tr>
                <tr><td>Arquitetura</td><td>Priorizar a facilidade de compreender os aspectos estrutural e comportamental, por exemplo pela <strong>simetria</strong> (estrutural ou comportamental): códigos mais fáceis de entender, compreender e comunicar, favorecendo funcionalidades de fácil aprendizado pelas diversas áreas da clínica.</td></tr>
                <tr><td>Interface</td><td>Design das interfaces como prioridade: uso rápido pelos pacientes e facilidade para os profissionais registrarem e consultarem tratamentos, em fluxo de atividades por paciente.</td></tr>
              </tbody>
            </table>
            <div class="caixa prova"><ul>
              <li>Mudanças frequentes e entregas periódicas sugerem iterativo ou adaptativo; baixa mudança e baixa frequência sugerem preditivo (tabela de ciclos de vida).</li>
              <li>Simetria é característica de decisão arquitetural ligada à compreensão e comunicação.</li>
            </ul></div>`
        }
      ]
    },
    {
      id: "u2",
      titulo: "Unidade 2 — Agilidade e Scrum",
      intro: `<p>Agilidade, Manifesto Ágil, metodologias ágeis, Scrum (papéis, eventos, artefatos), Product Backlog e mudanças do Guia Scrum 2017 para 2020. Base: slides Unidade 2a, 2b e 2c e Guia do Scrum 2020 (ProjetosSoftware13.pdf). O livro da U2 enviado na pasta é idêntico ao da U1, portanto não acrescenta conteúdo.</p>`,
      topicos: [
        {
          id: "u2-agilidade",
          titulo: "Agilidade e os 12 princípios do Manifesto Ágil",
          fonte: "Unidade 2a.pdf (slides Agilidade e 12 princípios)",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>Ser ágil não é rapidez ou velocidade, usar ou não Scrum ou o PMBOK, nem conversar mais e documentar menos: é <strong>eliminar o desperdício</strong> e desburocratizar processos, poupando o recurso mais precioso, o tempo. Envolve "manipular o escopo": decidir o que realmente gera valor para o cliente, com valor real e não suposto.</dd>
              <dt>Passo a passo resumido (slides)</dt><dd><ol>
                <li>Define-se o que será entregue e gera valor (uma funcionalidade, não o produto todo).</li>
                <li>Desenvolve-se em um prazo de 15 a 30 dias (Sprint).</li>
                <li>Entrega-se ao cliente, que valida; passa-se à próxima funcionalidade. Repete-se até acabar o projeto.</li>
              </ol></dd>
            </dl>
            <table>
              <thead><tr><th>#</th><th>Princípio</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Maior prioridade é satisfazer o cliente com entrega contínua e adiantada de software com valor agregado.</td></tr>
                <tr><td>2</td><td>Aceitar mudanças de requisitos, mesmo no fim do desenvolvimento; processos ágeis se adequam a mudanças para que o cliente tire vantagens competitivas.</td></tr>
                <tr><td>3</td><td>Entregar frequentemente software funcionando, de poucas semanas a poucos meses, com preferência à menor escala de tempo.</td></tr>
                <tr><td>4</td><td>Pessoas de negócio e desenvolvedores trabalham diariamente em conjunto por todo o projeto.</td></tr>
                <tr><td>5</td><td>Construir projetos em torno de indivíduos motivados, dando ambiente e suporte e confiando neles.</td></tr>
                <tr><td>6</td><td>O método mais eficiente de transmitir informação é a conversa face a face.</td></tr>
                <tr><td>7</td><td>Software funcionando é a medida primária de progresso.</td></tr>
                <tr><td>8</td><td>Processos ágeis promovem desenvolvimento sustentável, com ritmo constante indefinidamente.</td></tr>
                <tr><td>9</td><td>Atenção contínua à excelência técnica e ao bom design aumenta a agilidade.</td></tr>
                <tr><td>10</td><td>Simplicidade: maximizar a quantidade de trabalho não realizado é essencial.</td></tr>
                <tr><td>11</td><td>As melhores arquiteturas, requisitos e designs emergem de times auto-organizáveis.</td></tr>
                <tr><td>12</td><td>Em intervalos regulares, a equipe reflete sobre como se tornar mais eficaz e ajusta seu comportamento.</td></tr>
              </tbody>
            </table>
            <div class="caixa externo" data-titulo="Complemento externo (conhecimento geral)"><p>Além dos 12 princípios, o Manifesto Ágil (2001) declara 4 valores: indivíduos e interações mais que processos e ferramentas; software em funcionamento mais que documentação abrangente; colaboração com o cliente mais que negociação de contratos; responder a mudanças mais que seguir um plano. Esses valores não constam literalmente nos slides da pasta, mas costumam ser cobrados (a questão sobre colaboração na U2 usa o terceiro valor). Itens à direita também têm valor, porém os da esquerda têm mais.</p></div>
            <div class="caixa prova"><ul>
              <li>Princípios 7 (software funcionando como medida de progresso), 2 (aceitar mudanças) e 10 (simplicidade) foram cobrados na avaliação da unidade.</li>
              <li>Agilidade é eliminar desperdício, não velocidade.</li>
            </ul></div>`
        },
        {
          id: "u2-metodologias",
          titulo: "Principais metodologias ágeis: Scrum, Lean, Kanban e SMART",
          fonte: "Unidade 2a.pdf (As principais Metodologias Ágeis no mercado)",
          html: `
            <table>
              <thead><tr><th>Método</th><th>Ideia central</th><th>Detalhes</th></tr></thead>
              <tbody>
                <tr><td>Scrum</td><td>Processo iterativo e incremental para desenvolver qualquer produto e gerenciar qualquer trabalho.</td><td>Ciclos chamados sprints; ao final, revisão do produto para validação; exige representante do cliente que mantém lista de prioridades. Indicado para projetos com prazo curto de entrega, alta complexidade e urgência. É o mais popular e comumente confundido com o conceito de metodologia ágil.</td></tr>
                <tr><td>Lean</td><td>Identificar e eliminar desperdícios.</td><td>Difundido no cenário das startups, indicado a projetos reduzidos e objetivos. Reduz custos e complexidade, melhora entregas, aumenta produtividade e compartilhamento de informações. Indicado para validar ideias e hipóteses em três passos: construir, medir, aprender.</td></tr>
                <tr><td>Kanban</td><td>Visão visual do projeto por quadro; busca evolução e não revolução.</td><td>Quadro dividido em To Do (a fazer), Doing (em andamento) e Done (concluídas, avaliadas e aprovadas). Todos atualizam constantemente. Mantém ritmo sustentável, evitando gargalos e atrasos. Kanban não é oficial do Scrum, mas é muito usado.</td></tr>
                <tr><td>SMART</td><td>Critérios para definir metas realistas.</td><td>S specific (específica), M measurable (mensurável), A attainable (alcançável, desafiadora), R relevant (relevante), T time-related (prazo definido).</td></tr>
              </tbody>
            </table>
            <div class="caixa prova"><ul>
              <li>Lean: eliminação de desperdícios; construir, medir, aprender. Não é "processo gradativo restrito à indústria motora".</li>
              <li>Kanban: To Do, Doing, Done.</li>
              <li>SMART: S, M, A, R, T, com as definições acima.</li>
            </ul></div>`
        },
        {
          id: "u2-scrum-framework",
          titulo: "Scrum: framework, teoria e valores",
          fonte: "Unidade 2b.pdf (Scrum, Pilares, Valores); ProjetosSoftware13.pdf (Guia do Scrum 2020, Definição, Teoria, Valores)",
          html: `
            <dl class="campos">
              <dt>Definição (Guia 2020)</dt><dd>Scrum é um framework leve que ajuda pessoas, times e organizações a gerar valor por meio de soluções adaptativas para problemas complexos. Propositalmente incompleto: define apenas as partes necessárias para implementar a teoria Scrum. Só existe em sua totalidade; implementar apenas partes não é Scrum.</dd>
              <dt>Componentes (slides)</dt><dd>Papéis, eventos, artefatos e regras (time-boxing, transparência, Definição de Pronto).</dd>
              <dt>Teoria</dt><dd>Baseado em <strong>empirismo</strong> (conhecimento vem da experiência e de decisões com base no observado) e <strong>lean thinking</strong> (reduz desperdício, foca no essencial). Abordagem iterativa e incremental para otimizar previsibilidade e controlar risco.</dd>
              <dt>Três pilares empíricos</dt><dd><ul>
                <li><strong>Transparência</strong>: processo e trabalho visíveis a quem executa e a quem recebe; sem ela, a inspeção é enganosa.</li>
                <li><strong>Inspeção</strong>: artefatos e progresso inspecionados com frequência e diligência; sem adaptação é inútil.</li>
                <li><strong>Adaptação</strong>: ajuste do processo ou do produto o mais rápido possível quando há desvio.</li>
              </ul></dd>
              <dt>Cinco valores</dt><dd>Compromisso, foco, abertura, respeito e coragem.</dd>
              <dt>Sprint e eventos</dt><dd>Sprint de no máximo um mês; Scrum combina quatro eventos formais de inspeção e adaptação (planning, daily, review, retrospective) dentro da Sprint (o Guia 2020 cita "cinco eventos" ao contar a própria Sprint).</dd>
            </dl>
            <div class="caixa nota"><p>Os slides definem Scrum Team como PO + Scrum Master + Dev Team e alertam que alguns autores erram ao chamar o time de desenvolvimento de Scrum Team. Os slides afirmam também que o Scrum é uma mudança cultural da organização, citando Moreira e Alves sobre treinamento que não deu certo.</p></div>`
        },
        {
          id: "u2-scrum-papeis",
          titulo: "Papéis do Scrum",
          fonte: "Unidade 2b.pdf e 2c.pdf (Papéis); ProjetosSoftware13.pdf (Scrum Team, Developers, PO, SM)",
          html: `
            <table>
              <thead><tr><th>Papel</th><th>Responsabilidades</th></tr></thead>
              <tbody>
                <tr><td>Product Owner (PO)</td><td>Dono do produto, voz do cliente. Maximiza o valor do produto, cria a visão, gerencia o Product Backlog (comunicar a meta do produto, criar e comunicar itens, ordenar, garantir transparência) e define a prioridade. É uma pessoa, não um comitê. Pode delegar tarefas, mas continua responsável. Só ele pode cancelar a Sprint.</td></tr>
                <tr><td>Scrum Master (SM)</td><td>Líder servidor e facilitador. Estabelece o Scrum conforme o Guia, remove impedimentos, garante que os eventos ocorram, sejam positivos e dentro do timebox, treina o time em autogerenciamento e serve ao PO e à organização. Responsável pela eficácia do Scrum Team.</td></tr>
                <tr><td>Developers (Time de Desenvolvimento)</td><td>Criam o incremento utilizável a cada Sprint. Sempre responsáveis por: criar o plano da Sprint (Sprint Backlog), incorporar qualidade com a Definição de Pronto, adaptar o plano diariamente e responsabilizar-se mutuamente. Slides: auto-organizado, tamanho ideal de 3 a 9 pessoas; compõem-se de desenvolvedores, analistas, DBAs, designers e quem tem papel ativo no desenvolvimento.</td></tr>
              </tbody>
            </table>
            <p>Quem decide quantos itens cabem na Sprint é o time de desenvolvimento; o PO define a prioridade. O Scrum não prescreve práticas de engenharia de software: é decisão do time.</p>
            <div class="caixa prova"><ul>
              <li>Scrum Team = PO + Scrum Master + Developers. PO e SM não fazem parte do time de desenvolvimento, a menos que executem itens do Sprint Backlog.</li>
              <li>Quem estima o tamanho dos itens e quanto cabe na Sprint: Developers. Quem ordena o backlog: PO.</li>
              <li>Guia 2020: Scrum Team típico com 10 ou menos pessoas; slides (versão 2017): 3 a 9 no time de desenvolvimento.</li>
            </ul></div>`
        },
        {
          id: "u2-scrum-eventos",
          titulo: "Eventos do Scrum e timeboxes",
          fonte: "Unidade 2b.pdf e 2c.pdf (Eventos); ProjetosSoftware13.pdf (Eventos Scrum)",
          html: `
            <table>
              <thead><tr><th>Evento</th><th>Propósito</th><th>Timebox máximo (Sprint de 1 mês)</th><th>Participantes</th></tr></thead>
              <tbody>
                <tr><td>Sprint</td><td>Coração do Scrum, contêiner de todos os outros eventos; cria um incremento utilizável.</td><td>1 mês ou menos (slides: no máximo 4 semanas)</td><td>Scrum Team</td></tr>
                <tr><td>Sprint Planning</td><td>Definir o trabalho da Sprint e a Meta da Sprint (por quê, o quê, como).</td><td>8 horas</td><td>Scrum Team</td></tr>
                <tr><td>Daily Scrum</td><td>Inspecionar o progresso rumo à Meta da Sprint e adaptar o Sprint Backlog; plano para as próximas 24 h.</td><td>15 minutos</td><td>Developers (2017: Developers; slides 2c: Developers e Scrum Master)</td></tr>
                <tr><td>Sprint Review</td><td>Inspecionar o resultado da Sprint e determinar adaptações; mostra o incremento a stakeholders; Product Backlog pode ser ajustado.</td><td>4 horas</td><td>Scrum Team e stakeholders convidados pelo PO</td></tr>
                <tr><td>Sprint Retrospective</td><td>Planejar maneiras de aumentar qualidade e eficácia: indivíduos, interações, processos, ferramentas, Definição de Pronto.</td><td>3 horas</td><td>Scrum Team</td></tr>
              </tbody>
            </table>
            <ul>
              <li>Todos os eventos têm duração máxima (timebox); sprints mais curtas têm eventos mais curtos. Nova Sprint começa imediatamente após a anterior.</li>
              <li>Durante a Sprint: nenhuma mudança que ponha em risco a Meta da Sprint; qualidade não diminui; Product Backlog refinado; escopo pode ser esclarecido e renegociado com o PO.</li>
              <li>Sprint Planning (Guia 2020): tópico 1 por que a Sprint é valiosa (Meta da Sprint), tópico 2 o que pode ser feito, tópico 3 como o trabalho escolhido será realizado (itens de um dia ou menos, escolha exclusiva dos Developers).</li>
              <li>Daily (slides 2017): três perguntas (o que foi concluído, o que será feito, quais obstáculos). O Guia 2020 removeu as perguntas; os Developers escolhem a técnica.</li>
              <li>Sprint Review: sessão de trabalho, não só apresentação; é o penúltimo evento (Guia 2020). Slides 2c dizem que ocorre no último dia da Sprint.</li>
              <li>Retrospectiva conclui a Sprint; no slide está relacionada à garantia da qualidade.</li>
            </ul>
            <div class="caixa prova"><ul>
              <li>Memorize 8 h, 15 min, 4 h, 3 h (para Sprint de 1 mês) e Sprint máx. 1 mês.</li>
              <li>Retrospectiva ocorre após a Review e conclui a Sprint.</li>
            </ul></div>`
        },
        {
          id: "u2-scrum-artefatos",
          titulo: "Artefatos do Scrum e compromissos",
          fonte: "Unidade 2b.pdf e 2c.pdf (Artefatos, Backlog); ProjetosSoftware13.pdf (Scrum Artifacts)",
          html: `
            <table>
              <thead><tr><th>Artefato</th><th>Conteúdo</th><th>Compromisso (Guia 2020)</th></tr></thead>
              <tbody>
                <tr><td>Product Backlog</td><td>Lista ordenada e emergente do que é necessário para melhorar o produto; única fonte de trabalho do Scrum Team. Dinâmico, nunca completo, existe enquanto o produto existir. Itens com descrição, ordem e estimativa. Responsável: PO.</td><td>Meta do Produto</td></tr>
                <tr><td>Sprint Backlog</td><td>Meta da Sprint (por quê) + itens do Product Backlog selecionados (o quê) + plano de ação (como). Plano feito por e para os Developers, atualizado ao longo da Sprint. Só os itens do Sprint Backlog são decompostos em tarefas pequenas (ideal até 8 h) com estimativa em horas.</td><td>Meta da Sprint</td></tr>
                <tr><td>Incremento</td><td>Trampolim concreto rumo à Meta do Produto; somado aos incrementos anteriores e verificado; deve ser utilizável. Vários podem ser criados em uma Sprint; pode ser entregue antes do fim da Sprint.</td><td>Definição de Pronto (DoD)</td></tr>
              </tbody>
            </table>
            <ul>
              <li><strong>Refinamento</strong>: ato contínuo de quebrar e detalhar itens do Product Backlog; itens que cabem em uma Sprint ficam "preparados para seleção". Os Developers que farão o trabalho são responsáveis pelo dimensionamento.</li>
              <li><strong>Definição de Pronto</strong>: descrição formal do estado do incremento quando atende às medidas de qualidade; item que não a atende volta ao Product Backlog e não pode ser apresentado na Review. Com vários times no mesmo produto, a DoD é a mesma.</li>
              <li><strong>Meta da Sprint</strong>: único objetivo da Sprint, criada no Planning; compromisso dos Developers, com flexibilidade quanto ao trabalho exato.</li>
              <li><strong>Meta do Produto</strong>: estado futuro do produto, objetivo de longo prazo; deve ser cumprida ou abandonada antes de assumir a próxima.</li>
              <li>Slides: Product Backlog = requisitos de todo o produto; Sprint Backlog = requisitos contidos no objetivo de uma Sprint, sempre contido no Product Backlog; primeiras sprints têm os itens mais prioritários e críticos.</li>
            </ul>
            <div class="caixa prova"><ul>
              <li>Compromissos: Product Backlog tem Meta do Produto; Sprint Backlog tem Meta da Sprint; Incremento tem Definição de Pronto.</li>
              <li>Product Backlog é dinâmico e nunca está completo.</li>
              <li>O trabalho só entra no incremento se atender à DoD.</li>
            </ul></div>`
        },
        {
          id: "u2-product-backlog",
          titulo: "Como criar o Product Backlog: histórias, épicos e priorização",
          fonte: "Unidade 2b.pdf (Estórias); Unidade 2c.pdf (Como criar o seu Product Backlog, User Stories x Requisitos Funcionais)",
          html: `
            <dl class="campos">
              <dt>História de usuário</dt><dd>Descrição resumida, clara e objetiva de uma funcionalidade do ponto de vista do usuário final; é uma promessa de discussão e não especificação completa. Deve caber em um post-it, em linguagem do cliente. Modelo: "Como um &lt;tipo de usuário&gt;, eu quero &lt;um objetivo&gt; para que &lt;atenda uma necessidade&gt;".</dd>
              <dt>Exemplo (slides)</dt><dd>"Como um comprador, eu quero consultar livros para que eu possa escolher qual comprar." Valor para o usuário: selecionar produtos para o carrinho; valor para o negócio: controle e gestão de itens.</dd>
              <dt>BDD (Compra de produto)</dt><dd>Dado que (Given) o cliente está logado; Quando (When) seleciona produtos; Então (Then) o carrinho recebe o incremento.</dd>
            </dl>
            <h4>Elementos comuns de um Product Backlog</h4>
            <table>
              <thead><tr><th>Elemento</th><th>Função</th></tr></thead>
              <tbody>
                <tr><td>Histórias de usuário</td><td>Funcionalidades do ponto de vista do usuário (podem ser requisitos funcionais).</td></tr>
                <tr><td>Épicos</td><td>Itens de alto nível, divididos em histórias menores (ex.: melhorias no checkout).</td></tr>
                <tr><td>Critérios de aceitação</td><td>Requisitos que devem ser atendidos para considerar a história concluída.</td></tr>
                <tr><td>Pontos de estimativa</td><td>Complexidade e esforço (tempo, esforço ou complexidade relativa); estimados pelo time (story points).</td></tr>
                <tr><td>Dependências</td><td>Relações entre histórias ou épicos e sequência de trabalho.</td></tr>
                <tr><td>Priorização</td><td>Importância relativa; exemplos: escala 0 a 100 ou F a A (A maior valor). Feita pelo PO, clara a todos.</td></tr>
                <tr><td>Notas, status, datas</td><td>Contexto, "a fazer / em andamento / concluído", criação e modificação (rastreabilidade).</td></tr>
                <tr><td>Sprint estimada x realizada</td><td>Permite comparar estimativa com realização e melhorar estimativas futuras.</td></tr>
              </tbody>
            </table>
            <h4>Histórias de usuário x requisitos funcionais</h4>
            <table>
              <thead><tr><th></th><th>História de usuário</th><th>Requisito funcional</th></tr></thead>
              <tbody>
                <tr><td>Perspectiva</td><td>Usuário final ou cliente</td><td>Técnica</td></tr>
                <tr><td>Foco</td><td>Valor para o cliente</td><td>O que o sistema deve fazer: entradas, processamento, saídas</td></tr>
                <tr><td>Formato</td><td>Linguagem não técnica, sem detalhes</td><td>Detalhado: fluxos, regras de negócio, validações</td></tr>
              </tbody>
            </table>
            <p>Dicas dos slides: definir objetivos do projeto, identificar personas, listar funcionalidades, priorizar, manter atualizado, simples e objetivo, e criar com colaboração da equipe. Documentos auxiliares: protótipos, especificações de regras de negócio e casos de uso. Ferramentas citadas: Jira, Trello, Notion.</p>
            <div class="caixa prova"><ul>
              <li>Histórias são abstratas e dão contexto e direção; requisitos funcionais detalham a implementação.</li>
              <li>Estimativa do tamanho: time. Priorização: PO.</li>
            </ul></div>`
        },
        {
          id: "u2-scrum-2017-2020",
          titulo: "Guia Scrum 2017 x 2020",
          fonte: "Unidade 2c.pdf (Mudanças de 2017 x 2020); ProjetosSoftware13.pdf (Mudanças entre o Guia Scrum 2017 e o 2020)",
          html: `
            <table>
              <thead><tr><th>Aspecto</th><th>2017</th><th>2020</th></tr></thead>
              <tbody>
                <tr><td>Prescrição</td><td>Mais prescritivo</td><td>Menos prescritivo, "minimamente suficiente": removidas as perguntas da Daily, linguagem suavizada sobre atributos do item de backlog e sobre itens de retrospectiva no Sprint Backlog, seção de cancelamento da Sprint reduzida.</td></tr>
                <tr><td>Time</td><td>Time Scrum com um "time dentro do time" (PO e Time de Desenvolvimento)</td><td>Um único Scrum Team focado em um produto, com três responsabilidades (PO, SM, Developers); sem sub-times.</td></tr>
                <tr><td>Meta do Produto</td><td>Não existia</td><td>Introduzida; cada Sprint aproxima o produto da Meta.</td></tr>
                <tr><td>Compromissos dos artefatos</td><td>Meta da Sprint e DoD sem identidade clara</td><td>Cada artefato tem um compromisso: Meta do Produto, Meta da Sprint, Definição de Pronto.</td></tr>
                <tr><td>Time</td><td>Auto-organizado (escolhe quem e como)</td><td>Auto-gerenciável (escolhe quem, como e em quê trabalhar).</td></tr>
                <tr><td>Sprint Planning</td><td>Dois tópicos: o quê e como</td><td>Três tópicos: por quê (Meta da Sprint), o quê e como.</td></tr>
                <tr><td>Linguagem</td><td>Termos de TI (testes, sistemas, design, requisitos)</td><td>Simplificada, audiência mais ampla; menos de 13 páginas.</td></tr>
              </tbody>
            </table>
            <div class="caixa nota"><p>O curso, segundo os slides 2c, vê parte dos elementos "antes das alterações de 2020" (por exemplo, três perguntas da Daily, "Time de Desenvolvimento" de 3 a 9 pessoas). O Guia 2020 usa "Developers" e Scrum Team de 10 ou menos pessoas. Em prova, use o material do enunciado e, na dúvida, a versão que o professor citar.</p></div>
            <div class="caixa prova"><ul>
              <li>Novidades de 2020: Meta do Produto, um único time, auto-gerenciável, três tópicos no Planning, menos prescritivo.</li>
            </ul></div>`
        },
        {
          id: "u2-puxado-empurrado",
          titulo: "Processo puxado x empurrado; gerente de projeto x Scrum Master",
          fonte: "U4 - Livro Didático, aula 'Paradigmas em Projeto de Software estratégico' (Quadro 1, Maximiano, 2022, p. 177)",
          html: `
            <table>
              <thead><tr><th>Preditivo (backlog / estrutura)</th><th>Ágil</th></tr></thead>
              <tbody>
                <tr><td><strong>Processo empurrado</strong>: o gerente "empurra" a demanda para a equipe, pressionando e direcionando "o que" e "como" fazer. Comando e controle.</td><td><strong>Processo puxado</strong>: o time tem autonomia, "puxa" a demanda e se compromete a realizá-la; entende "o que" precisa ser feito mas decide "como". Papel colaborativo.</td></tr>
              </tbody>
            </table>
            <p>O livro defende uma "nova gestão": modelo ágil com ferramentas do preditivo (PMBOK), seguindo o conceito de <em>timeboxing</em> (base do ágil) como principal imposição do fluxo de atividades. Importante esclarecer os papéis do gerente de projeto e do Scrum Master.</p>`
        },
        {
          id: "u2-scrum-livro-definicao",
          titulo: "Scrum no livro de Sabbagh: definição, framework e contexto complexo (Cynefin)",
          fonte: "ProjetosSoftware14.pdf, capítulo 'O que é Scrum?'",
          html: `
            <div class="caixa definicao" data-titulo="Definição (Sabbagh)"><p>Scrum é um <strong>framework Ágil, simples e leve</strong>, utilizado para a gestão do desenvolvimento de <strong>produtos complexos imersos em ambientes complexos</strong>. É embasado no <strong>empirismo</strong> e usa uma abordagem <strong>iterativa e incremental</strong> para entregar valor com frequência e, assim, reduzir os riscos do projeto.</p></div>
            <h4>Scrum é Ágil</h4>
            <ul>
              <li>O movimento Ágil surgiu em meados dos anos 90 como reação aos pesados métodos tradicionais, entre eles o modelo em <strong>cascata (waterfall)</strong>, descrito por Royce em 1970; o próprio Royce o criticava e dizia que seu uso para software era arriscado.</li>
              <li>Métodos tradicionais são prescritivos: planos detalhados no início (custo, escopo, cronograma), microgerenciamento e poder centralizado.</li>
              <li>A analogia com a construção civil é considerada errada: construção tem longa fase de especificação e depois execução, mas, em software, <em>requisitos não são totalmente compreendidos antes do início, usuários só sabem o que querem após ver uma versão inicial, requisitos mudam durante o desenvolvimento e novas tecnologias tornam as estratégias imprevisíveis</em> (DeGrace e Stahl, citados por Sutherland).</li>
              <li>Os quatro valores do Manifesto Ágil e os 12 princípios estão no tópico sobre agilidade; o livro os explica pela oposição ao tradicional: por exemplo, o princípio de ritmo sustentável se opõe à prática de horas extras e fins de semana para cumprir prazo, que reduz produtividade e qualidade.</li>
            </ul>
            <h4>Scrum é um framework, não uma metodologia</h4>
            <ul>
              <li>Framework (arcabouço) é uma estrutura básica que serve de suporte e guia; <strong>não define práticas específicas e detalhadas</strong> (como desenvolver, como facilitar, como levantar necessidades). Cada contexto desenvolve suas práticas por inspeção e adaptação.</li>
              <li>Metodologia, como o <strong>XP (Extreme Programming)</strong>, prescreve um conjunto mais completo de práticas. Times de Scrum costumam emprestar práticas do XP: programação em par, integração contínua e desenvolvimento dirigido por testes.</li>
              <li>Analogia do esqueleto: o framework é o esqueleto (estrutura que não se move sozinha); a metodologia é o corpo, que já tem músculos e tendões.</li>
              <li>Scrum prescreve apenas <strong>3 papéis</strong> (Product Owner, Time de Desenvolvimento, ScrumMaster), <strong>eventos</strong> (o texto diz "seis eventos", mas enumera cinco: o Sprint e as reuniões de Sprint Planning, Daily Scrum, Sprint Review e Sprint Retrospective) e <strong>3 artefatos</strong> (Product Backlog, Sprint Backlog e Incremento do Produto). Simples de entender, mas não fácil de usar.</li>
            </ul>
            <h4>Produtos complexos em ambientes complexos</h4>
            <p>O desenvolvimento de produtos é tratado como um <strong>sistema adaptativo complexo</strong>: muitos componentes (agentes) que se adaptam e aprendem ao interagir, com auto-organização, alta adaptabilidade, sensibilidade a feedback e emergência de padrões. Operam à "beira do caos", um estado de instabilidade ordenada.</p>
            <p>O modelo <strong>Cynefin</strong> (Snowden e Boone) classifica os contextos para escolher a abordagem. Contextos <em>ordenados</em> têm relação causa-efeito identificável (simples e complicado); os <em>não ordenados</em> não têm relação imediata (complexo e caótico).</p>
            <table>
              <thead><tr><th>Domínio</th><th>Causa e efeito</th><th>Abordagem</th><th>Exemplo do livro</th><th>Scrum?</th></tr></thead>
              <tbody>
                <tr><td>Simples</td><td>Evidente, previsível, repetível</td><td>Perceber, categorizar, responder (melhores práticas)</td><td>Trocar a tubulação de um banheiro com a planta em mãos; digitar dados de produtos de uma loja</td><td>Pouco útil: sobrecarga de regras e eventos</td></tr>
                <tr><td>Complicado</td><td>Existe, mas nem todos veem; várias respostas viáveis</td><td>Perceber, analisar, responder (boas práticas, especialistas)</td><td>Definir a planta de uma nova casa</td><td>Também sobrecarga</td></tr>
                <tr><td>Complexo</td><td>Só evidente em retrospecto; não reprodutível</td><td>Investigar (experimentos), perceber, responder; práticas emergem</td><td>A grande maioria dos projetos de software</td><td><strong>Onde o Scrum melhor funciona</strong></td></tr>
                <tr><td>Caótico</td><td>Impossível determinar; muda constantemente</td><td>Agir, perceber, responder (práticas novas); restabelecer a ordem</td><td>Resgate de reféns; pesquisa em que cada descoberta muda o trabalho; sistema legado caótico</td><td>Não funciona bem: faltam objetivos estáveis em curto prazo</td></tr>
                <tr><td>Desordem</td><td>Não se sabe qual contexto predomina</td><td>Quebrar o problema em partes e classificar cada uma</td><td>Pessoas disputam soluções da própria zona de conforto</td><td>-</td></tr>
              </tbody>
            </table>
            <p>Métodos tradicionais tratam todo projeto como ordenado (simples ou complicado); quando isso é falso, o resultado pode ser fracasso custoso.</p>
            <h4>Scrum é empírico, iterativo e incremental</h4>
            <ul>
              <li><strong>Empírico</strong>: aprende-se sobre o produto e sobre os meios de produção por ciclos de feedback, experimentando, verificando e adaptando. Baseia-se em visibilidade (transparência), inspeção e adaptação frequentes.</li>
              <li><strong>Iterativo e incremental</strong>: o produto é desenvolvido em ciclos de tamanho fixo (Sprints), um após o outro, sem intervalo; cada ciclo é um pequeno projeto autocontido que gera um incremento estável e funcionando, que se soma ao que já existe. Tudo acontece dentro das Sprints.</li>
              <li>Analogia do bolo: o método tradicional faz o bolo camada por camada (só no fim se corta uma fatia); o Scrum produz o bolo <strong>fatia por fatia</strong>, cada fatia com todas as camadas, de ponta a ponta, já utilizável. Isso gera retorno ao investimento cedo e reduz riscos.</li>
            </ul>
            <div class="caixa prova"><ul>
              <li>Scrum não é sigla (não se escreve SCRUM); o nome vem do rúgbi.</li>
              <li>Scrum se aplica a contexto <strong>complexo</strong>; não é indicado para simples, complicado nem caótico.</li>
              <li>Framework não prescreve práticas; XP é metodologia.</li>
              <li>Cascata foi descrita por Royce em 1970, que a criticava.</li>
            </ul></div>`
        },
        {
          id: "u2-scrum-valores-origem",
          titulo: "Valores do Scrum, origem (rúgbi e Takeuchi e Nonaka)",
          fonte: "ProjetosSoftware14.pdf, capítulos 'O que é Scrum?' e 'De onde veio o Scrum?'",
          html: `
            <h4>Os cinco valores do Scrum</h4>
            <table>
              <thead><tr><th>Valor</th><th>Significado no livro</th></tr></thead>
              <tbody>
                <tr><td>Foco</td><td>Times mais produtivos trabalham em um projeto por vez, sem multitarefa, em metas de negócio claras e alcançáveis negociadas com o PO. O ScrumMaster protege o time de distrações.</td></tr>
                <tr><td>Coragem</td><td>Aceitar a mudança como natural; o PO e a organização confiam no time e o deixam livre; o time tem coragem de falhar, expor problemas e aprender cedo, e de mostrar entregas com frequência; o ScrumMaster remove impedimentos e promove mudanças.</td></tr>
                <tr><td>Franqueza (transparência)</td><td>Necessária para inspeção e adaptação: feedback frequente, progresso visível, estimativas honestas, dúvidas e impedimentos comunicados cedo.</td></tr>
                <tr><td>Compromisso</td><td>O time define como trabalha, monitora e corrige o rumo; compromete-se com a Meta do Sprint; o PO se compromete a priorizar conforme as necessidades de negócio.</td></tr>
                <tr><td>Respeito</td><td>Compartilhar responsabilidades, ouvir pontos de vista, o PO respeita decisões técnicas e o time respeita decisões de negócio; respeitar o bem-estar e a vida privada.</td></tr>
              </tbody>
            </table>
            <p>Valores Ágeis (Manifesto) e valores do Scrum são conjuntos distintos: os do Scrum complementam as regras de papéis, artefatos e eventos.</p>
            <h4>De onde veio</h4>
            <ul>
              <li>O primeiro Time de Scrum foi criado por <strong>Jeff Sutherland em 1993</strong>, na Easel Corporation (Massachusetts), no projeto mais crítico da empresa. Em 1995, Sutherland apresentou o time a <strong>Ken Schwaber</strong> (Advanced Development Methods); juntos formalizaram o Scrum, apresentado por Schwaber no OOPSLA de 1995. Ambos assinaram o Manifesto Ágil (2001), ano em que Schwaber publicou o primeiro livro sobre o framework.</li>
              <li>Scrum <strong>não é acrônimo</strong>: é uma formação do rúgbi para reposição de bola. O nome vem do artigo <em>The New New Product Development Game</em> (Takeuchi e Nonaka, Harvard Business Review, 1986), que estudou empresas como Honda, Xerox, Epson e HP, cujas equipes se moviam como um bloco, passando a bola para frente e para trás.</li>
            </ul>
            <h4>As seis características das equipes de alto desempenho (Takeuchi e Nonaka)</h4>
            <ol>
              <li><strong>Instabilidade embutida</strong>: a alta gerência dá objetivos amplos e desafiadores e grande liberdade para alcançá-los.</li>
              <li><strong>Equipes auto-organizadas</strong>: autonomia, autotranscendência (metas cada vez mais altas) e fertilização cruzada (variedade de especializações).</li>
              <li><strong>Sobreposição das fases</strong> de desenvolvimento, com ritmo comum (pulso).</li>
              <li><strong>Múltiplo aprendizado</strong>: em múltiplos níveis (individual, grupo, organização) e em várias funções.</li>
              <li><strong>Controle sutil</strong> pela gerência: seleção das pessoas certas, ambiente aberto, avaliação e recompensa pelo desempenho do grupo, tolerância a erros cometidos cedo.</li>
              <li><strong>Transferência organizacional de aprendizado</strong> para outros projetos e divisões.</li>
            </ol>
            <div class="caixa prova"><ul>
              <li>Cinco valores do Scrum: foco, coragem, franqueza, compromisso e respeito (não confundir com os 4 valores do Manifesto).</li>
              <li>Scrum não é sigla; origem no rúgbi e no artigo de Takeuchi e Nonaka.</li>
            </ul></div>`
        },
        {
          id: "u2-scrum-ciclo-completo",
          titulo: "O ciclo completo do Scrum, do início ao fim do projeto",
          fonte: "ProjetosSoftware14.pdf, capítulo 'Como é o Scrum?'",
          html: `
            <h4>Início do projeto (pré-jogo)</h4>
            <ul>
              <li><strong>Visão do Produto</strong>: traduz o objetivo de negócio; responde "por que o produto está sendo desenvolvido?" ou "que problema será resolvido?". O PO a define, comunica e a mantém relativamente constante.</li>
              <li><strong>Roadmap do Produto</strong>: plano de como o produto evolui, geralmente uma linha do tempo com metas por momento (Meta de Roadmap).</li>
              <li>Fase de definições e preparativos, chamada de "pré-jogo" ou, <em>equivocadamente</em>, de "Sprint Zero", pois não é uma Sprint. Visão, Roadmap e pré-jogo <strong>não fazem parte do framework Scrum</strong>.</li>
              <li>Escolha das pessoas (PO, Time de Desenvolvimento, ScrumMaster), eventual arquitetura básica e infraestrutura mínimas, só o necessário para reduzir riscos sem engessar.</li>
              <li><strong>Product Backlog</strong> inicial: lista ordenada, incompleta e dinâmica; topo com mais detalhe, base com menos. <strong>User Story</strong> é a forma preferida de representar itens de necessidade de negócio, mas não faz parte do Scrum.</li>
            </ul>
            <h4>Planejamento do Sprint</h4>
            <ul>
              <li>Time de Desenvolvimento e PO, facilitados pelo ScrumMaster, selecionam itens do topo do Product Backlog (apenas uma <em>previsão</em>) e definem a <strong>Meta do Sprint</strong>; o time se compromete com a Meta.</li>
              <li><strong>Definição de Preparado (DoR)</strong>: critérios para um item entrar em desenvolvimento (detalhe suficiente, pequeno o bastante, critérios de aceitação). Se o time adotar, pode recusar na Planning um item não preparado. Não faz parte do Scrum básico.</li>
              <li><strong>Velocidade</strong>: quantidade de trabalho que se espera entregar por Sprint, tipicamente em <strong>Story Points</strong>, pela média das últimas Sprints (ou contando itens pequenos e de tamanho parecido). No primeiro Sprint ainda não há histórico.</li>
              <li>O time planeja como fazer, em geral por tarefas. Itens selecionados mais plano formam o <strong>Sprint Backlog</strong>, geralmente exibido em um <strong>Quadro de Tarefas</strong>.</li>
            </ul>
            <h4>Desenvolvimento</h4>
            <ul>
              <li>O time se auto-organiza, começa pelo item mais importante para a Meta e segue em ordem; monitora o progresso rumo à Meta.</li>
              <li><strong>Daily Scrum</strong>: no máximo 15 minutos, mesmo horário e local; visibilidade e plano informal do dia seguinte. O ScrumMaster pode facilitar, mas sua presença não é obrigatória. Bom momento para atualizar o <strong>Gráfico de Sprint Burndown</strong> (eixo x: dias da Sprint; eixo y: trabalho restante, em tarefas ou estimativas).</li>
              <li>Impedimentos são avisados <em>imediatamente</em> ao ScrumMaster, sem esperar a Daily.</li>
              <li>O PO fica acessível para dúvidas e continua o <strong>Refinamento do Product Backlog</strong> (sessões agendadas ou trabalho contínuo) para preparar itens da Sprint seguinte.</li>
            </ul>
            <h4>Encerramento do Sprint</h4>
            <ul>
              <li>Ao final, o time deve ter gerado um <strong>Incremento do Produto entregável</strong> (nenhum trabalho adicional necessário). Entregar ou não é <strong>decisão de negócio do PO</strong>.</li>
              <li>O PO pode <strong>cancelar</strong> o Sprint se a Meta perder o sentido; é exceção rara.</li>
              <li>No último dia: <strong>Sprint Review</strong> (inspeção e adaptação do <em>produto</em>, com clientes e partes interessadas) seguida da <strong>Sprint Retrospective</strong> (inspeção e adaptação da <em>forma de trabalhar</em>). Novo Sprint começa imediatamente.</li>
              <li><strong>Definição de Pronto (DoD)</strong>: acordo entre PO e time sobre o que torna um item (ou o Incremento) pronto; é a mesma para todos os itens de funcionalidade. O time a usa no planejamento e o PO a usa para verificar ao final; só itens prontos são apresentados na Review.</li>
            </ul>
            <h4>Releases e fim do projeto</h4>
            <ul>
              <li>Release frequente gera feedback dos usuários, senso de progresso e retorno ao investimento. A <strong>estratégia de Releases é do PO</strong>: a cada item pronto (entrega contínua), ao fim de cada Sprint, ou após algumas Sprints.</li>
              <li><strong>Release Planning</strong> (opcional): ocorre durante o último Sprint da Release anterior (ou no pré-jogo para a primeira); produz o <strong>Plano de Release</strong> (data aproximada, Meta da Release, itens do topo do backlog). Não substitui a Sprint Planning.</li>
              <li>Progresso da Release: <strong>Gráfico de Release Burndown</strong> (eixo x: Sprints; eixo y: trabalho restante) ou Release Burnup.</li>
              <li>O projeto termina por tempo de contrato, valor suficiente entregue, fim do orçamento ou cancelamento. Na manutenção ("pós-jogo"), métodos orientados a tickets como o <strong>Kanban</strong> (David Anderson) costumam ser mais apropriados que o Scrum.</li>
            </ul>
            <div class="caixa prova"><ul>
              <li>Fora do Scrum básico: Visão, Roadmap, pré-jogo, User Story, DoR, Release Planning, Refinamento (nomeados como opcionais no livro).</li>
              <li>Review inspeciona o produto; Retrospective inspeciona o processo.</li>
              <li>Entregar o incremento ao usuário é decisão do PO; o incremento deve estar sempre entregável.</li>
              <li>"Sprint Zero" é um termo equivocado segundo o livro.</li>
            </ul></div>`
        },
        {
          id: "u2-time-desenvolvimento",
          titulo: "Time de Desenvolvimento: responsabilidades e características",
          fonte: "ProjetosSoftware14.pdf, capítulo 'Time de Desenvolvimento'",
          html: `
            <div class="caixa definicao" data-titulo="Quem é"><p>Grupo multidisciplinar responsável por realizar o desenvolvimento do produto. A partir das prioridades do PO, gera em cada Sprint um <strong>Incremento do Produto pronto</strong>, conforme a Definição de Pronto, com valor visível ao cliente. Gerencia o próprio trabalho: define tecnicamente como desenvolver, planeja e acompanha o progresso, com autoridade e responsabilidade sobre suas decisões.</p></div>
            <h4>O que faz</h4>
            <ul>
              <li><strong>Planeja</strong>: na Planning negocia com o PO o que entra e a Meta do Sprint; depois detalha sozinho o como. Estimativas são feitas <em>sempre pelo Time de Desenvolvimento</em>, nunca pelo PO, ScrumMaster ou terceiros.</li>
              <li><strong>Desenvolve</strong> com qualidade (parte explícita da DoD); o objetivo é atingir a <em>Meta do Sprint</em>, o que pode ocorrer sem concluir todas as tarefas de todos os itens.</li>
              <li><strong>Interage com o PO</strong> durante o Sprint; o PO não interfere no planejamento do como.</li>
              <li><strong>Informa impedimentos ao ScrumMaster</strong> imediatamente e tenta preveni-los.</li>
              <li><strong>Obtém feedback</strong> na Review e <strong>entrega valor com frequência</strong> (a Release é decisão do PO).</li>
            </ul>
            <h4>Como é</h4>
            <table>
              <thead><tr><th>Característica</th><th>Explicação</th></tr></thead>
              <tbody>
                <tr><td>Multidisciplinar</td><td>Tem todos os conhecimentos para gerar o incremento pronto, evitando dependências externas (alto risco para a Meta). O time é multidisciplinar, não necessariamente cada membro. Estimula-se a <strong>polinização cruzada</strong> (trocar conhecimento e desenvolver habilidades secundárias) para reduzir dependência de especialistas.</td></tr>
                <tr><td>Auto-organizado</td><td>Sem gerente dizendo como trabalhar nem microgerenciamento. Não é anarquia: segue a Meta do Sprint e as regras da organização. Pontos de inspeção: Daily Scrum e Sprint Review; visibilidade pelo Sprint Backlog e gráficos.</td></tr>
                <tr><td>Suficientemente pequeno</td><td>Recomenda-se de <strong>3 a 9 membros</strong>, sem contar PO e ScrumMaster (a menos que também desenvolvam). Canais de comunicação crescem com o número de pessoas; times muito pequenos podem não ter todas as habilidades e o Scrum vira sobrecarga. Projetos grandes usam vários Times de Desenvolvimento coordenados, cada um pequeno.</td></tr>
                <tr><td>Motivado</td><td>Ambiente, apoio e confiança; ritmo sustentável. Teorias citadas: Fixação de Objetivos (Locke), Características do Trabalho (Hackman) e ERC (Alderfer: existência, relacionamento e crescimento; evolução da hierarquia de Maslow).</td></tr>
                <tr><td>Orientado à excelência técnica</td><td>Evita ou controla a dívida técnica; busca melhoria contínua (Retrospective).</td></tr>
                <tr><td>Focado nas metas</td><td>Sem multitarefa entre projetos; compromete-se formalmente com a Meta na Planning.</td></tr>
              </tbody>
            </table>
            <h4>Avaliação e recompensa</h4>
            <p>Recompensa individual estimula competição; recompensa ao time estimula colaboração. Prefere-se avaliar e recompensar o <strong>time</strong>. Avaliação cruzada entre membros funciona quando mede colaboração, comunicação e foco, não volume de trabalho.</p>
            <h4>Aprendizado</h4>
            <p>Formal: treinamentos e sessões internas, <strong>Coding Dojo</strong> (encontro para resolver desafios de programação com prática deliberada). Informal: compartilhar conhecimento, eventos e <strong>programação em par</strong> (prática do XP).</p>
            <div class="caixa prova"><ul>
              <li>Tamanho recomendado: 3 a 9 membros.</li>
              <li>Quem estima é sempre o Time de Desenvolvimento.</li>
              <li>Multidisciplinar refere-se ao time, não a cada pessoa; polinização cruzada reduz dependência de especialistas.</li>
              <li>Time é avaliado e recompensado como time.</li>
            </ul></div>`
        },
        {
          id: "u2-product-owner-livro",
          titulo: "Product Owner: atribuições, escolha e características",
          fonte: "ProjetosSoftware14.pdf, capítulo 'Product Owner'",
          html: `
            <div class="caixa definicao" data-titulo="Quem é"><p>Pessoa responsável por garantir e maximizar, a partir do trabalho do Time de Desenvolvimento, o <strong>retorno sobre o investimento</strong> no produto para os clientes do projeto. Define o produto e toma as decisões de negócio. Na prática, é o <strong>gerente do produto</strong> em um projeto com Scrum.</p></div>
            <h4>O que faz</h4>
            <ol>
              <li><strong>Gerencia o produto</strong>: insere, detalha, remove e prioriza necessidades no Product Backlog, a partir do contato frequente com clientes e partes interessadas. Tem a palavra final sobre o backlog e é o único que pode alterá-lo (ouve o time sobre custo e viabilidade técnica; o time sugere itens técnicos, o PO decide).</li>
              <li><strong>Gerencia as partes interessadas</strong>: identifica quem são, entende necessidades, gerencia expectativas, balanceia conflitos, obtém colaboração (inclusive para ajudar a remover impedimentos organizacionais) e comunica-se de forma proativa.</li>
              <li><strong>Mantém a Visão do Produto</strong> (fora do Scrum básico), comunicando-a e garantindo que o trabalho caminhe nessa direção.</li>
              <li><strong>Gerencia as Releases</strong>: define estratégia, Meta e data, considerando razões de negócio e técnicas.</li>
              <li><strong>Planeja o Sprint</strong> com o time: chega à Planning com ideia da Meta, mas ela é negociada e refinada.</li>
              <li><strong>Colabora durante o Sprint</strong> (dúvidas, refinamento). Não interfere no planejamento do time; mudanças que alterem a Meta são rejeitadas pelo time com apoio do ScrumMaster. Cobrar andamento pode ser pressão indevida.</li>
              <li><strong>Aceita ou rejeita</strong> as entregas na Review, verificando a DoD e os critérios de aceitação, e diz claramente se a Meta foi cumprida.</li>
            </ol>
            <h4>Como é</h4>
            <ul>
              <li><strong>Único</strong>: uma pessoa por Time de Scrum, não um comitê nem um departamento; sem suplentes ou rodízio (exceto ausência por doença ou férias); não existe PO do cliente mais outro da organização como canal. Em projetos grandes, cada Time de Scrum tem um PO, todos trabalhando no mesmo Product Backlog e coordenando-se.</li>
              <li><strong>Disponível</strong>: presente na Planning, Review e Retrospective, acessível para dúvidas, interagindo com clientes. Pode atuar em mais de um projeto, mas com risco.</li>
              <li><strong>Representativo</strong>: conhecimento e poder para decidir rápido; não é intermediário dos clientes. Decisões ruins aparecem logo nas Reviews.</li>
            </ul>
            <h4>PO do cliente ou da organização?</h4>
            <p>PO do cliente simplifica o feedback, mas pode faltar conhecimento de Scrum e gestão de produto, faltar disponibilidade, ou favorecer um cliente quando há vários (inclusive de organizações diferentes) ou não há cliente definido (produto de prateleira, site público). Nesses casos o PO pode ser da própria organização contratada, desde que tenha poder e conhecimento: <em>o PO é sempre quem de fato define o produto</em>.</p>
            <div class="caixa prova"><ul>
              <li>Só o PO altera o Product Backlog e define prioridades; PO é uma pessoa, nunca um comitê.</li>
              <li>PO decide a Release; o time decide o como; o PO não estima e não interfere no como.</li>
              <li>PO aceita ou rejeita os itens na Review com base na Definição de Pronto.</li>
            </ul></div>`
        },
        {
          id: "u2-scrummaster-livro",
          titulo: "ScrumMaster: facilitador, líder servidor e agente de mudança",
          fonte: "ProjetosSoftware14.pdf, capítulo 'ScrumMaster'",
          html: `
            <div class="caixa definicao" data-titulo="Quem é"><p>Trabalha para facilitar e potencializar o trabalho do Time de Scrum (PO e Time de Desenvolvimento) usando conhecimento de Scrum, habilidade com pessoas e técnicas de facilitação. Não é gerente de projeto, chefe nem fiscal de processos.</p></div>
            <h4>O que faz</h4>
            <ul>
              <li><strong>Facilita</strong> o time (auto-organização, comunicação, melhoria contínua) e <strong>facilita os eventos</strong> do Scrum (cada evento é uma sessão facilitada com resultado esperado: por exemplo, o plano do Sprint na Planning e o feedback do incremento na Review).</li>
              <li><strong>Remove impedimentos</strong> (ele mesmo ou mobilizando pessoas) e ajuda a preveni-los, atuando nas causas raiz e não em soluções paliativas.</li>
              <li><strong>Promove mudanças organizacionais</strong> necessárias, como agente de mudança, de forma persistente.</li>
              <li><strong>Garante o uso do Scrum</strong>: ensina Scrum, observa desvios e garante que eventos e timeboxes aconteçam, sem agir como polícia. Seu objetivo é <em>tornar-se cada vez menos necessário</em>.</li>
            </ul>
            <h4>Facilitador, não intermediário</h4>
            <ul>
              <li>Mantém <strong>neutralidade</strong> sobre o conteúdo das discussões (exceto sobre processo), faz perguntas em vez de dar respostas, e permite <em>escolhas livres e informadas</em>, mesmo que o time faça uma escolha ruim (estimula a reflexão, não decide por ele).</li>
              <li>Não é intermediário nem representante: não reporta desempenho do time à organização nem usa informações de facilitação para influenciar bonificações ou punições.</li>
              <li>Garante <strong>transparência</strong>: nunca oculta informações do time.</li>
              <li><strong>Líder de time auto-organizado</strong>: encoraja auto-observação, autoavaliação e autorreforço; atravessa a fronteira entre time e organização por relacionamento, percepção política e perguntas, sem dar ordens.</li>
            </ul>
            <h4>Como é</h4>
            <ul>
              <li><strong>Competente em soft skills</strong>: comunicação, saber ouvir, flexibilidade, negociação e política, resolução de problemas, ensino (coaching ou mentoring), facilitação, colaboração, autoconfiança, paciência, persistência, gestão do tempo, atitude positiva. É corajoso e proativo.</li>
              <li><strong>Presente</strong> sempre que o time precisar; tempo integral é importante para times novos, em Scrum iniciante, em organizações hierárquicas e burocráticas e para times disfuncionais.</li>
              <li><strong>Neutro</strong>: trabalha para o Time de Scrum inteiro (erro comum é atender só o Time de Desenvolvimento e deixar o PO sem facilitação). Acumular o papel de desenvolvedor não é proibido, mas ameaça a neutralidade; <strong>nunca deve ser o PO</strong> (conflito de interesses; vira um gerente tradicional de comando e controle).</li>
            </ul>
            <div class="caixa prova"><ul>
              <li>SM facilita; não manda, não faz o trabalho do time e não reporta desempenho individual.</li>
              <li>Acumular SM e PO é fortemente desaconselhado.</li>
              <li>A Daily Scrum pode ser facilitada pelo SM, mas a presença dele não é obrigatória; o SM garante que ela ocorra.</li>
            </ul></div>`
        },
        {
          id: "u2-impedimentos",
          titulo: "Impedimentos: o que são, tipos e como tratar",
          fonte: "ProjetosSoftware14.pdf, capítulos 'Time de Desenvolvimento' e 'ScrumMaster'",
          html: `
            <div class="caixa definicao" data-titulo="Impedimento"><p>Obstáculo que dificulta significativamente ou impede o trabalho do Time de Desenvolvimento, bloqueando itens do Sprint Backlog e ameaçando a Meta do Sprint. Sua resolução <strong>não está ao alcance do time</strong>, está fora do seu contexto ou lhe tomaria muito tempo. Problemas do dia a dia que o próprio time resolve, sem ameaçar a Meta, <em>não</em> são impedimentos.</p></div>
            <h4>Tipos (adaptado de Pimentel)</h4>
            <table>
              <thead><tr><th>Tipo</th><th>Quando ocorre</th><th>Exemplos do livro</th></tr></thead>
              <tbody>
                <tr><td>Organizacional</td><td>Estrutura ou funcionamento da organização impõe: time precisa e não obtém ajuda; outra área intervém e desvia o foco da Meta; burocracia ou política obstruem.</td><td>Equipamento com defeito e suporte lento; superior pede tarefa externa direto a um membro; método pesado com excesso de documentação.</td></tr>
                <tr><td>Básico</td><td>Falta de elemento essencial ao trabalho.</td><td>Falta de ferramentas, equipamentos, ambiente adequado, acesso a dados.</td></tr>
                <tr><td>Administrativo</td><td>Ocorrências administrativas.</td><td>Absenteísmo (atrasos, licenças, faltas), demissões, restrição de horários.</td></tr>
                <tr><td>Nível de serviço</td><td>Problemas na sustentação de serviço em operação.</td><td>Erros em produção, problemas com servidor de aplicação ou de integração.</td></tr>
              </tbody>
            </table>
            <h4>Tratamento</h4>
            <ul>
              <li>O time avisa o ScrumMaster <strong>imediatamente</strong>, sem esperar a Daily Scrum; o SM age rápido sobre a causa raiz. Boa prática: sinalizar visualmente o impedimento no Quadro de Tarefas (cor diferente), sem substituir o aviso.</li>
              <li>Impedimentos geram desperdício: esperas, mais trabalho em progresso, troca de contexto, consumo de energia. Podem revelar problemas sérios na organização, nos processos ou na qualidade.</li>
            </ul>
            <h4>Prevenção</h4>
            <ul>
              <li><strong>Compromisso real com a meta</strong> (compromisso baixo faz qualquer problema virar "impedimento" e desculpa).</li>
              <li><strong>Usar o timebox a favor</strong>: questionar se a urgência externa é real ou pode esperar o próximo Sprint; se a Meta perde o sentido, o Sprint pode ser cancelado.</li>
              <li><strong>Acionamento preventivo do ScrumMaster</strong> assim que um impedimento é iminente.</li>
              <li><strong>Identificar dependências no planejamento</strong> (Release Planning, Sprint Planning, Daily Scrum); não iniciar funcionalidade que depende de pessoa ou ferramenta externa que só estará disponível no meio do Sprint.</li>
            </ul>
            <div class="caixa prova"><ul>
              <li>Problema que o time resolve sozinho não é impedimento.</li>
              <li>Quem remove (ou mobiliza a remoção) é o ScrumMaster; quem identifica e informa é o time.</li>
              <li>Quatro tipos: organizacional, básico, administrativo, nível de serviço.</li>
            </ul></div>`
        },
        {
          id: "u2-lean-e-scrum",
          titulo: "Lean (Sistema Toyota de Produção) e sua relação com o Scrum",
          fonte: "ProjetosSoftware14.pdf, capítulo 'De onde veio o Scrum?' (seção Lean)",
          html: `
            <p>O <strong>Sistema Toyota de Produção (STP)</strong> surgiu nos anos 1950 na Toyota para competir com Ford e GE, produzindo pequenos volumes de modelos diferentes na mesma linha, no cenário do Japão do pós-guerra. Nos anos 1990, autores norte-americanos o generalizaram como <strong>Lean Production (Produção Enxuta)</strong>. O livro trata os dois como "Lean". Foi concebido para manufatura; a Agilidade nasceu para software, mas várias ideias do Scrum têm raiz no STP.</p>
            <h4>Os cinco princípios do Lean</h4>
            <table>
              <thead><tr><th>Princípio</th><th>Ideia</th><th>No Scrum e na Agilidade</th></tr></thead>
              <tbody>
                <tr><td>Definir valor</td><td>Valor na perspectiva do cliente, não do produtor.</td><td>PO interage com clientes e ordena pelo que mais importa; entregas frequentes e feedback; valor Ágil de colaboração com o cliente.</td></tr>
                <tr><td>Identificar a cadeia de valor</td><td>Passos que não geram valor são desperdício (<em>muda</em>).</td><td>Princípio da simplicidade; software funcionando como medida de progresso.</td></tr>
                <tr><td>Criar fluxo</td><td>Passos de valor fluem sem interrupções, lotes ou filas.</td><td>Incrementos prontos em iterações curtas por times multidisciplinares.</td></tr>
                <tr><td>Produção puxada</td><td>O cliente "puxa" a produção (just-in-time, JIT), em vez de o produtor "empurrar".</td><td>Trabalho ordenado pelas necessidades mais importantes em cada momento.</td></tr>
                <tr><td>Buscar a perfeição</td><td>Melhoria contínua, eliminando desperdícios.</td><td>Sprint Retrospective (aplicação do <em>hansei</em>).</td></tr>
              </tbody>
            </table>
            <h4>Conceitos japoneses citados</h4>
            <dl class="campos">
              <dt>Muda tipo 1 e tipo 2</dt><dd>Tipo 1: atividade que não agrega valor e é desnecessária, eliminar imediatamente. Tipo 2: não agrega valor, mas é necessária ou inevitável (por exemplo, documentação burocrática exigida pelo cliente ou organização), não pode ser eliminada naquele momento.</dd>
              <dt>Kanban</dt><dd>"Sinalização" em japonês; sistema do Lean que cria fluxo por visibilidade (cartões coloridos, recipientes vazios). O Quadro de Tarefas do Sprint Backlog não é um kanban, mas funciona de forma parecida criando visibilidade.</dd>
              <dt>Jidoka</dt><dd>"Automação com toque humano": os trabalhadores controlam a qualidade e param a produção ao achar defeito para buscar a causa raiz. No Scrum, a qualidade é responsabilidade do time multidisciplinar; não há equipe externa de qualidade.</dd>
              <dt>Kaizen</dt><dd>"Mudar para melhor": melhoria contínua em etapas frequentes e infinitas.</dd>
              <dt>Hansei</dt><dd>"Reflexão profunda": autorreflexão obrigatória para reconhecer erros e criar plano de ação; o objetivo nunca é apontar culpados. Corresponde à Sprint Retrospective.</dd>
              <dt>Cinco Porquês</dt><dd>Perguntar "por quê?" iterativamente, cinco vezes, questionando a resposta anterior, para chegar à causa raiz e propor melhorias.</dd>
            </dl>
            <div class="caixa prova"><ul>
              <li>Lean não é "redução de custos a qualquer preço": é valor ao cliente e eliminação de desperdício; é compatível com o ágil.</li>
              <li>Produção puxada (cliente) x empurrada (produtor); kaizen = melhoria contínua; hansei = reflexão sem culpados.</li>
            </ul></div>`
        },
        {
          id: "u2-gestao-release-metricas",
          titulo: "Roadmap, Release, velocidade, burndown e burnup",
          fonte: "ProjetosSoftware14.pdf, capítulo 'Como é o Scrum?' e 'Product Owner'",
          html: `
            <table>
              <thead><tr><th>Elemento</th><th>O que é</th><th>Quem</th></tr></thead>
              <tbody>
                <tr><td>Visão do Produto</td><td>Por que o produto existe; problema a resolver.</td><td>PO</td></tr>
                <tr><td>Roadmap do Produto</td><td>Linha do tempo de alto nível com datas prováveis e Meta de cada Release ou marco.</td><td>PO</td></tr>
                <tr><td>Plano de Release</td><td>Data aproximada, Meta da Release e itens do topo do backlog.</td><td>PO e Time de Desenvolvimento (Release Planning)</td></tr>
                <tr><td>Meta do Sprint</td><td>Objetivo de negócio do Sprint; o time se compromete a atingi-la.</td><td>Negociada na Sprint Planning</td></tr>
                <tr><td>Velocidade</td><td>Quanto de trabalho o time entrega por Sprint (Story Points ou contagem de itens), média dos Sprints anteriores.</td><td>Time de Desenvolvimento</td></tr>
                <tr><td>Sprint Burndown</td><td>x: dias do Sprint; y: trabalho restante; atualizado na Daily.</td><td>Time de Desenvolvimento</td></tr>
                <tr><td>Release Burndown / Burnup</td><td>x: Sprints da Release; y: trabalho restante (burndown) ou trabalho concluído (burnup); atualizado ao fim de cada Sprint.</td><td>PO</td></tr>
              </tbody>
            </table>
            <div class="caixa nota" data-titulo="Atenção"><p>No burndown a linha <em>desce</em> até zero (trabalho restante); no burnup a linha <em>sobe</em> (trabalho entregue), e o escopo total pode aparecer como outra linha, mostrando mudanças de escopo. A descrição do burnup como "trabalho concluído acumulado" é uso comum; o livro apenas cita o burnup como alternativa ao burndown.</p></div>
            <ul>
              <li>Story Point é a unidade de estimativa relativa mais usada por times ágeis; estimativas servem como parâmetro de capacidade, <em>sempre feitas pelo Time de Desenvolvimento</em>.</li>
              <li>Release e entrega ao usuário são decisão de negócio do PO, mesmo que o incremento já seja entregável ao fim de cada Sprint.</li>
            </ul>`
        }
      ]
    },
    {
      id: "u3",
      titulo: "Unidade 3 — Riscos, Qualidade e Documentação",
      intro: `<p>Gestão de riscos (mapeamento, natureza, matriz, análise e respostas), qualidade (sistema, métricas, maturidade, PDCA), documentação e ferramentas de comunicação. Base: livro da U3 e slides Unidade 3a e 3b.</p>`,
      topicos: [
        {
          id: "u3-conceito-risco",
          titulo: "Conceito e tipos de risco",
          fonte: "Unidade 3a.pdf (Gestão de Riscos em Projetos, Riscos); U3 - Livro Didático, aula 'Gestão de riscos'",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>A palavra deriva do italiano <em>risicare</em> (ousar) e do latim <em>risicu</em>/<em>riscu</em> (incerteza). Risco é o conjunto de incertezas encontradas quando se ousa fazer algo, e não apenas "problema". Risco é incerteza: 100% de chance é certeza e 0% é impossibilidade, e nenhum dos dois é risco.</dd>
              <dt>Riscos positivos</dt><dd>Existem riscos com impacto positivo (oportunidades); o objetivo é maximizar sua ocorrência e impacto. Exemplo dos slides: portal de turismo em 2009, ano da gripe H1N1.</dd>
              <dt>Internos e externos</dt><dd><ul>
                <li><strong>Internos</strong>: ligados ao processo de desenvolvimento (Salles Jr. et al., 2010); segundo Sabbag (2009), podem ser não técnicos e técnicos.</li>
                <li><strong>Externos</strong>: fora do controle dos líderes, mas previsíveis: câmbio, inflação, impactos ambientais, legislação; quando ligados ao negócio, são passíveis de negociação.</li>
              </ul></dd>
              <dt>Componentes de um risco (Meyer et al., 2002)</dt><dd>Evento do risco (fonte e efeito), probabilidade associada e impacto (positivo ou negativo).</dd>
              <dt>Identificação</dt><dd>Usa experiências anteriores (projeto ou iteração anterior) ou técnicas de identificação, com participação dos stakeholders (financeiro, produção, mercado, especialistas do setor). Técnica inicial comum: brainstorm. Processo iterativo: novos riscos surgem durante o desenvolvimento. Fontes de riscos: WBS do projeto e do produto, reuniões diárias, de revisão, de retrospectiva e planejamento de Sprint.</dd>
            </dl>
            <div class="caixa prova"><ul>
              <li>Risco = incerteza; não é só ameaça, pode haver risco positivo.</li>
              <li>Externo = fora do controle do gerente; interno = ligado ao processo de desenvolvimento.</li>
            </ul></div>`
        },
        {
          id: "u3-processos-risco",
          titulo: "Processos de gerenciamento de riscos",
          fonte: "Unidade 3a.pdf (Visão Geral do Gerenciamento de Riscos)",
          html: `
            <table>
              <thead><tr><th>#</th><th>Processo</th><th>Função</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Planejar o gerenciamento dos riscos</td><td>Administrar as atividades de gerenciamento de risco do projeto.</td></tr>
                <tr><td>2</td><td>Identificar os riscos</td><td>Determinar onde os riscos podem ocorrer e afetar o projeto; documentar.</td></tr>
                <tr><td>3</td><td>Análise qualitativa</td><td>Priorizar riscos por probabilidade, impacto e outros fatores (prazo, tolerância a risco, custo, cronograma, escopo e qualidade).</td></tr>
                <tr><td>4</td><td>Análise quantitativa</td><td>Analisar numericamente o efeito dos riscos priorizados nos objetivos do projeto.</td></tr>
                <tr><td>5</td><td>Planejar as respostas aos riscos</td><td>Desenvolver opções e ações para aumentar oportunidades e reduzir ameaças.</td></tr>
                <tr><td>6</td><td>Controlar (monitorar e controlar) os riscos</td><td>Acompanhar riscos, identificar novos, revisar a lista periodicamente, reanalisar, monitorar riscos residuais e gatilhos de contingência.</td></tr>
              </tbody>
            </table>
            <p>O risco muda sempre (Vargas, 2010). A análise de riscos impacta todas as áreas, por isso a gestão deve estar integrada às demais. Participação da equipe gera sentimento de propriedade e responsabilidade sobre os riscos.</p>`
        },
        {
          id: "u3-mapeamento-matriz",
          titulo: "Mapeamento, natureza do risco e matriz de risco",
          fonte: "U3 - Livro Didático, aula 'Gestão de riscos' (Cavalcanti, 2016; ISO 31000:2018)",
          html: `
            <dl class="campos">
              <dt>Mapeamento</dt><dd>Primeiro identificar os riscos possíveis; depois classificá-los pela origem (processo), o que ajuda a detectar causas; em seguida idealizar uma resolução para cada risco. Exemplo de risco: alta rotatividade de profissional de banco de dados, de natureza gestão do projeto, com descrição de efeito, impacto e alternativas.</dd>
              <dt>Natureza do risco</dt><dd>Segundo a ISO 31000:2018, relaciona-se à natureza e ao tipo de incertezas que podem afetar resultados e objetivos, à natureza e valor de ativos e recursos e à natureza e magnitude das consequências. Novas naturezas podem ser criadas conforme surgem riscos, consequências ou recursos específicos.</dd>
              <dt>Matriz de risco</dt><dd>Relação consolidada de todos os riscos analisados e em análise, alimentada pelos envolvidos. Propósito: reduzir probabilidade e impacto de eventos negativos, identificar e priorizar riscos antes que aconteçam e registrar o plano de ação.</dd>
            </dl>
            <h4>Fontes de risco (Cavalcanti, 2016)</h4>
            <table>
              <thead><tr><th>Fonte</th><th>Descrição</th></tr></thead>
              <tbody>
                <tr><td>Instabilidade no escopo</td><td>Escopo sem visão clara ou mudanças importantes esperadas; inovação após o início também é fator crítico.</td></tr>
                <tr><td>Fornecedores</td><td>Parceiros de componentes ou equipamentos podem causar atrasos e falhas de construção.</td></tr>
                <tr><td>Envolvimento de partes interessadas</td><td>Falta ou indisponibilidade de stakeholder ou especialista afeta definição, esclarecimento e validação.</td></tr>
                <tr><td>Estimativa não realista</td><td>Falta de experiência ou de entendimento do requisito; estimativa feita por quem não constrói; desconhecimento da linguagem.</td></tr>
              </tbody>
            </table>
            <h4>Classificações (Cavalcanti, 2016, p. 173)</h4>
            <table>
              <thead><tr><th>Classe</th><th>Relacionado a</th></tr></thead>
              <tbody>
                <tr><td>Técnico</td><td>Linguagem, gerenciador de banco de dados, sistema operacional, hardware, protocolos de rede, outros softwares.</td></tr>
                <tr><td>Requisitos</td><td>Regras de negócio e funcionalidades especificadas pelo time de operações.</td></tr>
                <tr><td>Externo</td><td>Fatores além do domínio da organização.</td></tr>
                <tr><td>Organizacional</td><td>Recursos pares ao time de TI: financeiro, administrativo, recursos humanos.</td></tr>
                <tr><td>Gestão do projeto</td><td>Gestão de pessoas da TI, comunicação, integração, stakeholders, relação com o time de operações.</td></tr>
              </tbody>
            </table>
            <div class="caixa exemplo" data-titulo="Matriz de risco do projeto AZQuali (azeite)"><ul>
              <li>Invasão de privacidade: categoria gestão do projeto; causa falta de política de segurança; ação implantar políticas de segurança.</li>
              <li>Falha na projeção de receitas: requisitos; regras sem comprovação de dados.</li>
              <li>Acesso para danificar dados: técnico; falha de segurança e controle de acesso.</li>
              <li>Informações incorretas: técnico; usuário operando inadequadamente.</li>
              <li>Vigilância sanitária impedindo a venda: externo; especialista não informou a regulamentação.</li>
            </ul></div>
            <p>A categoria direciona quais pessoas colaboram na investigação; a causa é a fonte do problema; as ações são obrigatórias e o acompanhamento deve ser constante. A matriz serve para identificar e priorizar riscos, e o plano de ação consta na própria matriz.</p>
            <div class="caixa prova"><ul>
              <li>Quatro fontes: escopo, fornecedores, partes interessadas, estimativa. Cinco classes: técnico, requisitos, externo, organizacional, gestão do projeto.</li>
              <li>A matriz não serve para priorizar requisitos funcionais; é de riscos.</li>
            </ul></div>`
        },
        {
          id: "u3-analise-respostas",
          titulo: "Análise qualitativa e quantitativa, respostas e comunicação de riscos",
          fonte: "Unidade 3a.pdf (Análise Qualitativa, Quantitativa, Monitoramento, Planejamento de Resposta, Risco Assumido)",
          html: `
            <table>
              <thead><tr><th>Etapa</th><th>Descrição</th></tr></thead>
              <tbody>
                <tr><td>Análise qualitativa</td><td>Avalia a prioridade dos riscos pela probabilidade e pelo impacto, considerando prazo e tolerância a risco das restrições de custo, cronograma, escopo e qualidade. Ex.: probabilidade média (30%) e impacto médio ou alto.</td></tr>
                <tr><td>Análise quantitativa</td><td>Feita nos riscos priorizados pela qualitativa; atribui classificação numérica. Técnicas: simulação de Monte Carlo e análise da árvore de decisão. Serve para quantificar resultados e suas probabilidades, avaliar a chance de atingir objetivos, identificar riscos que exigem mais atenção e metas realistas, e determinar a melhor decisão sob incerteza. O livro indica o cálculo do valor esperado (Cavalcanti, 2016, p. 195 a 198).</td></tr>
                <tr><td>Planejamento de resposta</td><td>Desenvolver opções e ações para aumentar oportunidades e reduzir ameaças. Designa responsável por cada resposta. Deve ser realista, adequada à importância do risco, economicamente viável, acordada pela equipe e de responsabilidade de uma pessoa específica.</td></tr>
                <tr><td>Monitoramento e controle</td><td>Contínuo; identifica novos riscos, acompanha riscos e lista de observação, reanalisa, monitora condições de acionamento de planos de contingência e riscos residuais, e avalia a eficácia das respostas.</td></tr>
              </tbody>
            </table>
            <dl class="campos">
              <dt>Mitigação x contingência</dt><dd><ul>
                <li><strong>Plano de mitigação</strong> (ligado a monitoramento e controle): ajuda a diminuir a ocorrência do risco, ação preventiva.</li>
                <li><strong>Plano de contingência</strong> (ligado a planejamento e respostas): ajuda a trabalhar com o risco após a ocorrência, ação corretiva.</li>
              </ul></dd>
              <dt>Risco assumido</dt><dd>Quando mitigar ou ter contingência não compensa, assume-se a ocorrência e suas consequências. Exemplo: risco com 80% de probabilidade, prejuízo de R$ 10.000 e custo de tratamento de R$ 50.000. Pontos a analisar: viabilidade financeira, viabilidade legal, impacto na sociedade, impacto que o risco pode causar e prejuízos (não só financeiros).</dd>
              <dt>Plano de comunicação de riscos</dt><dd>Garante geração, distribuição e armazenamento das informações no tempo hábil; define quem informar, com qual frequência, quando e por qual meio. Exemplo: sistema complexo demais, informar o desenvolvedor, semanalmente, após reclamações seguidas, por e-mail, telefone e presencial.</dd>
              <dt>Plano de ações</dt><dd>Tabela com risco, prioridade, responsável, data limite, plano de monitoramento e ação (ex.: refazer as partes complexas em 2 semanas após a ocorrência).</dd>
            </dl>
            <div class="caixa prova"><ul>
              <li>Qualitativa prioriza; quantitativa dá número (Monte Carlo, árvore de decisão).</li>
              <li>Mitigar = reduzir chance de ocorrer; contingência = agir depois que ocorreu.</li>
              <li>Assumir o risco exige análise de viabilidade financeira e legal, impacto na sociedade e prejuízos.</li>
            </ul></div>`
        },
        {
          id: "u3-qualidade-sistema",
          titulo: "Qualidade: definição, grau e sistema de qualidade",
          fonte: "Unidade 3b.pdf (Definição de Qualidade, Grau); U3 - Livro Didático, aula 'Gestão da Qualidade em Projeto de Software' (Camargo, 2019, p. 108)",
          html: `
            <dl class="campos">
              <dt>Definição</dt><dd>Segundo a ASQ, termo subjetivo; tecnicamente, características de um produto ou serviço que satisfazem necessidades declaradas ou implícitas. Segundo a ISO 9000, é o grau em que um conjunto de características inerentes atende aos requisitos. A qualidade relaciona-se à percepção de quem avalia, por isso importa a qualidade percebida, que pode diferir da entregue.</dd>
              <dt>Qualidade x grau</dt><dd>Grau é a categoria atribuída a entregas com a mesma utilidade funcional e características técnicas diferentes. Um software pode ter alta qualidade (sem defeitos, manual compreensível) e grau baixo (poucos recursos), ou baixa qualidade (muitos defeitos) e grau alto (muitos recursos).</dd>
              <dt>Sistema de qualidade</dt><dd>Todos buscam qualidade, mas um resultado formal vem de um sistema definido e seguido com disciplina; gestor, stakeholders e time se comprometem com a qualidade aceitável e podem medir e melhorar periodicamente. Parte dos <strong>valores</strong> do projeto: funcionalidades que proporcionam inovação, resultado positivo, satisfação e lucratividade para as organizações.</dd>
              <dt>Recursos e triângulo ágil</dt><dd>Escopo (funcionalidade e requisitos), tempo/prazo, time de TI e recursos computacionais (custo) e a divulgação dos resultados em indicadores. O triângulo ágil (Camargo, 2019) relaciona valor, restrições (escopo, cronograma e custo) e qualidade aceitável. Os valores e o padrão de qualidade podem mudar ao longo do projeto ou de projeto para projeto.</dd>
              <dt>Gerenciamento da qualidade (PMBOK)</dt><dd>Busca assegurar que o projeto satisfaça as necessidades do cliente em todo o ciclo de vida; o gerente conscientiza a equipe e oferece condições. A organização precisa operar com qualidade; um dos ativos mais valiosos é um sistema de gestão da qualidade por políticas e procedimentos com melhoria contínua de processos. Falhas de projeto vêm de gestão fraca, estimativa pobre, mau planejamento, requisitos inadequados e gestão de riscos inadequada.</dd>
            </dl>
            <div class="caixa prova"><ul>
              <li>Qualidade (ausência de defeitos, atende requisitos) não é o mesmo que grau (quantidade de recursos).</li>
              <li>Valores da qualidade no livro: funcionalidades que dão inovação, resultado positivo, satisfação e lucratividade, e não só benefício do time de TI.</li>
            </ul></div>`
        },
        {
          id: "u3-metricas-maturidade",
          titulo: "Métricas de qualidade e maturidade (CMMI)",
          fonte: "U3 - Livro Didático, aula 'Gestão da Qualidade em Projeto de Software' (IEEE, CMMI)",
          html: `
            <h4>Termos de métrica (IEEE)</h4>
            <table>
              <thead><tr><th>Termo</th><th>Definição</th><th>Exemplo (OliVirgem)</th></tr></thead>
              <tbody>
                <tr><td>Atributo</td><td>Propriedade física ou abstrata mensurável de uma entidade.</td><td>Quantidade de falhas encontradas na Sprint.</td></tr>
                <tr><td>Métrica</td><td>Medida quantitativa do grau com que um sistema, componente ou processo possui um dado atributo.</td><td>Falhas na execução do produto na Sprint, nas implementações do Sprint Backlog.</td></tr>
                <tr><td>Medição</td><td>Ato ou processo de atribuir um número ou categoria a uma entidade para descrevê-la.</td><td>Contagem e classificação das falhas na fase de teste da Sprint.</td></tr>
                <tr><td>Medida</td><td>Número, extensão ou quantidade resultante de uma medição.</td><td>8 falhas na Sprint.</td></tr>
              </tbody>
            </table>
            <p>As métricas existem para ajustar processos e minimizar falhas: conter o crescimento de erros e criar procedimentos que impeçam novos defeitos.</p>
            <h4>Maturidade</h4>
            <p>A maturidade indica que o processo passa por estágios: da organização sem classificação, com habilidades mínimas, até o aprimoramento contínuo, passando por aprendizado, experimentação e treino da disciplina e dos indicadores. Ocorre individual e organizacionalmente. Modelos mais robustos citados: SPI e CMMI.</p>
            <table>
              <thead><tr><th>Nível CMMI (segundo o livro)</th><th>Descrição</th></tr></thead>
              <tbody>
                <tr><td>1 — Executada</td><td>Atividades do projeto para entregar o produto.</td></tr>
                <tr><td>2 — Controlada</td><td>Atividades e implantação de processos de desenvolvimento.</td></tr>
                <tr><td>3 — Padronizada</td><td>Processo: soluções, validações, gestão, gerenciamento de riscos.</td></tr>
                <tr><td>4 — Medido</td><td>Processo gerenciado com base em métricas.</td></tr>
                <tr><td>5 — Em otimização</td><td>Processos em melhoria.</td></tr>
              </tbody>
            </table>
            <div class="caixa externo" data-titulo="Complemento externo (conhecimento geral)"><p>Na nomenclatura oficial dos níveis de maturidade do CMMI (versão 1.3) os rótulos são Inicial, Gerenciado, Definido, Gerenciado quantitativamente e Em otimização; o livro adota os nomes acima. Para a prova, use os rótulos do livro (a avaliação cobrou "nível 5 = otimização e melhoria dos processos").</p></div>
            <div class="caixa prova"><ul>
              <li>Níveis: 1 executada, 2 controlada, 3 padronizada, 4 medido, 5 em otimização.</li>
              <li>Atributo, métrica, medição, medida: diferencie pelo exemplo (falhas na Sprint, 8 falhas).</li>
            </ul></div>`
        },
        {
          id: "u3-melhoria-pdca",
          titulo: "Melhoria contínua, PDCA, lições aprendidas e ferramentas de qualidade",
          fonte: "Unidade 3b.pdf (Lições aprendidas, Melhoria contínua, PDCA, Ferramentas de qualidade do Guia PMBOK)",
          html: `
            <dl class="campos">
              <dt>Melhoria contínua</dt><dd>Filosofia gerencial que aperfeiçoa produtos e processos como um processo sem fim de pequenos avanços. Envolve padronização e melhoria incremental, processo contínuo com dados concretos e redução de desperdícios e atividades sem valor agregado.</dd>
              <dt>Lições aprendidas</dt><dd>Base da melhoria contínua; podem ser formais ou informais, documentadas ou só discutidas, em grupo ou individuais. Contêm principais problemas, recomendações para melhoria futura e análise das variações do projeto. Estrutura do exemplo: o que deu certo, o que deu errado, no que podemos melhorar. No livro, a documentação de lições aprendidas é mencionada nas reuniões de Planejamento da Sprint, Retrospectiva da Sprint e no encerramento do projeto.</dd>
            </dl>
            <h4>Ciclo PDCA (Deming, a partir de Shewhart)</h4>
            <table>
              <thead><tr><th>Etapa</th><th>O que fazer</th></tr></thead>
              <tbody>
                <tr><td>P — Plan (planejar)</td><td>Identificar a oportunidade ou o problema, analisar o processo e as causas (Ishikawa, 5 Porquês), gerar alternativas, definir metas mensuráveis e criar o plano de ação. Define requisitos e padrões de qualidade, normas e ferramentas de medição. Responsabilidade do gerente, mas a qualidade é de todos.</td></tr>
                <tr><td>D — Do (executar)</td><td>Executar o plano de ação, em escala reduzida (piloto), envolver pessoas, implantar a alteração e documentar. Associado à garantia da qualidade: auditoria dos processos (internos ou externos, programadas ou aleatórias).</td></tr>
                <tr><td>C — Check (checar)</td><td>Medir e avaliar o desempenho contra padrões e metas, identificar desvios. Associado ao controle da qualidade, feito por especialistas em qualidade do time.</td></tr>
                <tr><td>A — Act (agir)</td><td>Se bem-sucedido, normatizar e padronizar; se não, entender o problema, corrigir e reiniciar o ciclo.</td></tr>
              </tbody>
            </table>
            <h4>Ferramentas de qualidade do PMBOK (slides)</h4>
            <p>Análise de custo-benefício, custo da qualidade, diagrama de causa-efeito (Ishikawa ou espinha de peixe), fluxograma, folha de verificação (checklist), histograma, benchmarking, projeto de experimentos, amostragem estatística, auditorias de qualidade, análise de processos e inspeção.</p>
            <div class="caixa externo" data-titulo="Complemento externo (conhecimento geral)"><p>Six Sigma (citado em questões da U2 e no "Saiba mais" do livro da U3) é uma abordagem de qualidade orientada a dados para reduzir variação e defeitos, com o ciclo DMAIC (definir, medir, analisar, melhorar, controlar). A pasta não traz o tema desenvolvido; este complemento não vem do material.</p></div>
            <div class="caixa prova"><ul>
              <li>PDCA: P planeja e define metas, D executa (piloto), C verifica contra as metas, A padroniza ou corrige e reinicia.</li>
              <li>Ishikawa = diagrama de causa e efeito = espinha de peixe.</li>
            </ul></div>`
        },
        {
          id: "u3-documentacao",
          titulo: "Documentação do projeto",
          fonte: "U3 - Livro Didático, aula 'Documentação do projeto'",
          html: `
            <dl class="campos">
              <dt>Reunião em três momentos</dt><dd>Preparação (materiais e estratégias), condução (foco no assunto, decisões organizadas) e "o depois" (ata e acompanhamento das ações pelo gerente do projeto; Cavalcanti, 2016, p. 147).</dd>
              <dt>Documentação como elemento de qualidade</dt><dd>Organizações com gestão do conhecimento, tradicional ou ágil, usam lições aprendidas, documento paralelo ao projeto com grande influência na qualidade. Sua criação aparece no Planejamento e na Retrospectiva da Sprint e no Encerramento do projeto.</dd>
              <dt>Por que e quando documentar</dt><dd>Documentação extensa, pouco sucinta ou com informações além do essencial se torna inacessível; o conteúdo essencial colabora com o projeto. Formalização compatível com os envolvidos. Faz parte do plano de comunicação: o gestor define como e quando a documentação técnica é disponibilizada. O momento crucial é o encerramento, com verificação final das entregas e arquivamento de toda a documentação gerada, física e eletrônica (Cavalcanti, 2016, p. 214).</dd>
              <dt>Riscos pela ausência</dt><dd>Sistemas legados costumam ter projeto inextensível, código difícil, documentação deficiente, testes não documentados e histórico mal gerenciado (Pressman, 2021). Sem documentação do que funcionou ou não, é difícil decidir quando inovar ou reutilizar uma arquitetura (Pressman, 2021, p. 184). Ausência de listas de conferência prejudica a qualidade; Filho (2019, p. 96) recomenda revisões individuais prévias com listas de conferência. Na validação, o time de TI deve receber um documento de feedback.</dd>
            </dl>
            <div class="caixa exemplo"><p>MecanDoc (oficina): três consultores escreveram procedimentos prioritários diferentes (últimos serviços do carro; ficha da peça a trocar; checklist de verificação). Registro sucinto e no momento adequado apoia a administração do Product Backlog e dá segurança ao PO e ao gestor.</p></div>
            <div class="caixa prova"><ul>
              <li>A documentação deve existir em momentos importantes porque reúne as decisões e reduz dúvidas futuras.</li>
              <li>Documentação extensa demais é inútil; o essencial é o que colabora.</li>
              <li>O "depois" da reunião: ata e acompanhamento das ações.</li>
            </ul></div>`
        },
        {
          id: "u3-ferramentas-comunicacao",
          titulo: "Ferramentas de acompanhamento e gestão da comunicação",
          fonte: "U3 - Livro Didático, aula 'Ferramentas e Qualidade em Projeto de Software' (Figuras 1 a 5)",
          html: `
            <table>
              <thead><tr><th>Ferramenta</th><th>Características</th></tr></thead>
              <tbody>
                <tr><td>Gantt</td><td>Cronograma muito usado no ciclo waterfall (também em gestões ágeis); mostra atividades dependentes e as que podem ocorrer em paralelo, agrupamento por módulo ou estágio; ao ajustar a duração de uma atividade, as vinculadas se ajustam automaticamente.</td></tr>
                <tr><td>Kanban / quadro de atividades</td><td>Mostra o que está em execução, pronto para iniciar e concluído; exposto o tempo todo; permite ao Scrum Master identificar impedimentos; pode ter mais de três colunas.</td></tr>
                <tr><td>WBS / EAP</td><td>Decomposição hierárquica do processo de desenvolvimento (ou do produto), em árvore; mantém stakeholders informados do andamento (itens concluídos em linha pontilhada); pode funcionar como "mapa" das funcionalidades. Ferramenta citada: MindMeister.</td></tr>
                <tr><td>Burndown</td><td>Mostra o avanço por Sprint em relação ao total previsto (ex.: 9 de 53 story points na Sprint 1, mais 13 na Sprint 2, total 22, até concluir 53 na Sprint 5).</td></tr>
              </tbody>
            </table>
            <dl class="campos">
              <dt>Sequencial x ágil</dt><dd>No sequencial, o planejamento parte de requisitos todos conhecidos e a análise e a arquitetura são ricas em detalhes. No ágil, requisitos são conhecidos no planejamento, mas só os da iteração são elicitados no planejamento da iteração; na segunda iteração o design passa por reestruturação e o código por refatoração. Iterações de 2 a 4 semanas facilitam a percepção de progresso.</dd>
              <dt>Gestão da comunicação</dt><dd>Gráficos e diagramas são artefatos de comunicação. Cada stakeholder recebe a informação conforme seu envolvimento (o patrocinador precisa da evolução do cronograma e dos valores gastos, com projeção para o restante). O formato (texto, gráfico, voz ou vídeo), a mídia e o momento de chegada da informação influenciam a interpretação.</dd>
            </dl>
            <div class="caixa prova"><ul>
              <li>Burndown mostra o avanço por Sprint em story points; Gantt mostra dependências e prazos; WBS decompõe hierarquicamente; Kanban mostra o estado das atividades.</li>
              <li>O momento e a forma da informação importam para a comunicação.</li>
            </ul></div>`
        },
        {
          id: "u3-estudos-caso",
          titulo: "Estudos de caso do livro: TicketExpress e projeto AD",
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, aulas 'Ferramentas para modelos sequencial e ágil' e Videoaula de Encerramento",
          html: `
            <h4>TicketExpress (portal de venda de ingressos): sequencial x ágil no acompanhamento</h4>
            <table>
              <thead><tr><th>Aspecto</th><th>Modelo sequencial</th><th>Modelo ágil</th></tr></thead>
              <tbody>
                <tr><td>Requisitos</td><td>Planejamento com todos os requisitos conhecidos; depois todos são elicitados, tornando análise e arquitetura ricas em detalhes.</td><td>Requisitos conhecidos no planejamento, mas só os da iteração são elicitados, na atividade de planejamento da iteração.</td></tr>
                <tr><td>Design e código</td><td>Detalhamento prévio favorece o design/componentização e a construção do código.</td><td>Na segunda iteração, o design passa por <strong>reestruturação</strong> e o código-fonte por <strong>refatoração</strong>.</td></tr>
                <tr><td>Acompanhamento</td><td>Ferramentas surgidas no modelo sequencial (cronograma, WBS, Gantt) continuam úteis, otimizadas ao longo do tempo.</td><td>Visão estilo <strong>Kanban</strong>: atividades em execução, prontas para iniciar e concluídas; Burndown para a Release.</td></tr>
              </tbody>
            </table>
            <p>No exercício, uma <strong>WBS (árvore)</strong> orienta o desenvolvimento dos requisitos, como "mapa" das funcionalidades ou operações e da rotina do usuário. A EAP pode representar as atividades e fases do projeto ou as partes do produto de software. Ferramenta citada: MindMeister.</p>
            <h4>Projeto AD (conglomerado do direito)</h4>
            <div class="caixa exemplo" data-titulo="Cenário"><p>Gestor do projeto AD, com advogados de segmentos diversos. Riscos: a aplicação associar um documento indevido ou divergente a um processo jurídico; e engajar os gestores do escritório nas decisões sobre requisitos funcionais.</p></div>
            <ul>
              <li><strong>Matriz de risco</strong>, com ajuda de especialistas em documentos legais, leis, anexos e portarias, para entender causas e consequências e prever na aplicação <em>gatilhos</em> que evitem prejuízos em processos.</li>
              <li><strong>Mudança de cultura</strong> entre equipe de TI e advogados, com comunicação do andamento por cronograma, WBS e outros artefatos, para manter os advogados envolvidos.</li>
              <li>Atuação do gestor, em fases específicas, sobre o andamento das atividades e a qualidade do produto final.</li>
            </ul>
            <h4>Mapa mental da unidade (figura Assimile)</h4>
            <p>A <strong>qualidade em projeto de software</strong> é o tema central e depende de: <strong>gestão de riscos</strong>, <strong>documentação do projeto</strong>, <strong>ferramentas de gestão</strong> e <strong>artefatos da comunicação</strong>. Os elementos se entrelaçam (por exemplo, stakeholders se ligam à comunicação, ao cronograma, às reuniões e à gestão de riscos).</p>
            <p>Perguntas de reflexão do livro: as ferramentas de gestão são úteis na gestão da qualidade? Por que a gestão da comunicação é fundamental na gestão de riscos? Qual a importância da gestão de riscos em projeto de software? Qual o benefício da documentação na qualidade do software?</p>
            <div class="caixa prova"><ul>
              <li>Sequencial: tudo é levantado antes; ágil: levantamento por iteração, com reestruturação do design e refatoração do código.</li>
              <li>Kanban indica o que está em execução, pronto para iniciar e concluído.</li>
            </ul></div>`
        }
      ]
    },
    {
      id: "u4",
      titulo: "Unidade 4 — Configuração, Mudanças, UX, Governança e Ferramentas",
      intro: `<p>Gerenciamento de configuração (SCM), integração contínua, gestão de mudanças e observabilidade, projeto da experiência do usuário, governança de TI e ESG, ferramentas de gestão de projetos, MVP, Design Thinking e Design Sprint. Base: livro da U4 e slides "Unidade 4" e "Unidade 4 DS_DTV2". Não há questionário desta unidade na pasta.</p>`,
      topicos: [
        {
          id: "u4-scm",
          titulo: "Gerenciamento de configuração (SCM), baseline e rastreabilidade",
          fonte: "U4 - Livro Didático, aula 'Gerenciamento de Configuração' (Pressman, 2021, p. 440 e 441)",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>Software Configuration Management (SCM) é o controle dos artefatos que compõem um produto funcionando. Permite manter controle das mudanças de código, fazer solicitações oficiais de alteração, avaliar alterações com a equipe, garantir que sejam aceitáveis ao Product Owner e coletar dados estatísticos sobre componentes (quais são problemáticos). Ao consolidar um conjunto de itens de software estáveis, tem-se a versão instalável.</dd>
              <dt>Quatro elementos do SCM</dt><dd>Ver tabela.</dd>
            </dl>
            <table>
              <thead><tr><th>Elemento</th><th>Definição</th></tr></thead>
              <tbody>
                <tr><td>Componente</td><td>Conjunto de ferramentas acopladas a um sistema de gestão de arquivos (ex.: banco de dados) que dá acesso a cada item de configuração (SCI).</td></tr>
                <tr><td>Processo</td><td>Procedimentos e tarefas que definem uma abordagem eficaz de gestão de alterações para todos os envolvidos.</td></tr>
                <tr><td>Construção</td><td>Ferramentas que automatizam a construção do software, assegurando o conjunto correto de componentes validados (a versão correta).</td></tr>
                <tr><td>Humanos</td><td>Características de processo usadas pela equipe para implementar um SCM eficaz.</td></tr>
              </tbody>
            </table>
            <dl class="campos">
              <dt>Referência (baseline)</dt><dd>Segundo o IEEE: especificação ou produto formalmente revisado e acordado, que serve de base para desenvolvimento adicional e só pode ser alterado por procedimentos formais de controle de alteração. É um marco, caracterizado por um ou mais SCIs aprovados após revisão técnica (ex.: o modelo de projeto, depois de revisado, corrigido e aprovado, vira baseline). O repositório guarda os SCIs referenciais.</dd>
              <dt>Rastreabilidade</dt><dd>Todos os SCIs usados ou previstos e inter-relacionados podem ser rastreados se houver referências em um repositório de SCM. Ex.: história de usuário no Product Backlog, modelo de dados, definição do banco, código-fonte, planos de teste. A matriz de rastreabilidade (Pressman, seção 7.2.6) é recurso para identificar um SCI.</dd>
              <dt>Operações desejadas (Pressman, 2021, p. 440)</dt><dd><ul>
                <li>Rastrear, gerenciar e executar adequadamente alterações simultâneas ao mesmo componente.</li>
                <li>Engenheiros não interferem desnecessariamente uns nos outros e se comunicam e coordenam, notificando tarefas necessárias e concluídas.</li>
                <li>Mecanismos para resolver conflitos e mesclar alterações.</li>
                <li>Histórico (log) da evolução de todos os componentes, com motivos e registro do que foi alterado.</li>
                <li>Espaço de trabalho próprio para criar, alterar, testar e integrar código.</li>
                <li>Em certo ponto, o código vira referencial, base do desenvolvimento seguinte.</li>
              </ul></dd>
            </dl>
            <div class="caixa prova"><ul>
              <li>Quatro elementos: componente, processo, construção, humanos.</li>
              <li>Baseline só muda por controle formal de alterações.</li>
              <li>SCM dá rastreabilidade, histórico e controle de mudanças simultâneas.</li>
            </ul></div>`
        },
        {
          id: "u4-integracao-continua",
          titulo: "Integração contínua (CI)",
          fonte: "U4 - Livro Didático, aulas 'Gerenciamento de Configuração' e 'Evolução e Mudanças de Software'",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>Para Pressman (2021), prática de fundir componentes ao incremento de software em evolução uma ou mais vezes ao dia; verificada em Extreme Programming (XP) e DevOps. Agrega valor ao SCM: as alterações são integradas, compiladas e testadas automaticamente.</dd>
              <dt>Quatro melhores práticas</dt><dd><ol>
                <li>Minimizar o número de variantes de código.</li>
                <li>Testar desde o início e com frequência.</li>
                <li>Integrar desde o início e com frequência.</li>
                <li>Usar ferramentas para automatizar teste, construção e integração.</li>
              </ol></dd>
              <dt>Vantagens</dt><dd><ul>
                <li><strong>Feedback acelerado</strong>: avisa de problemas na integração imediatamente, quando poucas alterações foram feitas.</li>
                <li><strong>Maior qualidade</strong>: confiança na qualidade ao integrar sempre que necessário.</li>
                <li><strong>Menor risco</strong>: evita fase de integração longa; falhas de projeto aparecem cedo.</li>
                <li><strong>Melhores relatórios</strong>: métricas de análise de código dão contabilidade de status de configuração mais precisa.</li>
              </ul></dd>
            </dl>
            <p>Capturar defeitos nas fases iniciais reduz consideravelmente os custos de desenvolvimento.</p>`
        },
        {
          id: "u4-mudancas-observabilidade",
          titulo: "Gestão de mudanças, observabilidade e CI/CD",
          fonte: "U4 - Livro Didático, aula 'Evolução e Mudanças de Software'",
          html: `
            <dl class="campos">
              <dt>Gestão de mudanças</dt><dd>Revisão constante de recursos e necessidades. Na fase de controle do projeto (Cavalcanti, 2016): gerenciar tarefas, pessoas e recursos; controlar mudanças de requisitos funcionais e não funcionais e de elementos de TI; providenciar ações antecipadas para evitar problemas; garantir que só mudanças aprovadas sejam implementadas, com ciência do dono do projeto, do time de operações e do time de TI. Restrições de recurso, escopo, tempo e qualidade (Camargo, 2019, p. 100) valem também a cada iteração de manutenção e evolução.</dd>
              <dt>Observabilidade</dt><dd>Ações técnicas que ampliam a prevenção da propagação de problemas, empregadas em ambientes operacionais complexos por meio da <strong>detecção de anomalias</strong>: comportamentos ou eventos bem diferentes do esperado ou planejado.</dd>
              <dt>Práticas-chave de detecção de anomalias</dt><dd><ol>
                <li>Coletar dados relevantes (desempenho, logs, métricas).</li>
                <li>Definir limites e padrões de comportamento normais por componente.</li>
                <li>Utilizar algoritmos de detecção de anomalias.</li>
                <li>Desenvolver mentalidade voltada à detecção de anomalias (investigar causas e tomar medidas corretivas).</li>
              </ol></dd>
              <dt>CI/CD</dt><dd>Integração contínua no desenvolvimento e implantação contínua no ambiente operacional. Responde a características dos sistemas atuais: multifuncionalidade, reatividade e temporização, novos modos de interação do usuário, arquiteturas complexas, sistemas heterogêneos distribuídos, criticidade e variabilidade de manutenção.</dd>
            </dl>
            <div class="caixa exemplo"><p>CosmeTech: regras de negócio mudam várias vezes em 12 meses. Solução: CI/CD mais observabilidade para registrar defeitos por requisito e dar ao gestor de TI dados para ajustar processos, e à empresa indicadores comparativos entre produtos.</p></div>`
        },
        {
          id: "u4-ux",
          titulo: "Projeto da experiência do usuário (UX)",
          fonte: "U4 - Livro Didático, aula 'Projeto da experiência do usuário' (Pressman, 2021)",
          html: `
            <dl class="campos">
              <dt>Passos do projeto de interação (Pressman, 2021)</dt><dd><ol>
                <li>Rascunhar a interface do usuário.</li>
                <li>Criar o protótipo virtual.</li>
                <li>Adicionar entrada e saída em código.</li>
                <li>Testar o protótipo com o usuário (coletar feedback).</li>
                <li>Atualizar o protótipo sempre (mudanças de requisitos, arquitetura ou recursos de TI).</li>
              </ol></dd>
              <dt>Elementos da UX</dt><dd>Envolvidos no projeto e no produto; experiências (ações, sentimentos, finalidade, motivações, barreiras); interface (protótipo visual, de contato, áudio, movimento).</dd>
              <dt>Persona</dt><dd>Principal elemento do projeto de interação: sintetiza características pessoais a partir de dados de entrevistas com usuários, representando objetivos e comportamentos de um perfil de usuário.</dd>
              <dt>Análise e projeto de interfaces</dt><dd>Avaliação contínua em todas as iterações. Aspectos de UX: volume de aprendizado do usuário (depende da duração e complexidade da especificação), tempo de interação (processos e ações), recursos computacionais (ações, processos e estados), protocolo de tratamento de erros e estilo da interface (complexidade e aceitação).</dd>
            </dl>
            <p>Relacionado: arquitetura Modelo-Visão-Controlador, em que a visão contém as funções da interface (Pressman, p. 189 a 191), e alertas e condições extraordinárias (seção 21.3.4). Caso PersonaDesign: app móvel, notificações push configuráveis, validação de protótipos antes de codificar.</p>
            <div class="caixa prova"><ul>
              <li>Ordem: rascunhar, protótipo virtual, entrada e saída em código, testar com o usuário, atualizar sempre.</li>
              <li>Persona nasce de entrevistas e modela um perfil de usuário.</li>
            </ul></div>`
        },
        {
          id: "u4-governanca-esg",
          titulo: "Governança de TI e ESG",
          fonte: "U4 - Livro Didático, aula 'Paradigmas em Projeto de Software estratégico' (Filho e Cierco, 2022; DTT, 2023)",
          html: `
            <dl class="campos">
              <dt>PMBOK/PMI e nova gestão</dt><dd>No triângulo de talentos do PMI, o foco deixou de ser só entregar o encomendado e passou a atender o melhor para o negócio: gestão estratégica de negócios, complementada por técnicas de gestão de projetos e liderança. Nova gestão: modelo ágil com ferramentas do preditivo (Maximiano, 2022, p. 178), seguindo timeboxing e autoorganização, processo puxado e interação constante com stakeholders.</dd>
              <dt>ITIL e COBIT</dt><dd>ITIL: biblioteca e modelos para gerenciar tecnologia, estrutura prática e flexível para a transformação digital, alinhando recursos humanos, digitais e físicos. COBIT: framework mantido pela ISACA, recomendações e boas práticas de governança de TI.</dd>
              <dt>ESG (Environmental, Social, Governance)</dt><dd>Métricas ligadas a investidores que equilibram interesses financeiros de curto prazo com meio ambiente, sociedade e ética. Foco: reputação e confiança do público. Três pilares na tabela.</dd>
            </dl>
            <table>
              <thead><tr><th>Pilar</th><th>Abrange</th></tr></thead>
              <tbody>
                <tr><td>Environmental</td><td>Recursos naturais: emissão de carbono, aquecimento global, eficiência energética, resíduos, poluição do ar e da água.</td></tr>
                <tr><td>Social</td><td>Fator humano: bem-estar mental e físico dos colaboradores, inclusão e diversidade, relação com a sociedade.</td></tr>
                <tr><td>Governance</td><td>Política de remuneração dos altos cargos, transparência e ética, proteção de dados e privacidade.</td></tr>
              </tbody>
            </table>
            <p>Governança e ESG permitem antecipar, evitar e mitigar riscos e preparar respostas a crises. Relação com projeto de software: análise de dados, automação de tarefas (ferramentas CASE), atendimento a investidores (relatórios). Pesquisa DTT (2023): padronização de relatórios e indicadores ESG, novos meios de comunicação com investidores, monitoramento de sinais de alerta precoce e maiores exigências de governança, riscos e controles; desafios de monitoramento: falta de padronização dos dados, falta de ferramentas de coleta e informações pulverizadas.</p>
            <div class="caixa prova"><ul>
              <li>ESG: ambiental, social e governança (transparência, ética, proteção de dados).</li>
              <li>Processo empurrado (preditivo) x puxado (ágil): ver tópico na Unidade 2.</li>
            </ul></div>`
        },
        {
          id: "u4-ferramentas-pm",
          titulo: "Ferramentas de gestão de projetos",
          fonte: "Unidade 4.pdf (slides Ferramentas; Harrin, 2016)",
          html: `
            <h4>Tipos de software de gestão (Harrin, 2016)</h4>
            <table>
              <thead><tr><th>Tipo</th><th>Característica</th></tr></thead>
              <tbody>
                <tr><td>Pessoal</td><td>Instalado no laptop do gerente; não permite mais de um desenvolvedor no mesmo documento.</td></tr>
                <tr><td>Colaborativo</td><td>Permite planejamento conjunto, com compartilhamento por e-mail, drive, FTP etc.</td></tr>
                <tr><td>Integrado</td><td>Vários desenvolvedores acessam a mesma interface; colaboração em tempo real (just in time); instalado em servidor web ou local (intranet).</td></tr>
              </tbody>
            </table>
            <p>Ferramentas podem ser programas de computador ou aplicações web, gratuitas ou pagas. A escolha inadequada faz o software consumir tempo e recursos em vez de ajudar.</p>
            <table>
              <thead><tr><th>Ferramenta</th><th>Resumo</th></tr></thead>
              <tbody>
                <tr><td>MS Project</td><td>Software proprietário da Microsoft (teste de 60 dias). Versão 2016: MS Project (cronogramas, só no computador do gerente) e Project Server (rede local, trabalho colaborativo). Cronograma, gráfico de Gantt, gráficos de análise.</td></tr>
                <tr><td>Wrike</td><td>Colaboração on-line; gratuito para equipes de até 5 usuários; Gantt, edição on-line, multiplataforma (iOS e Android), integração com Google Docs e Dropbox.</td></tr>
                <tr><td>WBSTool</td><td>Ferramenta on-line gratuita para EAP (WBS); exporta XML, Word, MS Project e JPEG; não permite edição colaborativa.</td></tr>
                <tr><td>ProjectLibre</td><td>Código livre, similar ao MS Project; versões Manager (desktop) e Server; Gantt, diagrama PERT, EAP e relatórios; Windows, Linux e macOS.</td></tr>
                <tr><td>PM Canvas</td><td>Metodologia (Prof. José Finocchio Jr., USP) em blocos que respondem seis perguntas: por quê, o quê, quem, como, quando, quanto. Não gera documentos padrão (EAP, cronograma); é visão complementar da gestão de escopo.</td></tr>
                <tr><td>Project Open</td><td>Código aberto, concorrente do MS Project; Linux, sem rede; EAP e tabela de uso de recursos; exige conhecimento avançado de Linux; sem versão em português.</td></tr>
                <tr><td>Agile Wrap</td><td>On-line, indicado para Scrum; gratuito até 5 pessoas; EAP, histórico de atividades, taskboard com cartões virtuais.</td></tr>
                <tr><td>Trello</td><td>Gerenciamento por listas, via navegador e apps; gratuito (recursos pagos extras; Trello Gold US$ 5/mês, 250 MB de anexos contra 10 MB). Boards com listas (colunas) e Cards; checklists, prazos, labels coloridas, marcação com @.</td></tr>
              </tbody>
            </table>
            <p>Outras citadas: Instagantt, Jira, ClickUp, Monday, Miro, Notion, draw.io (diagrams.net), Canva, Marvel (protótipos).</p>
            <div class="caixa prova"><ul>
              <li>Pessoal x colaborativo x integrado (Harrin): quem pode editar e como compartilha.</li>
              <li>PM Canvas: seis perguntas. MS Project: Gantt e Project Server para colaboração em rede local.</li>
            </ul></div>`
        },
        {
          id: "u4-mvp",
          titulo: "MVP (Minimum Viable Product)",
          fonte: "Unidade 4 DS_DTV2.pdf (slide MVP)",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>O MVP pode ser desenvolvido de várias maneiras, de aplicativos de sobreposição de imagem que simulam a navegação (ex.: Marvel) a formulários, vídeos, storyboards e projetos físicos. O importante é chegar o mais próximo da realidade possível com custo e complexidade baixos, para avaliar melhor a ideia.</dd>
            </dl>
            <div class="caixa externo" data-titulo="Complemento externo (conhecimento geral)"><p>Na definição usual (Eric Ries, Lean Startup), MVP é a versão mínima do produto que permite validar hipóteses de negócio com o menor esforço e tempo, aprendendo com usuários reais; ele não promete funcionalidades completas. A questão de MVP da U2 explora essa ideia: validar possibilidades de negócio no menor tempo e esforço não significa que o software entregue atenderá às necessidades.</p></div>
            <div class="caixa nota"><p>O slide da pasta trata MVP como protótipo de baixo custo e complexidade; o Design Sprint é apresentado como atalho que valida a ideia com usuários sem esperar o lançamento de um MVP (que pode levar meses).</p></div>`
        },
        {
          id: "u4-design-thinking",
          titulo: "Design Thinking",
          fonte: "Unidade 4 DS_DTV2.pdf (slides Design Thinking)",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>Abordagem centrada no usuário, baseada em métodos de designers: pergunta inicial é "qual é a necessidade humana por trás disso?". Busca soluções <strong>viáveis</strong> (economia e tecnologia) e <strong>desejáveis</strong> para o usuário, transformando ideias em produtos ou processos tangíveis e testáveis. Serve para resolver problemas complexos, otimizar capital intelectual, acelerar criação, reduzir riscos e gerar inovação.</dd>
            </dl>
            <h4>Três pilares</h4>
            <table>
              <thead><tr><th>Pilar</th><th>Significado</th></tr></thead>
              <tbody>
                <tr><td>Empatia</td><td>Deixar pré-julgamentos e convicções para ver o contexto pelos olhos de quem o vive; usada na imersão com o público. Corresponde a "pensar primeiro nas pessoas".</td></tr>
                <tr><td>Colaboração</td><td>Profissionais multidisciplinares; equilibra falar e ouvir; olhares somados criam uma terceira alternativa (cocriação).</td></tr>
                <tr><td>Experimentação</td><td>Errar o mais cedo possível, mitigar verdades absolutas e ideias apaixonadas; experimentar para ver se há chance de dar certo, aprimorar ou recomeçar.</td></tr>
              </tbody>
            </table>
            <h4>Sete etapas</h4>
            <table>
              <thead><tr><th>#</th><th>Etapa</th><th>Resumo</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Entendimento</td><td>Organizar a equipe, regras, cronograma; levantar dados sobre problema, contexto e perfil; iniciar a empatia.</td></tr>
                <tr><td>2</td><td>Observação</td><td>A campo: observar e entrevistar pessoas, entender estilo de vida, aspectos emocionais, sociais e econômicos.</td></tr>
                <tr><td>3</td><td>Ponto de vista</td><td>Cada integrante compartilha impressões e, juntos, definem o problema.</td></tr>
                <tr><td>4</td><td>Ideação</td><td>Gerar soluções sem julgar; liberdade de expressão.</td></tr>
                <tr><td>5</td><td>Prototipagem</td><td>Criar versão que passe a experiência mais próxima da realidade; definir objetivos e perguntas do teste.</td></tr>
                <tr><td>6</td><td>Teste</td><td>Ouvir e observar satisfação e insatisfação; identificar melhorias.</td></tr>
                <tr><td>7</td><td>Iteração</td><td>Processar o feedback, decidir o que fica e o que sai; pode-se voltar a etapas anteriores.</td></tr>
              </tbody>
            </table>
            <dl class="campos">
              <dt>Mapa de empatia (Dave Gray e Alex Osterwalder)</dt><dd>Seis campos: o que pensa e sente, o que escuta, o que vê, o que fala e faz, quais são suas dores, quais são seus desejos. Ideal para a primeira fase.</dd>
              <dt>Brainstorming</dt><dd>Sem julgamentos, colaborativo, apoio visual. Regras: respeitar a vez de cada um, sem limite de ideias (quanto mais, melhor), gerar insights a partir das ideias dos outros, incentivar ideias aparentemente descabidas, deixar tudo visível, manter o foco, não julgar nem desmotivar.</dd>
            </dl>
            <div class="caixa prova"><ul>
              <li>Pilares: empatia, colaboração, experimentação. Sete etapas na ordem acima.</li>
              <li>Experimentação: perder o medo de errar e errar cedo; quem pratica não desiste após sucessivos erros.</li>
            </ul></div>`
        },
        {
          id: "u4-design-sprint",
          titulo: "Design Sprint",
          fonte: "Unidade 4 DS_DTV2.pdf (slides Design Sprint)",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>Processo de design "expresso", criado pela Google Ventures: um grupo se reúne por 5 dias para responder questões críticas de negócio por meio de design, prototipagem e teste com usuários. Foca a validação da ideia, encurtando o processo para cerca de 40 horas, em vez de esperar o lançamento de um MVP. Combina práticas de brainstorming, innovation workshop, hackathon, ideation session e Design Thinking, com foco em algo tangível (protótipo).</dd>
              <dt>Quando usar</dt><dd>No começo de um projeto, no meio quando há obstáculo, para ganhar velocidade e para alinhar uma nova equipe. Recomendado para startups em estágio inicial, ideias a amadurecer e projetos internos.</dd>
              <dt>Time</dt><dd>Product manager, engenheiros, UX/UI designers, pesquisadores, stakeholders (decisor), alguém que conhece os usuários, mais um facilitador (Sprint Master) obrigatório e independente. Dedicação 100% do tempo.</dd>
            </dl>
            <table>
              <thead><tr><th>Dia</th><th>Foco</th></tr></thead>
              <tbody>
                <tr><td>1 — Mapear</td><td>Entender o problema, ouvir especialistas, definir o alvo.</td></tr>
                <tr><td>2 — Esboçar</td><td>Desenhar ideias de solução, sem se preocupar ainda com viabilidade.</td></tr>
                <tr><td>3 — Decidir</td><td>Escolher uma ideia principal por votação e transformá-la em hipótese testável.</td></tr>
                <tr><td>4 — Prototipar</td><td>Criar protótipo rápido e realista (alta fidelidade) e roteiro de abordagem.</td></tr>
                <tr><td>5 — Testar</td><td>Entrevistas individuais com usuários para validar ou invalidar hipóteses.</td></tr>
              </tbody>
            </table>
            <p>Ferramentas: How Might We (HMW), sharing e affinity mapping, agile stories, future press release, Crazy 8s, dot voting, gráfico valor x dificuldade, protótipos de papel, funcionais e físicos. Resultados: protótipo, testes em contexto com usuários finais (aprendizado), alinhamento do time.</p>
            <dl class="campos">
              <dt>Design Sprint 2.0</dt><dd>Evolução que gera valor em 4 dias: as atividades de mapear a jornada, desenhar soluções e criar o storyboard foram condensadas. Menor participação de stakeholders: em geral só designers constroem e testam o protótipo (engenheiros ou marketing quando necessário). Há uma segunda rodada de testes no Sprint de Refinamento para evitar alterações de escopo na execução.</dd>
            </dl>
            <div class="caixa prova"><ul>
              <li>Cinco dias: mapear, esboçar, decidir, prototipar, testar. Versão 2.0: 4 dias.</li>
              <li>Design Sprint valida a ideia com usuários sem esperar um MVP.</li>
            </ul></div>`
        },
        {
          id: "u4-estudos-caso",
          titulo: "Estudos de caso do livro: ComponenteRastre, CosmeTech, PersonaDesign, ChocoRock e CoffeeX",
          fonte: "HAMI_PRO_SOFT_ U4 - Livro Didático.pdf (aulas 'Vamos Exercitar?' e Videoaula de Encerramento)",
          html: `
            <table>
              <thead><tr><th>Caso</th><th>Tema</th><th>Solução apresentada</th></tr></thead>
              <tbody>
                <tr><td>ComponenteRastre</td><td>Gestão de configuração (SCM)</td><td>Políticas e operações sobre itens de configuração (SCI): controle de alterações simultâneas ao mesmo componente (rastreadas, gerenciadas e executadas); solicitações oficiais de alteração controladas por mecanismos de comunicação e coordenação; mecanismos para resolver conflitos e mesclar alterações; mudanças aceitáveis para o Product Owner, com notificação recíproca de tarefas necessárias e concluídas; dados estatísticos e <strong>histórico (log)</strong> com os motivos e o que de fato mudou. A rastreabilidade e a política de controle tornam o desenvolvimento um ambiente seguro e gerenciado.</td></tr>
                <tr><td>CosmeTech (startup de cosméticos)</td><td>Mudanças rápidas de regras de negócio a cada temporada</td><td>Ambiente de <strong>integração contínua</strong> e configuração do ambiente operacional por <strong>implantação contínua</strong> (CI/CD); <strong>observabilidade</strong> indicando o comportamento do software e os defeitos por requisito; o gestor de TI decide mudar processo, técnicas ou ferramentas; histórico comparativo entre produtos para otimizar a linha ou interromper o produto abaixo do esperado.</td></tr>
                <tr><td>PersonaDesign (saúde e acompanhamento)</td><td>Projeto de interação e interface</td><td>Escolher perfis de usuário (personal trainer ou cliente); aplicativo móvel pela acessibilidade e conveniência; notificações push (lembrar sessões, dicas, engajamento, alarmes por indicadores); validar tudo em <strong>protótipos antes de codificar</strong>; deixar o usuário configurar as notificações (ex.: ligação durante atendimento). Referência: Modelo-Visão-Controlador, em que a visão concentra as funções de interface.</td></tr>
                <tr><td>ChocoRock (fábrica de chocolate)</td><td>Governança e ESG</td><td>Transparência na cadeia de suprimentos para atrair investimento: usar do PMBOK a gestão de riscos e de comunicação; praticar <strong>timeboxing</strong>, auto-organização e <strong>processo puxado</strong>; interagir com stakeholders; ferramentas que gerem informação essencial para decisões em governança ESG.</td></tr>
                <tr><td>CoffeeX (ciclo do café)</td><td>Visão integrada</td><td>Rastrear a cadeia do plantio (GPS, insumos, recursos) à xícara; atender impacto ambiental e <em>compliance</em> municipal, estadual, federal e mundial; levantar e catalogar a experiência do usuário e permitir adaptações de design; aplicar SCM de forma sistemática desde o início, com <strong>todos os itens configuráveis</strong> (projetos, modelos, documentos, protótipos, código, configuração); registros com métricas definidas para a observabilidade.</td></tr>
              </tbody>
            </table>
            <p>Perguntas de reflexão: é necessário configurar um ambiente SCM? (sim: rastreabilidade, controle e segurança das mudanças); a experiência do usuário é só design e aparência de tela? (não); como reunir evolução e mudanças com a governança de TI e as regras de negócio?</p>
            <div class="caixa prova"><ul>
              <li>Mudança frequente de regras: CI/CD + observabilidade + gestão de mudanças.</li>
              <li>Itens de configuração: não apenas código, mas projetos, modelos, documentos e protótipos.</li>
              <li>Protótipo e validação com o usuário vêm antes da codificação.</li>
            </ul></div>`
        }
      ]
    }
  ]
});
