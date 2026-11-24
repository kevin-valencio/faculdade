registrarReforco({
  disciplina: "sdm",
  visaoGeral: `<p>Aula completa de reforço sobre as duas filosofias de projeto de processadores, <strong>RISC</strong> e <strong>CISC</strong>, e sobre a arquitetura <strong>MIPS</strong>, a implementação RISC estudada na Unidade 3. A sequência vai do conceito de conjunto de instruções até pipeline, formatos e modos de endereçamento do MIPS, e termina com um resumo e as pegadinhas que apareceram nos questionários.</p>
  <div class="caixa nota"><p>Base principal: <em>AulaSD_4.pptx</em> e <em>U3 - Livro Didático</em> (Aulas 3, 4 e 5). Trechos que vêm de conhecimento geral de arquitetura de computadores estão nas caixas "Complemento externo" ou marcados como tal. Quando o material diverge do que é usual na literatura, a divergência é sinalizada; para a prova, siga o material.</p></div>`,
  fontes: [
    "AulaSD_4.pptx (slides 19-21, 24-39)",
    "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf (Aula 3 - Arquitetura RISC; Aula 4 - Arquitetura CISC; Aula 5 - Revisão)",
    "U3 - Atividade de Aprendizagem.txt e U3 - Avaliação da Unidade.txt (questões sobre o tema)",
    "Atividade_avaliativa.pdf (Questões 6 e 7)",
    "Complementos externos: conhecimento geral de arquitetura de computadores (Patterson e Hennessy; Stallings), sinalizados no texto"
  ],
  modulos: [
    {
      id: "rf-base",
      titulo: "1. Ponto de partida: o conjunto de instruções",
      intro: `<p>Antes de comparar RISC e CISC, é preciso entender o que está sendo comparado: o conjunto de instruções que o processador sabe executar.</p>`,
      topicos: [
        {
          id: "rf-isa",
          titulo: "Conjunto de instruções (ISA)",
          fonte: "AulaSD_4.pptx, slide 21; U3 - Livro Didático, Aula 3",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>O <span class="termo">conjunto de instruções</span> é a lista de operações que um processador consegue executar. Em inglês, <strong>ISA</strong> (<em>Instruction Set Architecture</em>).</dd>
              <dt>Quem define</dt><dd>Cada componente tem seu próprio conjunto de instruções, fornecido pelo fabricante. O fabricante costuma fornecer também um <strong>montador (assembler)</strong>, que transforma as instruções em assembly em <strong>código de máquina</strong>.</dd>
              <dt>Duas filosofias</dt><dd>
                <ul>
                  <li>Conjunto <strong>reduzido</strong> de instruções: <strong>RISC</strong> (<em>Reduced Instruction Set Computing</em>).</li>
                  <li>Conjunto <strong>complexo</strong> de instruções: <strong>CISC</strong> (<em>Complex Instruction Set Computing</em>).</li>
                </ul>
              </dd>
            </dl>
            <div class="caixa prova"><p>Regra direta do material: <strong>instruções reduzidas = RISC</strong>; <strong>instruções complexas = CISC</strong>. RISC e CISC <strong>não</strong> são termos intercambiáveis e <strong>não</strong> têm o mesmo desempenho (U3 Atividade de Aprendizagem, Q2).</p></div>
          `
        },
        {
          id: "rf-componentes-cpu",
          titulo: "Peças da CPU que aparecem no assunto",
          fonte: "U3 - Livro Didático, Aula 3 (Lenz, 2009; Stallings, 2010) e Aula 5",
          html: `
            <table>
              <thead><tr><th>Componente</th><th>Função</th></tr></thead>
              <tbody>
                <tr><td>Unidade de Controle (UC)</td><td>Comanda o fluxo de dados entre memórias, periféricos e ULA; coordena as operações do processador.</td></tr>
                <tr><td>ULA (Unidade Lógica e Aritmética)</td><td>Executa as operações aritméticas (adição, subtração, multiplicação) e lógicas (AND, OR, NOT) da lista de instruções.</td></tr>
                <tr><td>Registradores</td><td>Pequenas memórias de alta velocidade dentro da CPU; guardam dados e informações de controle temporariamente.</td></tr>
                <tr><td>Contador de Programa (PC)</td><td>Registrador que guarda o endereço da próxima instrução a ser buscada na memória.</td></tr>
              </tbody>
            </table>
            <div class="caixa prova"><p>Quem faz conta é a <strong>ULA</strong>. A UC não realiza operações lógicas e aritméticas: ela controla e sincroniza.</p></div>
          `
        }
      ]
    },
    {
      id: "rf-risc",
      titulo: "2. Arquitetura RISC",
      topicos: [
        {
          id: "rf-risc-conceito",
          titulo: "Conceito e ideia central",
          fonte: "AulaSD_4.pptx, slide 24; U3 - Livro Didático, Aula 3",
          html: `
            <div class="caixa definicao"><p><strong>RISC</strong> (<em>Reduced Instruction Set Computing</em>, Computação com Conjunto Reduzido de Instruções) é a arquitetura que emprega um <strong>conjunto de instruções reduzido, simples e otimizado</strong>.</p></div>
            <dl class="campos">
              <dt>Objetivo</dt><dd>Simplificar o processamento para que <strong>cada instrução seja executada rapidamente</strong>, em <strong>poucos ciclos de clock</strong>.</dd>
              <dt>Resultado</dt><dd>Maior eficiência e <strong>desempenho mais rápido e previsível</strong>.</dd>
              <dt>Contraste</dt><dd>Opõe-se à CISC, que usa um conjunto mais extenso e complexo de instruções.</dd>
            </dl>
          `
        },
        {
          id: "rf-risc-caracteristicas",
          titulo: "Características e vantagens",
          fonte: "AulaSD_4.pptx, slides 24-25 e 39; U3 - Livro Didático, Aula 3 (Stallings, 2010, p. 337)",
          html: `
            <h4>Segundo o material</h4>
            <ul>
              <li>Conjunto de instruções <strong>reduzido</strong>, com operações fundamentais <strong>simples e bem definidas</strong>.</li>
              <li><strong>Poucos formatos de instrução</strong>, uniformes, o que <strong>simplifica o controle</strong> do processador.</li>
              <li>Foco em <strong>simplicidade e pipeline</strong>: as instruções simples permitem sobrepor a execução de várias delas.</li>
              <li>Uso de <strong>registradores</strong> para armazenamento temporário.</li>
              <li>Conjunto de <strong>modos de endereçamento relativamente simples e direto</strong> (Stallings).</li>
            </ul>
            <div class="caixa externo"><p>Características usuais de RISC na literatura (Patterson e Hennessy; Stallings), não detalhadas no material:</p>
              <ul>
                <li>Instruções de <strong>tamanho fixo</strong> (no MIPS, 32 bits).</li>
                <li>Arquitetura <strong>load/store</strong>: só LOAD e STORE acessam a memória; as operações aritméticas trabalham com registradores.</li>
                <li><strong>Muitos registradores</strong> de uso geral.</li>
                <li>Unidade de controle normalmente <strong>por hardware (hardwired)</strong>, sem microprogramação.</li>
                <li>Programas com <strong>mais instruções</strong>, porém cada uma mais rápida.</li>
              </ul>
            </div>
          `
        },
        {
          id: "rf-risc-harvard-pic",
          titulo: "RISC nos microcontroladores: Harvard e PIC",
          fonte: "AulaSD_4.pptx, slides 17-20",
          html: `
            <ul>
              <li>Na <strong>arquitetura Harvard</strong>, dados e programa ficam em memórias separadas, com <strong>dois barramentos</strong>. O processador busca uma instrução enquanto acessa dados, e por isso executa um programa em menos tempo que um Von Neumann de mesmo clock.</li>
              <li>O material associa: microcontroladores <strong>Harvard</strong> = "microcontroladores <strong>RISC</strong>"; microcontroladores <strong>Von Neumann</strong> = "microcontroladores <strong>CISC</strong>".</li>
              <li><strong>PIC</strong> (Microchip): 8, 16 e 32 bits, <strong>arquitetura Harvard</strong> e conjunto de instruções <strong>RISC</strong>, com conjuntos de <strong>35 e 76 instruções</strong>; programação por Flash, EEPROM e OTP.</li>
            </ul>
            <div class="caixa nota" data-titulo="Divergência"><p>A associação Harvard = RISC e Von Neumann = CISC é do material, para microcontroladores. Na literatura, organização de memória (Harvard ou Von Neumann) e tipo de conjunto de instruções (RISC ou CISC) são características independentes. Para a prova, use a associação do material.</p></div>
          `
        },
        {
          id: "rf-risc-exemplos",
          titulo: "Exemplos de processadores RISC",
          fonte: "AulaSD_4.pptx, slides 20 e 25; U3 - Livro Didático, Aula 3",
          html: `
            <ul>
              <li><strong>MIPS</strong>: implementação RISC de referência, estudada em detalhe no módulo 5.</li>
              <li><strong>PIC</strong>: microcontroladores Harvard com instruções RISC.</li>
            </ul>
            <div class="caixa externo"><p>Também são RISC (conhecimento geral): <strong>ARM</strong> (celulares e a maioria dos sistemas embarcados), <strong>RISC-V</strong>, <strong>SPARC</strong> e <strong>PowerPC</strong>. O AVR dos Arduinos Uno/Mega também é RISC.</p></div>
          `
        }
      ]
    },
    {
      id: "rf-cisc",
      titulo: "3. Arquitetura CISC",
      topicos: [
        {
          id: "rf-cisc-conceito",
          titulo: "Conceito e características",
          fonte: "AulaSD_4.pptx, slide 35; U3 - Livro Didático, Aula 4 (Lenz, 2019, p. 29 e 137; Silva, 2023, p. 43)",
          html: `
            <div class="caixa definicao"><p><strong>CISC</strong> (<em>Complex Instruction Set Computing</em>) é a abordagem de projeto que oferece um <strong>conjunto de instruções complexo</strong>, permitindo executar <strong>operações diversas em uma única instrução</strong>.</p></div>
            <dl class="campos">
              <dt>Característica principal</dt><dd>Capacidade de <strong>realizar múltiplas operações ou acessar múltiplos locais de memória com uma única instrução</strong> (Silva, 2023).</dd>
              <dt>Comparação com RISC</dt><dd>Tem instruções que, num processador RISC, <strong>precisariam de várias instruções</strong> para resolver o mesmo problema (Lenz, 2019).</dd>
              <dt>Tamanho das instruções</dt><dd>As instruções podem ter <strong>diferentes tamanhos e complexidades</strong>.</dd>
              <dt>Custo</dt><dd>Permite mais instruções, e mais complexas, mas <strong>precisa de mais acessos à pilha de memória de instruções</strong> (Lenz, 2019, p. 137).</dd>
              <dt>Vantagem</dt><dd><strong>Conveniência para o programador</strong>: uma única instrução pode combinar operação aritmética, lógica, movimentação de dados e controle de fluxo, reduzindo o número de instruções do programa.</dd>
            </dl>
            <div class="caixa nota" data-titulo="Divergência"><p>O livro (Aula 4) diz que as instruções CISC podem realizar operações complexas "com apenas um único ciclo de clock". Na literatura, o usual é o contrário: instruções CISC complexas costumam levar <strong>vários ciclos</strong>, e executar instruções em poucos ciclos é marca do RISC. Se a prova repetir a frase do livro, considere a versão do livro.</p></div>
          `
        },
        {
          id: "rf-microprogramacao",
          titulo: "Microprogramação",
          fonte: "AulaSD_4.pptx, slide 36; U3 - Livro Didático, Aula 4 (Stallings, 2010, p. 485)",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>Técnica central das arquiteturas CISC: cada instrução de nível superior é <strong>decomposta em uma sequência de microinstruções</strong> de nível inferior.</dd>
              <dt>Como funciona</dt><dd>
                <ol>
                  <li>O processador recebe uma instrução complexa.</li>
                  <li>A <strong>unidade de controle microprogramada</strong> busca a sequência de microinstruções correspondente.</li>
                  <li>As microinstruções são executadas (pela Máquina MAC, segundo o material) e cumprem a instrução original.</li>
                </ol>
              </dd>
              <dt>Vantagem principal</dt><dd><strong>Simplifica o projeto da unidade de controle</strong>, tornando a implementação <strong>mais barata e menos propensa a erros</strong> (Stallings). Também facilita a manutenção e a modificação da arquitetura.</dd>
            </dl>
            <div class="caixa prova"><p>Pegadinha recorrente: a vantagem da microprogramação é <strong>reduzir custo e simplificar o projeto</strong>, nunca "aumentar a complexidade do projeto" (U3 Atividade de Aprendizagem, Q10).</p></div>
          `
        },
        {
          id: "rf-maquina-mac",
          titulo: "Máquina MAC",
          fonte: "U3 - Livro Didático, Aula 4; AulaSD_4.pptx, slides 36 e 38",
          html: `
            <p>O material apresenta a Máquina MAC de dois jeitos complementares. Os dois podem cair:</p>
            <table>
              <thead><tr><th>Visão</th><th>O que é</th></tr></thead>
              <tbody>
                <tr><td>Unidade de controle (microprogramação e controle)</td><td>Unidade de controle especializada das arquiteturas CISC. <strong>Gera os sinais de controle</strong> para instruções que envolvem múltiplas operações e <strong>traduz instruções de alto nível em microinstruções</strong>.</td></tr>
                <tr><td><em>Multiplication-Accumulation</em> (multiplicação e acumulação)</td><td>Unidade que <strong>multiplica e acumula</strong> dados de forma eficiente. Comum em <strong>DSP</strong> (processamento digital de sinais): filtragem, modulação, demodulação e transformadas.</td></tr>
              </tbody>
            </table>
            <h4>Instruções da Máquina MAC</h4>
            <ul>
              <li><strong>Multiplicar (Multiply)</strong>: multiplica dois operandos.</li>
              <li><strong>Acumular (Accumulate)</strong>: multiplica dois operandos e <strong>soma o resultado ao acumulador</strong>.</li>
              <li>Podem ser combinadas em sequência e completadas por instruções de carregar registradores, armazenar na memória etc.</li>
            </ul>
            <div class="formula">acumulador &larr; acumulador + (a &times; b)</div>
            <div class="caixa exemplo"><p><strong>Filtro digital de áudio:</strong> para cada amostra, multiplica-se o valor de entrada pelo coeficiente do filtro e acumula-se o resultado na saída. A Máquina MAC repete essa operação para cada amostra com eficiência.</p></div>
            <div class="caixa prova"><ul>
              <li>Máquina MAC no processamento de áudio: <strong>aplica filtros digitais por operações de multiplicação e acumulação</strong> (U3 Atividade de Aprendizagem, Q9).</li>
              <li>"A Máquina MAC representa uma coordenadora de sinais de controle para instruções complexas" foi considerada <strong>correta</strong> (Q10, afirmativa III).</li>
            </ul></div>
          `
        },
        {
          id: "rf-mic",
          titulo: "Arquitetura MIC (Many Integrated Core)",
          fonte: "U3 - Livro Didático, Aula 4",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd><strong>MIC</strong> (<em>Many Integrated Core</em>) integra <strong>muitos núcleos de processamento em um único chip</strong>, trabalhando de forma altamente paralela e coordenada.</dd>
              <dt>Para quê</dt><dd>Cargas de trabalho intensivas em <strong>paralelismo</strong>, como computação de alto desempenho (HPC).</dd>
              <dt>Sinais de controle</dt><dd>Coordenam a <strong>execução paralela</strong> de várias instruções em vários núcleos: distribuem os dados entre os núcleos e mantêm a sincronização.</dd>
              <dt>Exemplo</dt><dd><strong>Intel Xeon Phi</strong>.</dd>
            </dl>
            <div class="caixa prova"><ul>
              <li>Característica da MIC: <strong>muitos núcleos em um chip, otimizada para cargas paralelas</strong> (U3 Atividade de Aprendizagem, Q8).</li>
              <li>"Ênfase em otimizações para cargas de trabalho paralelas" descreve <strong>MIC, não CISC</strong> (Q10, afirmativa I, falsa).</li>
            </ul></div>
          `
        },
        {
          id: "rf-cisc-exemplos",
          titulo: "Exemplos e aplicação: DSP de áudio",
          fonte: "AulaSD_4.pptx, slides 37-38; U3 - Livro Didático, Aula 4",
          html: `
            <h4>Exemplos de arquiteturas CISC</h4>
            <ul>
              <li><strong>Intel x86</strong>: a mais difundida, domina PCs e servidores.</li>
              <li><strong>AMD x86</strong>: alternativa à Intel em PCs e data centers.</li>
              <li><strong>IBM System/360</strong> e <strong>z/Architecture</strong>: mainframes.</li>
              <li><strong>DEC VAX</strong> (<em>Virtual Address eXtension</em>): décadas de 1970 e 1980, estações de trabalho e minicomputadores.</li>
            </ul>
            <h4>Aplicação integrada do livro</h4>
            <p>Sistema de <strong>processamento de áudio em tempo real</strong> que aplica vários filtros ao som:</p>
            <ul>
              <li><strong>CISC (x86)</strong>: instruções complexas para carregar coeficientes, multiplicar-acumular e gerenciar o fluxo de dados entre estágios.</li>
              <li><strong>Máquina MAC</strong>: multiplica cada amostra pelo coeficiente e acumula.</li>
              <li><strong>MIC (Xeon Phi)</strong>: cada núcleo aplica um filtro a um conjunto de amostras, coordenado pelos sinais de controle.</li>
              <li><strong>Microprogramação</strong>: traduz a operação de multiplicação-acumulação em microinstruções mais simples.</li>
            </ul>
          `
        }
      ]
    },
    {
      id: "rf-comparacao",
      titulo: "4. RISC x CISC",
      topicos: [
        {
          id: "rf-tabela-comparativa",
          titulo: "Tabela comparativa",
          fonte: "AulaSD_4.pptx; U3 - Livro Didático, Aulas 3 e 4. Linhas marcadas com (*) vêm de conhecimento geral.",
          html: `
            <table>
              <thead><tr><th>Aspecto</th><th>RISC</th><th>CISC</th></tr></thead>
              <tbody>
                <tr><td>Sigla</td><td>Reduced Instruction Set Computing</td><td>Complex Instruction Set Computing</td></tr>
                <tr><td>Conjunto de instruções</td><td>Reduzido, simples, otimizado</td><td>Extenso, complexo, diversificado</td></tr>
                <tr><td>O que uma instrução faz</td><td>Uma operação fundamental bem definida</td><td>Várias operações ou vários acessos à memória numa instrução</td></tr>
                <tr><td>Formato e tamanho</td><td>Poucos formatos, uniformes (MIPS: R, I, J)</td><td>Diferentes tamanhos e complexidades</td></tr>
                <tr><td>Instruções por programa</td><td>Mais instruções</td><td>Menos instruções (mais conveniente ao programador)</td></tr>
                <tr><td>Execução</td><td>Rápida, poucos ciclos, desempenho previsível</td><td>Instruções complexas; mais acessos à memória de instruções</td></tr>
                <tr><td>Unidade de controle</td><td>Simples, graças à uniformidade dos formatos (*hardwired)</td><td>Microprogramada (microinstruções, Máquina MAC)</td></tr>
                <tr><td>Pipeline</td><td>Favorecido (núcleo do projeto)</td><td>Mais difícil de usar*</td></tr>
                <tr><td>Acesso à memória*</td><td>Só LOAD e STORE</td><td>Operações podem ler e gravar direto na memória</td></tr>
                <tr><td>Microcontroladores (material)</td><td>Associado à arquitetura Harvard</td><td>Associado à arquitetura Von Neumann</td></tr>
                <tr><td>Exemplos</td><td>MIPS, PIC (*ARM, RISC-V)</td><td>Intel x86, AMD x86, IBM System/360, DEC VAX</td></tr>
              </tbody>
            </table>
            <div class="caixa externo" data-titulo="Exemplo didático (conhecimento geral)"><p>Somar dois valores que estão na memória e guardar o resultado na memória:</p>
              <ul>
                <li><strong>CISC</strong>: pode existir uma única instrução que lê os dois operandos da memória, soma e grava o resultado.</li>
                <li><strong>RISC</strong>: <code>LOAD</code> do primeiro valor para um registrador, <code>LOAD</code> do segundo, <code>ADD</code> entre registradores e <code>STORE</code> do resultado: quatro instruções simples.</li>
              </ul>
            </div>
          `
        },
        {
          id: "rf-risc-pipeline",
          titulo: "Por que o RISC favorece o pipeline",
          fonte: "AulaSD_4.pptx, slides 24-25 e 39; U3 - Livro Didático, Aula 3; Atividade_avaliativa.pdf, Questão 6",
          html: `
            <ul>
              <li>Instruções <strong>simples e de formato uniforme</strong> passam pelos mesmos estágios, com duração parecida. Assim, uma nova instrução pode entrar no pipeline a cada ciclo.</li>
              <li>A <strong>decodificação é simples</strong>: os campos estão sempre nas mesmas posições.</li>
              <li><strong>Relação tamanho x decodificação</strong>: instruções de tamanho fixo e uniforme têm decodificação simples. Instruções de tamanhos variados (CISC) exigem decodificação mais complexa, porque o processador precisa descobrir onde cada instrução termina e o que cada parte significa.</li>
            </ul>
            <div class="caixa prova"><p>Na Atividade Avaliativa: RISC tem instruções <strong>mais simples e reduzidas</strong>; CISC permite <strong>instruções complexas</strong>; RISC favorece o pipeline pela <strong>simplicidade e uniformidade</strong> das instruções.</p></div>
          `
        }
      ]
    },
    {
      id: "rf-mips",
      titulo: "5. Arquitetura MIPS",
      topicos: [
        {
          id: "rf-mips-conceito",
          titulo: "O que é MIPS",
          fonte: "AulaSD_4.pptx, slide 25; U3 - Livro Didático, Aula 3",
          html: `
            <div class="caixa definicao"><p><strong>MIPS</strong> (<em>Microprocessor without Interlocked Pipeline Stages</em>, microprocessador sem estágios de pipeline intertravados) é uma <strong>arquitetura de conjunto de instruções (ISA) do tipo RISC</strong>, conhecida pela <strong>simplicidade e eficiência</strong>.</p></div>
            <h4>Características centrais (as "quatro" do material)</h4>
            <ol>
              <li><strong>Conjunto de instruções reduzido</strong>, com operações fundamentais bem definidas.</li>
              <li><strong>Formatos de instrução uniformes</strong> (R, I e J), que simplificam o controle do processador.</li>
              <li><strong>Pipeline de múltiplos estágios</strong> (5 estágios) para otimizar o desempenho.</li>
              <li><strong>32 registradores de 32 bits</strong> para armazenamento temporário.</li>
            </ol>
            <p>Equilibra desempenho e simplicidade e influenciou muitos outros processadores RISC.</p>
            <div class="caixa externo"><p>Sobre o nome: "sem estágios intertravados" vem do projeto original, em que o hardware não parava o pipeline sozinho para resolver conflitos entre instruções dependentes. Essa tarefa ficava a cargo do compilador, que reorganizava as instruções (conhecimento geral).</p></div>
          `
        },
        {
          id: "rf-mips-componentes",
          titulo: "Componentes do MIPS",
          fonte: "U3 - Livro Didático, Aula 3 e Aula 5",
          html: `
            <table>
              <thead><tr><th>Componente</th><th>Descrição</th></tr></thead>
              <tbody>
                <tr><td>Registradores</td><td><strong>32 registradores de 32 bits</strong>, de uso geral e especiais; guardam dados temporários e informações de controle. Na notação assembly: <code>$t0</code>, <code>$t1</code> etc.</td></tr>
                <tr><td>Unidade de controle</td><td>Coordena as operações e controla o fluxo de dados e instruções entre os componentes.</td></tr>
                <tr><td>ULA</td><td>Operações aritméticas (adição, subtração, multiplicação) e lógicas (AND, OR, NOT); também calcula endereços de memória.</td></tr>
                <tr><td>PC (contador de programa)</td><td>Mantém o endereço da próxima instrução a ser buscada.</td></tr>
                <tr><td>Memória de instruções e memória de dados</td><td>Acessadas, respectivamente, no estágio IF (busca) e no estágio MEM (LOAD/STORE).</td></tr>
              </tbody>
            </table>
          `
        },
        {
          id: "rf-mips-ciclo",
          titulo: "Ciclo de instrução: as 5 etapas",
          fonte: "AulaSD_4.pptx, slides 28-31; U3 - Livro Didático, Aula 3 (Stallings, 2010, p. 56)",
          html: `
            <table>
              <thead><tr><th>Etapa</th><th>Sigla</th><th>O que acontece</th></tr></thead>
              <tbody>
                <tr><td>1. Busca da instrução</td><td>IF (<em>Instruction Fetch</em>)</td><td>A instrução é buscada na <strong>memória de instruções</strong> usando o endereço do <strong>PC</strong>.</td></tr>
                <tr><td>2. Decodificação</td><td>ID (<em>Instruction Decode</em>)</td><td>Identifica a operação e os registradores envolvidos; os <strong>registradores são lidos</strong> no banco de registradores.</td></tr>
                <tr><td>3. Execução</td><td>EX (<em>Execute</em>)</td><td>A <strong>ULA</strong> executa a operação (soma, subtração, lógica) ou <strong>calcula o endereço</strong> de memória.</td></tr>
                <tr><td>4. Acesso à memória</td><td>MEM (<em>Memory</em>)</td><td>Só se a instrução precisar: <strong>LOAD</strong> (leitura) ou <strong>STORE</strong> (escrita) na memória de dados.</td></tr>
                <tr><td>5. Escrita do resultado</td><td>WB (<em>Write Back</em>)</td><td>O resultado (da ULA ou da memória) é <strong>gravado no registrador de destino</strong>.</td></tr>
              </tbody>
            </table>
            <div class="formula">IF &rarr; ID &rarr; EX &rarr; MEM &rarr; WB</div>
            <div class="caixa prova"><ul>
              <li>A ordem é fixa: <strong>busca, decodificação, execução, memória e escrita</strong>. A decodificação não é a última etapa; o acesso à memória não é a primeira; depois da busca vem a decodificação, não a escrita (U3 Atividade de Aprendizagem, Q5).</li>
              <li>Nem toda instrução usa todos os estágios. Uma soma entre registradores, por exemplo, não acessa a memória de dados.</li>
            </ul></div>
          `
        },
        {
          id: "rf-mips-pipeline",
          titulo: "Pipeline",
          fonte: "AulaSD_4.pptx, slides 26-29 (Lenz, 2009, p. 783); U3 - Livro Didático, Aula 3",
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>Técnica que <strong>divide a execução das instruções em estágios independentes</strong>, permitindo <strong>processar várias instruções simultaneamente</strong>: enquanto uma é executada, a próxima já está sendo buscada.</dd>
              <dt>Finalidade</dt><dd>Aumentar a <strong>vazão (throughput)</strong>, isto é, o número de instruções concluídas por unidade de tempo.</dd>
              <dt>Estágios no MIPS</dt><dd><strong>5</strong>: IF, ID, EX, MEM e WB.</dd>
            </dl>
            <div class="caixa exemplo" data-titulo="Analogia da lavanderia (slides)"><p>Sem pipeline, a máquina de lavar fica parada até a roupa passar pela secadora, ser dobrada e guardada; só então começa a segunda lavagem. Com pipeline, assim que a primeira leva vai para a secadora, a segunda já entra na lavadora. Várias atividades em paralelo usam melhor os recursos e reduzem o tempo total.</p></div>
            <h4>Diagrama: 5 instruções no pipeline de 5 estágios</h4>
            <table>
              <thead><tr><th>Instrução</th><th>C1</th><th>C2</th><th>C3</th><th>C4</th><th>C5</th><th>C6</th><th>C7</th><th>C8</th><th>C9</th></tr></thead>
              <tbody>
                <tr><td>I1</td><td>IF</td><td>ID</td><td>EX</td><td>MEM</td><td>WB</td><td></td><td></td><td></td><td></td></tr>
                <tr><td>I2</td><td></td><td>IF</td><td>ID</td><td>EX</td><td>MEM</td><td>WB</td><td></td><td></td><td></td></tr>
                <tr><td>I3</td><td></td><td></td><td>IF</td><td>ID</td><td>EX</td><td>MEM</td><td>WB</td><td></td><td></td></tr>
                <tr><td>I4</td><td></td><td></td><td></td><td>IF</td><td>ID</td><td>EX</td><td>MEM</td><td>WB</td><td></td></tr>
                <tr><td>I5</td><td></td><td></td><td></td><td></td><td>IF</td><td>ID</td><td>EX</td><td>MEM</td><td>WB</td></tr>
              </tbody>
            </table>
            <div class="caixa externo" data-titulo="Cálculo (conhecimento geral)"><p>Com <em>k</em> estágios e <em>n</em> instruções, supondo um ciclo por estágio e nenhum conflito:</p>
              <div class="formula">sem pipeline: n &times; k ciclos</div>
              <div class="formula">com pipeline: k + (n &minus; 1) ciclos</div>
              <p>Para 5 instruções e 5 estágios: 25 ciclos sem pipeline e 9 com pipeline. Cada instrução continua levando 5 ciclos (a latência não diminui); o que aumenta é a quantidade de instruções concluídas por ciclo.</p>
            </div>
            <div class="caixa prova"><ul>
              <li>O pipeline do MIPS tem <strong>5 estágios</strong>, não 3 (U3 Avaliação da Unidade, Q1, afirmativa IV, falsa).</li>
              <li>Cada estágio opera de forma independente, permitindo <strong>sobreposição eficiente</strong> das operações (Q5).</li>
            </ul></div>
          `
        },
        {
          id: "rf-mips-tipos",
          titulo: "Tipos de instruções: R, I e J",
          fonte: "AulaSD_4.pptx, slide 32; U3 - Livro Didático, Aula 3",
          html: `
            <table>
              <thead><tr><th>Tipo</th><th>Uso</th><th>Exemplos</th></tr></thead>
              <tbody>
                <tr><td>R (Registrador)</td><td>Opera <strong>só com registradores</strong>: 3 registradores de operando e um campo <strong>funct</strong> que define a operação.</td><td><code>add $t0, $t1, $t2</code> (livro); <code>sub</code>, <code>and</code>, <code>or</code></td></tr>
                <tr><td>I (Imediato)</td><td>Usa uma <strong>constante de 16 bits</strong> dentro da instrução: operações com literais, <strong>LOAD/STORE</strong> e <strong>desvios condicionais (branch)</strong>.</td><td>*<code>addi</code>, <code>lw</code>, <code>sw</code>, <code>beq</code></td></tr>
                <tr><td>J (Salto)</td><td><strong>Saltos incondicionais</strong> para endereços distantes, por exemplo chamar sub-rotinas; contém um <strong>endereço de 26 bits</strong>.</td><td>*<code>j</code>, <code>jal</code></td></tr>
              </tbody>
            </table>
            <p class="fonte">* Mnemônicos citados por conhecimento geral; o material traz como exemplos ADD, SUB, LOAD, STORE e BRANCH.</p>
            <div class="caixa exemplo"><p><code>add $t0, $t1, $t2</code>: soma o conteúdo de <code>$t1</code> com o de <code>$t2</code> e guarda o resultado em <code>$t0</code>. Na analogia do livro, é combinar os ingredientes de dois potes e colocar o resultado num terceiro pote.</p></div>
            <div class="caixa prova"><p>Classificação por função também aparece: instruções <strong>aritméticas</strong>, <strong>lógicas</strong>, de <strong>transferência de dados</strong> e de <strong>controle de fluxo (branching)</strong>.</p></div>
          `
        },
        {
          id: "rf-mips-formatos",
          titulo: "Formatos de instrução e seus campos",
          fonte: "AulaSD_4.pptx, slide 33; U3 - Livro Didático, Aula 3. Larguras de 5 e 6 bits: conhecimento geral.",
          html: `
            <p>No MIPS, toda instrução tem <strong>32 bits</strong> (conhecimento geral). O que muda entre os formatos é a divisão desses bits em campos:</p>
            <h4>Formato R</h4>
            <div class="formula">opcode (6) | rs (5) | rt (5) | rd (5) | shamt (5) | funct (6)</div>
            <h4>Formato I</h4>
            <div class="formula">opcode (6) | rs (5) | rt (5) | imediato (16)</div>
            <h4>Formato J</h4>
            <div class="formula">opcode (6) | endereço (26)</div>
            <table>
              <thead><tr><th>Campo</th><th>Significado</th></tr></thead>
              <tbody>
                <tr><td>opcode</td><td>Código da operação.</td></tr>
                <tr><td>rs, rt</td><td>Registradores de origem.</td></tr>
                <tr><td>rd</td><td>Registrador de destino (só no formato R).</td></tr>
                <tr><td>shamt</td><td>Quantidade de deslocamento (<em>shift amount</em>).</td></tr>
                <tr><td>funct</td><td>Código de função: define a operação exata no formato R.</td></tr>
                <tr><td>imediato</td><td>Constante de 16 bits, ou deslocamento em LOAD/STORE e desvios.</td></tr>
                <tr><td>endereço</td><td>Destino do salto, com 26 bits.</td></tr>
              </tbody>
            </table>
            <div class="caixa prova"><ul>
              <li>São <strong>três formatos: R, I e J</strong>. "O MIPS usa um único formato, o R-format" é falso (U3 Avaliação da Unidade, Q1, afirmativa I).</li>
              <li>Números do material: imediato de <strong>16 bits</strong> (formato I) e endereço de <strong>26 bits</strong> (formato J).</li>
              <li>Diferença R x I x J: R opera só com registradores; I traz uma constante; J faz salto incondicional.</li>
            </ul></div>
          `
        },
        {
          id: "rf-mips-enderecamento",
          titulo: "Modos de endereçamento",
          fonte: "AulaSD_4.pptx, slide 34; U3 - Livro Didático, Aula 3 (Stallings, 2010, p. 337)",
          html: `
            <p>Modos de endereçamento indicam <strong>onde está o operando</strong> de uma instrução. Uma máquina RISC usa um conjunto de modos <strong>simples e direto</strong>.</p>
            <table>
              <thead><tr><th>Modo</th><th>Onde está o operando</th><th>Exemplo*</th></tr></thead>
              <tbody>
                <tr><td>Imediato</td><td>Valor literal <strong>dentro da própria instrução</strong>; não exige acesso à memória.</td><td><code>addi $t0, $t1, 5</code></td></tr>
                <tr><td>Por registrador</td><td>Em <strong>registradores</strong> indicados na instrução; acesso rápido dentro da CPU.</td><td><code>add $t0, $t1, $t2</code></td></tr>
                <tr><td>Por deslocamento (base)</td><td>Na memória, no endereço <strong>registrador-base + deslocamento</strong>.</td><td><code>lw $t0, 8($s0)</code>: lê o endereço $s0 + 8</td></tr>
              </tbody>
            </table>
            <p class="fonte">* Exemplos em assembly MIPS por conhecimento geral.</p>
            <div class="caixa nota" data-titulo="Variações no material"><p>No início da Aula 3, o livro cita como comuns o imediato, o de registro e o <strong>"deslocamento de PC"</strong> (usado em saltos). O resumo da Aula 5 usa outra lista. Para a prova, a lista mais consistente entre os slides e a Aula 3 é <strong>imediato, por registrador e por deslocamento</strong>.</p></div>
            <div class="caixa exemplo" data-titulo="Analogia do livro"><ul>
              <li>Imediato: pegar o ingrediente que já está na sua frente.</li>
              <li>Registrador: ir até a despensa buscar um ingrediente específico.</li>
              <li>Deslocamento: caminhar um pouco até a geladeira para buscar um ingrediente especial.</li>
            </ul></div>
          `
        },
        {
          id: "rf-mips-analogia",
          titulo: "Analogia da cozinha (resumo)",
          fonte: "U3 - Livro Didático, Aula 3 (Analogia aplicada com arquitetura MIPS)",
          html: `
            <table>
              <thead><tr><th>Conceito MIPS</th><th>Na cozinha</th></tr></thead>
              <tbody>
                <tr><td>CPU</td><td>Chef</td></tr>
                <tr><td>Programa</td><td>Receita</td></tr>
                <tr><td>Instruções simples</td><td>Receitas simples, passo a passo fácil</td></tr>
                <tr><td>Registradores ($t0, $t1)</td><td>Potes etiquetados com ingredientes</td></tr>
                <tr><td>Pipeline</td><td>Etapas em paralelo: um corta vegetais enquanto outro cozinha o arroz</td></tr>
                <tr><td>add $t0, $t1, $t2</td><td>Combinar dois potes e pôr o resultado num terceiro</td></tr>
                <tr><td>Ciclo de instrução</td><td>Repetir a receita passo a passo até o prato ficar pronto</td></tr>
                <tr><td>Tipo R / I / J</td><td>Misturar ingredientes / temperos instantâneos / saltos criativos entre etapas</td></tr>
                <tr><td>Formatos de instrução</td><td>Modelos de receita com espaços reservados para os ingredientes</td></tr>
              </tbody>
            </table>
            <div class="caixa prova"><p>Na comparação, o pipeline <strong>simboliza a sincronização entre etapas que ocorrem simultaneamente</strong>, tanto na cozinha quanto na CPU (U3 Atividade de Aprendizagem, Q6). Não é contagem de tempo, organização de utensílios nem variedade de ingredientes.</p></div>
          `
        }
      ]
    },
    {
      id: "rf-fechamento",
      titulo: "6. Fechamento para a prova",
      topicos: [
        {
          id: "rf-resumo",
          titulo: "Resumo em 15 pontos",
          html: `
            <ol>
              <li>Conjunto de instruções reduzido = <strong>RISC</strong>; complexo = <strong>CISC</strong>.</li>
              <li>RISC: instruções simples, executadas rapidamente, em poucos ciclos, com desempenho previsível.</li>
              <li>RISC tem poucos formatos uniformes, o que simplifica o controle e favorece o pipeline.</li>
              <li>CISC: uma instrução realiza várias operações ou acessa vários locais de memória.</li>
              <li>CISC: instruções de tamanhos e complexidades variadas; mais conveniente ao programador.</li>
              <li><strong>Microprogramação</strong>: instrução decomposta em microinstruções; simplifica e barateia a unidade de controle.</li>
              <li><strong>Máquina MAC</strong>: gera sinais de controle (visão de controle) e faz multiplicação e acumulação (visão DSP, filtros).</li>
              <li><strong>MIC</strong> = <em>Many Integrated Core</em>: muitos núcleos num chip, para cargas paralelas (Intel Xeon Phi).</li>
              <li>CISC: Intel x86, AMD x86, IBM System/360 e z/Architecture, DEC VAX.</li>
              <li><strong>MIPS</strong> = <em>Microprocessor without Interlocked Pipeline Stages</em>, uma ISA RISC.</li>
              <li>MIPS: 32 registradores de 32 bits, UC, ULA e PC.</li>
              <li>Pipeline MIPS de 5 estágios: <strong>IF, ID, EX, MEM, WB</strong>.</li>
              <li>O pipeline aumenta a vazão (throughput) ao sobrepor instruções.</li>
              <li>Formatos: <strong>R</strong> (registradores, funct), <strong>I</strong> (imediato de 16 bits, LOAD/STORE, branch) e <strong>J</strong> (salto, endereço de 26 bits).</li>
              <li>Endereçamento: <strong>imediato</strong>, <strong>por registrador</strong> e <strong>por deslocamento</strong> (base + deslocamento).</li>
            </ol>
          `
        },
        {
          id: "rf-pegadinhas",
          titulo: "Pegadinhas que já apareceram",
          html: `
            <table>
              <thead><tr><th>Afirmação</th><th>Veredito</th></tr></thead>
              <tbody>
                <tr><td>RISC usa conjunto extenso e complexo; CISC, reduzido e simples.</td><td>Falso (invertido)</td></tr>
                <tr><td>RISC e CISC são termos intercambiáveis.</td><td>Falso</td></tr>
                <tr><td>RISC e CISC são igualmente eficientes, sem diferenças.</td><td>Falso</td></tr>
                <tr><td>O MIPS usa um único formato, o R-format.</td><td>Falso (R, I e J)</td></tr>
                <tr><td>O MIPS tem um conjunto extenso e diversificado de instruções.</td><td>Falso (é RISC)</td></tr>
                <tr><td>O MIPS suporta vários modos de endereçamento.</td><td>Verdadeiro</td></tr>
                <tr><td>O MIPS executa instruções num pipeline de três estágios.</td><td>Falso (5 estágios)</td></tr>
                <tr><td>O ciclo de instrução MIPS não envolve buscar instruções na memória.</td><td>Falso</td></tr>
                <tr><td>Cada estágio opera de forma independente no pipeline, sobrepondo operações.</td><td>Verdadeiro</td></tr>
                <tr><td>A principal característica do CISC é otimizar cargas paralelas.</td><td>Falso (isso é MIC)</td></tr>
                <tr><td>A microprogramação reduz custos e simplifica o projeto da UC.</td><td>Verdadeiro</td></tr>
                <tr><td>A microprogramação aumenta a complexidade do projeto.</td><td>Falso</td></tr>
                <tr><td>A Máquina MAC coordena sinais de controle para instruções complexas.</td><td>Verdadeiro</td></tr>
              </tbody>
            </table>
            <div class="caixa nota"><p>Na U3 Avaliação da Unidade, Q1, nenhuma alternativa trazia apenas a afirmativa III (a única correta pelo material). A resposta registrada foi a de menor erro. Veja a resolução na página de atividades.</p></div>
          `
        },
        {
          id: "rf-questoes",
          titulo: "Questões resolvidas sobre o tema",
          html: `
            <p>As questões dos materiais sobre RISC, CISC e MIPS, já resolvidas na página de atividades:</p>
            <ul>
              <li><a href="atividades.html?d=sdm#u3-atividade-aprendizagem-q2">U3 Atividade de Aprendizagem, Q2</a>: RISC x CISC.</li>
              <li><a href="atividades.html?d=sdm#u3-atividade-aprendizagem-q5">U3 Atividade de Aprendizagem, Q5</a>: ciclo de instrução e pipeline MIPS.</li>
              <li><a href="atividades.html?d=sdm#u3-atividade-aprendizagem-q6">U3 Atividade de Aprendizagem, Q6</a>: analogia do pipeline na cozinha.</li>
              <li><a href="atividades.html?d=sdm#u3-atividade-aprendizagem-q8">U3 Atividade de Aprendizagem, Q8</a>: arquitetura MIC.</li>
              <li><a href="atividades.html?d=sdm#u3-atividade-aprendizagem-q9">U3 Atividade de Aprendizagem, Q9</a>: Máquina MAC e filtros digitais.</li>
              <li><a href="atividades.html?d=sdm#u3-atividade-aprendizagem-q10">U3 Atividade de Aprendizagem, Q10</a>: CISC, microprogramação e Máquina MAC.</li>
              <li><a href="atividades.html?d=sdm#u3-avaliacao-unidade-q1">U3 Avaliação da Unidade, Q1</a>: afirmações sobre MIPS.</li>
              <li><a href="atividades.html?d=sdm#atividade-avaliativa-q6">Atividade Avaliativa, Questão 6</a>: RISC e CISC (discursiva).</li>
              <li><a href="atividades.html?d=sdm#atividade-avaliativa-q7">Atividade Avaliativa, Questão 7</a>: arquitetura MIPS (discursiva).</li>
            </ul>
          `
        }
      ]
    }
  ]
});
