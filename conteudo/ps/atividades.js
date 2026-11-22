registrarAtividades({
  disciplina: "ps",
  grupos: [
    {
      id: "u1-atividade-aprendizagem",
      titulo: "U1 — Atividade de Aprendizagem",
      fonte: "U1 - Atividade de Aprendizagem.txt",
      questoes: [
        {
          numero: 1,
          enunciado: `<p>Depois de aprovada a lista de requisitos do sistema para controle de Máquinas e Equipamentos de Estradas no estado do Goiás, pode acontecer o pior de tudo, é quando a diretoria resolve mudar uma determinada informação do negócio ou uma consultoria indica nova funcionalidade, por isso acaba acarretando várias alterações em cascata no desenvolvimento do software.</p>
      <p>Associe as ocorrências/procedimentos conforme as fases de processo do Ciclo de Vida.</p>
      <p>Coluna A:</p>
      <p>I. Fase de Iniciação.</p>
      <p>II. Fase de Execução.</p>
      <p>III. Fase de Controle.</p>
      <p>Coluna B:</p>
      <p>1. O Gerente de Projeto monitora o progresso da equipe de desenvolvimento, garantindo que a arquitetura de software seja desenvolvida de acordo com os padrões definidos.</p>
      <p>2. O Gerente de Projeto estabelece as diretrizes inaugural do projeto, incluindo a estrutura da equipe, os principais entregáveis e o prazo final.</p>
      <p>3. A equipe de desenvolvimento de software trabalha na arquitetura de software, projetando a estrutura geral do sistema com base nos requisitos definidos na Declaração do Escopo.</p>
      <p>Assinale a alternativa que corresponde a associação entre as colunas.</p>`,
          alternativas: ["I - 1; II - 3; III - 2.", "I - 2; II - 3; III - 1.", "I - 3; II - 2; III - 1.", "I - 1; II - 2; III - 3.", "I - 2; II - 1; III - 3."],
          resposta: "b",
          comentarios: {"a": "Incorreta: I não é 1 (o correto é 2); III não é 2 (o correto é 1).", "b": "Correta: I-2, II-3, III-1.", "c": "Incorreta: I não é 3 (o correto é 2); II não é 2 (o correto é 3).", "d": "Incorreta: I não é 1 (o correto é 2); II não é 2 (o correto é 3); III não é 3 (o correto é 1).", "e": "Incorreta: II não é 1 (o correto é 3); III não é 3 (o correto é 1)."},
          resolucao: `<p><strong>Resposta: b)</strong> I-2, II-3, III-1.</p>
          <p>Iniciação define diretrizes iniciais; execução desenvolve a arquitetura; controle monitora o progresso conforme padrões.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Grupos de processos do projeto: (1) iniciação e planejamento, com TAP, premissas, restrições e roteiro; (2) execução e controle, em que a equipe realiza as atividades previstas, acompanha o andamento e, diante de imprevistos, analisa a causa e retoma o curso planejado; (3) encerramento e avaliação, com verificação do escopo, aceite, lições aprendidas e registros. Mudança de requisito depois da aprovação é tratada no controle: avalia-se o impacto e ajusta-se o plano.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Processos de projeto de Software\", seções \"Processo de iniciação e planejamento\" e \"Processo de execução e controle\", p. 12-14"
        },
        {
          numero: 2,
          enunciado: `<p>Assim que você teve uma ideia para desenvolver um software, ou até mesmo quando algum patrocinador fez a encomenda de um aplicativo, é natural que consigamos uma aprovação do projeto de software, na fase de Iniciação.</p>
      <p>Para obter a aprovação de um projeto de software, analise as asserções:</p>
      <p>I. Escrever um documento com a justificativa, o principal benefício do software bem como prazo e valores de orçamento é fundamental,</p>
      <p>PORQUE</p>
      <p>II. O TAP (termo de abertura de projeto) funcionará como base de referência frente a outros projetos concorrentes e marco para comparação em outros momentos ao longo do desenvolvimento do projeto.</p>
      <p>Assinale a alternativa correta.</p>`,
          alternativas: ["As duas afirmações são falsas.", "A primeira afirmação é verdadeira, e a segunda é falsa.", "As duas afirmações são verdadeiras, e a segunda não justifica a primeira.", "As duas afirmações são verdadeiras, e a segunda justifica a primeira.", "A primeira afirmação é falsa, e a segunda é verdadeira."],
          resposta: "d",
          comentarios: {"a": "Incorreta: a I é verdadeira, não falsa; a II é verdadeira, não falsa.", "b": "Incorreta: a II é verdadeira, não falsa.", "c": "Incorreta: a II justifica a I.", "d": "Correta: I e II são verdadeiras e a II justifica a I.", "e": "Incorreta: a I é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: d)</strong> As duas afirmações são verdadeiras, e a segunda justifica a primeira.</p>
          <p>O TAP reúne justificativa, orçamento e prazo para autorização formal e serve de referência para priorizar frente a outros projetos.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>O TAP (termo de abertura do projeto) formaliza a iniciação: reúne justificativa, premissas, restrições, escopo, orçamento e prazo, indica o gestor e dá autorização formal. A justificativa funciona como termômetro para decidir quais projetos executar primeiro e quais aguardar. Por isso a obtenção da aprovação depende desses elementos, e eles também servem de referência de priorização.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Processos de projeto de Software\", seção \"Processo de iniciação e planejamento\", p. 12-13 (Tabela 1)",
          limitacao: "O trecho \"marco para comparação ao longo do desenvolvimento\" não consta literalmente no material; a leitura de que a II justifica a I é interpretação."
        },
        {
          numero: 3,
          enunciado: `<p>Todos os membros do time Prisma recebem capacitação contínua. Um dos temas abordados se relaciona à arquitetura de software.</p>
      <p>Analise as afirmativas correlacionadas a Decisões sobre a Arquitetura de Software.</p>
      <p>I. Economia: cuidado com recursos desnecessários, portanto depende da abstração para evitar a complexidade em demasia.</p>
      <p>II. Visibilidade: a motivação pela arquitetura escolhida deve estar tecnicamente clara e comunicada ao time eficazmente.</p>
      <p>III. Espaçamento: é o grau de separação por interesses, podendo ficar muito fragmentado, com perda de visibilidade.</p>
      <p>Escolha a alternativa Correta:</p>`,
          alternativas: ["I – Verdadeira; II – Falsa; III – Falsa.", "I – Verdadeira; II – Verdadeira; III – Falsa.", "I – Falsa; II – Falsa; III – Falsa.", "I – Falsa; II – Verdadeira; III – Falsa.", "I – Verdadeira; II – Verdadeira; III – Verdadeira."],
          resposta: "e",
          comentarios: {"a": "Incorreta: II é verdadeira, não falsa; III é verdadeira, não falsa.", "b": "Incorreta: III é verdadeira, não falsa.", "c": "Incorreta: I é verdadeira, não falsa; II é verdadeira, não falsa; III é verdadeira, não falsa.", "d": "Incorreta: I é verdadeira, não falsa; III é verdadeira, não falsa.", "e": "Correta: I verdadeira; II verdadeira; III verdadeira."},
          resolucao: `<p><strong>Resposta: e)</strong> I – Verdadeira; II – Verdadeira; III – Verdadeira.</p>
          <p>V-V-V; as três definições constam literalmente no material.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Decisões de arquitetura (Pressman): economia (evitar recursos desnecessários, apoiada em abstração), visibilidade (motivação da arquitetura clara e comunicada ao time), espaçamento (grau de separação por interesses, com risco de fragmentação), simetria (estrutural ou comportamental, facilita entender e comunicar) e emersão (comportamento e controle emergentes, característicos de sistemas flexíveis). Em questões V ou F, o erro costuma estar em trocar o nome do critério ou inverter o sentido.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Arquitetura de Software\", seção \"Decisões sobre a arquitetura de software\", p. 19"
        },
        {
          numero: 4,
          enunciado: `<p>O estudante de projeto de software sempre está atento em métodos que podem melhorar a sua atuação profissional. Hoje, se deparou, com o gerente de projetos da sua empresa Hokaido Co., para debater sobre os métodos mais apropriado para o novo sistema que demanda muito esforço antes de entregar uma versão de usuário, por ser altamente complexo.</p>
      <p>Escolha a alternativa correta para a crítica explanada no momento do processo criativo, buscando uma solução para um determinado problema a partir de uma ideia.</p>`,
          alternativas: ["Solução do problema.", "Alternativa da ideia.", "Investimento na ideia.", "Startup do negócio.", "Feedback."],
          resposta: "e",
          comentarios: {"a": "Incorreta: a solução do problema é o resultado do processo criativo, não a crítica sobre a ideia.", "b": "Incorreta: alternativa da ideia é outra proposta, não a crítica recebida.", "c": "Incorreta: investimento é a aplicação de recursos, não a crítica à ideia.", "d": "Incorreta: startup é o tipo de negócio, não a crítica no processo criativo.", "e": "Correta: o retorno crítico sobre a ideia é o feedback, que orienta a evolução da solução (prototipação e feedback, Saiba mais da aula de ciclo de vida)."},
          resolucao: `<p><strong>Resposta: e)</strong> Feedback.</p>
          <p>A crítica recebida sobre a ideia no processo criativo é o feedback que orienta a solução.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Feedback é o retorno crítico sobre a ideia ou sobre o que foi entregue; em abordagens iterativas e adaptativas ele alimenta a próxima entrega. Compare com solução do problema (resultado), alternativa (opção) e investimento (aporte), que descrevem outras coisas.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Ciclo de Vida do Projeto de Software\", Saiba mais, item 1 \"Importância do feedback em projeto de software\", p. 10-11",
          limitacao: "A definição exata não consta no material; julgamento por conhecimento geral."
        },
        {
          numero: 5,
          enunciado: `<p>As regras no mundo de negócio mudam a toda hora, manutenções são feitas em funcionalidades já entregues, novos sistemas surgem e se comunicam com o desenvolvido por nós através de vários protocolos e tecnologias diferentes. É diante desse cenário que o gerente de projeto necessita ser certeiro em suas atividades de gestão.</p>
      <p>Analise as afirmativas:</p>
      <p>I. "Durante a fase de ____, a equipe desenvolve os componentes de software conforme a arquitetura estabelecida."</p>
      <p>II. "O Gerente de Projeto realiza reuniões regulares com a equipe para garantir que o projeto esteja no caminho certo e que os recursos estejam sendo alocados de maneira eficaz; trata-se da fase de ____."</p>
      <p>III. "Durante a fase de ____, o Gerente de Projeto avalia o projeto em relação aos objetivos iniciais e às métricas de sucesso. Qualquer lição aprendida é documentada para projetos futuros".</p>
      <p>Assinale a alternativa que preenche corretamente as lacunas.</p>`,
          alternativas: ["I - Feedback; II - Controle; III – Iniciação.", "I - Encerramento; II - Controle; III – Monitoramento.", "I - Iniciação; II - Execução; III – Encerramento.", "I - Feedback; II - Controle; III – Planejamento.", "I - Execução; II - Controle; III – Encerramento."],
          resposta: "e",
          comentarios: {"a": "Incorreta: feedback não é fase do ciclo de vida, e iniciação não é a fase de avaliar objetivos e lições aprendidas.", "b": "Incorreta: encerramento não é a fase em que a equipe desenvolve os componentes (é execução), e monitoramento não é a fase que avalia objetivos e registra lições.", "c": "Incorreta: iniciação não desenvolve componentes e a execução não é a fase de reuniões regulares de acompanhamento (controle).", "d": "Incorreta: feedback não é fase do ciclo; planejamento não avalia objetivos nem documenta lições aprendidas.", "e": "Correta: execução desenvolve os componentes, controle acompanha com reuniões e encerramento avalia e documenta as lições."},
          resolucao: `<p><strong>Resposta: e)</strong> I - Execução; II - Controle; III - Encerramento.</p>
          <p>Desenvolver componentes = execução; acompanhar com reuniões = controle; avaliar objetivos e lições aprendidas = encerramento.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Execução: desenvolver os componentes (design, implementação, integração, configuração, refatoração, testes). Controle: acompanhar o progresso (reuniões, medições) e corrigir desvios. Encerramento: avaliar se os objetivos foram atingidos, registrar lições aprendidas e formalizar o aceite. Atenção: monitoramento e controle formam um mesmo grupo de processos.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Processos de projeto de Software\", seções \"Processo de execução e controle\" e \"Processo de encerramento e avaliação\", p. 13-14"
        },
        {
          numero: 6,
          enunciado: `<p>O entendimento dos Processos em desenvolvimento de software é fundamental aos profissionais de TI e, também, aos demais profissionais envolvidos no Projeto de Software, afinal o conhecimento de métodos conceituados permitirá a execução adequada das tarefas com resultados satisfatórios.</p>
      <p>Analise a afirmativa "Na ____ é que acontece o design de projeto e implementação de código-fonte com as devidas tarefas de integração, gerenciamento de configuração, Refatoração, entre outras." Escolha a alternativa que preenche corretamente a lacuna.</p>`,
          alternativas: ["Encerramento", "Controle", "Execução", "Planejamento", "Iniciação"],
          resposta: "c",
          comentarios: {"a": "Incorreta: encerramento verifica resultados, aceite e lições aprendidas.", "b": "Incorreta: controle monitora e corrige desvios; não é onde se faz o design e a implementação.", "c": "Correta: o livro atribui à execução o design de projeto, a implementação de código, a integração, o gerenciamento de configuração e a refatoração.", "d": "Incorreta: planejamento define como o projeto será conduzido, sem implementar código.", "e": "Incorreta: iniciação define escopo e obtém permissão para iniciar."},
          resolucao: `<p><strong>Resposta: c)</strong> Execução.</p>
          <p>O material atribui à execução o design, a implementação, a integração, o gerenciamento de configuração e a refatoração.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>A fase de execução concentra o trabalho técnico: design, implementação de código, integração, gerenciamento de configuração, refatoração, banco de dados, documentação e testes. É a maior fase do projeto. O controle acompanha e corrige, o planejamento define o que fazer e a iniciação autoriza.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Processos de projeto de Software\", seção \"Processo de execução e controle\", p. 14"
        },
        {
          numero: 7,
          enunciado: `<p>A equipe de Software KOSOKA capaz armazenar e fornecer dados que trarão uma melhor qualidade no gerenciamento da empresa, além de uma economia de tempo, gerada pela precisão e velocidade do fornecimento das informações por parte do sistema está montando o time de TI.</p>
      <p>Diante de um cenário típico de uma equipe que desenvolve software, analise a asserção-razão.</p>
      <p>I. A equipe de profissionais de TI responsável pelo projeto de software deve ser composto por gestores da organização de negócios,</p>
      <p>PORQUE</p>
      <p>II. quanto maior o escalão de profissionais na equipe de TI, maior é o poder de decisão para facilitar e agilizar as decisões.</p>
      <p>Assinale a alternativa correta.</p>`,
          alternativas: ["A primeira afirmação é verdadeira, e a segunda é falsa.", "A primeira afirmação é falsa, e a segunda é verdadeira.", "As duas afirmações são verdadeiras, e a segunda não justifica a primeira.", "As duas afirmações são falsas.", "As duas afirmações são verdadeiras, e a segunda justifica a primeira."],
          resposta: "d",
          comentarios: {"a": "Incorreta: a I é falsa, não verdadeira.", "b": "Incorreta: a II é falsa, não verdadeira.", "c": "Incorreta: a I é falsa, não verdadeira; a II é falsa, não verdadeira.", "d": "Correta: I é falsa e II é falsa.", "e": "Incorreta: a I é falsa, não verdadeira; a II é falsa, não verdadeira."},
          resolucao: `<p><strong>Resposta: d)</strong> As duas afirmações são falsas.</p>
          <p>A equipe é formada por profissionais de diversas áreas escolhidos por habilidades técnicas e interpessoais, não por gestores ou escalão.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>A equipe do projeto é formada por profissionais de várias áreas, escolhidos por habilidades técnicas e interpessoais, e organizada em matriz de responsabilidades; não é definida por escalão hierárquico nem composta só por gestores. Para uma asserção justificar a outra, a razão precisa explicar a causa da primeira, e não só ser verdadeira.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Introdução a Projeto de Software\", seção \"Equipe do projeto e matriz de responsabilidades\", p. 3-4",
          limitacao: "A falsidade da II não consta literalmente no material; é interpretação."
        },
        {
          numero: 8,
          enunciado: `<p>As decisões sobre a arquitetura de software têm implicações de longo prazo e afetam a capacidade do sistema de atender às necessidades dos usuários e da organização. Portanto, é importante realizar análises cuidadosas e avaliar as opções disponíveis antes de definir a arquitetura do seu software.</p>
      <p>Para PRESSMAN (2021), ao projetar uma Arquitetura de um Software deve ser percebido benefícios. Analise as afirmativas.</p>
      <p>I. Analisar a efetividade do projeto no atendimento dos requisitos não funcionais.</p>
      <p>II. Considerar alternativas de arquitetura em um estágio em que fazer mudanças de projeto ainda é relativamente fácil.</p>
      <p>III. Reduzir os riscos associados à construção do software.</p>
      <p>Escolha a alternativa correta.</p>`,
          alternativas: ["II e III são verdadeiras; I é falsa.", "II é verdadeira; I e III são falsas.", "I e III são verdadeiras; II é falsa.", "I e II são verdadeiras; III é falsa.", "I é verdadeira; II e III são falsas."],
          resposta: "a",
          comentarios: {"a": "Correta: I falsa; II verdadeira; III verdadeira.", "b": "Incorreta: III é verdadeira, não falsa.", "c": "Incorreta: I é falsa, não verdadeira; II é verdadeira, não falsa.", "d": "Incorreta: I é falsa, não verdadeira; III é verdadeira, não falsa.", "e": "Incorreta: I é falsa, não verdadeira; II é verdadeira, não falsa; III é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: a)</strong> II e III são verdadeiras; I é falsa.</p>
          <p>O texto de Pressman citado fala em "requisitos declarados", não "requisitos não funcionais".</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Benefícios de modelar a arquitetura (Pressman): analisar a efetividade do projeto no atendimento aos 'requisitos declarados', considerar alternativas enquanto mudanças são relativamente fáceis e reduzir riscos da construção. Trocar 'requisitos declarados' por 'requisitos não funcionais' torna a afirmação falsa.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Arquitetura de Software\", seção \"O que é arquitetura de software\", p. 17-18 (citação de Pressman, 2021, p. 182)"
        },
        {
          numero: 9,
          enunciado: `<p>O sistema em desenvolvimento na equipe TROPICAL deve ser entregue no prazo máximo de 24 meses, sendo que 30% (trinta porcento) deve ser implantado nos primeiros 4 meses para serem fornecidos os primeiros benefícios para o departamento de operações.</p>
      <p>O engenheiro optou como estilo em Camadas para a Arquitetura de Software, analise a asserção-razão.</p>
      <p>I. Entende-se por Camada de Processamento e Análise de Dados uma característica que facilitará a manutenção,</p>
      <p>Porque</p>
      <p>II. é na qual os dados processados são armazenados em um banco de dados que pode ser relacional, NoSQL ou uma combinação de ambos.</p>
      <p>Assinale a alternativa correta:</p>`,
          alternativas: ["A primeira afirmação é verdadeira, e a segunda é falsa.", "As duas afirmações são verdadeiras, e a segunda justifica a primeira.", "A primeira afirmação é falsa, e a segunda é verdadeira.", "As duas afirmações são falsas.", "As duas afirmações são verdadeiras, e a segunda não justifica a primeira."],
          resposta: "a",
          comentarios: {"a": "Correta: I é verdadeira e II é falsa.", "b": "Incorreta: a II é falsa, não verdadeira.", "c": "Incorreta: a I é verdadeira, não falsa; a II é falsa, não verdadeira.", "d": "Incorreta: a I é verdadeira, não falsa.", "e": "Incorreta: a II é falsa, não verdadeira."},
          resolucao: `<p><strong>Resposta: a)</strong> A primeira afirmação é verdadeira, e a segunda é falsa.</p>
          <p>A II descreve a Camada de Armazenamento de Dados, não a de Processamento e Análise.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Arquitetura em camadas, exemplo SMPA: dispositivos IoT (coleta por sensores), processamento e análise (limpeza, análise, aprendizado de máquina), aplicação web (acesso e alertas em tempo real) e armazenamento de dados (relacional, NoSQL ou ambos). Descrever uma camada com a função de outra é a troca típica que torna a afirmação falsa. Manter a estrutura em camadas favorece a manutenção e a evolução.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Arquitetura de Software\", Vamos Exercitar?, p. 19-20",
          limitacao: "A veracidade da I é interpretação (o texto afirma que manter a estrutura em camadas favorece manutenção e evolução)."
        },
        {
          numero: 10,
          enunciado: `<p>A arquitetura de software é aplicada no processo de desenvolvimento de sistemas de software sempre que o engenheiro de software resolve escolhe uma metodologia e um ciclo de vida adequado para o produto a ser entregue.</p>
      <p>Dentre as características da Arquitetura de Software, o engenheiro de software poderá decidir em função de critérios que facilitará o desenvolvimento, a evolução e a comunicação entre os stakeholders do projeto. Escolha a alternativa correta.</p>`,
          alternativas: ["Visibilidade: é o grau de separação por interesses, podendo ficar muito fragmentado, com perda de visibilidade.", "Emersão: comportamento e controle emergentes são inflexíveis, impossibilitando a prática de software expansíveis, eficientes e econômicas.", "Espaçamento: a motivação pela arquitetura escolhida deve estar tecnicamente clara e comunicada ao time eficazmente.", "Economia: quanto maior a complexidade do componente, maior será a economia no tempo do desenvolvimento.", "Simetria: os projetos simétricos são mais fáceis de entender, compreender e comunicar; podendo ser simetria estrutural ou comportamental."],
          resposta: "e",
          comentarios: {"a": "Incorreta: essa é a definição de espaçamento, não de visibilidade.", "b": "Incorreta: o comportamento emergente é o que pode viabilizar arquiteturas expansíveis e econômicas, não o impede.", "c": "Incorreta: essa é a definição de visibilidade, não de espaçamento.", "d": "Incorreta: economia pede cuidado com recursos desnecessários e abstração para evitar complexidade excessiva.", "e": "Correta: definição literal de simetria (estrutural ou comportamental)."},
          resolucao: `<p><strong>Resposta: e)</strong> Simetria: os projetos simétricos são mais fáceis de entender, compreender e comunicar; podendo ser simetria estrutural ou comportamental.</p>
          <p>Definição literal do material; as demais trocam ou invertem os conceitos.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Simetria: projetos simétricos são mais fáceis de entender, compreender e comunicar, em simetria estrutural ou comportamental. As demais alternativas trocam definições: visibilidade não é separação por interesses (isso é espaçamento), emersão não impede arquiteturas expansíveis, e economia não cresce com a complexidade do componente.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Arquitetura de Software\", seção \"Decisões sobre a arquitetura de software\", p. 19-20"
        }
      ]
    },
    {
      id: "u1-avaliacao-unidade",
      titulo: "U1 — Avaliação da Unidade",
      fonte: "U1 - Avaliação da Unidade.txt",
      questoes: [
        {
          numero: 1,
          enunciado: `<p>Os processos e fases em Projeto de Software são fundamentais para o desenvolvimento adequado da gestão do projeto. É através deles que se aplica a metodologia da construção do software e estabelece a comunicação adequado com os stakeholders do projeto. O novo projeto para o desenvolvimento do aplicativo de medição do batimento cardíaco de pacientes da clínica HeartExame está na fase de Planejamento.</p>
      <p>Ao receber informações sobre o software, o gestor está escolhendo os termos adequadamente para elaborar o plano do projeto. Qual informação do novo projeto é considerado Escopo do Produto?</p>`,
          alternativas: ["A medição do batimento cardíaco deve ser em BPM (batimento por minuto).", "E escopo do produto deve ser demonstrado numa EAP.", "A equipe de profissionais de TI será alocada na empresa HeartExame.", "O teste do aplicativo será realizado pelos pacientes da clínica HeartExame.", "Criar os critérios de IHC para elaborar as telas do software."],
          resposta: "a",
          comentarios: {"a": "Incorreta: 'a medição em BPM' é característica do produto; esta é a única que descreve o escopo do produto.", "b": "Incorreta: demonstrar o escopo numa EAP é uma ferramenta do trabalho do projeto, não característica do produto.", "c": "Incorreta: alocação da equipe é recurso do projeto (escopo do projeto).", "d": "Incorreta: definir quem testa é planejamento do projeto, não característica do produto.", "e": "Incorreta: criar critérios de IHC é uma atividade do projeto; escopo do produto descreve o que o produto deve ter."},
          resolucao: `<p><strong>Resposta: a)</strong> A medição do batimento cardíaco deve ser em BPM (batimento por minuto).</p>
          <p>Escopo do produto define as características que o produto precisa ter; as demais tratam do trabalho do projeto.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Escopo do produto: características e requisitos do que será entregue (por exemplo, medir em BPM). Escopo do projeto: todo o trabalho para entregar o produto (EAP, alocar equipe, testes pelos pacientes, critérios de IHC). A alternativa correta é a que descreve uma característica do produto.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Processos de projeto de Software\", seção \"Processo de iniciação e planejamento\", p. 13-14"
        },
        {
          numero: 2,
          enunciado: `<p>Ao utilizar a gestão de Projeto de Software, no processo de desenvolvimento de software, vários elementos merecem destaques. Estes elementos fazem parte da base fundamental para a criação de uma equipe de TI apropriada e segundo as necessidades de cada projeto de software.</p>
      <p>Analise as afirmativas, indagando "como entender e decidir pelas pessoas certas em cada atividade do projeto, se todos os talentos podem ser úteis dependendo da fase do projeto?"</p>
      <p>I. ____: é definida pela posição que a pessoa ocupa na organização e, principalmente, pelo poder que lhe é conferido e como ele é exercido na condução das atividades e na delegação.</p>
      <p>II. ____: refere-se aos recursos e mecanismos disponibilizados para que as informações possam fluir e as decisões possam ser tomadas na organização.</p>
      <p>Escolha a alternativa que preenche corretamente as lacunas.</p>`,
          alternativas: ["Autoridade / Comunicação.", "Auditor / Monitoramento.", "Comunicador / Criação.", "Articulador / Liderança.", "Autoridade / Psico-socialização."],
          resposta: "a",
          comentarios: {"a": "Correta: autoridade (posição e poder) e comunicação (recursos para o fluxo de informação) são fatores de Menezes (2018).", "b": "Incorreta: auditor e monitoramento não são os fatores citados.", "c": "Incorreta: comunicador e criação não são os fatores citados.", "d": "Incorreta: articulador e liderança não são os fatores citados.", "e": "Incorreta: psicossocialização não é um dos fatores; o segundo é comunicação."},
          resolucao: `<p><strong>Resposta: a)</strong> Autoridade / Comunicação.</p>
          <p>Definições literais dos fatores de Menezes, 2018.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Fatores de Menezes (2018) citados no livro: autoridade (quem decide e responde) e comunicação (fluxo de informação na equipe), entre os elementos que formam uma equipe apropriada. Alternativas como auditor, criação ou psico-socialização não constam como fatores.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Introdução a Projeto de Software\", seção \"Equipe do projeto e matriz de responsabilidades\", p. 4"
        },
        {
          numero: 3,
          enunciado: `<p>O gestor de projetos do agronegócio TSUKATA, responsável pela implantação do projeto software adaptável 2065 em sua organização, está focado em defender uma lista de todos os requisitos, mas sabe que ao longo do tempo alterações e modernizações vão ocorrer.</p>
      <p>Conforme o triângulo de talentos do PMI, analise as afirmativas.</p>
      <p>I. Habilidades em ____ é a reunião de boas experiências em projetos anteriores.</p>
      <p>II. Habilidades em ____ é o Comportamental que proporciona a boa relação entre pessoas e eficiências na execução das tarefas.</p>
      <p>Escolha a alternativa que preenche as lacunas corretamente.</p>`,
          alternativas: ["Técnicas em Gestão de Processos / Liderança.", "Liderança em projetos / Liderança em mudanças.", "Técnicas em Gestão de Projetos / Gerenciamento de mudanças.", "Liderança / Técnicas em Gestão de Projetos.", "Técnicas em Gestão de Projetos / Liderança."],
          resposta: "e",
          comentarios: {"a": "Incorreta: não há talento 'técnicas em gestão de processos' no triângulo.", "b": "Incorreta: liderança em mudanças não é um dos talentos.", "c": "Incorreta: gerenciamento de mudanças não é um dos talentos; o comportamental é liderança.", "d": "Incorreta: inverte as definições: boas experiências de projetos anteriores são técnicas em gestão de projetos.", "e": "Correta: técnicas em gestão de projetos reúne boas experiências anteriores; liderança é o aspecto comportamental."},
          resolucao: `<p><strong>Resposta: e)</strong> Técnicas em Gestão de Projetos / Liderança.</p>
          <p>Definições literais do Triângulo de Talentos do PMI.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Triângulo de Talentos do PMI: técnicas em gestão de projetos (conhecimento técnico), liderança (guiar, motivar e dirigir a equipe) e visão estratégica e de negócios. A defesa de uma lista de requisitos remete a técnicas; preparar para mudanças ao longo do tempo remete a liderança.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Introdução a Projeto de Software\", seção \"Importância da gestão de projetos\", p. 2-3 (Figura 1)"
        },
        {
          numero: 4,
          enunciado: `<p>Quanto maior é o orçamento de um projeto, o gestor YAGURA compreende que as partes interessadas ficam maiores tempo monitorando o desenvolvimento do software. É por isso que além das técnicas e das competências em projetos, o time utiliza-se de resultados obtidos em gerenciamento de projetos que consolidam bons resultados em subprojetos envolvidos, ampliando as chances de sucesso.</p>
      <p>Encontre meios que orientem essa equipe a aumentar o nível de engajamento em projetos analisando as afirmativas sobre o gerenciamento de projetos.</p>
      <p>I. Quando os gerentes de projetos acompanham cada resultado de processos do projeto, entende-se que está praticando o planejamento do projeto.</p>
      <p>II. Ao alcançar o monitoramento do projeto é porque a equipe fez medição pela qualidade do produto e do projeto, pela pontualidade, pelo cumprimento do orçamento e pelo grau de satisfação do cliente.</p>
      <p>III. Entende-se que o planejamento acontece quando os gerentes de projetos elaboram o roteiro do projeto a partir de informações de alto nível.</p>
      <p>Assinale a alternativa correta.</p>`,
          alternativas: ["As afirmativas I, II e III são falsas.", "As afirmativas I, II e III são verdadeiras.", "A afirmativa III é verdadeira, sendo que I e II são falsas.", "As afirmativas II e III são falsas, sendo que a I é verdadeira.", "As afirmativas I e III são falsas, sendo que a II é verdadeira."],
          resposta: "c",
          comentarios: {"a": "Incorreta: III é verdadeira, não falsa.", "b": "Incorreta: I é falsa, não verdadeira; II é falsa, não verdadeira.", "c": "Correta: I falsa; II falsa; III verdadeira.", "d": "Incorreta: I é falsa, não verdadeira; III é verdadeira, não falsa.", "e": "Incorreta: II é falsa, não verdadeira; III é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: c)</strong> A afirmativa III é verdadeira, sendo que I e II são falsas.</p>
          <p>Acompanhar resultados é monitoramento; a medição de qualidade, prazo, orçamento e satisfação é avaliação de sucesso; roteiro a partir de informações de alto nível é planejamento.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Monitoramento: acompanhar resultados durante a execução. Planejamento: construir roteiro a partir de informações de alto nível. Avaliação de sucesso: medir qualidade, prazo, orçamento e satisfação ao final. Em questão V ou F, confirme em qual fase cada atividade se encaixa antes de julgar a afirmativa.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Ciclo de Vida do Projeto de Software\", seção \"Ciclo de vida clássico\", p. 7-8",
          limitacao: "A redação exata não consta no material; julgamento por conhecimento geral."
        },
        {
          numero: 5,
          enunciado: `<p>O Sr. Papazzi, novo proprietário da cantina italiana onde se planeja manter a tradição do serviço e, ao mesmo tempo, quer modernizar as instalações, reconhece que melhor um novo projeto de software para esse empreendimento. Bem, reconhece-se a importância do projeto, o ciclo de vida e os processos que o nortearão a cantina, então; vamos auxiliar o herdeiro dessa tradicional família.</p>
      <p>Analise as afirmativas e faça classificação correta (verdadeira ou falsa) sobre fases do ciclo de vida.</p>
      <p>I. Processo de Planejamento: delimitar os procedimentos operacionais que serão implementados e ter uma visão de como o sistema funcionará; ou seja, deixar claro, concisamente, todas as etapas do termo de abertura do projeto (TAP).</p>
      <p>II. Processo de Execução: as novas rotinas operacionais serão desenvolvidas; portanto, é um processo que demanda mais tempo, por esse motivo, deve-se ficar atento ao cronograma estipulado; inclusive é a fase em que se deve cuidar com os custos.</p>
      <p>III. Processo de Controle: os serviços e artefatos recebidos do fornecedor devem ser avaliados; ou seja, é a fase que deve perceber se teve algum erro e se há a necessidade providenciar e alteração/correção.</p>
      <p>Assinale a alternativa com a classificação correta das afirmativas</p>`,
          alternativas: ["I – falsa; II – falsa; III – verdadeira.", "I – verdadeira; II – falsa; III – falsa.", "I – verdadeira; II – verdadeira; III – falsa.", "I – falsa; II – verdadeira; III – verdadeira.", "I – falsa; II – verdadeira; III – falsa."],
          resposta: "d",
          comentarios: {"a": "Incorreta: II é verdadeira, não falsa.", "b": "Incorreta: I é falsa, não verdadeira; II é verdadeira, não falsa; III é verdadeira, não falsa.", "c": "Incorreta: I é falsa, não verdadeira; III é verdadeira, não falsa.", "d": "Correta: I falsa; II verdadeira; III verdadeira.", "e": "Incorreta: III é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: d)</strong> I – falsa; II – verdadeira; III – verdadeira.</p>
          <p>F-V-V; o TAP pertence à iniciação; a execução é a fase mais longa, com atenção a cronograma e custos; o controle monitora e corrige desvios.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>O TAP pertence à iniciação, não à execução. A execução é a fase mais longa e exige atenção a cronograma e custos. O controle monitora o andamento e corrige desvios. Afirmativas que atribuem a uma fase a atividade de outra são falsas.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Processos de projeto de Software\", seções \"Processo de iniciação e planejamento\" e \"Processo de execução e controle\", p. 12-14",
          limitacao: "O cenário não consta no material; a classificação da III como verdadeira é interpretação."
        }
      ]
    },
    {
      id: "u2-atividade-aprendizagem",
      titulo: "U2 — Atividade de Aprendizagem",
      fonte: "U2 - Atividade de Aprendizagem.txt",
      questoes: [
        {
          numero: 1,
          enunciado: `<p>O time TOPc@fe vai iniciar o levantamento de dados, reconhecer as regras do novo cliente, então está focado em praticar a metodologia ágil desde o começo. O time de TI sabe que a disciplina é um dos fatores de sucesso em ágil.</p>
      <p>Para garantir que um dos valores do manifesto ágil, analise a asserção-razão para auxiliar o TOPc@fe nesse projeto de software.</p>
      <p>I. Prioriza-se o uso de processos bem definidos no manifesto ágil para garantir a qualidade do produto de software,</p>
      <p>PORQUE</p>
      <p>II. compreender as pessoas e suas necessidades vai depender muito das interações entre todos os envolvidos, frequentemente.</p>
      <p>Escolha a alternativa correta.</p>`,
          alternativas: ["A primeira afirmação é verdadeira, e a segunda é falsa.", "A primeira afirmação é falsa, e a segunda é verdadeira.", "As duas afirmações são falsas.", "As duas afirmações são verdadeiras, e a segunda justifica a primeira.", "As duas afirmações são verdadeiras, e a segunda não justifica a primeira."],
          resposta: "b",
          comentarios: {"a": "Incorreta: a I é falsa, não verdadeira; a II é verdadeira, não falsa.", "b": "Correta: I é falsa e II é verdadeira.", "c": "Incorreta: a II é verdadeira, não falsa.", "d": "Incorreta: a I é falsa, não verdadeira.", "e": "Incorreta: a I é falsa, não verdadeira."},
          resolucao: `<p><strong>Resposta: b)</strong> A primeira afirmação é falsa, e a segunda é verdadeira.</p>
          <p>O Manifesto Ágil valoriza indivíduos e interações mais que processos e ferramentas.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Os quatro valores do Manifesto Ágil: indivíduos e interações mais que processos e ferramentas; software em funcionamento mais que documentação abrangente; colaboração com o cliente mais que negociação de contratos; responder a mudanças mais que seguir um plano. Disciplina em ágil não significa seguir processo rígido.</p></div>`,
          fonte: "Unidade 2a.pdf, U2 S1, seção \"Agilidade\", princípios 4 e 6 do Manifesto Ágil (trabalho conjunto diário e conversa face a face)",
          limitacao: "O valor \"indivíduos e interações sobre processos\" não consta literalmente no material; julgamento por conhecimento geral."
        },
        {
          numero: 2,
          enunciado: `<p>O gerente de projeto é responsável por planejar, coordenar e supervisionar todo o processo de desenvolvimento de software. Eles garantem que o projeto seja concluído dentro do prazo e do orçamento.</p>
      <p>Para que as metas de prazo e de orçamento sejam alcançadas, o gerente de projeto necessita conduzir cada atividade de maneira profissional, sendo que compreende em habilidades específicas. Analise as afirmativas.</p>
      <p>I. O líder mantém a motivação do time estreitando objetivos profissionais e pessoais.</p>
      <p>II. Os processos definidos em manuais da organização devem ser seguidos, independente da equipe executora ou do projeto em atividade.</p>
      <p>III. Crie confiança e facilite relacionamentos para promover as habilidades de colaboração da equipe.</p>
      <p>Escolha a alternativa correta.</p>`,
          alternativas: ["I e II são verdadeiras; III é falsa.", "I é verdadeira; II e III são falsas.", "I e III são verdadeiras; II é falsa.", "II e III são verdadeiras; I é falsa.", "II é verdadeira; I e III são falsas."],
          resposta: "c",
          comentarios: {"a": "Incorreta: II é falsa, não verdadeira; III é verdadeira, não falsa.", "b": "Incorreta: III é verdadeira, não falsa.", "c": "Correta: I verdadeira; II falsa; III verdadeira.", "d": "Incorreta: I é verdadeira, não falsa; II é falsa, não verdadeira.", "e": "Incorreta: I é verdadeira, não falsa; II é falsa, não verdadeira; III é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: c)</strong> I e III são verdadeiras; II é falsa.</p>
          <p>Liderança envolve motivar e criar confiança e colaboração; seguir manuais independentemente de equipe e projeto contraria a adaptação ágil.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>No ágil, a liderança motiva, cria confiança e colaboração e adapta o processo à equipe e ao projeto; não aplica manuais de forma uniforme. O gerente (ou o Scrum Master, que facilita) atua para que prazo e orçamento sejam alcançados sem microgerenciar.</p></div>`,
          fonte: "Unidade 2a.pdf, U2 S1, seção \"Agilidade\", princípio 5 (indivíduos motivados, ambiente e confiança); HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Introdução a Projeto de Software\", p. 2-3 (liderança como talento do gerente)",
          limitacao: "A falsidade da II é interpretação."
        },
        {
          numero: 3,
          enunciado: `<p>A reinvenção inclui inovação no cardápio da Okayama Sabores, estratégias de marketing aprimoradas e um foco renovado na qualidade e autenticidade. O restaurante reconheceu a importância de manter seus clientes fiéis e atrair novos, demonstrando sua capacidade de se adaptar e prosperar em um mercado competitivo.</p>
      <p>Num time Scrum, adaptar-se às mudanças constantes do restaurante é possível porque o ____ é dinâmico; constantes mudanças para identificar o que o produto precisa para ser apropriado, competitivo e útil, conforme as necessidades do sistema. O ___ ficará completo somente na última ____, ao concluir o projeto</p>
      <p>Assinale a alternativa que preenche corretamente as lacunas.</p>`,
          alternativas: ["Sistema / Product Backlog / Retrospectiva da Sprint", "Product Backlog / Product Backlog / Sprint", "Product Backlog / Product Backlog / Revisão da Sprint", "Sprint Backlog / Product Backlog / Sprint", "Product Backlog / Sprint Backlog / Reunião Diária"],
          resposta: "b",
          comentarios: {"a": "Incorreta: o dinâmico é o Product Backlog, não 'o sistema'; e a retrospectiva não é o marco de conclusão.", "b": "Correta: o Product Backlog é dinâmico e só fica completo ao final da última Sprint, ao concluir o projeto (interpretação do material).", "c": "Incorreta: a revisão da Sprint não é o marco de conclusão do backlog do produto.", "d": "Incorreta: o Sprint Backlog contém apenas itens da Sprint atual; o dinâmico é o Product Backlog.", "e": "Incorreta: o Sprint Backlog não é o que fica completo, e reunião diária não é um período de conclusão do projeto."},
          resolucao: `<p><strong>Resposta: b)</strong> Product Backlog / Product Backlog / Sprint.</p>
          <p>O Product Backlog é um documento vivo, ajustado conforme mudam necessidades e prioridades, e só fica completo ao fim da última Sprint.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>O Product Backlog é lista ordenada, dinâmica e nunca concluída enquanto o produto existir: itens entram, saem e são repriorizados conforme mudam necessidades. A Sprint é o ciclo em que itens do topo são desenvolvidos. Sprint Backlog é o recorte da Sprint; Revisão e Retrospectiva são eventos, não artefatos.</p></div>`,
          fonte: "Unidade 2c.pdf, U2 S3, seção \"Como Criar o seu Product Backlog\" (manter o backlog atualizado, documento vivo); Unidade 2b.pdf, U2 S2, slide \"Product Backlog\"",
          limitacao: "A leitura de que ele fica completo na última Sprint é interpretação."
        },
        {
          numero: 4,
          enunciado: `<p>Iniciar um projeto para desenvolver um novo produto inovador em um mercado altamente incerto e volátil é o desafio da Taruma Soft. O projeto tem o objetivo de criar um dispositivo de assistência pessoal baseado em inteligência artificial, que deve oferecer uma variedade de funcionalidades, desde assistência na organização diária até controle de dispositivos domésticos.</p>
      <p>O engenheiro ágil entende sobre a Sprint, analise a asserção-razão.</p>
      <p>I. Todas as Sprints de um projeto tem um período fixo (timeboxing) para o time conseguir medir a sua velocidade de desenvolvimento, ou seja, descobrir e aperfeiçoar a quantidade de entrega numa iteração do projeto,</p>
      <p>Porque</p>
      <p>II. As informações sobre a entrega, do que havia sido planejado, claras, objetivas e sucintas, facilitará a comunicação.</p>
      <p>Escolha a alternativa correta.</p>`,
          alternativas: ["As duas afirmações são falsas.", "As duas afirmações são verdadeiras, e a segunda justifica a primeira.", "As duas afirmações são verdadeiras, e a segunda não justifica a primeira.", "A primeira afirmação é falsa, e a segunda é verdadeira.", "A primeira afirmação é verdadeira, e a segunda é falsa."],
          resposta: "b",
          comentarios: {"a": "Incorreta: a I é verdadeira, não falsa; a II é verdadeira, não falsa.", "b": "Correta: I e II são verdadeiras e a II justifica a I.", "c": "Incorreta: a II justifica a I.", "d": "Incorreta: a I é verdadeira, não falsa.", "e": "Incorreta: a II é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: b)</strong> As duas afirmações são verdadeiras, e a segunda justifica a primeira.</p>
          <div class="caixa nota" data-titulo="Correção"><p>Corrigida após o sistema marcar como incorreta, em tentativa anterior, a opção "as duas afirmações são verdadeiras, e a segunda não justifica a primeira"; resposta ainda não confirmada pelo sistema.</p></div>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Produto inovador em mercado incerto e volátil pede abordagem empírica e adaptativa: ciclos curtos, entrega incremental, feedback e ajuste, que é a lógica do Scrum para contextos complexos. Verifique se a segunda afirmação explica a primeira (a razão) e não apenas coexiste com ela.</p></div>`,
          fonte: "Unidade 2b.pdf, U2 S2, seção \"Scrum – O Retorno dos Artefatos e Cerimônias\", slides sobre Sprint (duração de um mês ou menos, timebox)",
          limitacao: "A relação com medir velocidade e a leitura de que a II justifica a I são interpretação."
        },
        {
          numero: 5,
          enunciado: `<p>Podemos considerar que o time Scrum tem a responsabilidade de escrever o código do aplicativo, garantindo que ele funcione corretamente e atenda aos requisitos técnicos e funcionais. E que o Designer de Interface de Usuário (UI) / Designer de Experiência do Usuário (UX) são responsáveis por criar uma interface de usuário atraente e intuitiva, garantindo uma experiência positiva para os usuários do aplicativo.</p>
      <p>Conhecendo as metodologias avançadas é possível concluir que o Six Sigma pode beneficiar o projeto. Analise as afirmativas.</p>
      <p>I. O engajamento do time que executa as atividades produtivas, principalmente o Time Scrum ou equipe de desenvolvimento.</p>
      <p>II. O combate ao desperdício, tanto em tempo quanto de recursos, em Projeto de Software está relacionado diretamente ao tempo de construção e teste do código-fonte e aos recursos computacionais (hardware e software.</p>
      <p>III. A padronização de processos proporcionará melhoria contínua, tanto na execução da atividade quanto ao uso de ferramentas.</p>
      <p>Escolha a alternativa correta.</p>`,
          alternativas: ["I e II são verdadeiras; III é falsa.", "I e III são verdadeiras; II é falsa.", "II e III são verdadeiras; I é falsa.", "I, II e III são verdadeiras.", "II é verdadeira; I e III são falsas."],
          resposta: "d",
          comentarios: {"a": "Incorreta: III é verdadeira, não falsa.", "b": "Incorreta: II é verdadeira, não falsa.", "c": "Incorreta: I é verdadeira, não falsa.", "d": "Correta: I verdadeira; II verdadeira; III verdadeira.", "e": "Incorreta: I é verdadeira, não falsa; III é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: d)</strong> I, II e III são verdadeiras.</p>
          <p>Engajamento da equipe, redução de desperdício e padronização com melhoria contínua são benefícios típicos do Six Sigma.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>No Scrum, quem desenvolve o produto é o Time de Desenvolvimento (multidisciplinar e auto-organizado). Six Sigma (tema fora dos arquivos da pasta; conhecimento geral) busca padronização, redução de desperdício e melhoria contínua com engajamento das pessoas.</p></div>`,
          fonte: "Sem fonte direta na pasta (ver limitação).",
          limitacao: "O Six Sigma não é tratado nos arquivos da pasta (apenas menção de passagem em HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, aula \"Gestão da Qualidade em Projeto de Software\"); o livro da U2 está ausente. Julgamento por conhecimento geral."
        },
        {
          numero: 6,
          enunciado: `<p>A equipe de Software SOREDEMO capaz armazenar e fornecer dados que trarão melhor qualidade no gerenciamento da empresa, além de uma economia de tempo, gerada pela precisão e velocidade do fornecimento das informações por parte do sistema. Eles têm certeza de que todas as versões do software atenderão com funcionalidades completas e úteis.</p>
      <p>Diante de um cenário de uma equipe que desenvolve software, analise a asserção-razão.</p>
      <p>I. O MVP pretende validar um certo conjunto de possibilidades de negócio, no menor tempo e esforço possível,</p>
      <p>PORQUE</p>
      <p>II, significa que o software entregue atenderá às necessidades.</p>
      <p>Assinale a alternativa correta.</p>`,
          alternativas: ["As duas afirmações são verdadeiras, e a segunda justifica a primeira.", "As duas afirmações são falsas.", "A primeira afirmação é falsa, e a segunda é verdadeira.", "As duas afirmações são verdadeiras, e a segunda não justifica a primeira.", "A primeira afirmação é verdadeira, e a segunda é falsa."],
          resposta: "d",
          comentarios: {"a": "Incorreta: a II não justifica a I.", "b": "Incorreta: a I é verdadeira, não falsa; a II é verdadeira, não falsa.", "c": "Incorreta: a I é verdadeira, não falsa.", "d": "Correta: I e II são verdadeiras, mas a II não justifica a I.", "e": "Incorreta: a II é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: d)</strong> As duas afirmações são verdadeiras, e a segunda não justifica a primeira.</p>
          <div class="caixa nota" data-titulo="Correção"><p>Corrigida após o sistema marcar como incorreta a opção a; a opção "a primeira afirmação é verdadeira, e a segunda é falsa" também foi marcada como incorreta em tentativa anterior; resposta ainda não confirmada pelo sistema.</p></div>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>MVP (produto mínimo viável): versão mais simples possível, com custo e complexidade baixos, para testar a ideia e obter feedback; parte da lógica Lean de construir, medir e aprender. Entregar valor cedo não significa entregar o produto completo.</p></div>
          <div class="caixa nota" data-titulo="Conferência com o material novo"><p>Unidade 4 DS_DTV2.pdf (slide MVP) trata o MVP como a versão mais próxima da realidade possível com custo e complexidade baixos para avaliar a ideia, o que sustenta a afirmativa I. A relação com a II (software entregue atenderá às necessidades) não consta no material. A resposta continua não confirmada pelo sistema.</p></div>`,
          fonte: "Sem fonte direta na pasta (ver limitação).",
          limitacao: "O termo MVP não consta nos arquivos da pasta (Unidade 2a, 2b, 2c e HAMI_PRO_SOFT_ U1 - Livro Didático.pdf); o livro da U2 está ausente. Julgamento por conhecimento geral, por eliminação das opções já marcadas como incorretas."
        },
        {
          numero: 7,
          enunciado: `<p>Para o gestor do projeto AUTOMOTECH, quando o software entregue não satisfazer às necessidades, considera-se uma entrega fracassada. O conceito de produto em funcionamento, faz parte do mesmo princípio em que a proposta combinada no início de uma iteração seja definida por um "pronto" que estará exatamente como o esperado. Consideremos um projeto cujo produto seja um veículo automotor que comporte quatro pessoar para se deslocar no trânsito de uma cidade, sendo previsto quatro iterações com entregas funcionais.</p>
      <p>Analise a imagem e as afirmativas: [imagem: 1 skate, 2 triciclo/bicicleta, 3 scooter, 4 carro conversível. Fonte: adaptado de Camargo (2019, p. 131)]</p>
      <p>I. O produto 1 foi entregue com todas as funcionalidades e critérios propostos no projeto.</p>
      <p>II. O conceito de MVP se faz presente, uma vez que para cada entrega/iteração, foi possível atender ao cliente, de acordo com a expectativa de um produto funcional.</p>
      <p>III. O produto entregue na iteração 3 se apresenta superior ao da entrega 4.</p>
      <p>Escolha uma:</p>`,
          alternativas: ["I – Falsa; II – Verdadeira; III – Falsa.", "I – Verdadeira; II – Verdadeira; III – Verdadeira.", "I – Falsa; II – Falsa; III – Falsa.", "I – Verdadeira; II – Falsa; III – Falsa.", "I – Verdadeira; II – Verdadeira; III – Falsa."],
          resposta: "a",
          comentarios: {"a": "Correta: I falsa; II verdadeira; III falsa.", "b": "Incorreta: I é falsa, não verdadeira; III é falsa, não verdadeira.", "c": "Incorreta: II é verdadeira, não falsa.", "d": "Incorreta: I é falsa, não verdadeira; II é verdadeira, não falsa.", "e": "Incorreta: I é falsa, não verdadeira."},
          resolucao: `<p><strong>Resposta: a)</strong> I – Falsa; II – Verdadeira; III – Falsa.</p>
          <p>F-V-F; o produto 1 é só o primeiro incremento; cada iteração entrega algo funcional, ilustrando o MVP; o produto 4 é o que cumpre o objetivo.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Cada iteração entrega um incremento funcional; o primeiro produto da figura é só o primeiro incremento, e o produto final é o que cumpre o objetivo. A ideia de produto funcionando a cada iteração ilustra o MVP. Julgue cada afirmação isoladamente (V ou F) em relação à figura.</p></div>
          <div class="caixa nota" data-titulo="Conferência com o material novo"><p>Unidade 4 DS_DTV2.pdf (slide MVP) descreve o MVP como versão simples e de baixo custo para avaliar a ideia; a figura da questão (Camargo, 2019, p. 131) continua fora da pasta.</p></div>`,
          fonte: "Sem fonte direta na pasta (ver limitação).",
          limitacao: "A figura (Camargo, 2019, p. 131) e o conceito de MVP não constam nos arquivos da pasta; julgamento pela imagem e por conhecimento geral."
        },
        {
          numero: 8,
          enunciado: `<p>Agora que a equipe de desenvolvimento de software do grupo empresarial RURALSoft está adotando a metodologia ágil, entre eles estão estudando e internalizando a vivência dos valores Ágil.</p>
      <p>Se antes, a entrega do software estava baseada em contrato e nas suas cláusulas tão detalhadas, agora cliente e prestador de serviços, usuários de sistemas e desenvolvedores de software trabalham em ____; assim causará menor desgastes ou conflitos, pois ambos almejam um produto realmente útil.</p>
      <p>Escolha a alternativa correta que preenche a lacuna.</p>`,
          alternativas: ["Definição de processos.", "Matriz de responsabilidade.", "Co-criação de relatórios.", "Integração.", "Colaboração"],
          resposta: "e",
          comentarios: {"a": "Incorreta: definição de processos é ênfase do modelo tradicional, oposta ao valor ágil em questão.", "b": "Incorreta: matriz de responsabilidade é ferramenta de gestão de pessoas, não o valor ágil que substitui o contrato.", "c": "Incorreta: co-criação de relatórios não é valor ágil citado.", "d": "Incorreta: integração não é o valor ágil que substitui a negociação de contratos.", "e": "Correta: colaboração com o cliente mais que negociação de contratos (valor do Manifesto Ágil; por conhecimento geral)."},
          resolucao: `<p><strong>Resposta: e)</strong> Colaboração.</p>
          <p>Valor do Manifesto Ágil: colaboração com o cliente mais que negociação de contratos.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Substituir negociação contratual por parceria com o cliente corresponde ao valor 'colaboração com o cliente mais que negociação de contratos'. O princípio 4 reforça: pessoas de negócio e desenvolvedores trabalham juntos diariamente.</p></div>`,
          fonte: "Sem fonte direta na pasta (ver limitação).",
          limitacao: "O valor não consta com essa redação nos arquivos da pasta (Unidade 2a.pdf, seção \"Agilidade\", traz os 12 princípios, incluindo o trabalho conjunto diário entre negócio e desenvolvedores). Julgamento por conhecimento geral."
        },
        {
          numero: 9,
          enunciado: `<p>A organização de economia ECOYork está desenvolvendo um aplicativo de locação de bicicletas para atender a uma demanda crescente por alternativas de transporte sustentável em uma grande metrópole. Nesse cenário, vários stakeholders têm papéis e responsabilidades específicos no desenvolvimento do software.</p>
      <p>Associe os princípios conforme o processo Design Thinking.</p>
      <p>Coluna A:</p>
      <p>I. Empatia.</p>
      <p>II. Colaboração.</p>
      <p>III. Experimentação.</p>
      <p>Coluna B:</p>
      <p>1. É buscar uma opção, que seja aceita, ou que funciona, pode passar por inúmeras tentativas, por isso quanto antes percorrer pela aprendizagem, mais acertada será opção.</p>
      <p>2. É pensar primeiro nas pessoas, antes mesmo do papel de empresário, consumidor, usuário de sistema, entre outros.</p>
      <p>3. É criar algo em pares (apesar da criação ser algo individual), aqui o princípio é ser cocriador, inclusive envolvendo profissionais de outros setores, diferentes perfis e de ponto de vista.</p>
      <p>Assinale a alternativa que corresponde a associação entre as colunas.</p>`,
          alternativas: ["I - 3; II - 2; III - 1.", "I - 1; II - 2; III - 3.", "I - 2; II - 1; III - 3.", "I - 1; II - 3; III - 2.", "I - 2; II - 3; III - 1."],
          resposta: "e",
          comentarios: {"a": "Incorreta: I não é 3 (o correto é 2); II não é 2 (o correto é 3).", "b": "Incorreta: I não é 1 (o correto é 2); II não é 2 (o correto é 3); III não é 3 (o correto é 1).", "c": "Incorreta: II não é 1 (o correto é 3); III não é 3 (o correto é 1).", "d": "Incorreta: I não é 1 (o correto é 2); III não é 2 (o correto é 1).", "e": "Correta: I-2, II-3, III-1."},
          resolucao: `<p><strong>Resposta: e)</strong> I-2, II-3, III-1.</p>
          <p>Empatia = pensar primeiro nas pessoas; colaboração = cocriar com perfis diferentes; experimentação = aprender por tentativas.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Três pilares do Design Thinking: empatia (deixar pré-julgamentos e ver o contexto pelos olhos de quem o vive), colaboração (profissionais multidisciplinares, cocriação) e experimentação (errar cedo, testar e aprender). Associe cada definição ao nome pela ideia central.</p></div>
          <div class="caixa nota" data-titulo="Conferência com o material novo"><p>Os três princípios constam em Unidade 4 DS_DTV2.pdf (Design Thinking, 'Quais são os três pilares'): empatia (deixar pré-julgamentos e ver o contexto pelos olhos de quem o vive), colaboração (profissionais multidisciplinares, cocriação) e experimentação (errar o mais cedo possível). Isso corrobora a associação I-2, II-3, III-1.</p></div>`,
          fonte: "Sem fonte direta na pasta (ver limitação).; Unidade 4 DS_DTV2.pdf, seção 'Quais são os três pilares do Design Thinking?'",
          limitacao: "Design Thinking não consta nos arquivos da pasta; o livro da U2 está ausente. Julgamento por conhecimento geral e pelo sentido das definições."
        },
        {
          numero: 10,
          enunciado: `<p>Você prefere mudar a realidade com inovação, criadas pela sua organização, ou atender a demanda vinda pela pressão da concorrência? Bem, essa resposta poderá ser devidamente encarada sem medo a partir do momento que você tem a competência no uso de ferramentas adequadas.</p>
      <p>Analise a afirmativa sobre o Design Thinking:</p>
      <p>O segredo para entender e ter sucesso nessa prática é perder o medo de errar! Parece estranho, mas o Design Thinking é ser___, por isso quem tem essa proposta, jamais pode desistir após ___".</p>
      <p>Assinale a alternativa que preenche corretamente as lacunas.</p>`,
          alternativas: ["Introspectivo / sucessivos erros.", "Disruptivo / sucessivos erros.", "Criativo / acertos.", "Conservador / sucessivos erros.", "Eficaz / ação disruptiva."],
          resposta: "b",
          comentarios: {"a": "Incorreta: introspectivo não é característica do Design Thinking, que é colaborativo.", "b": "Correta: Design Thinking é disruptivo e implica perder o medo de errar, sem desistir após sucessivos erros (por conhecimento geral e eliminação).", "c": "Incorreta: 'acertos' contraria a ideia de perder o medo de errar.", "d": "Incorreta: conservador contraria a proposta de inovação.", "e": "Incorreta: 'ação disruptiva' não completa a ideia de desistir após erros."},
          resolucao: `<p><strong>Resposta: b)</strong> Disruptivo / sucessivos erros.</p>
          <p>Design Thinking envolve experimentar e errar; quem o pratica não desiste após sucessivos erros.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Design Thinking incentiva inovação disruptiva: experimentar e errar cedo, de forma barata, para aprender. Quem pratica a técnica não abandona a ideia após sucessivos erros. Pense na lacuna como perfil de quem inova (disruptivo) e no processo (sucessivos erros).</p></div>
          <div class="caixa nota" data-titulo="Conferência com o material novo"><p>Unidade 4 DS_DTV2.pdf trata a experimentação do Design Thinking como errar o mais cedo possível e mitigar verdades absolutas, o que sustenta a ideia de perder o medo de errar. O termo 'disruptivo' não aparece no material; a escolha dessa lacuna continua por conhecimento geral e eliminação.</p></div>`,
          fonte: "Sem fonte direta na pasta (ver limitação).",
          limitacao: "Design Thinking não consta nos arquivos da pasta; o livro da U2 está ausente. Julgamento por conhecimento geral."
        }
      ]
    },
    {
      id: "u2-avaliacao-unidade",
      titulo: "U2 — Avaliação da Unidade",
      fonte: "U2 - Avaliação da Unidade.txt",
      questoes: [
        {
          numero: 1,
          enunciado: `<p>A filosofia Lean é caracterizada pela busca constante da eficiência, eliminação de desperdícios, respeito às pessoas e foco na entrega de valor aos clientes. Ela se tornou uma abordagem fundamental para a melhoria de processos em todo o mundo e é amplamente adotada em diversas indústrias.</p>
      <p>Analise a asserção-razão.</p>
      <p>I. O Lean é um processo gradativo que se aplica no setor da indústria motora para reduzir custos da linha de montagem (principalmente o desperdício de peças),</p>
      <p>Porque</p>
      <p>II. o objetivo do Lean é melhorar a qualidade do software e ampliar o valor para o cliente/usuário.</p>
      <p>Assinale a alternativa correta.</p>`,
          alternativas: ["As duas afirmações são verdadeiras, e a segunda não justifica a primeira.", "A primeira afirmação é falsa, e a segunda é verdadeira.", "A primeira afirmação é verdadeira, e a segunda é falsa.", "As duas afirmações são falsas.", "As duas afirmações são verdadeiras, e a segunda justifica a primeira."],
          resposta: "b",
          comentarios: {"a": "Incorreta: a I é falsa, não verdadeira.", "b": "Correta: I é falsa e II é verdadeira.", "c": "Incorreta: a I é falsa, não verdadeira; a II é verdadeira, não falsa.", "d": "Incorreta: a II é verdadeira, não falsa.", "e": "Incorreta: a I é falsa, não verdadeira."},
          resolucao: `<p><strong>Resposta: b)</strong> A primeira afirmação é falsa, e a segunda é verdadeira.</p>
          <div class="caixa nota" data-titulo="Correção"><p>Corrigida após o sistema marcar como incorreta a opção a; o Lean no contexto do material é uma abordagem de eliminação de desperdícios para software e startups, não um processo gradativo restrito à indústria motora; resposta ainda não confirmada pelo sistema.</p></div>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Lean busca eliminar desperdício e entregar valor ao cliente, com respeito às pessoas e melhoria contínua; originou-se no Sistema Toyota de Produção, mas se aplica a software e startups (construir, medir, aprender). Afirmar que é um processo gradativo restrito à indústria motora é falso.</p></div>`,
          fonte: "Unidade 2a.pdf, U2 S1, seção \"As principais Metodologias Ágeis no mercado\", slides sobre Lean (foco em eliminar desperdícios, reduzir custos, melhorar entregas; difundido no cenário das startups)",
          limitacao: "A falsidade da I é interpretação, por eliminação das opções já marcadas como incorretas."
        },
        {
          numero: 2,
          enunciado: `<p>A identificação dos principais Stakeholders do projeto é uma tarefa complexa e demanda dedicação constante até elas sejam elencadas adequadamente. A gestora WOTAK elabora um plano de ação para encontrar os Stakeholders em meio aos mais de 500 colaboradores e parceiros de negócio.</p>
      <p>Muitas especificações do software dependem de todos os Stakeholders. Analise as afirmativas.</p>
      <p>I. Elaborar um questionário especificamente para identificar Stakeholders pode auxiliar para encontrá-los.</p>
      <p>II. Todos os Stakeholders são do time de operações.</p>
      <p>III. Quanto a avaliação do resultado econômico da solução, é realizado pelo Gestor da qualidade.</p>
      <p>Assinale a alternativa correta.</p>`,
          alternativas: ["As afirmativas I e III são falsas, sendo que a II é verdadeira.", "As afirmativas II e III são falsas, sendo que a I é verdadeira.", "As afirmativas I, II e III são falsas.", "As afirmativas I, II e III são verdadeiras.", "A afirmativa III é verdadeira, sendo que I e II são falsas"],
          resposta: "b",
          comentarios: {"a": "Incorreta: I é verdadeira, não falsa; II é falsa, não verdadeira.", "b": "Correta: I verdadeira; II falsa; III falsa.", "c": "Incorreta: I é verdadeira, não falsa.", "d": "Incorreta: II é falsa, não verdadeira; III é falsa, não verdadeira.", "e": "Incorreta: I é verdadeira, não falsa; III é falsa, não verdadeira."},
          resolucao: `<p><strong>Resposta: b)</strong> As afirmativas II e III são falsas, sendo que a I é verdadeira.</p>
          <p>Questionários ajudam a identificar stakeholders; eles vêm de várias áreas, não só de operações; o resultado econômico não é avaliado pelo gestor da qualidade.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Identificação de stakeholders é contínua e pode usar técnicas como questionários; eles vêm de várias áreas, não só de operações. O gestor da qualidade não avalia o resultado econômico do projeto; essa atribuição é de outros papéis.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Gestão de riscos\", seção \"Vamos Começar!\", p. 2 (stakeholders das áreas financeira, produção, mercado e especialistas)",
          limitacao: "A veracidade da I e a falsidade da III não constam no material; julgamento por conhecimento geral."
        },
        {
          numero: 3,
          enunciado: `<p>No setor do agro, especialmente na cafeicultura, o processo de manejo da cultura requer cuidado especial em função da variedade da planta, do clima e estágio da planta, ciclo e safra. Para efetuar o controle de pragas e de adubação, a StarCoffee está desenvolvendo sistema especializado para o manejo do cafezal.</p>
      <p>O time de profissionais de TI não conhece as regras de negócio da cultura do café, porém foram contratados por serem tecnicamente experientes e de confiança do patrocinador do projeto.</p>
      <p>Analise as afirmativas, conforme os princípios do Manifesto Ágil.</p>
      <p>I. Software funcionando é a medida primária do progresso.</p>
      <p>II. Mudanças nos requisitos são bem-vindas, mesmo que tardiamente no desenvolvimento. Processos ágeis tiram vantagem das mudanças, visando à vantagem competitiva do cliente.</p>
      <p>III. Simplicidade – arte de maximizar a quantidade de trabalho não realizado – é essencial.</p>
      <p>Escolha a alternativa correta.</p>`,
          alternativas: ["II é verdadeira; I e III são falsas.", "I, II e III são verdadeiras.", "I e II são verdadeiras; III é falsa.", "II e III são verdadeiras; I é falsa.", "I e III são verdadeiras; II é falsa."],
          resposta: "b",
          comentarios: {"a": "Incorreta: I é verdadeira, não falsa; III é verdadeira, não falsa.", "b": "Correta: I verdadeira; II verdadeira; III verdadeira.", "c": "Incorreta: III é verdadeira, não falsa.", "d": "Incorreta: I é verdadeira, não falsa.", "e": "Incorreta: II é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: b)</strong> I, II e III são verdadeiras.</p>
          <p>Reproduzem os princípios 7, 2 e 10 do Manifesto Ágil.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Princípios ágeis: 7 (software funcionando é a medida primária de progresso), 2 (aceitar mudanças, mesmo tardias) e 10 (simplicidade: maximizar o trabalho não realizado). Ao julgar V ou F, reconheça o princípio por trás de cada frase.</p></div>`,
          fonte: "Unidade 2a.pdf, U2 S1, seção \"Agilidade\", slides dos 12 princípios do Manifesto Ágil"
        },
        {
          numero: 4,
          enunciado: `<p>Para muitos tipos de software, o projeto e a construção são intercalados, ambas as atividades devem ser realizadas em conjunto para que os modelos de projeto sejam provados conforme são criados.</p>
      <p>Portanto, é difícil prever quanto de trabalho de projeto será necessário antes que a sua construção (desenvolvimento) seja implementada para avaliar o projeto. Adaptação contínua sem progressos, entretanto, de pouco adianta. Um processo ágil de software deve adaptar de modo incremental.</p>
      <p>Analise a afirmativa "Para conseguir uma adaptação ____, a equipe ágil precisa de ____ do cliente (de modo que as adaptações apropriadas possam ser feitas). Um catalisador eficaz para o feedback do cliente é um protótipo operacional.</p>
      <p>Escolha a alternativa que preenche corretamente as lacunas.</p>`,
          alternativas: ["do software / feedback.", "incremental / elicitação do requisito.", "da metodologia / feedback.", "incremental / criatividade.", "incremental / feedback."],
          resposta: "e",
          comentarios: {"a": "Incorreta: a adaptação de modo incremental é o que o texto descreve, não 'do software'.", "b": "Incorreta: o texto diz que o catalisador é o feedback do cliente, não elicitação de requisito.", "c": "Incorreta: 'da metodologia' não corresponde ao texto, que fala de adaptação incremental.", "d": "Incorreta: criatividade não é o insumo; o texto cita feedback do cliente.", "e": "Correta: adaptação incremental depende de feedback do cliente, com o protótipo operacional como catalisador."},
          resolucao: `<p><strong>Resposta: e)</strong> incremental / feedback.</p>
          <p>O trecho trata de adaptação incremental e de feedback do cliente, com o protótipo operacional como catalisador.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Em software, projeto e construção são intercalados: o modelo de projeto é provado à medida que é criado, por isso é difícil prever quanto projeto é necessário antes da construção. A adaptação é incremental e guiada por feedback do cliente, com o protótipo operacional como catalisador.</p></div>`,
          fonte: "Sem fonte direta na pasta (ver limitação).",
          limitacao: "O trecho (atribuível a Pressman) não consta literalmente nos arquivos da pasta; tema tratado em HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Ciclo de Vida do Projeto de Software\", Saiba mais, item 1 (prototipação e feedback), p. 10-11. Julgamento por conhecimento geral."
        },
        {
          numero: 5,
          enunciado: `<p>O jovem profissional do setor de software está ingressando agora como desenvolver um sistema para o controle de rebanhos de cordeiros primeira linha. O patrocinador do projeto tem um orçamento de cem mil dólares para desenvolver a solução em dois anos.</p>
      <p>Diante desse cenário com prazo definido adequadamente às necessidades do cliente, como também um orçamento a ser cumprido, escolha a alternativa correta.</p>`,
          alternativas: ["O Lean propõe uma filosofia de redução de custos, não se preocupando com a valorização do software.", "Para que o Lean contemple a qualidade do produto deve seguir o Six Sigma.", "Um plano de projeto que contempla a metodologia ágil não permite a prática do Lean.", "Perseguir a qualidade no processo de um Projeto de Software contempla também em reduzir o esforço do desenvolvimento e maximizar valor entregue.", "O retrabalho no desenvolvimento de software é considerado manutenção e não será um prejuízo."],
          resposta: "d",
          comentarios: {"a": "Incorreta: o Lean visa valor ao cliente, eliminando desperdícios.", "b": "Incorreta: o Lean não depende do Six Sigma para contemplar qualidade.", "c": "Incorreta: o Lean é compatível com a metodologia ágil.", "d": "Correta: qualidade no processo envolve reduzir esforço (desperdício) e maximizar o valor entregue.", "e": "Incorreta: retrabalho é desperdício e prejuízo, não manutenção."},
          resolucao: `<p><strong>Resposta: d)</strong> Perseguir a qualidade no processo de um Projeto de Software contempla também em reduzir o esforço do desenvolvimento e maximizar valor entregue.</p>
          <p>As demais são falsas: o Lean visa valor ao cliente, não depende do Six Sigma, é compatível com o ágil, e retrabalho é prejuízo.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Qualidade no processo reduz retrabalho, esforço e custo e maximiza o valor entregue, em linha com o Lean. Lean não é apenas redução de custos, não depende do Six Sigma, é compatível com o ágil e trata retrabalho como desperdício.</p></div>`,
          fonte: "Unidade 3b.pdf, U3 S2, seção \"Gerenciamento da qualidade do projeto\", slide \"Melhoria contínua\" (redução de desperdícios e atividades sem valor agregado); Unidade 2a.pdf, U2 S1, slides sobre Lean",
          limitacao: "A redação exata da alternativa d não consta no material; escolha por eliminação e interpretação."
        }
      ]
    },
    {
      id: "u3-atividade-aprendizagem",
      titulo: "U3 — Atividade de Aprendizagem",
      fonte: "U3 - Atividade de Aprendizagem.txt",
      questoes: [
        {
          numero: 1,
          enunciado: `<p>As documentações do projeto de software se relacionam com tratados entre cliente e fornecedor, ou patrocinador para as questões de prazo e orçamento. Sem dúvidas, detalhar uma documentação técnica de um software na metodologia ágil pode tornar moroso e burocrático.</p>
      <p>Analise a asserção-razão sobre documentos em projeto de software.</p>
      <p>I. Percebe-se que a documentação deve existir em momentos importantes do projeto, afinal, juntar as decisões (iniciais e as mudanças) das regras, funcionalidades, design, procedimentos,</p>
      <p>Porque</p>
      <p>II. se torna obrigatório para dirimir dúvidas futuras, ao longo do ciclo de vida do software.</p>
      <p>Assinale a alternativa correta.</p>`,
          alternativas: ["As duas afirmações são verdadeiras, e a segunda justifica a primeira.", "A primeira afirmação é falsa, e a segunda é verdadeira.", "As duas afirmações são verdadeiras, e a segunda não justifica a primeira.", "As duas afirmações são falsas.", "A primeira afirmação é verdadeira, e a segunda é falsa."],
          resposta: "a",
          comentarios: {"a": "Correta: I e II são verdadeiras e a II justifica a I.", "b": "Incorreta: a I é verdadeira, não falsa.", "c": "Incorreta: a II justifica a I.", "d": "Incorreta: a I é verdadeira, não falsa; a II é verdadeira, não falsa.", "e": "Incorreta: a II é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: a)</strong> As duas afirmações são verdadeiras, e a segunda justifica a primeira.</p>
          <p>O livro afirma que a documentação deve existir em momentos importantes porque juntar as decisões se torna obrigatório para dirimir dúvidas futuras.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Documentação em projetos ágeis: deve existir em momentos importantes, de forma sucinta e útil, porque registrar decisões evita dúvidas futuras e serve de acordo entre cliente e fornecedor. Documentação excessiva se torna inacessível; ausência total gera risco.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Documentação do projeto\", seção \"Vamos Começar!\", p. 10"
        },
        {
          numero: 2,
          enunciado: `<p>No desenvolvimento de um sistema para venda de pneus para off-road envolve questões legais, como a conformidade com regulamentações dos tipos de pneus, exigindo do time de TI o conhecimento no segmento. Nada melhor do que efetuar um mapeamento adequado de riscos.</p>
      <p>Analise as afirmativas e faça a associação das colunas.</p>
      <p>Coluna A:</p>
      <p>I. Necessidade de inovação após o início do projeto também é fator crítico, porém é comum ocorrer.</p>
      <p>II. Parceiros desenvolvedores de componentes ou de equipamentos integradores podem causar impactos negativos ao projeto, desde atrasos, até falhas de construção.</p>
      <p>III. Falta ou indisponibilidade do conhecedor, ou especialista em processos específicos.</p>
      <p>Coluna B</p>
      <p>1. Envolvimento de partes interessadas.</p>
      <p>2. Instabilidade no escopo.</p>
      <p>3. Fornecedores.</p>
      <p>Escolha a alternativa com a associação correta.</p>`,
          alternativas: ["I – 1; II – 2; III – 3", "I – 3; II – 2; III – 1.", "I – 1; II – 3; III – 2.", "I – 2; II – 1; III – 3.", "I – 2; II – 3; III – 1."],
          resposta: "e",
          comentarios: {"a": "Incorreta: I não é 1 (o correto é 2); II não é 2 (o correto é 3); III não é 3 (o correto é 1).", "b": "Incorreta: I não é 3 (o correto é 2); II não é 2 (o correto é 3).", "c": "Incorreta: I não é 1 (o correto é 2); III não é 2 (o correto é 1).", "d": "Incorreta: II não é 1 (o correto é 3); III não é 3 (o correto é 1).", "e": "Correta: I-2, II-3, III-1."},
          resolucao: `<p><strong>Resposta: e)</strong> I-2, II-3, III-1.</p>
          <p>As definições aparecem literalmente nas fontes de risco: instabilidade no escopo, fornecedores e envolvimento de partes interessadas.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Fontes de risco: instabilidade do escopo, fornecedores e envolvimento das partes interessadas, entre outras. Em mapeamento de riscos, associe cada risco à sua natureza ou fonte (técnico, de requisitos, externo, de gestão, de segurança) e à causa.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Gestão de riscos\", seção \"Matriz de risco\", p. 2-3"
        },
        {
          numero: 3,
          enunciado: `<p>A qualidade do software pode ser gerenciada. KIO, Scrum Master determina que o desenvolvimento transcorra sob o domínio dos elementos fundamentais do triângulo ágil. Ele está treinando o time de TI na prática de criar indicadores que representam os valores da qualidade; a auto-organização dos recursos que cada um dispõe frente ao projeto entre objetivo da entrega, prazo estimado e custo.</p>
      <p>Quais são os elementos fundamentais do desenvolvimento de software para o gerenciamento da qualidade em ágil?</p>`,
          alternativas: ["Criatividade; Experimentação; Inspeção.", "Valores; Princípios; Inspeção.", "Estabelecer valor; Inspeção e risco; Qualidade aceitável.", "Escopo; Cronograma; Custo.", "Estabelecer valor; Gerenciar escopo, cronograma e custo; Qualidade aceitável."],
          resposta: "e",
          comentarios: {"a": "Incorreta: não são os elementos do triângulo ágil descritos no livro.", "b": "Incorreta: valores e princípios não são os elementos fundamentais da figura.", "c": "Incorreta: 'inspeção e risco' não compõe o triângulo ágil do livro.", "d": "Incorreta: escopo, cronograma e custo são só os recursos, sem o valor e a qualidade aceitável.", "e": "Correta: estabelecer valor; gerenciar escopo, cronograma e custo; qualidade aceitável."},
          resolucao: `<p><strong>Resposta: e)</strong> Estabelecer valor; Gerenciar escopo, cronograma e custo; Qualidade aceitável.</p>
          <p>O livro descreve o triângulo ágil por valores a entregar, recursos de escopo, prazo e custo, e qualidade aceitável.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Triângulo ágil: valor entregue (estabelecer valor), restrições (escopo, cronograma e custo, que se gerenciam) e qualidade aceitável. Complemento de conhecimento geral: no triângulo clássico, escopo, prazo e custo são as restrições e a qualidade fica no centro; no ágil o valor entregue guia as decisões.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Gestão da Qualidade em Projeto de Software\", seção \"Sistema de qualidade do software\", p. 5-6 (Figura 1, Triângulo Ágil, adaptado de Camargo, 2019, p. 108)",
          limitacao: "Os rótulos exatos da figura não são extraíveis do texto; escolha por cruzamento com o texto do livro e conhecimento geral."
        },
        {
          numero: 4,
          enunciado: `<p>No projeto MOMENT, quando gestor de sistemas se reúne para definir as funcionalidades prioritárias para desenvolver o aplicativo, organiza-se para desempenhar a reunião em três momentos distintos.</p>
      <p>Escolha a alternativa correta para um dos momentos de reunião do projeto de software: cita Cavalcanti (2016, p. 147), "o depois da reunião diz respeito à documentação, através de uma ata, e ao acompanhamento, por parte do GP, das ações definidas na reunião".</p>`,
          alternativas: ["A ata é um registro exclusivo da reunião de planejamento.", "É o segundo momento da reunião, quando se encerra o encontro.", "É o terceiro momento da reunião, quando se registra o que foi tratado.", "É o primeiro momento da reunião, para registrar os assuntos tratados.", "Em reunião para definição de requisitos não se faz registro em ata."],
          resposta: "c",
          comentarios: {"a": "Incorreta: a ata não é exclusiva da reunião de planejamento.", "b": "Incorreta: o 'depois' é o terceiro momento; o segundo é a condução.", "c": "Correta: o terceiro momento (depois da reunião) trata da ata e do acompanhamento das ações.", "d": "Incorreta: o primeiro momento é a preparação.", "e": "Incorreta: reuniões de definição de requisitos exigem registro em ata."},
          resolucao: `<p><strong>Resposta: c)</strong> É o terceiro momento da reunião, quando se registra o que foi tratado.</p>
          <p>A reunião tem preparação, condução e o "depois", que trata da ata e do acompanhamento das ações.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Reunião tem três momentos: preparação (pauta, convocação, materiais), condução (manter objetividade e foco, registrar) e o 'depois', quando se trata a ata e o acompanhamento das ações. Ata não é exclusiva de planejamento, e reunião de requisitos também é registrada.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Documentação do projeto\", seção \"Vamos Começar!\", p. 10"
        },
        {
          numero: 5,
          enunciado: `<p>O experiente gestor de projeto, Takashi, está criando um time de TI com foco em desenvolvimento de software de relacionamentos. Ele sabe que nesse segmento de mercado, as informações dos usuários requerem cuidado especial em proteção de dados.</p>
      <p>Três elementos são fundamentais para o gerenciamento da qualidade. Analise a asserção-razão.</p>
      <p>I. O primeiro elemento da qualidade em software é estabelecer valores que são funcionalidades que beneficiam o usuário final em seu negócio,</p>
      <p>Porque</p>
      <p>II. os valores da qualidade é um benefício exclusivo do time de TI.</p>
      <p>Escolha alternativa correta.</p>`,
          alternativas: ["As duas afirmações são verdadeiras, e a segunda justifica a primeira.", "As duas afirmações são falsas", "A primeira afirmação é falsa, e a segunda é verdadeira", "A primeira afirmação é verdadeira, e a segunda é falsa", "As duas afirmações são verdadeiras, e a segunda não justifica a primeira."],
          resposta: "d",
          comentarios: {"a": "Incorreta: a II é falsa, não verdadeira.", "b": "Incorreta: a I é verdadeira, não falsa.", "c": "Incorreta: a I é verdadeira, não falsa; a II é falsa, não verdadeira.", "d": "Correta: I é verdadeira e II é falsa.", "e": "Incorreta: a II é falsa, não verdadeira."},
          resolucao: `<p><strong>Resposta: d)</strong> A primeira afirmação é verdadeira, e a segunda é falsa.</p>
          <p>Valores são funcionalidades que proporcionam inovação, resultado positivo, satisfação e lucratividade para as organizações, não benefício exclusivo do time de TI.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Valor, para o projeto, são funcionalidades que proporcionam inovação, resultado positivo, satisfação e lucratividade para as organizações; não é benefício exclusivo do time de TI. Verifique em V ou F se a razão apresentada de fato justifica a primeira afirmação.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Gestão da Qualidade em Projeto de Software\", seção \"Sistema de qualidade do software\", p. 6"
        },
        {
          numero: 6,
          enunciado: `<p>Num sistema que sofre alteração constante de escopo, principalmente numa integração do sistema com serviços de envio de e-mails para enviar confirmações de compra e venda, pagamentos eletrônicos, espera-se que a gestão da comunicação tenha atenção adequada para eficiência em projeto de software.</p>
      <p>Analise as afirmativas.</p>
      <p>I. Os objetos de comunicação têm a mesma função para todos os envolvidos: stakeholders, gestores operacionais do sistema, time de TI e patrocinador.</p>
      <p>II. O patrocinador necessita saber dos detalhes dos itens entregáveis em cada iteração, mais que o cronograma do projeto.</p>
      <p>III. A gestão da comunicação de um projeto de software é crucial para o entendimento, engajamento dos envolvidos, e pode impactar em insucesso quando ocorrerem falhas recorrentes na entrega das informações.</p>
      <p>Escolha a alternativa que classifica corretamente as afirmativas.</p>`,
          alternativas: ["I – Falsa; II – Falsa; III – Falsa.", "I – Falsa; II – Falsa; III – Verdadeira.", "I – Verdadeira; II – Verdadeira; III – Falsa.", "I – Verdadeira; II – Verdadeira; III – Verdadeira.", "I – Verdadeira; II – Falsa; III – Falsa"],
          resposta: "b",
          comentarios: {"a": "Incorreta: III é verdadeira, não falsa.", "b": "Correta: I falsa; II falsa; III verdadeira.", "c": "Incorreta: I é falsa, não verdadeira; II é falsa, não verdadeira; III é verdadeira, não falsa.", "d": "Incorreta: I é falsa, não verdadeira; II é falsa, não verdadeira.", "e": "Incorreta: I é falsa, não verdadeira; III é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: b)</strong> I – Falsa; II – Falsa; III – Verdadeira.</p>
          <p>F-F-V; cada stakeholder recebe a informação conforme seu envolvimento; o patrocinador precisa saber da evolução do cronograma e dos valores gastos.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Plano de comunicação: cada stakeholder recebe a informação conforme seu envolvimento e interesse, no momento adequado e em formato adequado. O patrocinador acompanha evolução do cronograma e valores gastos. Comunicar tudo a todos, ou apenas no final, é prática incorreta.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Ferramentas e Qualidade em Projeto de Software\", seção \"Gestão da comunicação\", p. 16",
          limitacao: "A veracidade da III é interpretação, com base na importância da comunicação descrita no livro."
        },
        {
          numero: 7,
          enunciado: `<p>A montadora de motocicletas elétrica tem o novo projeto em estudo para o desenvolvimento do sistema para produção de versões específicas de motocicletas para o mercado brasileiro.</p>
      <p>O desafio do Scrum Master e do Product Owner é identificar os principais Stakeholders que vão influenciar diretamente na definição de requisitos, conforme:</p>
      <p>Na fase de validação o engenheiro de Testes e Garantia de Qualidade: tarefa por testar o aplicativo para identificar bugs, garantir que ele funcione corretamente e relatar quaisquer problemas aos desenvolvedores para correção. Durante da transição o Key User da Equipe de Suporte ao Cliente: que lida com dúvidas, reclamações e problemas relatados pelos usuários do aplicativo. Eles desempenham um papel fundamental na satisfação do cliente. Na identificação das necessidades locais, o especialista em Marketing: para promover o aplicativo, atrair usuários, criar campanhas de marketing e comunicar os benefícios do serviço.</p>
      <p>Nesse cenário, as informações são comunicadas em alta velocidade, na qual se tornar enorme a responsabilidade de consolidá-las adequadamente.</p>
      <p>Escolha a alternativa correta que classifica corretamente a informação e para qual atividade será adequadamente utilizada.</p>`,
          alternativas: ["As atividades do Marketing são realizadas antes da concepção do projeto, para que o Product Owner tenha referências dos requisitos.", "Ao testar o software, no momento do planejamento dos itens para o desenvolvimento, antecipará os problemas.", "Durante a transição, muitos requisitos funcionais novos podem surgir para serem definidos e priorizados pelo Product Owner.", "O feedback do Key User é realizado durante a fase de Testes e garantia da qualidade.", "Todos os bugs identificados na fase de testes devem ser corrigidos pelos testadores."],
          resposta: "c",
          comentarios: {"a": "Incorreta: as atividades de marketing ocorrem na identificação das necessidades locais, não antes da concepção.", "b": "Incorreta: testar durante o planejamento dos itens troca as fases (teste ocorre na validação).", "c": "Correta: na transição, o Key User gera demandas que viram novos requisitos funcionais, definidos e priorizados pelo PO.", "d": "Incorreta: o feedback do Key User ocorre na transição, não na fase de testes.", "e": "Incorreta: o texto diz que os bugs são relatados aos desenvolvedores para correção."},
          resolucao: `<p><strong>Resposta: c)</strong> Durante a transição, muitos requisitos funcionais novos podem surgir para serem definidos e priorizados pelo Product Owner.</p>
          <p>O Key User do suporte atua na transição e gera novas demandas; as demais alternativas trocam fases e papéis.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>No Scrum, o Product Owner define e prioriza o backlog. Na fase de transição para produção, o suporte e o key user geram novas demandas e requisitos funcionais, que o PO prioriza. Atenção às trocas de fase e de papel nas demais alternativas.</p></div>`,
          fonte: "Sem fonte direta na pasta (ver limitação).",
          limitacao: "O cenário não consta no material; apoio parcial em HAMI_PRO_SOFT_ U1 - Livro Didático.pdf, U1, aula \"Introdução a Projeto de Software\" (usuário-chave define funcionalidades/requisitos funcionais), p. 2. Julgamento por eliminação e conhecimento geral."
        },
        {
          numero: 8,
          enunciado: `<p>Vejamos, no projeto de software da QueSO Co. verifica-se que nem toda documentação é tão útil, pois se for extensa com exagero, ou redigida em uma linguagem pouco sucinta, ou com informações além do essencial, se transformará em material inacessível. Enfim, cada projeto e cenário, exigirá uma formalização compatível com os seus envolvidos.</p>
      <p>Escolha a alternativa correta.</p>`,
          alternativas: ["O importante da documentação é estar guardada num servidor de banco de dados.", "A documentação recomendada é a longa e detalhada.", "Um documento sucinto se torna inacessível.", "Uma documentação detalhada, se torna rápida para ler e interpretar.", "O conteúdo essencial num documento, colaborará com o projeto de software."],
          resposta: "e",
          comentarios: {"a": "Incorreta: guardar a documentação em servidor não é o essencial.", "b": "Incorreta: documentação longa e detalhada tende a ser inacessível.", "c": "Incorreta: é o documento extenso que se torna inacessível.", "d": "Incorreta: documentação detalhada demais é lenta de ler e interpretar.", "e": "Correta: o conteúdo essencial colabora com o projeto."},
          resolucao: `<p><strong>Resposta: e)</strong> O conteúdo essencial num documento, colaborará com o projeto de software.</p>
          <p>Documentação extensa ou com informações além do essencial se torna inacessível.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Documentação sucinta, com conteúdo essencial, colabora com o projeto; extensa demais, ou com informações além do essencial, torna-se inacessível. Guardar em servidor, por si só, não define sua utilidade.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Documentação do projeto\", seção \"Por que e quando documentar\", p. 11"
        },
        {
          numero: 9,
          enunciado: `<p>Segundo (Maximiano, 2022), existem ferramentas importantes no gerenciamento de projeto de software, aumentando a eficiência na comunicação e na compreensão dos elementos fundamentais de um projeto. Para o detalhamento do escopo, após a declaração sucinta da abrangência do escopo, é uma relação, em partes menores do produto, a ser desenvolvido e entregue.</p>
      <p>De qual ferramenta o autor está referenciando e qual é o objetivo desta ferramenta?</p>`,
          alternativas: ["Mapa mental, importantes para relacionar os requisitos por Stakeholder.", "Burndwon que mostra a evolução dos pontos entregáveis.", "WBS ou EAP, importantes para relacionar itens entregáveis.", "WBS ou EAP, importantes para declaração dos Stakeholders.", "GANTT, para visualização dos itens entregáveis."],
          resposta: "c",
          comentarios: {"a": "Incorreta: mapa mental não é a ferramenta de decomposição hierárquica do escopo.", "b": "Incorreta: Burndown mostra evolução por Sprint, não detalha o escopo.", "c": "Correta: WBS/EAP decompõe o escopo em partes menores a desenvolver e entregar.", "d": "Incorreta: a EAP não serve para declaração dos stakeholders.", "e": "Incorreta: Gantt mostra cronograma e dependências, não decompõe o escopo."},
          resolucao: `<p><strong>Resposta: c)</strong> WBS ou EAP, importantes para relacionar itens entregáveis.</p>
          <p>A WBS/EAP decompõe hierarquicamente o escopo em partes menores a desenvolver e entregar.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>WBS ou EAP (Work Breakdown Structure) decompõe hierarquicamente o escopo em itens entregáveis menores, apoiando o detalhamento do escopo. Burndown mostra evolução do trabalho restante; Gantt mostra cronograma e dependências; mapa mental organiza ideias; nenhum deles é a ferramenta de detalhamento do escopo por entregáveis.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Ferramentas e Qualidade em Projeto de Software\", seção \"Ferramentas para modelos sequencial e ágil\" (WBS/EAP como decomposição hierárquica), p. 15-16",
          limitacao: "A associação ao objetivo de relacionar itens entregáveis é interpretação."
        },
        {
          numero: 10,
          enunciado: `<p>O time de TI está analisando os possíveis riscos em função de sua natureza, no projeto da Seiko.COM. Juntamente com o gestor do projeto resolvem implementar medidas como criptografia SSL, para proteger as informações dos usuários durante a transmissão; proteger o sistema contra-ataques comuns, como SQL injection e cross-site scripting (XSS).</p>
      <p>Analise as afirmativas.</p>
      <p>I. A situação se relaciona com a segurança, portanto pode ser criado uma natureza de risco: Segurança.</p>
      <p>II. A situação se relaciona com teste de funcionalidade, sendo assim a natureza de risco é Requisitos.</p>
      <p>III. A situação se relaciona com Design de arquitetura, conquanto a natureza de risco é Engenharia de Software.</p>
      <p>Escolha a alternativa correta.</p>`,
          alternativas: ["I – Verdadeira; II – Verdadeira; III – Falsa.", "I – Falsa; II – Verdadeira; III – Falsa.", "I – Verdadeira; II – Falsa; III – Falsa.", "I – Verdadeira; II – Verdadeira; III – Verdadeira.", "I – Falsa; II – Falsa; III – Falsa."],
          resposta: "c",
          comentarios: {"a": "Incorreta: II é falsa, não verdadeira.", "b": "Incorreta: I é verdadeira, não falsa; II é falsa, não verdadeira.", "c": "Correta: I verdadeira; II falsa; III falsa.", "d": "Incorreta: II é falsa, não verdadeira; III é falsa, não verdadeira.", "e": "Incorreta: I é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: c)</strong> I – Verdadeira; II – Falsa; III – Falsa.</p>
          <p>V-F-F; novas naturezas de risco podem ser criadas conforme surgem riscos, e as medidas de SSL, SQL injection e XSS se enquadram em Segurança.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Naturezas de risco (categorias) podem ser criadas conforme surgem novos riscos. Medidas como criptografia SSL, proteção contra SQL injection e XSS pertencem à natureza segurança. Julgue cada afirmativa pela definição de natureza e pela medida citada.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Gestão de riscos\", seção \"Mapeamento de risco e natureza do risco\", p. 2-3",
          limitacao: "A classificação de II e III como falsas é interpretação."
        }
      ]
    },
    {
      id: "u3-avaliacao-unidade",
      titulo: "U3 — Avaliação da Unidade",
      fonte: "U3 - Avaliação da Unidade.txt",
      questoes: [
        {
          numero: 1,
          enunciado: `<p>Num programa de qualidade da empresa POSTAgro, o gestor discute com os envolvidos sobre uma evolução constante da qualidade no processo e do produto de software.</p>
      <p>Com base nos níveis de maturidade do CMMI, o gestor quer que cada membro saiba se posicionar e reconhecer como estão os processos, diante dos resultados esperados em cada um dos níveis.</p>
      <p>Escolha a alternativa correta, conforme define o modelo de maturidade CMMI em níveis.</p>`,
          alternativas: ["O nível 0 é o primeiro, em que se percebe as atividades sendo controladas.", "No nível 3 é possível verificar que os processos estão sendo medidos.", "A otimização e melhoria dos processos é verificada no nível 5.", "Estar no nível 4 é comprovar que os processos estão em otimização.", "O nível 1 indica que os processos de desenvolvimento estão sendo implantados."],
          resposta: "c",
          comentarios: {"a": "Incorreta: não existe nível 0 no modelo do livro; o 1 é o primeiro e o controlado é o 2.", "b": "Incorreta: o nível 3 é padronizado; processos medidos estão no nível 4.", "c": "Correta: o nível 5 é 'em otimização'.", "d": "Incorreta: o nível 4 é medido; otimização é o 5.", "e": "Incorreta: o nível 1 é 'executada' (atividades para entregar o produto); implantação de processos é o nível 2."},
          resolucao: `<p><strong>Resposta: c)</strong> A otimização e melhoria dos processos é verificada no nível 5.</p>
          <p>Nível 5 = Em otimização; o 3 é padronizado, o 4 é medido, o 1 é executado e o 2 é controlado.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>CMMI, níveis de maturidade, como no material: 1 executado, 2 controlado, 3 padronizado, 4 medido, 5 em otimização (melhoria contínua dos processos). O modelo não tem nível 0.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Gestão da Qualidade em Projeto de Software\", seção \"Maturidade em projeto de software\", p. 7"
        },
        {
          numero: 2,
          enunciado: `<p>Um evento importante na gestão da empresa TradeREV, é a reunião de revisão. Dependendo do material sob revisão, é possível a participação de usuários e especialistas externos. Em casos excepcionais, é permitida a presença de observadores, para fins de treinamento, avaliação, ou transmissão de conhecimento. Esses observadores não deverão se manifestar durante a realização da revisão. O líder pode abrir exceções para pedidos de esclarecimentos, tendo em vista eventuais objetivos didáticos.</p>
      <p>Porém, sabe-se que a preparação e a condução de uma reunião de revisão são fundamentais para o resultado satisfatório.</p>
      <p>Associe as colunas relacionadas à reunião de revisão.</p>
      <p>Coluna A:</p>
      <p>I. Preparação.</p>
      <p>II. Condução.</p>
      <p>III. Final da revisão.</p>
      <p>Coluna B:</p>
      <p>1. Não permitir que a discussão perca a objetividade.</p>
      <p>2. Conferir se todas as providências necessárias para a realização da reunião foram efetuadas.</p>
      <p>3. Garantir que o relatório esteja pronto e que seja preciso e conforme ao respectivo padrão.</p>
      <p>Escolha a alternativa que associa as duas colunas corretamente.</p>`,
          alternativas: ["I – 1; II – 3; III – 2.", "I – 3; II – 2; III – 1.", "I – 1; II – 2; III – 3.", "I – 2; II – 1; III – 3.", "I – 2; II – 3; III – 1."],
          resposta: "d",
          comentarios: {"a": "Incorreta: I não é 1 (o correto é 2); II não é 3 (o correto é 1); III não é 2 (o correto é 3).", "b": "Incorreta: I não é 3 (o correto é 2); II não é 2 (o correto é 1); III não é 1 (o correto é 3).", "c": "Incorreta: I não é 1 (o correto é 2); II não é 2 (o correto é 1).", "d": "Correta: I-2, II-1, III-3.", "e": "Incorreta: II não é 3 (o correto é 1); III não é 1 (o correto é 3)."},
          resolucao: `<p><strong>Resposta: d)</strong> I-2, II-1, III-3.</p>
          <p>Preparação = conferir providências; condução = manter a objetividade; final = relatório pronto e conforme o padrão.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Reunião de revisão: preparação (conferir providências e materiais), condução (manter a objetividade e o foco) e final (relatório pronto e conforme o padrão). Associe cada etapa pela sua função.</p></div>`,
          fonte: "Sem fonte direta na pasta (ver limitação).",
          limitacao: "O conteúdo da reunião de revisão não consta no texto do material; o livro apenas indica a leitura (HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Gestão da Qualidade em Projeto de Software\", Saiba mais, item 1, p. 7). Julgamento pela lógica das etapas e conhecimento geral."
        },
        {
          numero: 3,
          enunciado: `<p>O gestor de projeto de software da YUKRI faz questão de analisar as opiniões dos operadores do sistema, pois reconhece que essa interação fortalece a decisão para modificar a arquitetura da aplicação.</p>
      <p>O time de TI deve receber um documento de feedback, conforme Pressman (2021, p. 184) "sem a documentação do que funcionou e do que não funcionou, é difícil para os engenheiros de software decidirem quando devem inovar e quando devem usar uma arquitetura criada anteriormente."</p>
      <p>Escolha a alternativa correta.</p>`,
          alternativas: ["O feedback se torna válido na última iteração, na entrega final da aplicação.", "Com o feedback, os engenheiros de software podem melhorar a arquitetura da aplicação.", "O feedback de um projeto se dará na primeira reunião do planejamento.", "A arquitetura do software não sofre alteração após a primeira iteração do projeto.", "A documentação de feedback se destina aos operadores do sistema."],
          resposta: "a",
          comentarios: {"a": "Registrada como resposta por eliminação após a opção b ser marcada incorreta pelo sistema; ainda não confirmada.", "b": "Marcada como incorreta pelo sistema em tentativa anterior.", "c": "Incorreta: não há base no material para situar o feedback na primeira reunião de planejamento.", "d": "Incorreta: a arquitetura pode ser alterada pelo feedback.", "e": "Incorreta: o documento de feedback é recebido pelo time de TI."},
          resolucao: `<p><strong>Resposta: a)</strong> O feedback se torna válido na última iteração, na entrega final da aplicação.</p>
          <div class="caixa nota" data-titulo="Correção"><p>Corrigida após o sistema marcar como incorreta a opção b; o livro situa o documento de feedback na fase de validação, quando os usuários avaliam o software recém-implantado; resposta ainda não confirmada pelo sistema.</p></div>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Feedback no projeto serve para validar o produto com os usuários e retroalimentar a arquitetura e as próximas entregas; o livro situa o documento de feedback na validação do software recém-implantado. Cuidado com generalizações como 'só na última iteração' ou 'só na primeira reunião'.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Documentação do projeto\", seção \"Riscos pela ausência de documentação\", p. 11 (documento de feedback na fase de validação, com o software recém-implantado)",
          limitacao: "A leitura de que isso corresponde à última iteração, na entrega final, é interpretação, por eliminação das demais opções."
        },
        {
          numero: 4,
          enunciado: `<p>O Scrum Master determina rigor máximo na comunicação, ele mesmo sabe que muitas vezes necessita se atentar na condução do time, para obter o máximo de compreensão dos membros.</p>
      <p>Analise as afirmativas conforme a gestão da comunicação.</p>
      <p>I. A WBS tem papel fundamental para mostrar e acompanhar os itens entregáveis de um produto de software.</p>
      <p>II. Um fator relevante na comunicação é o momento que a informação chega ao destinatário, é crucial para tomada de decisões.</p>
      <p>III. O Kanban é uma ferramenta destinada para visualizar os itens em desenvolvimento e as fases/etapas de cada item.</p>
      <p>Analise as afirmativas e escolha a alternativa que classifica corretamente.</p>`,
          alternativas: ["I – Verdadeira; II – Falsa; III – Falsa.", "I – Verdadeira; II – Verdadeira; III – Falsa.", "I – Verdadeira; II – Verdadeira; III – Verdadeira.", "I – Falsa; II – Falsa; III – Verdadeira.", "I – Falsa; II – Falsa; III – Falsa."],
          resposta: "c",
          comentarios: {"a": "Incorreta: II é verdadeira, não falsa; III é verdadeira, não falsa.", "b": "Incorreta: III é verdadeira, não falsa.", "c": "Correta: I verdadeira; II verdadeira; III verdadeira.", "d": "Incorreta: I é verdadeira, não falsa; II é verdadeira, não falsa.", "e": "Incorreta: I é verdadeira, não falsa; II é verdadeira, não falsa; III é verdadeira, não falsa."},
          resolucao: `<p><strong>Resposta: c)</strong> I – Verdadeira; II – Verdadeira; III – Verdadeira.</p>
          <p>V-V-V; WBS acompanha o andamento, o momento da informação é fator relevante e a visão Kanban indica atividades em execução, prontas e concluídas.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Comunicação: a WBS ajuda a acompanhar o andamento; o momento certo da informação é fator relevante; a visão Kanban mostra atividades em execução, prontas para iniciar e concluídas. As três afirmativas refletem o conteúdo da aula de ferramentas e gestão da comunicação.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Ferramentas e Qualidade em Projeto de Software\", seções \"Ferramentas para modelos sequencial e ágil\" e \"Gestão da comunicação\", p. 15-16"
        },
        {
          numero: 5,
          enunciado: `<p>O projeto está sendo executado em várias frentes, em definição da matriz de riscos e na implantação do parque computacional, criando um servidor que gerencie as operações de desenvolvimento, como verificação de disponibilidade de recursos.</p>
      <p>Analise a asserção-razão.</p>
      <p>I. O propósito da matriz de risco é a redução da probabilidade e impacto de eventos negativos, sendo que durante a elaboração dela, possam identificar e priorizar requisitos funcionais,</p>
      <p>Porque</p>
      <p>II. o plano de ação para determinado risco é elaborado antes da criação da matriz de riscos.</p>
      <p>Escolha a alternativa correta.</p>`,
          alternativas: ["As duas afirmações são verdadeiras, e a segunda justifica a primeira.", "As duas afirmações são falsas.", "A primeira afirmação é falsa, e a segunda é verdadeira.", "A primeira afirmação é verdadeira, e a segunda é falsa.", "As duas afirmações são verdadeiras, e a segunda não justifica a primeira."],
          resposta: "b",
          comentarios: {"a": "Incorreta: a I é falsa, não verdadeira; a II é falsa, não verdadeira.", "b": "Correta: I é falsa e II é falsa.", "c": "Incorreta: a II é falsa, não verdadeira.", "d": "Incorreta: a I é falsa, não verdadeira.", "e": "Incorreta: a I é falsa, não verdadeira; a II é falsa, não verdadeira."},
          resolucao: `<p><strong>Resposta: b)</strong> As duas afirmações são falsas.</p>
          <p>A matriz serve para identificar e priorizar riscos, não requisitos funcionais; o plano de ação consta na própria matriz, não é elaborado antes dela.</p>
          <div class="caixa definicao" data-titulo="Conceito por trás da questão"><p>Matriz de riscos: identifica e prioriza riscos e registra causa, ação e efeito; não serve para levantar requisitos funcionais. O plano de ação faz parte da própria matriz, não precede sua elaboração.</p></div>`,
          fonte: "HAMI_PRO_SOFT_ U3 - Livro Didático.pdf, U3, aula \"Gestão de riscos\", seção \"Matriz de risco\", p. 2"
        }
      ]
    }
  ]
});
