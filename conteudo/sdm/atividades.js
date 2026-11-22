// Sistemas Digitais e Microprocessadores - atividades resolvidas
registrarAtividades({
 "disciplina": "sdm",
 "grupos": [
  {
   "id": "u1-atividade-aprendizagem",
   "titulo": "U1 — Atividade de Aprendizagem",
   "fonte": "U1 - Atividade de Aprendizagem.txt",
   "questoes": [
    {
     "numero": 1,
     "enunciado": "<p>O número de possibilidades de informação que um sistema de numeração admite com um dígito depende de quantas variações ele admite. Para sistemas simples, uma interpretação do código binário já é suficiente, para sistemas muito complexos como uma tela com milhões de cores outro código é mais viável na prática. Outra característica importante é observarmos de quantos bits um equipamento ou periférico é construído. Por exemplo, um controlador de luminosidade de 1 bit, possui 2 possibilidades (luminosidade = 0% ou 100%), se for construído com 2 bits, tem quatro possibilidades (luminosidade = 0%, 33,3%, 66,6% e 100%), e assim por diante. Considerando um circuito que possua 4 bits, quantas possibilidades de variação o este sistema possui?</p>",
     "alternativas": [
      "2",
      "16",
      "8",
      "6",
      "4"
     ],
     "resposta": "b",
     "resolucao": "<p><strong>b)</strong> 16 (2^4 combinações)</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 1, p. 5 (valor posicional 2^n em número de 4 bits). O cálculo 2^n possibilidades é conhecimento geral e o padrão 1 bit = 2, 2 bits = 4 consta no enunciado."
    },
    {
     "numero": 2,
     "enunciado": "<p>A importância de compreendermos as bases de numeração se justifica, principalmente, quando é necessário dar manutenção e entender o processo de trânsito da informação a cada parte do circuito digital. Suponha que você foi contratado para dar manutenção em um sistema de senhas de ordem de atendimento. O sistema apresentou um defeito no qual, ao invés de aparecer o número decimal no display, aparece o binário. Agora é necessário começar a fazer testes que te dê sinais de em qual processo está ocorrendo o erro. Um dos testes possíveis é saber se a contagem das senhas está sendo feita corretamente. Para saber disso, você foi chamando a próxima senha e verificou a seguinte ordem de exibição: 0011, 0100, 0101. Quais números foram chamados (na base decimal) neste teste feito para verificar se a sequencia de chamada estava correta?</p>",
     "alternativas": [
      "2, 3 e 4",
      "10, 11 e 12",
      "3, 4 e 5",
      "Impossível determinar",
      "11, 100 e 101"
     ],
     "resposta": "c",
     "resolucao": "<p><strong>c)</strong> 3, 4 e 5 (0011 = 3, 0100 = 4, 0101 = 5)</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 1, p. 5 (conversão binário-decimal). A conta é conhecimento geral."
    },
    {
     "numero": 3,
     "enunciado": "<p>A utilização de técnicas de simplificação é uma forma eficaz de transformar expressões booleanas ou circuitos digitais em expressões reduzidas ou circuitos mais simples, respectivamente. Sabendo disso, o mapa de Karnaugh é uma estrutura que segue um padrão de campos que correspondem ao número de entradas do sistema digital, e permite, seguindo alguns passos, encontrar a expressão booleana simplificada. Para expressões com 2 entradas o mapa de Karnaugh possui 4 células, para 3 entradas 8 células e para 4 entradas 16 células. Para construir o mapa, a representação de cada entrada deve respeitar a mudança de uma entrada para a outra célula vizinha, nunca mudando as duas ao mesmo tempo. De acordo com o enunciado, marque a alternativa que representa corretamente um mapa de Karnaugh de 4 entradas.</p><p>(Alternativas em imagem de mapas 4x4 vazios; cabeçalhos transcritos abaixo, com ' indicando a variável barrada.)</p>",
     "alternativas": [
      "Colunas: C'D', CD', C'D, CD. Linhas: A'B', A'B, AB', AB.",
      "Colunas e linhas com todas as variáveis sem barra (CD, CD, CD, CD / AB, AB, AB, AB).",
      "Colunas: C'D', CD, C'D, CD'. Linhas: A'B', A'B, AB, AB'.",
      "Colunas: C'D', CD, C'D, CD'. Linhas: A'B', A'B, AB', AB.",
      "Colunas: C'D', C'D, CD, CD'. Linhas: A'B', A'B, AB, AB'."
     ],
     "resposta": "e",
     "resolucao": "<p><strong>e)</strong> Colunas C'D', C'D, CD, CD' e linhas A'B', A'B, AB, AB' (sequência em que só uma variável muda entre vizinhas)</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 3, pp. 25-26 (Figura 2 e regras de construção do mapa). A transcrição textual das alternativas em imagem é minha e pode conter erros de leitura.",
     "limitacao": "O enunciado ou as alternativas continham figuras, tabelas ou circuitos em imagem; foram transcritos em texto na digitação original e podem conter erros de leitura. Confira com a figura da plataforma."
    },
    {
     "numero": 4,
     "enunciado": "<p>A utilização de equipamentos digitais é fundamental no cotidiano da população, desde tarefas de diversão como jogos, comunicação entre contatos, até tarefas de trabalho como videoconferências, transferências bancárias e várias outras aplicações. Todas essas funcionalidades têm uma característica em comum que é a transferência e o processamento de informações digitais, que exige uma representação digital. Como a maior parte das informações do nosso cotidiano são analógicas, como o som e a luz, dependemos de equipamentos que transformem esses sinais analógicos em sinais digitais para que possamos tirar uma foto, gravar um vídeo ou fazer uma vídeo chamada. E até aplicações mais simples como um termômetro digital, para medir a temperatura de uma pessoa, precisa de um circuito capaz de transformar a grandeza analógica da temperatura para poder ser mostrado no display digital. Para que uma informação seja digitalizada, é necessário utilizar alguns sistemas de numeração, como:</p>",
     "alternativas": [
      "Binário, Hexadecimal e Octal",
      "Teclado, câmera digital e leitor de impressão digital.",
      "Zeros, uns e letras de A a F",
      "Senha, token e tag",
      "Memórias de armazenamento digital"
     ],
     "resposta": "a",
     "resolucao": "<p><strong>a)</strong> Binário, Hexadecimal e Octal</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 1, pp. 3-5 (bases binária, octal e hexadecimal)."
    },
    {
     "numero": 5,
     "enunciado": "<p>Um estudante pretende compreender melhor o conceito geral dos padrões de código Gray, BCD, ASCII e XS-3 para compreendê-los e utilizá-los em seu estágio no desenvolvimento de um sistema digital. Como estratégia ele sintetizou os quatros conceitos abaixo e indicou um exemplo:</p><p>I - cada número é representado por 4 bits separadamente (Ex:35 = 0011 1001);</p><p>II - cada transição entre um número e seu subsequente é representando por um código que se difere apena por um bit (Ex:1 = 0001 e 2 = 0011);</p><p>III - a representação é dada binariamente a partir da soma de 3 do número original (Ex: 0 = 0011 e 1 = 0100);</p><p>IV - código de padronização mundial utilizado para representar caracteres em computadores (\"a\" = 01100001);</p><p>Para concluir o seu esquema de compreensão ele deve sinalizar, respectivamente em I, II, III e IV os códigos:</p>",
     "alternativas": [
      "BCD, Gray, XS-3 e ASCII",
      "ASCII, Gray, XS-3 e BCD",
      "BCD, ASCII, XS-3 e ASCII",
      "Gray, BCD, XS-3 e ASCII",
      "XS-3, BCD, Gray e ASCII"
     ],
     "resposta": "a",
     "resolucao": "<p><strong>a)</strong> BCD, Gray, XS-3 e ASCII</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 2, pp. 12-14 (BCD p. 12, Gray pp. 12-13, excesso-3 p. 13, ASCII p. 14)."
    },
    {
     "numero": 6,
     "enunciado": "<p>A simplificação por mapa de Karnaugh é um dos métodos mais eficientes na simplificação de expressões booleanas e circuitos digitais. Na figura observamos um mapa de Karnaugh montado corretamente a partir de uma tabela verdade de 4 entradas e 1 saída. Sabemos que, para extrair do mapa a expressão booleana simplificada, temos que agrupar os 1(uns) seguindo a orientação de ter sempre o maior grupo possível de 1, 2, 4 ou 8 componentes e o menor número de grupos. Posteriormente a definição da expressão simplificada se dá observando entre cada grupo formado, qual é a entrada que não troca de valor dentro deste grupo.</p><p>(IMAGEM ANEXADA: mapa com colunas C'D', C'D, CD, CD' e linhas A'B', A'B, AB, AB'. Células com 1: A'B'/CD, A'B'/CD', A'B/CD, A'B/CD', AB/CD, AB'/C'D'.)</p><p>Baseado nas orientações do enunciado e pela observação do mapa, qual a expressão simplificada em questão? (O apóstrofo nas alternativas representa uma barra na entrada escrita anteriormente)</p>",
     "alternativas": [
      "S = A'BCD + ABCD + AB'C'D'",
      "S = (AC)' + (BCD)' + (ABCD)'",
      "S = AC + BCD + ABCD",
      "S = A'BCD + BCD + AB'C'D'",
      "S = A'C + BCD + AB'C'D'"
     ],
     "resposta": "e",
     "resolucao": "<p><strong>e)</strong> S = A'C + BCD + AB'C'D' (grupo de 4 em A'C, par ABCD e A'BCD em BCD, AB'C'D' isolado)</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 3, pp. 25-26 (regras do mapa de Karnaugh). O agrupamento foi feito por mim a partir da imagem, conhecimento geral.",
     "limitacao": "O enunciado ou as alternativas continham figuras, tabelas ou circuitos em imagem; foram transcritos em texto na digitação original e podem conter erros de leitura. Confira com a figura da plataforma."
    },
    {
     "numero": 7,
     "enunciado": "<p>As portas lógicas são elementos fundamentais para o funcionamento correto e previsível dos circuitos e sistemas digitais, onde o resultado da sua saída é determinado por alguma operação feita com os dados colocados em suas entradas. Sabendo que um sistema apresenta a tabela verdade mostrada abaixo, sendo A e B entradas e S, saída. Podemos deduzir que esta tabela-verdade é correspondente a algum tipo de porta lógica e que por possuir 2 entradas, pode ser uma porta AND, OR, NAND, NOR, XOR ou XNOR, e de forma nenhuma poderia ser uma porta NOT, pois esta possui apenas a possibilidade de 1 entrada e 1 saída.</p><p>(IMAGEM ANEXADA: A B S = 0 0 0; 0 1 0; 1 0 0; 1 1 1.)</p><p>Determine a qual porta lógica esta tabela-verdade pertence.</p>",
     "alternativas": [
      "AND",
      "NOT",
      "NOR",
      "NAND",
      "OR"
     ],
     "resposta": "a",
     "resolucao": "<p><strong>a)</strong> AND (saída 1 somente com A = 1 e B = 1)</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 2, p. 19 (função AND). A identificação pela tabela é conhecimento geral.",
     "limitacao": "O enunciado ou as alternativas continham figuras, tabelas ou circuitos em imagem; foram transcritos em texto na digitação original e podem conter erros de leitura. Confira com a figura da plataforma."
    },
    {
     "numero": 8,
     "enunciado": "<p>O domínio da técnica de encontrar circuitos eletrônicos a partir da expressão booleana é uma habilidade bastante útil para quem projeta circuitos digitais. O método permite disponibilizar todas as entradas existentes em barramentos, que posteriormente serão conectadas às portas lógicas definidas pela expressão booleana. Por sua vez, a expressão booleana é obtida pelas saídas apresentadas na tabela-verdade. E a tabela-verdade é preenchida com os requisitos de projeto. Abaixo temos uma tabela-verdade já preenchida, a partir da qual você precisará obter a expressão booleana e seguindo o método de implementação do circuito obter o circuito digital que entregue o mesmo resultado da tabela-verdade. Por enquanto não será necessário simplifica-lo.</p><p>(IMAGEM ANEXADA: A B S = 0 0 1; 0 1 0; 1 0 1; 1 1 0.)</p><p>Marque a opção que representa o circuito correto da expressão obtida pela tabela-verdade:</p><p>(Alternativas em imagem; descrição transcrita abaixo.)</p>",
     "alternativas": [
      "Duas portas NAND com entradas diretas (A,B) e (A,B), saídas ligadas a uma porta OR, saída S.",
      "Duas portas AND, a primeira com A e B invertidos e a segunda com A direto e B invertido, saídas ligadas a uma porta OR, saída S.",
      "Duas portas AND com entradas diretas (A,B) e (A,B), saídas ligadas a uma porta OR, saída S.",
      "Duas portas NAND, a primeira com A e B invertidos e a segunda com A direto e B invertido, saídas ligadas a uma porta OR, saída S.",
      "Duas portas NAND, a primeira com A e B invertidos e a segunda com A direto e B invertido, saídas ligadas a uma porta NOR, saída S."
     ],
     "resposta": "b",
     "resolucao": "<p><strong>b)</strong> S = A'B' + AB' implementada com duas portas AND (A'B' e AB') ligadas a uma porta OR</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 4, pp. 35-37 (circuitos a partir de tabela-verdade e expressão). A derivação da expressão e a leitura das figuras são conhecimento geral e interpretação minha.",
     "limitacao": "O enunciado ou as alternativas continham figuras, tabelas ou circuitos em imagem; foram transcritos em texto na digitação original e podem conter erros de leitura. Confira com a figura da plataforma."
    },
    {
     "numero": 9,
     "enunciado": "<p>A tabela-verdade é uma forma de organizarmos as possibilidades de funcionamento de um circuito digital, onde a padronização é algo importante para não ficar nenhuma possibilidade de funcionamento sem tratamento ou com funcionamento imprevisível. Abaixo temos uma tabela verdade de 3 entradas com as suas respectivas saídas.</p><p>(IMAGEM ANEXADA: A B C S = 000 1; 001 1; 010 1; 011 0; 100 1; 101 0; 110 1; 111 0.)</p><p>Um passo importante é determinarmos a expressão booleana que equivale à tabela-verdade em questão. É importante lembrar que na expressão, consideramos apenas as linhas com 1s(uns). Depois dessa definição da expressão booleana ainda é possível aplicar a simplificação desta expressão, obtendo assim o circuito mais eficiente para o projeto e que dá o mesmo resultado sem nenhum prejuízo. Considerando a tabela-verdade, a expressão booleana que obtemos é (o apóstrofo nas alternativas representa a barra da entrada escrita anteriormente):</p>",
     "alternativas": [
      "S = A'B'C' + A'B'C + A'BC' + AB'C' + ABC'",
      "S = ABC' + AB'C + A'BC + A'C' + ABC'",
      "S = (ABC)' + (AB1C) + A'BC' + A(B'C)' + ABC'",
      "S = ABC + ABC + ABC + ABC + ABC",
      "S = C + B + A + AB"
     ],
     "resposta": "a",
     "resolucao": "<p><strong>a)</strong> S = A'B'C' + A'B'C + A'BC' + AB'C' + ABC' (linhas 000, 001, 010, 100 e 110)</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 3, p. 27 (expressão a partir das linhas com saída 1) e Aula 4, p. 37 (tabela-verdade padrão de 3 entradas).",
     "limitacao": "O enunciado ou as alternativas continham figuras, tabelas ou circuitos em imagem; foram transcritos em texto na digitação original e podem conter erros de leitura. Confira com a figura da plataforma."
    },
    {
     "numero": 10,
     "enunciado": "<p>Para projetar um circuito de alarme residencial vamos considerar as seguintes entradas, central de alarme (A), sensores de portas (P), sensores de janelas (J) e sensores de movimentos (M). Ao ser disparado, o alarme aciona a saída da sirene (S). A tabela verdade abaixo mostra que para toda situação que o alarme esteja ativado (A = 1), se houver alguma porta aberta (P = 1), alguma janela aberta (J = 1) e/ou a detecção de alguma moviment (M = 1), o alarme disparará a sirene (S = 1). Caso o alarme esteja desativado (A = 0), não dispara a sirene (S). E caso o alarme esteja ativado (A = 1) mas não tenha nenhuma porta aberta, janela aberta e sem detecção de movimento, o alarme também não disparará a sirene (S).</p><p>(IMAGEM ANEXADA: tabela A P J M S de 16 linhas; S = 1 em todas as linhas com A = 1, exceto 1000; S = 0 nas demais.)</p><p>Pela tabela-verdade, utilizando o mapa de Karnaugh para simplificar a expressão booleana, teremos a expressão:</p>",
     "alternativas": [
      "S = AB + AD + AC",
      "S = AB + ACD",
      "S = A + BCD",
      "S = ABC + ACD + ABC",
      "S = ABCD + AD + AC"
     ],
     "resposta": "a",
     "resolucao": "<p><strong>a)</strong> S = AB + AD + AC (com B = P, C = J e D = M: S = A(P + J + M))</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 3, pp. 25-26 (mapa de Karnaugh). A correspondência das letras B, C e D com P, J e M é interpretação minha, pela ordem das colunas da tabela; o agrupamento é conhecimento geral.",
     "limitacao": "O enunciado ou as alternativas continham figuras, tabelas ou circuitos em imagem; foram transcritos em texto na digitação original e podem conter erros de leitura. Confira com a figura da plataforma."
    }
   ]
  },
  {
   "id": "u1-avaliacao-unidade",
   "titulo": "U1 — Avaliação da Unidade",
   "fonte": "U1 - Avaliação da Unidade.txt",
   "questoes": [
    {
     "numero": 1,
     "enunciado": "<p>É bastante comum que sistemas digitais possuam mais de uma saída. Isso implica em uma tabela verdade que possui além das colunas de entradas, mais de uma coluna de saídas. Lembre-se que tabelas-verdade que possuem mais de uma coluna de saídas equivalem a uma tabela-verdade para cada saída, é apenas uma forma mais suscinta de representar na tabela-verdade. Com efeito os circuitos digitais associados a esta tabela também são responsáveis por cada saída, ou seja, um circuito digital para cada saída distinta. Abaixo temos a imagem de uma tabela verdade de um determinado circuito que possui 2 saídas, S1 e S2, para uma combinação de 3 entradas A, B, e C. Sabemos que existe uma expressão algébrica booleana separada para cada saída da tabela-verdade. E também é importante entender que existe um circuito associado à cada saída e que podem ou não representar todas as entradas da tabela-verdade, isso devido a possíveis simplificações.</p><p>Figura 1 - Tabela-verdade (IMAGEM ANEXADA: A B C S1 S2 = 000 0 0; 001 1 0; 010 0 1; 011 1 1; 100 0 1; 101 1 0; 110 1 0; 111 1 0.)</p><p>Fonte: elaborado pelo autor</p><p>Qual a expressão da saída S1 e S2, respectivamente:</p>",
     "alternativas": [
      "S1 = S2 = A'B'C + A'BC + AB'C + ABC' + ABC + A'BC' + A'BC + AB'C'",
      "S1 = A'B'C + A'BC + AB'C + ABC' + ABC e S2 = A'BC' + A'BC + AB'C'",
      "S1 = (ABC)' + (A')BC + AB'C + (ABC)' + ABC e S2 = A'BC' + A'BC + AB'C'",
      "S1 = ABC + ABC + ABC + ABC + ABC e S2 = ABC + ABC + ABC",
      "S1 = A'B'C + A'BC + AB'C + ABC' + ABC e S2 = A'BC' + ABC)' + ABC'"
     ],
     "resposta": "b",
     "resolucao": "<p><strong>b)</strong> S1 = A'B'C + A'BC + AB'C + ABC' + ABC e S2 = A'BC' + A'BC + AB'C' (S1 = 1 em 001, 011, 101, 110, 111; S2 = 1 em 010, 011, 100)</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 3, p. 27 (expressão a partir das linhas com saída 1, uma expressão por saída). A leitura da tabela em imagem é minha, conhecimento geral.",
     "limitacao": "O enunciado ou as alternativas continham figuras, tabelas ou circuitos em imagem; foram transcritos em texto na digitação original e podem conter erros de leitura. Confira com a figura da plataforma."
    },
    {
     "numero": 2,
     "enunciado": "<p>As 4 afirmações abaixo são passos para se desenhar um circuito digital a partir de uma expressão booleana, porém estão fora de ordem:</p><p>I - Depois de conferir se todas as operações do circuito estão condizentes com a expressão, desenhe o traço de saída com a letra que representa a saída na expressão.</p><p>II - Observe na expressão quantas entradas (letras diferentes) existem, exceto a letra da saída, e faça um barramento para cada entrada</p><p>III - Observe as operações de multiplicação e soma. As portas lógicas AND e NAND devem ser desenhas primeiro, depois suas saídas são unidas pelas somas caso haja. Outro ponto importante é observar a barra de inversão, a porta NOT deve ser colocada observando se a inversão é feita na entrada da porta lógica na saída da porta lógica.</p><p>IV - Atenção, caso a expressão tenha separações por parênteses \"ovo\", colchetes \"[ ]\" e chaves {}, a prioridade deve ser nesta ordem, basicamente começando de dentro para fora.</p><p>A ordem correta para a execução dos passos é:</p>",
     "alternativas": [
      "III - II - IV - I",
      "IV - III - I - II",
      "I - II - III - IV",
      "II - III - IV - I",
      "II - I - III - IV"
     ],
     "resposta": "d",
     "resolucao": "<p><strong>d)</strong> II - III - IV - I</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 4, pp. 38-39 (passos 1 a 3 do desenho do circuito a partir da expressão). A posição do passo I (saída por último) é inferência."
    },
    {
     "numero": 3,
     "enunciado": "<p>Analise as afirmativas incompletas abaixo e faça o que se pede:</p><p>I - O BCD (Binary Coded Decimal) é um sistema de codificação numérica que representa cada dígito decimal (0 a 9) em um número binário de ____ bits.</p><p>II - O Código Gray (Gray Code) é um sistema de codificação numérica em que apenas um único bit muda de valor entre cada número _________.</p><p>III - O código Excesso de 3 (Excess-3/XS-3) é um sistema de codificação numérica que representa números decimais somando _____ ao valor do dígito decimal antes de convertê-lo em binário.</p><p>IV - O ASCII (American Standard Code for Information Interchange) é um conjunto de _________ e um código de codificação amplamente utilizado em sistemas de computadores pessoais e servidores</p><p>V - O EBCDIC (Extended Binary Coded Decimal Interchange Code) é um conjunto de caracteres e código de codificação amplamente utilizado em sistemas mainframe da IBM e em ambientes de computação _____________.</p><p>A sequência de palavras que completa corretamente as afirmações é:</p>",
     "alternativas": [
      "Quatro; consecutivo; três; caracteres; empresarial;",
      "Oito; consecutivo; dois; caracteres; empresarial;",
      "N; binário; três; caracteres; empresarial;",
      "Quatro; binário; três; texto; empresarial;",
      "N; consecutivo; dez; caracteres; empresarial;"
     ],
     "resposta": "a",
     "resolucao": "<p><strong>a)</strong> Quatro; consecutivo; três; caracteres; empresarial;</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 2, pp. 12-14 (BCD, Gray, XS-3 e ASCII). As lacunas do Gray (\"consecutivo\") e do EBCDIC (\"empresarial\") não foram conferidas no material; julgamento por conhecimento geral e eliminação."
    },
    {
     "numero": 4,
     "enunciado": "<p>As Portas lógicas são dispositivos eletrônicos que realizam operações lógicas (AND, OR, NOT) em sinais elétricos digitais. E para deixar os circuitos com portas lógicas mais eficientes utilizamos a Álgebra Booleana. Existem combinações destas portas, que são as portas NAND e NOR. Estas duas portas são as mesmas portas AND e OR, respectivamente, com uma NOT na saída, ou seja, a saída é invertida em relação a elas. Também existe a porta exclusiva, XOR com comportamento diferenciado apenas quando uma e somente uma das entradas está ativa. Todas estas portas são combinadas para realizar operações matemáticas simples com números binários em um circuito com entradas e saídas digitais. Quando temos esta combinação, as portas formas um circuito digital que possui uma expressão algébrica que determina o resultado de sua saída. Muitas vezes é possível aplicar as propriedades da Álgebra Booleana para simplificar esta expressão. Considere a expressão abaixo de um determinado circuito: S = AB'D + AB'D'. A expressão simplificada tem resultado:</p>",
     "alternativas": [
      "S = AB'",
      "S = A",
      "S = A(BD)",
      "S = A'B'D'",
      "S = AB'D'"
     ],
     "resposta": "a",
     "resolucao": "<p><strong>a)</strong> S = AB' (AB'D + AB'D' = AB'(D + D') = AB')</p>",
     "fonte": "conhecimento geral (álgebra booleana: fatoração e D + D' = 1); não conferido no material. O livro HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 3, p. 21 (Tabela 12, teoremas da álgebra booleana) trata do tema."
    },
    {
     "numero": 5,
     "enunciado": "<p>A conversão de um número binário em decimal é uma técnica importante de se saber, principalmente porque a representação binária para nós humanos pode ser um pouco difícil de entender, como por exemplo o número binário 101 não representa o valor cento e um, e sim o número 5 no nosso sistema decimal. Neste exemplo, por convenção padrão, o bit à direita é o menos significativo(LSB - Least Significant Bit), ou seja representa a menor porção do número e o bit mais à esquerda representa o bit mais significativo (MSB - Most Signifcant Bit). O bit LSB tem o valor de 2^0, e o MSB tem o valor de 2^n, sendo n a contagem da sequência de bits à esquerda. Tomando como base estas informações, e os conhecimentos de conversão de base numérica, qualquer valor binário pode ser convertido em seu equivalente decimal. O número binário 1001101 é composto por 7 bits e representa um número decimal. O número binário descrito no enunciado é o equivalente ao número decimal:</p>",
     "alternativas": [
      "58",
      "75",
      "89",
      "88",
      "77"
     ],
     "resposta": "e",
     "resolucao": "<p><strong>e)</strong> 77 (64 + 8 + 4 + 1)</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf, Aula 1, p. 5 (conversão binário-decimal por potências de 2). A conta é conhecimento geral."
    }
   ]
  },
  {
   "id": "u2-atividade-aprendizagem",
   "titulo": "U2 — Atividade de Aprendizagem",
   "fonte": "U2 - Atividade de Aprendizagem.txt",
   "questoes": [
    {
     "numero": 1,
     "enunciado": "<p>A lógica combinacional é um ramo da eletrônica digital que lida com circuitos cujas saídas dependem exclusivamente das entradas presentes, sem levar em consideração o histórico de eventos. Em outras palavras, esses circuitos realizam operações imediatas baseadas nas condições atuais, sem memória interna. Os blocos de construção fundamentais da lógica combinacional são portas lógicas, como AND, OR e NOT, que combinadas de maneiras específicas formam circuitos mais complexos. Enquanto a lógica combinacional é focada em respostas instantâneas, a lógica sequencial introduz a noção de estado interno e memória. Esses circuitos mantêm informações sobre o histórico de eventos, permitindo que as saídas dependam não apenas das entradas atuais, mas também do estado anterior do sistema. Um componente central da lógica sequencial é o flip-flop, que armazena um bit de informação e pode mudar de estado em resposta a um sinal de controle. Sabendo-se que um determinado sistema responde apenas ao estado atual das entradas, que são botões, e que sua saída é composta por led indicativo, este sistema pode se enquadrar em uma das descrições dadas acima. De acordo com o enunciado, o sistema pode ser classificado como:</p>",
     "alternativas": [
      "Sistema de armazenamento",
      "Sequencial",
      "Complexo",
      "Combinacional e Sequencial",
      "Combinacional"
     ],
     "resposta": "e",
     "resolucao": "<p><strong>e)</strong> Combinacional (a saída depende só do estado atual das entradas, sem memória)</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 1 (introdução à lógica combinacional e sequencial). Aplicação ao caso é interpretação a partir da definição do enunciado; localização não conferida página a página."
    },
    {
     "numero": 2,
     "enunciado": "<p>Para projetar circuitos digitais de forma eficaz, é essencial criar fluxogramas bem estruturados, garantindo organização, clareza e documentação adequada. Embora projetos simples possam demandar pouco armazenamento de informações, a crescente complexidade das aplicações atuais torna imprescindível uma abordagem sistemática. Seguindo uma sequência sugerida de passos, o projetista pode criar um fluxograma eficiente: 1. Identifique os componentes do circuito; 2. Escolha um Software de Desenho de circuitos; 3. Comece com Símbolos Padrão de portas, flip-flops e outros componentes; 4. Conecte os Componentes; 5. Adicione Texto Explicativo indicando a função de componentes chave; 6. Use Cores e Estilos para cada parte do circuito; 7. Divida em Etapas para resolver problemas futuros; 8. Adicione Notas e Comentários; 9. Realize Revisão e defina uma sequência de testes e verificação; 10. Organize e registre a documentação completa gerada no processo. O propósito de seguir os passos sugeridos para criar um fluxograma de projeto de circuitos digitais e incluir documentação adicional, como uma tabela-verdade, é crucial para o sucesso do projeto. Considerando o texto e a justificativa para a utilização do passo-a-passo citado, assinale a alternativa correta.</p>",
     "alternativas": [
      "Para reduzir a clareza do projeto e dificultar sua compreensão por outros membros da equipe.",
      "Para aumentar a complexidade do projeto e garantir sua eficácia.",
      "Para tornar o processo de projeto mais demorado e burocrático.",
      "Para ignorar a necessidade de revisões e testes do circuito, acelerando o processo de desenvolvimento.",
      "Para facilitar a organização dos componentes do circuito e evitar erros durante a implementação."
     ],
     "resposta": "e",
     "resolucao": "<p><strong>e)</strong> Para facilitar a organização dos componentes do circuito e evitar erros durante a implementação</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 1 (fluxogramas para projetos digitais). A escolha é por coerência com o texto do enunciado e eliminação; localização não conferida página a página."
    },
    {
     "numero": 3,
     "enunciado": "<p>Os circuitos sequenciais são componentes essenciais em sistemas digitais, proporcionando a capacidade de reter estados anteriores e armazenar informações temporárias. Compostos por elementos de lógica combinacional e flip-flops, esses circuitos possuem a capacidade de produzir saídas com base não apenas nas entradas atuais, mas também nos estados anteriores do circuito. Uma aplicação comum dos circuitos sequenciais é em sistemas de contadores, onde são utilizados em dispositivos como relógios digitais, cronômetros e sistemas de controle de estoque. Além disso, em sistemas de controle, como em controladores de tráfego e processadores de dados, os circuitos sequenciais são empregados para coordenar operações e processar informações sequencialmente. Por exemplo, em sistemas de controle de tráfego, esses circuitos são responsáveis por controlar os semáforos em interseções e monitorar o fluxo de veículos. Em resumo, os circuitos sequenciais desempenham um papel crucial em uma variedade de aplicações, fornecendo funcionalidades de armazenamento e processamento sequencial de dados. Considerando o texto que aborda a função dos circuitos sequenciais e suas aplicações, assinale a alternativa correta.</p>",
     "alternativas": [
      "Os circuitos sequenciais não têm capacidade de memória, sendo limitados a operações instantâneas.",
      "Os circuitos sequenciais são utilizados apenas em aplicações de baixa complexidade, como controles remotos e temporizadores.",
      "Os circuitos sequenciais são usados exclusivamente em sistemas de comunicação, como transmissão de dados e sinais.",
      "Os circuitos sequenciais são elementos essenciais em sistemas digitais que requerem armazenamento de informações temporárias, encontrados em aplicações como contadores, sistemas de controle e processamento de dados.",
      "Os circuitos sequenciais são aplicados apenas em sistemas de áudio, como em processadores de efeitos musicais."
     ],
     "resposta": "d",
     "resolucao": "<p><strong>d)</strong> Os circuitos sequenciais são elementos essenciais em sistemas digitais que requerem armazenamento de informações temporárias, encontrados em aplicações como contadores, sistemas de controle e processamento de dados</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 1 (lógica sequencial). A escolha é por coerência com o texto do enunciado; localização não conferida página a página."
    },
    {
     "numero": 4,
     "enunciado": "<p>Os flip-flops são componentes cruciais em sistemas digitais, permitindo o armazenamento e manipulação de dados binários. Existem diversos tipos de flip-flops, cada um com características e aplicações específicas. Flip-Flop RS (Set/Reset): Este tipo de flip-flop possui duas entradas, Set (S) e Reset (R), que controlam seu estado. Quando ambas as entradas estão em nível lógico baixo, o flip-flop mantém seu estado anterior. Quando a entrada Set é acionada, o flip-flop é forçado a um estado '1'; enquanto a entrada Reset o força a um estado '0'. Um exemplo de aplicação é o controle de estado em sistemas de segurança, onde o estado \"Set\" pode representar a ativação de um alarme e \"Reset\" a sua desativação. Flip-Flop D (Data): Este tipo de flip-flop armazena o valor presente na entrada D no momento em que ocorre o sinal de clock. É comumente utilizado em circuitos de memória e registradores de deslocamento, onde o dado precisa ser armazenado ou transferido sequencialmente. Flip-Flop JK: Uma versão aprimorada do flip-flop RS, o flip-flop JK possui entradas Jack (J) e Kilroy (K), que oferecem maior flexibilidade de operação. É amplamente utilizado em contadores binários e divisores de frequência. Flip-Flop T (Toggle): O flip-flop T alterna entre os estados de saída cada vez que a entrada T é acionada. Pode ser empregado em circuitos de contagem e divisão de frequência, assim como em osciladores. Flip-Flop JK Mestre-Escravo: Uma variação do flip-flop JK, o JK Mestre-Escravo utiliza dois flip-flops JK para evitar problemas de corrida, proporcionando uma transição de estado mais controlada. É utilizado em sistemas de contagem de alta velocidade e em circuitos sequenciais complexos. Considerando o texto e os tipos de flip-flops disponíveis para se projetar um sistema, assinale a alternativa correta.</p>",
     "alternativas": [
      "Jack, Kilroy, Contador, Oscilador, Sequencial",
      "RS, D, JK, T, JK Mestre-Escravo",
      "Set, Reset, Data, Clock, T",
      "Flip-Flop RS, D, Q, T, Mestre-Escravo",
      "Mestre, Escravo, JK, Toggle, D"
     ],
     "resposta": "b",
     "resolucao": "<p><strong>b)</strong> RS, D, JK, T, JK Mestre-Escravo</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 4 (flip-flops e circuitos correlatos). A resposta segue a lista de tipos do próprio enunciado; localização não conferida página a página."
    },
    {
     "numero": 5,
     "enunciado": "<p>Embora distintas, a lógica combinacional e sequencial muitas vezes trabalham juntas para criar sistemas digitais robustos e eficientes. Um exemplo clássico é a construção de uma CPU (unidade central de processamento - processador), onde a lógica combinacional executa operações aritméticas e lógicas, enquanto a lógica sequencial mantém o controle do estado do processador e gerencia a execução de instruções. A lógica combinacional e sequencial são essenciais para a construção de sistemas digitais que permeiam quase todos os aspectos da vida moderna. Desde dispositivos eletrônicos simples até sistemas complexos de comunicação e computadores de alto desempenho, essas abordagens são vitais para a operação eficiente e confiável de circuitos digitais. A constante evolução desses conceitos e a busca por inovações tecnológicas continuam a impulsionar o campo da eletrônica digital para novos horizontes, moldando o futuro da sociedade interconectada em que vivemos. Vários exemplos que possuem funções combinacionais e sequenciais podem ser citados baseado nas descrições acima. Qual dos sistemas descritos pelas alternativas apresenta as funções combinacionais e sequenciais juntas?</p>",
     "alternativas": [
      "Led Power (On/Off)",
      "Sistema detector de claridade que acende uma lâmpada no escuro e a apaga no claro",
      "Luz de teto do veículo, que liga ao abrir a porta e desliga ao fechar a porta",
      "Pisca-pisca simples de natal (acende e apaga no mesmo período)",
      "Calculadora"
     ],
     "resposta": "e",
     "resolucao": "<p><strong>e)</strong> Calculadora (operações aritméticas combinacionais e armazenamento de operandos e resultados sequencial)</p>",
     "fonte": "Conhecimento geral, com base no enunciado; não conferido no material (HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 1, apenas relacionado). A classificação dos demais exemplos como apenas combinacionais ou apenas sequenciais é interpretação."
    },
    {
     "numero": 6,
     "enunciado": "<p>Para um engenheiro, compreender a diferença entre um circuito combinacional e um circuito sequencial, é fundamental para compreender o funcionamento de circuitos existentes e projetar novos. Uma das principais diferenças entre os circuitos lógicos combinacionais e sequenciais reside em sua capacidade de reter informações e processar entradas. Enquanto os circuitos combinacionais realizam operações lógicas diretamente relacionadas aos valores de entrada, os circuitos sequenciais incorporam elementos de memória para armazenar informações e produzir saídas baseadas não apenas nas entradas atuais, mas também nas entradas anteriores e no estado interno do circuito. Assim, os circuitos sequenciais são capazes de processar informações de forma sequencial, considerando o histórico de entradas e estados anteriores. Esta diferença fundamental influencia diretamente a complexidade e a aplicabilidade de cada tipo de circuito em diversas aplicações. Como circuitos combinacionais podemos citar: Somador Binário; Meio Somador; Somador Completo; Subtrator; Subtrator Completo; Multiplexador; Decodificador; Como circuitos sequenciais podemos citar: Flip-Flop; Contador; Registrador de Deslocamento; Máquina de Estados Finitos; Considerando o texto que menciona os circuitos combinacionais e sequenciais, assinale a alternativa correta.</p>",
     "alternativas": [
      "Os circuitos combinacionais têm a capacidade de reter informações, enquanto os circuitos sequenciais não.",
      "Os circuitos combinacionais não possuem elementos de memória, enquanto os circuitos sequenciais têm.",
      "Os circuitos combinacionais são mais adequados para operações temporizadas do que os sequenciais.",
      "Os circuitos sequenciais só respondem às entradas atuais, enquanto os combinacionais consideram eventos anteriores.",
      "Os circuitos sequenciais não exigem lógica booleana, ao contrário dos combinacionais."
     ],
     "resposta": "b",
     "resolucao": "<p><strong>b)</strong> Os circuitos combinacionais não possuem elementos de memória, enquanto os circuitos sequenciais têm</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 1 (lógica combinacional e sequencial). A resposta segue o texto do enunciado; localização não conferida página a página."
    },
    {
     "numero": 7,
     "enunciado": "<p>Circuitos combinacionais e sequenciais fazem parte de diversos sistemas digitais que utilizamos no nosso dia-a-dia. Podemos citar como circuitos combinacionais o MUX e DEMUX. Os multiplexadores e demultiplexadores são componentes essenciais em sistemas de comunicação que permitem transmitir múltiplos sinais por meio de um único canal de comunicação. Uma aplicação comum desses dispositivos é em sistemas de transmissão de televisão por cabo, onde os multiplexadores combinam sinais de vídeo, áudio e dados de diferentes canais em um único sinal de transmissão. Além disso, esses dispositivos são amplamente utilizados em redes de telecomunicações, como na transmissão de sinais telefônicos em sistemas DSL (Digital Subscriber Line) e na transmissão de dados em redes de computadores. Outra aplicação importante é em sistemas de transmissão de rádio, onde os multiplexadores são empregados para combinar múltiplos sinais de áudio em uma única frequência de transmissão, permitindo a transmissão de várias estações de rádio ao mesmo tempo. Considerando o texto que menciona a função dos multiplexadores e demultiplexadores em sistemas de comunicação, assinale a alternativa correta.</p>",
     "alternativas": [
      "Os multiplexadores e demultiplexadores não têm aplicações práticas em sistemas de comunicação.",
      "Os multiplexadores combinam sinais de diferentes canais em um único sinal de transmissão, enquanto os demultiplexadores restringem o sinal a um único canal.",
      "Os multiplexadores dividem sinais de diferentes canais em um único sinal de transmissão, enquanto os demultiplexadores distribuem esse sinal para os diferentes canais.",
      "Os multiplexadores são utilizados apenas em redes de computadores, enquanto os demultiplexadores são utilizados apenas em sistemas de transmissão de televisão por cabo.",
      "Os multiplexadores são responsáveis pela compressão de sinais de transmissão, enquanto os demultiplexadores são usados para aumentar a qualidade do sinal."
     ],
     "resposta": "c",
     "resolucao": "<p><strong>c)</strong> Os multiplexadores dividem sinais de diferentes canais em um único sinal de transmissão, enquanto os demultiplexadores distribuem esse sinal para os diferentes canais</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 3 (multiplexadores e demultiplexadores). Nenhuma alternativa está totalmente correta: a c usa 'dividem' onde o correto seria 'combinam' no multiplexador, e a b erra o demultiplexador. A escolha da c é julgamento por conhecimento geral (menor erro); a b é a alternativa concorrente."
    },
    {
     "numero": 8,
     "enunciado": "<p>Os circuitos contadores digitais desempenham um papel crucial em sistemas digitais, sendo amplamente utilizados para contagem e controles sequenciais. Esses circuitos consistem em uma série de flip-flops conectados em cascata, onde cada flip-flop representa um bit do contador. À medida que o circuito é acionado por pulsos de clock, ele passa por uma sequência predefinida de estados, aumentando ou diminuindo o valor binário armazenado com cada pulso de entrada. Um exemplo comum de aplicação dos circuitos contadores é em dispositivos de medição, como contadores de eventos, cronômetros e temporizadores. Além disso, eles são usados em sistemas de controle, como em circuitos de divisão de frequência, geradores de sinais e em contadores de tráfego. Por exemplo, em sistemas de controle de tráfego, os circuitos contadores são empregados para monitorar o número de veículos que passam por um determinado ponto em uma estrada. Além da função de contagem sequencial, os contadores ainda podem ter outras formas de contagem como o registrador de deslocamento e o contador Jhonson. Considerando o exposto sobre os circuitos contadores digitais e o principal propósito desses circuitos, assinale a alternativa correta.</p>",
     "alternativas": [
      "Os circuitos contadores são usados exclusivamente em sistemas de comunicação, como transmissão de dados e sinais.",
      "Os circuitos contadores têm como principal propósito realizar operações matemáticas complexas em sinais digitais.",
      "Os circuitos contadores são utilizados para contagem e controles sequenciais, encontrados em dispositivos de medição, sistemas de controle e em contadores de tráfego.",
      "Os circuitos contadores são empregados apenas em aplicações de baixa complexidade, como controles remotos e temporizadores.",
      "Os circuitos contadores são ineficazes para realizar tarefas de contagem e controles sequenciais, sendo reservados para funções de armazenamento de dados."
     ],
     "resposta": "c",
     "resolucao": "<p><strong>c)</strong> Os circuitos contadores são utilizados para contagem e controles sequenciais, encontrados em dispositivos de medição, sistemas de controle e em contadores de tráfego</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 3 e/ou Aula 4 (contadores). A resposta segue o texto do enunciado; localização não conferida página a página."
    },
    {
     "numero": 9,
     "enunciado": "<p>A transição dos estados em uma máquina de estado é um aspecto fundamental no projeto de circuitos digitais, permitindo que sistemas respondam a estímulos do ambiente de forma sequencial e controlada. Essas transições ocorrem quando determinadas condições são atendidas, geralmente envolvendo sinais de entrada ou temporizadores. Compreender como ocorrem essas transições é essencial para o design eficiente e funcional de circuitos digitais. Conceito de Transição de Estado: A transição de estado em uma máquina de estado ocorre quando uma determinada condição é satisfeita, levando o sistema de um estado para outro. Por exemplo, em um sistema de controle de acesso, a transição de estado pode ocorrer quando um cartão de acesso é detectado. Exemplo de Transição de Estado: Considere uma máquina de estado que controla o funcionamento de um semáforo. Quando o estado atual é \"vermelho\" e o tempo de espera expirou, a máquina de estado faz a transição para o estado \"verde\", permitindo que o tráfego flua. Aplicações de Transições de Estado: As transições de estado são fundamentais em uma variedade de aplicações, incluindo sistemas de controle industrial, automação residencial, protocolos de comunicação e sistemas de segurança. Implementação em Circuitos Digitais: As transições de estado são implementadas em circuitos digitais por meio de lógica combinacional, onde as condições de entrada são comparadas com os estados atuais para determinar a transição apropriada. Sincronização de Transições: Em sistemas complexos, é essencial sincronizar as transições de estado para garantir o funcionamento correto do sistema. Isso pode ser alcançado por meio de sinais de clock ou temporizadores. Considerando as aplicações citadas e os termos que se referem à transição de estado, assinale a alternativa correta.</p>",
     "alternativas": [
      "Sinais de Entrada, Lógica Combinacional, Oscilador, Circuitos Integrados, Relógio.",
      "Transistor, Relé, Capacitor, Indutor, Lógica.",
      "Sistema de Controle de Acesso, Controle de Tráfego, Protocolos de Comunicação, Reconhecimento de Padrões, Criptografia.",
      "Comportamento, Memória, Saída, Entrada, Controle.",
      "Verificação de Erros, Detecção de Falhas, Redundância, Temporizadores, Interruptores."
     ],
     "resposta": "c",
     "resolucao": "<p><strong>c)</strong> Sistema de Controle de Acesso, Controle de Tráfego, Protocolos de Comunicação, Reconhecimento de Padrões, Criptografia</p>",
     "fonte": "Enunciado (controle de acesso, semáforo e protocolos de comunicação são citados; reconhecimento de padrões e criptografia não). Nenhuma alternativa casa totalmente com o texto; a escolha da c é interpretação por maior correspondência. Tema em HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 4 (máquinas de estado), não conferido."
    },
    {
     "numero": 10,
     "enunciado": "<p>Os circuitos digitais com temporizadores desempenham um papel crucial em uma ampla gama de aplicações, desde sistemas de automação residencial até controles industriais. Estes circuitos são projetados para gerar atrasos controlados ou períodos de tempo específicos, essenciais para o funcionamento sincronizado de sistemas complexos. Temporizadores Monostáveis: Estes circuitos geram um pulso de saída de duração fixa quando são acionados por um sinal de entrada. Um exemplo comum é o temporizador monostável 555, amplamente utilizado em circuitos de temporização, como no controle de piscas de luz automotivos. Temporizadores Astáveis: Diferentemente dos temporizadores monostáveis, os temporizadores astáveis produzem uma saída periódica de forma de onda quadrada sem a necessidade de um sinal de entrada. Estes são comumente utilizados em osciladores de relógio e sistemas de geração de pulsos. Contadores de Tempo: Estes circuitos digitais contam impulsos de entrada para gerar saídas baseadas em tempo. Um exemplo é o contador de tempo programável (PTC), usado em sistemas de temporização industrial para controlar o tempo de operação de máquinas. Relógios Digitais: Circuitos digitais de temporização são essenciais em relógios digitais, sincronizando a exibição do tempo com base em pulsos de referência. Relógios digitais são encontrados em uma variedade de dispositivos, desde relógios de pulso até sistemas de cronometragem em computadores. Sistemas de Controle de Acesso: Em sistemas de controle de acesso, como portões automáticos e catracas, os circuitos digitais com temporizadores são utilizados para controlar o tempo de abertura e fechamento, garantindo a segurança e eficiência do fluxo de pessoas ou veículos. Considerado o texto e as aplicações diretamente relacionados a circuitos com temporizadores, assinale a alternativa correta.</p>",
     "alternativas": [
      "Contador, Oscilador, Relógio, Temporizador, Catraca.",
      "Monostável, Bobina, Termistor, Oscilador, Contador.",
      "Astável, Contador, Memória, Relé, Clock.",
      "Pulsador, Interruptor, Temporizador, Display, Lógica.",
      "Timer, Relógio, Latch, Flip-Flop, Sensor."
     ],
     "resposta": "a",
     "resolucao": "<p><strong>a)</strong> Contador, Oscilador, Relógio, Temporizador, Catraca</p>",
     "fonte": "Enunciado (contadores de tempo, osciladores de relógio, relógios digitais, temporizadores, catracas). Escolha por correspondência com o texto, interpretação minha. Tema em HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 4, não conferido."
    }
   ]
  },
  {
   "id": "u2-avaliacao-unidade",
   "titulo": "U2 — Avaliação da Unidade",
   "fonte": "U2 - Avaliação da Unidade.txt",
   "questoes": [
    {
     "numero": 1,
     "enunciado": "<p>Os contadores com flip-flops são elementos essenciais em circuitos digitais, utilizados para contar eventos discretos e gerar sequências de saída baseadas em contagem binária. Compreender os conceitos por trás dos contadores é fundamental para projetar e implementar sistemas digitais confiáveis e eficientes. Abaixo temos algumas aplicações: Contagem de Frequência: Em sistemas de medição e controle, os contadores são usados para contar pulsos de entrada, como os gerados por um sensor de velocidade em um motor. Isso permite monitorar a frequência ou a velocidade de um evento em tempo real. Divisores de Frequência: Os contadores também são empregados como divisores de frequência, reduzindo a frequência de um sinal de entrada. Isso é útil em sistemas de temporização, onde é necessário gerar pulsos com frequências menores. Sequenciadores: Em aplicações de automação e controle, os contadores podem ser usados como sequenciadores para controlar a ordem de operações em um processo. Por exemplo, em uma linha de produção, um contador pode ser usado para coordenar as etapas de montagem de um produto. Contadores de Eventos: Em sistemas de monitoramento e segurança, os contadores são utilizados para contar o número de eventos ocorridos dentro de um determinado período de tempo. Isso é útil para detectar padrões ou anomalias em um sistema. Geração de Pulsos: Os contadores também são usados para gerar pulsos de saída em intervalos regulares. Isso é útil em aplicações de temporização, como em relógios digitais ou sistemas de sincronização de dados. Considerando o texto e as aplicações que estão relacionados a contadores com flip-flops, assinale a alternativa correta.</p>",
     "alternativas": [
      "Contagem de Estoque, Controle de Temperatura, Controle de Volume, Contagem de Horas, Controle de Luminosidade.",
      "Controle de Processos, Contagem de Pessoas, Controle de Iluminação, Controle de Velocidade de Motores, Contagem de Pulsação.",
      "Controle de Tráfego, Processamento de Texto, Controle de Acesso, Contagem de Velocidade, Criptografia.",
      "Contagem de Frequência, Divisores de Frequência, Sequenciadores, Contadores de Eventos, Geração de Pulsos.",
      "Contagem de Moedas, Controle de Nível de Água, Controle de Pressão, Contagem de Batimentos Cardíacos, Controle de Umidade."
     ],
     "resposta": "d",
     "resolucao": "<p><strong>d)</strong> Contagem de Frequência, Divisores de Frequência, Sequenciadores, Contadores de Eventos, Geração de Pulsos</p>",
     "fonte": "Enunciado (os cinco títulos de aplicações listados no texto). Tema em HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 3/4 (contadores), não conferido."
    },
    {
     "numero": 2,
     "enunciado": "<p>Os codificadores são circuitos digitais que convertem um conjunto de entradas em uma saída codificada, onde cada combinação única de entradas corresponde a um código de saída específico. Por exemplo, um codificador 4 para 2 converte 4 entradas binárias em 2 saídas binárias. Considere um teclado numérico. Cada tecla pressionada representa uma entrada única, e o sistema de codificação do teclado converte a entrada pressionada em um código binário que pode ser processado pelo sistema. Os codificadores são amplamente utilizados em sistemas de comunicação, como codificadores de linha em redes de comunicação digital, onde convertem dados paralelos em séries para transmissão. Alguns codificadores dão prioridade a determinadas entradas, garantindo que, em caso de múltiplas entradas simultâneas, apenas a entrada de maior prioridade seja codificada. Um exemplo é um codificador que prioriza a entrada de emergência em um sistema de alarme. Existem codificadores que lidam com prioridades absolutas, onde uma entrada tem prioridade sobre todas as outras, e codificadores com prioridades relativas, onde as entradas têm prioridades atribuídas em relação umas às outras. Considerando o texto sobre codificadores e aplicações de codificadores, assinale a alternativa correta.</p>",
     "alternativas": [
      "Codificação de Sinais, Compressão de Dados, Controle Remoto, Sistemas de Segurança, Telecomunicações.",
      "Decodificador, Contador, Registrador de Deslocamento, Comparador, Latch.",
      "Prioritário, Paralelo, Serial, Binário, Decimal.",
      "Áudio, Vídeo, Imagem, Texto, Dados.",
      "Teclado, Codificador de Linha, Conversor Analógico-Digital, Multiplexador, Demultiplexador."
     ],
     "resposta": "a",
     "resolucao": "<p><strong>a)</strong> Codificação de Sinais, Compressão de Dados, Controle Remoto, Sistemas de Segurança, Telecomunicações</p>",
     "fonte": "Interpretação minha: é a única lista composta só por aplicações; nenhuma alternativa casa totalmente com o texto. Tema em HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 3 (codificadores), não conferido.",
     "limitacao": "O enunciado ou as alternativas continham figuras, tabelas ou circuitos em imagem; foram transcritos em texto na digitação original e podem conter erros de leitura. Confira com a figura da plataforma."
    },
    {
     "numero": 3,
     "enunciado": "<p>A correta diferenciação de tipos de circuitos é extremamente importante pois influencia na correta interpretação do seu funcionamento. Um circuito combinacional é aquele que sempre depende do estado atual das entradas, a sua operação é sempre baseada na combinação dessas entradas. Circuitos simples que podem ser citados seriam os das portas lógicas. Por exemplo, uma porta AND de 2 entradas terá sua saída sempre determinando pela combinação das entradas. Um circuito sequencial é aquele que depende do estado atual e do estado anterior das entradas. São tipos de circuitos que memorizam bits, um exemplo é um contador para contar de 0 a 3, para ir do 1 para o 2 precisa armazenar o 1 para saber que próximo número, mesmo que binariamente, será o número 2. Baseado nas descrições acima, considere um contador que possui seu início de contagem determinado pela combinação de teclas como entradas ligadas a uma porta AND de 2 entradas e na sua saída, esta porta aciona o contador de 0 a 9 que conta de acordo com a oscilação de um sinal periódico, chamado clock. Este sistema de classifica como:</p>",
     "alternativas": [
      "Combinacional",
      "Múltipla função",
      "Sequencial",
      "Misto",
      "Combinacional e Sequencial"
     ],
     "resposta": "e",
     "resolucao": "<p><strong>e)</strong> Combinacional e Sequencial (porta AND combinacional e contador com clock sequencial)</p>",
     "fonte": "Enunciado e conhecimento geral; HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 1, apenas relacionado, não conferido."
    },
    {
     "numero": 4,
     "enunciado": "<p>Flip-flops são elementos cruciais em circuitos digitais, projetados para armazenar e manter estados binários, permitindo a sincronização e o controle preciso de operações sequenciais. Esses dispositivos de memória são capazes de reter informações binárias, representadas por 0s e 1s, até que uma nova entrada seja aplicada. Sua capacidade de manter estados estáveis torna-os essenciais em uma variedade de aplicações, desde contadores e registradores até sistemas de controle sequencial e memória de armazenamento temporário. Com diferentes tipos, como RS, D, JK e T, os flip-flops oferecem uma gama de funcionalidades para atender às necessidades específicas de projetos digitais, tornando-os componentes fundamentais na construção de sistemas digitais modernos. Um engenheiro está projetando um sistema de controle para um semáforo de uma grande interseção. No projeto, ele precisa garantir que o semáforo mude de estado de forma sincronizada e de acordo com um padrão predefinido. Para isso, ele decide usar flip-flops, pois parece ser uma decisão adequada ao projeto. De acordo com a função dos flip-flops neste contexto, assinale a alternativa correta.</p>",
     "alternativas": [
      "Converter os sinais analógicos dos sensores de tráfego em sinais digitais compreensíveis pelo sistema de controle.",
      "Interconectar diferentes dispositivos do sistema de controle, permitindo a comunicação eficiente entre eles.",
      "Armazenar o estado atual do semáforo, garantindo que ele permaneça consistente durante todo o ciclo de operação.",
      "Amplificar os sinais dos sensores de tráfego para garantir uma detecção precisa do volume de veículos.",
      "Codificar os dados dos sensores de tráfego para proteger a integridade das informações transmitidas."
     ],
     "resposta": "c",
     "resolucao": "<p><strong>c)</strong> Armazenar o estado atual do semáforo, garantindo que ele permaneça consistente durante todo o ciclo de operação</p>",
     "fonte": "Enunciado (flip-flop como memória de estado); HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 4 (flip-flops), não conferido."
    },
    {
     "numero": 5,
     "enunciado": "<p>Decodificadores são dispositivos essenciais em sistemas digitais, projetados para converter códigos de entrada em uma ou mais saídas correspondentes, com base em padrões específicos. Em sua forma mais básica, um decodificador recebe uma entrada codificada e a traduz em uma saída desejada, facilitando a interpretação de dados em diferentes contextos. Esses dispositivos desempenham um papel crucial em uma variedade de aplicações, desde sistemas de comunicação e processamento de dados até controle de acesso e automação industrial. Os decodificadores são frequentemente utilizados para selecionar dispositivos ou circuitos com base em informações codificadas, simplificando processos de tomada de decisão e controle. Sua versatilidade e capacidade de interpretar e traduzir dados tornam os decodificadores componentes fundamentais em projetos de sistemas digitais modernos. Um engenheiro eletrônico está projetando um sistema de controle para um sistema de automação industrial. No projeto, ele precisa garantir que determinadas operações tenham prioridade sobre outras, dependendo das condições específicas. Para isso, ele decide usar decodificadores de prioridade. Considerando a função principal dos decodificadores de prioridade nesse contexto, assinale a alternativa correta.</p>",
     "alternativas": [
      "Converter sinais analógicos de sensores em sinais digitais compreensíveis pelo sistema de controle.",
      "Rotear os dados de entrada para diferentes circuitos de processamento com base na ordem de prioridade especificada.",
      "Codificar os dados de entrada dos sensores para proteger a segurança das informações transmitidas.",
      "Gerar sinais de controle para priorizar a comunicação entre diferentes dispositivos no sistema de automação.",
      "Identificar a ocorrência de eventos críticos e acionar alarmes de emergência para interromper as operações menos importantes."
     ],
     "resposta": "d",
     "resolucao": "<p><strong>d)</strong> Gerar sinais de controle para priorizar a comunicação entre diferentes dispositivos no sistema de automação (corrigida; a opção b foi marcada como incorreta pelo sistema)</p>",
     "fonte": "Interpretação minha a partir do enunciado, por eliminação após a b ser marcada incorreta; não confirmada no material (HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf, Aula 3, decodificadores)."
    }
   ]
  },
  {
   "id": "u3-atividade-aprendizagem",
   "titulo": "U3 — Atividade de Aprendizagem",
   "fonte": "U3 - Atividade de Aprendizagem.txt",
   "questoes": [
    {
     "numero": 1,
     "enunciado": "<p>Os microprocessadores desempenham um papel fundamental nos sistemas de computadores e dispositivos eletrônicos, sendo reconhecidos por sua notável capacidade dinâmica. Sua versatilidade é evidente na capacidade de manipular e realizar tarefas complexas, tornando-os indispensáveis para o funcionamento eficiente de dispositivos modernos. A constante evolução tecnológica impulsiona a busca por microprocessadores mais avançados, impulsionando a inovação e o desempenho em diversas aplicações, desde computação pessoal até sistemas embarcados e automação. Além disso, a arquitetura e o design dos microprocessadores têm evoluído para lidar com demandas crescentes de velocidade, eficiência energética e capacidade de processamento. Esses avanços permitiram o surgimento de dispositivos mais poderosos e ágeis, impulsionando setores como inteligência artificial, internet das coisas (IoT) e computação em nuvem. Considerando o texto apresentado e o que define a principal função dos microprocessadores, assinale a alternativa correta.</p>",
     "alternativas": [
      "Integração de periféricos e memórias.",
      "Execução de algoritmos complexos.",
      "Controle de sistemas embarcados.",
      "Manipulação de dados em ambientes dedicados.",
      "Coordenação das operações de todo o sistema."
     ],
     "resposta": "e",
     "resolucao": "<p><strong>e)</strong> Coordenação das operações de todo o sistema</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 1, p. 5 (o microprocessador executa instruções e coordena as operações de todo o sistema)."
    },
    {
     "numero": 2,
     "enunciado": "<p>A arquitetura RISC (Reduced Instruction Set Computing) e a arquitetura CISC (Complex Instruction Set Computing) representam abordagens distintas no design de processadores de computador. A diferença fundamental entre elas está no conjunto de instruções que os processadores utilizam. Considerando as informações apresentadas, analise as afirmativas a seguir:</p><p>I. arquitetura RISC utiliza um conjunto reduzido e simples de instruções, enquanto a arquitetura CISC utiliza um conjunto mais extenso e complexo de instruções.</p><p>II. A arquitetura RISC utiliza um conjunto mais extenso e complexo de instruções, enquanto a arquitetura CISC utiliza um conjunto reduzido e simples de instruções.</p><p>III. A arquitetura RISC e CISC são termos intercambiáveis e referem-se ao mesmo tipo de arquitetura de processadores.</p><p>IV. A arquitetura RISC e CISC são igualmente eficientes em termos de desempenho, não apresentando diferenças significativas.</p><p>Considerando o contexto apresentado, é correto o que se afirma em:</p>",
     "alternativas": [
      "III, apenas.",
      "II e III, apenas.",
      "I e II, apenas.",
      "IV, apenas.",
      "I, apenas."
     ],
     "resposta": "e",
     "resolucao": "<p><strong>e)</strong> I, apenas</p>",
     "fonte": "Enunciado e conhecimento geral (RISC = conjunto reduzido, CISC = complexo); HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aulas 3 e 4, não conferido página a página."
    },
    {
     "numero": 3,
     "enunciado": "<p>Os pilares essenciais do microprocessamento que compõem a estrutura vital de um computador são a Central Processing Unit (CPU), a Unidade Lógica e Aritmética (ULA), o barramento, Entradas e Saídas (I/O), Registradores e a imprescindível Unidade de Controle (UC). Considerando as informações apresentadas, analise as afirmativas a seguir:</p><p>I. A função principal da Unidade de Controle (UC) em um sistema computacional é sincronizar o processador, controlar a sequência de instruções e suas dedicações.</p><p>II. A Unidade de Processamento Central (CPU) é o componente principal que realiza operações lógicas, aritméticas e de controle, coordenando as atividades do sistema.</p><p>III. Os registradores, são áreas de armazenamento consideradas \"memórias temporárias\" porque armazenam dados por um curto período antes de transferi-los para a memória principal.</p><p>IV. Uma das funções específicas da Unidade de Controle (UC) em relação às instruções é realizar operações lógicas e aritméticas nas instruções.</p><p>Considerando o contexto apresentado, é correto o que se afirma em:</p>",
     "alternativas": [
      "IV, apenas.",
      "II e III, apenas.",
      "I e II, apenas.",
      "III, apenas.",
      "I, apenas."
     ],
     "resposta": "c",
     "resolucao": "<p><strong>c)</strong> I e II, apenas</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 1, pp. 8-11 (UC controla a sequência de instruções; operações lógicas e aritméticas são da ULA; registradores como armazenamento temporário). A falsidade da III é interpretação minha: o material fala em armazenamento temporário durante o processamento, não em transferência à memória principal; as afirmativas I, II e III são todas plausíveis e nenhuma alternativa traz I, II e III."
    },
    {
     "numero": 4,
     "enunciado": "<p>A arquitetura de Harvard, como modelo essencial de organização de computadores, destaca-se pela utilização de memórias físicas distintas para armazenar dados e instruções do programa. A clara separação entre essas memórias simplifica o design do processador, tornando sua implementação mais acessível. Ampla e predominantemente empregada em microcontroladores e sistemas embarcados, essa arquitetura fornece uma base sólida para aplicações específicas que demandam desempenho otimizado e processamento eficiente de dados e instruções. Sua presença é notável em diversos dispositivos, desde equipamentos médicos até dispositivos de automação residencial, consolidando sua relevância na paisagem tecnológica contemporânea. A constante adoção da arquitetura de Harvard evidencia seu papel crucial na evolução contínua da computação e eletrônica modernas. Na arquitetura de Harvard, a separação das memórias é considerada uma vantagem, pois</p>",
     "alternativas": [
      "permite a comunicação sequencial entre CPU e memória.",
      "limita o acesso da CPU a dados e instruções ao mesmo tempo.",
      "reduz a complexidade do design.",
      "melhora o desempenho ao acessar dados e instruções simultaneamente.",
      "facilita a flexibilidade do computador."
     ],
     "resposta": "d",
     "resolucao": "<p><strong>d)</strong> melhora o desempenho ao acessar dados e instruções simultaneamente</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 1, p. 6 (a CPU acessa dados e instruções simultaneamente, melhorando o desempenho em relação a Von Neumann)."
    },
    {
     "numero": 5,
     "enunciado": "<p>A arquitetura MIPS (Microprocessor without Interlocked Pipeline Stages) representa uma notável expressão do paradigma RISC (Reduced Instruction Set Computing), destacando-se por sua eficiência e simplicidade. Essa abordagem busca otimizar a execução de operações, resultando em desempenho veloz e previsível. No coração da arquitetura, encontram-se registradores de 32 bits, destinados a armazenar dados temporários durante a execução de instruções. Esses registradores desempenham um papel crucial na agilidade do processamento, a arquitetura MIPS se destaca por sua simplicidade combinada com eficiência, influenciando positivamente o desempenho de uma variedade de dispositivos, desde sistemas embarcados até ambientes de alto desempenho. Considerando o contexto apresentado e o funcionamento do ciclo de instrução na arquitetura MIPS, assinale a alternativa correta.</p>",
     "alternativas": [
      "O ciclo de instrução na arquitetura MIPS não envolve a busca de instruções da memória.",
      "Cada estágio do ciclo de instrução opera de forma independente no pipeline, permitindo uma sobreposição eficiente das operações.",
      "A Decodificação da Instrução é a última etapa do ciclo de instrução.",
      "O acesso à memória é sempre a primeira etapa do ciclo de instrução.",
      "A Busca da Instrução é seguida pela Escrita de Resultados."
     ],
     "resposta": "b",
     "resolucao": "<p><strong>b)</strong> Cada estágio do ciclo de instrução opera de forma independente no pipeline, permitindo uma sobreposição eficiente das operações</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 3, pp. 15-17 (ciclo de instrução e pipeline MIPS). As demais alternativas contradizem a ordem busca, decodificação, execução e escrita de resultados."
    },
    {
     "numero": 6,
     "enunciado": "<p>O conceito de pipeline, em computação, refere-se a uma técnica de organização e execução de instruções em um processador de maneira mais eficiente, ao facilitar uma abordagem paralela na execução de tarefas, os pipelines proporcionam um aumento notável na capacidade de processamento do processador. O uso de pipelines contribui para uma execução mais rápida de instruções, melhorando a eficiência do processador e a implementação estratégica de pipelines representa um avanço significativo na arquitetura de processadores, impulsionando a eficácia e a rapidez na execução de instruções. Essa abordagem inovadora minimiza o tempo de espera ocioso durante a execução das instruções, otimizando assim a taxa de transferência global do processador. O conceito de pipeline na analogia da cozinha é comparável ao processo de execução de instruções na arquitetura MIPS, pois</p>",
     "alternativas": [
      "na cozinha, o pipeline é responsável pela contagem de tempo de preparo, enquanto na CPU MIPS, controla o tempo de execução de instruções.",
      "o pipeline na cozinha indica a organização dos utensílios, ao passo que, na CPU MIPS, refere-se à conexão dos registradores.",
      "na cozinha, o pipeline refere-se à ordem de preparação de cada ingrediente, enquanto na CPU, representa a sequência de execução de instruções.",
      "na cozinha, o pipeline representa a variedade de ingredientes disponíveis, enquanto na CPU, refere-se à diversidade de formatos de instruções.",
      "o pipeline na cozinha simboliza a sincronização entre diferentes etapas, assim como na CPU, onde diferentes estágios de instruções ocorrem simultaneamente."
     ],
     "resposta": "e",
     "resolucao": "<p><strong>e)</strong> o pipeline na cozinha simboliza a sincronização entre diferentes etapas, assim como na CPU, onde diferentes estágios de instruções ocorrem simultaneamente</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 3, p. 16 (analogia do chef: etapas em paralelo, como os estágios de uma instrução no pipeline MIPS)."
    },
    {
     "numero": 7,
     "enunciado": "<p>O computador, uma máquina eletrônica programável, desempenha um papel crucial no processamento de dados. Sua definição fundamental permite compreender sua presença onipresente em várias esferas, desde simples tarefas cotidianas até operações matemáticas complexas e manipulação avançada de informações. A habilidade de programação confere aos computadores uma notável adaptabilidade e utilidade em diversos contextos, permeando setores como negócios, pesquisa científica, educação e entretenimento. A constante evolução da tecnologia computacional impulsiona inovações contínuas, expandindo as fronteiras do que os computadores podem realizar. Sua presença se torna cada vez mais essencial, moldando a maneira como interagimos com o mundo e enfrentamos desafios modernos. Considerando o contexto apresentado, quanto aos componentes externos necessários para o funcionamento de microprocessadores, assinale a alternativa correta.</p>",
     "alternativas": [
      "Memória, memória rom, circuitos integrados geradores de clock, endereçamento, entre outros.",
      "Memória ram, hd e placa mãe.",
      "Placa de vídeo, placa mãe e fonte.",
      "Memória rom, processador e fonte.",
      "Monitor, teclado e mouse."
     ],
     "resposta": "b",
     "resolucao": "<p><strong>b)</strong> Memória ram, hd e placa mãe (corrigida; a opção a foi marcada como incorreta pelo sistema)</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 1, p. 5 lista como dependências externas memória RAM, memória ROM, geradores de clock e endereçamento. Nenhuma das alternativas restantes casa com o material; a escolha da b é interpretação minha, por maior proximidade (inclui RAM), não confirmada."
    },
    {
     "numero": 8,
     "enunciado": "<p>A arquitetura de microprocessadores é essencial para o funcionamento de computadores, sendo a base que define a estrutura interna e o design fundamental da unidade central de processamento (CPU). Responsável por executar instruções, manipular dados e interagir com outros componentes do sistema, a arquitetura influencia diretamente o desempenho e a eficiência do processador. Ela abrange aspectos como o conjunto de instruções suportado, modos de endereçamento, pipeline de execução e o gerenciamento de registradores. A constante evolução nesse campo visa aprimorar a capacidade de processamento, a eficiência energética e a compatibilidade com novas tecnologias, visando um alto desempenho em cargas de trabalho altamente paralelas, como aquelas encontradas em computação de alto desempenho. Considerando o contexto apresentado, a principal característica da arquitetura MIC e como ela se destaca em relação a outras abordagens de design de processadores, assinale a alternativa correta.</p>",
     "alternativas": [
      "Integração de muitos núcleos de processamento em um único chip, otimizado para cargas de trabalho paralelas.",
      "Conjunto de instruções simples e uniformes para facilitar a programação.",
      "Enfoque em operações aritméticas e lógicas complexas em uma única instrução.",
      "Ênfase na execução de instruções de transferência de dados entre registradores e memória.",
      "Utilização de microprogramação para implementar instruções complexas."
     ],
     "resposta": "a",
     "resolucao": "<p><strong>a)</strong> Integração de muitos núcleos de processamento em um único chip, otimizado para cargas de trabalho paralelas</p>",
     "fonte": "Conhecimento geral (MIC = Many Integrated Core) e enunciado; HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 4, trata do tema, não conferido página a página."
    },
    {
     "numero": 9,
     "enunciado": "<p>A Máquina MAC (Multiplication-Accumulation) desempenha um papel crucial no processamento de instruções CISC, permitindo operações eficientes de multiplicação e acumulação. Na arquitetura MIC (Many Integrated Core), os sinais de controle coordenam a execução paralela em múltiplos núcleos, otimizando o processamento de tarefas intensivas em paralelismo. A microprogramação, conceito central em arquiteturas CISC, envolve decompor instruções complexas em microinstruções de baixo nível, simplificando o projeto da unidade de controle. Exemplos históricos de máquinas CISC, como a arquitetura x86, ilustram como esses conceitos têm impulsionado a evolução dos processadores, combinando complexidade de instruções com eficiência operacional. Com base no contexto apresentado, é correto afirmar que a máquina MAC é aplicada no processamento de áudio em um sistema baseado em arquitetura CISC para o hardware Intel x86,</p>",
     "alternativas": [
      "minimizando a complexidade do conjunto de instruções para otimizar o desempenho.",
      "coordenando a execução paralela de múltiplos núcleos no processador.",
      "gerenciando o fluxo de dados entre diferentes estágios do processamento sem utilizar multiplicação e acumulação.",
      "realizando operações de entrada e saída para processamento de áudio.",
      "aplicando filtros digitais por meio de operações de multiplicação e acumulação eficientes."
     ],
     "resposta": "e",
     "resolucao": "<p><strong>e)</strong> aplicando filtros digitais por meio de operações de multiplicação e acumulação eficientes</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 4, p. 21 (máquina MAC aplicando filtros digitais a amostras de áudio em sistema DSP CISC)."
    },
    {
     "numero": 10,
     "enunciado": "<p>A arquitetura CISC, que significa Complex Instruction Set Computing, é um paradigma de design de arquitetura de computadores. Essa abordagem de design de processadores é caracterizada por ter um conjunto de instruções complexo, permitindo que uma única instrução execute diversas operações complexas. Em sistemas CISC, as instruções podem realizar múltiplas operações em uma única instrução, incluindo operações aritméticas, lógicas, movimentação de dados e controle de fluxo. Considerando as informações apresentadas, analise as afirmativas a seguir:</p><p>I. A principal característica da arquitetura CISC é a ênfase em otimizações para cargas de trabalho paralelas.</p><p>II. A principal vantagem do uso da microprogramação na implementação de uma unidade de controle em arquiteturas CISC é a redução de custos e simplificação do projeto.</p><p>III. A Máquina MAC representa uma Coordenadora de sinais de controle para instruções complexas</p><p>IV. A principal vantagem do uso da microprogramação na implementação de uma unidade de controle em arquiteturas CISC é o aumento da complexidade do projeto.</p><p>Considerando o contexto apresentado, é correto o que se afirma em:</p>",
     "alternativas": [
      "III, apenas.",
      "II e III, apenas.",
      "I e II, apenas.",
      "I, apenas.",
      "IV, apenas."
     ],
     "resposta": "b",
     "resolucao": "<p><strong>b)</strong> II e III, apenas</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 4, p. 19 (a microprogramação simplifica o projeto da unidade de controle; a máquina MAC é a unidade de controle que gera os sinais de controle para instruções complexas). A afirmativa I descreve MIC e não CISC, e a IV inverte a vantagem."
    }
   ]
  },
  {
   "id": "u3-avaliacao-unidade",
   "titulo": "U3 — Avaliação da Unidade",
   "fonte": "U3 - Avaliação da Unidade.txt",
   "questoes": [
    {
     "numero": 1,
     "enunciado": "<p>A arquitetura MIPS é valorizada pela sua capacidade de proporcionar um equilíbrio entre desempenho e simplicidade, tornando-a uma escolha versátil para diversas necessidades computacionais. Essa arquitetura influenciou o desenvolvimento de muitos outros processadores RISC e continua a ser estudada e utilizada em diversos contextos. A arquitetura MIPS é utilizada em uma variedade de contextos, desde sistemas embarcados até servidores de alto desempenho. Sua versatilidade a torna uma escolha popular em muitas aplicações, incluindo roteadores, consoles de videogame, dispositivos médicos e muito mais. Em resumo, a arquitetura MIPS desempenhou um papel significativo no desenvolvimento de processadores RISC e continua a ser estudada, utilizada e valorizada em diversos setores da computação. Considerando as características da arquitetura MIPS, analise as afirmativas a seguir:</p><p>I. MIPS utiliza um único formato de instrução chamado R-format.</p><p>II. MIPS possui um conjunto extenso e diversificado de instruções.</p><p>III. MIPS suporta vários modos de endereçamento.</p><p>IV. MIPS executa instruções em um pipeline de três estágios.</p><p>Considerando o contexto apresentado, é correto o que se afirma em:</p>",
     "alternativas": [
      "I, II e IV, apenas.",
      "I e III, apenas.",
      "I, II, III e IV.",
      "III e IV, apenas.",
      "I, II e III, apenas."
     ],
     "resposta": "b",
     "resolucao": "<p><strong>b)</strong> I e III, apenas (escolha de menor erro; nenhuma alternativa está totalmente correta)</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 3, pp. 14-15: só a III está correta pelo material (formatos R, I e J; conjunto reduzido; pipeline de cinco estágios IF, ID, EX, MEM, WB). Nenhuma alternativa traz apenas a III; a escolha da b é julgamento meu por menor erro, sem base para distinguir da d."
    },
    {
     "numero": 2,
     "enunciado": "<p>A arquitetura de Harvard, como modelo fundamental de organização de computadores, destaca-se por sua estrutura distintiva, marcada pela clara segregação entre memórias físicas dedicadas ao armazenamento de dados e instruções do programa. Essa abordagem singular simplifica o design do processador, promovendo uma implementação mais eficiente e manutenção facilitada. Essa arquitetura encontra ampla aplicação em microcontroladores e sistemas embarcados, oferecendo uma base sólida para aplicações específicas que exigem desempenho otimizado e processamento eficiente de dados e instruções. Sua presença é notável em uma variedade de dispositivos, desde equipamentos médicos até dispositivos de automação residencial, consolidando sua relevância na contemporaneidade tecnológica. A constante preferência pela arquitetura de Harvard destaca não apenas sua eficácia, mas também sua capacidade de se adaptar às crescentes exigências da computação moderna. Essa adaptação contínua contribui significativamente para a evolução dos sistemas eletrônicos, impulsionando a inovação e a eficiência na execução de diversas tarefas em diferentes setores da sociedade. Na arquitetura de Harvard, a separação das memórias é considerada uma vantagem, pois</p>",
     "alternativas": [
      "reduz a complexidade do design.",
      "melhora o desempenho ao acessar dados e instruções simultaneamente.",
      "permite a comunicação sequencial entre CPU e memória.",
      "limita o acesso da CPU a dados e instruções ao mesmo tempo.",
      "facilita a flexibilidade do computador."
     ],
     "resposta": "b",
     "resolucao": "<p><strong>b)</strong> melhora o desempenho ao acessar dados e instruções simultaneamente</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 1, p. 6 (a CPU acessa dados e instruções simultaneamente, melhorando o desempenho)."
    },
    {
     "numero": 3,
     "enunciado": "<p>A arquitetura de Von Neumann é caracterizada pela utilização de uma única memória para armazenar tanto dados quanto instruções, compartilhando o mesmo barramento. Isso implica que o processador e a unidade de controle acessam a memória de maneira sequencial, resultando em um potencial gargalo no desempenho, especialmente em operações que exigem leitura e escrita simultâneas. Em contrapartida, a arquitetura de Harvard adota memórias distintas para dados e instruções, o que permite acessos simultâneos e, consequentemente, melhora a eficiência e a velocidade de processamento. Essa abordagem é frequentemente empregada em sistemas embarcados, nos quais a otimização de recursos e a redução do tempo de acesso são cruciais para o funcionamento adequado do sistema. Considerando as arquiteturas de Von Neumann e Harvard, analise as afirmativas a seguir:</p><p>I. A arquitetura de Von Neumann armazena programas e dados em memórias separadas.</p><p>II. A arquitetura de Harvard utiliza um único barramento de dados e endereços.</p><p>III. Na arquitetura de Harvard, a CPU busca instruções e dados da mesma forma.</p><p>IV. A arquitetura de Von Neumann é preferida em sistemas embarcados.</p><p>V. A arquitetura de Harvard é mais simples e flexível.</p><p>Considerando o contexto apresentado, é correto o que se afirma em:</p>",
     "alternativas": [
      "III, apenas.",
      "II e V, apenas.",
      "II, apenas.",
      "IV e V, apenas.",
      "I e III, apenas."
     ],
     "resposta": "a",
     "resolucao": "<p><strong>a)</strong> III, apenas (escolha de menor erro; nenhuma alternativa é limpa)</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 1, pp. 4-6: I, II e IV são falsas (Von Neumann usa memória única; Harvard usa dois barramentos e é típica de microcontroladores e embarcados). A V e a III são discutíveis (a flexibilidade é atribuída a Von Neumann, p. 6). A escolha da a é julgamento meu."
    },
    {
     "numero": 4,
     "enunciado": "<p>Os microprocessadores são componentes essenciais em sistemas computacionais, funcionando como o \"cérebro\" de computadores pessoais, servidores e muitos dispositivos eletrônicos. A arquitetura de um microprocessador envolve a organização interna de seus componentes, como a Unidade Central de Processamento (CPU), a Unidade de Controle, a Unidade Lógica e Aritmética (ULA), os registradores, barramentos de dados e endereços, entre outros. Enquanto os microprocessadores são mais generalistas e utilizados em uma variedade de sistemas, os microcontroladores são projetados para tarefas específicas e oferecem uma solução completa em um único chip, otimizando o espaço e a eficiência em sistemas embarcados. Ambas as arquiteturas desempenham papéis cruciais na computação moderna e na automação de dispositivos. Em resumo, tanto os microprocessadores quanto os microcontroladores desempenham papéis essenciais na computação moderna, cada um atendendo a diferentes demandas de aplicação. O contínuo avanço nas arquiteturas e nas tecnologias de fabricação impulsiona a inovação, permitindo o desenvolvimento de sistemas mais poderosos, eficientes e adaptáveis às crescentes necessidades da sociedade digital. Diante do exposto, é necessário definir o que é a Unidade Lógica e Aritmética (ULA) na Unidade Central de Processamento (CPU). Considerando o contexto apresentado, assinale a alternativa correta.</p>",
     "alternativas": [
      "É um componente central na arquitetura CISC.",
      "Realiza operações matemáticas e lógicas fundamentais para o processamento de dados.",
      "Responsável pela execução de instruções e coordenação de operações.",
      "Permite a troca de dados entre diferentes componentes do sistema.",
      "Armazena temporariamente dados e instruções durante a execução de programas."
     ],
     "resposta": "b",
     "resolucao": "<p><strong>b)</strong> Realiza operações matemáticas e lógicas fundamentais para o processamento de dados</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 1, pp. 9-11 (função da ULA); a definição é também conhecimento geral."
    },
    {
     "numero": 5,
     "enunciado": "<p>A onipresença dos microprocessadores em dispositivos modernos, desde smartphones e computadores pessoais até sistemas de controle industrial avançados, sublinha sua influência generalizada. A contínua inovação nesse campo não apenas aprimora o desempenho dos dispositivos existentes, mas também impulsiona a criação de novas tecnologias e aplicações. Assim, os microprocessadores desempenham um papel crucial e em constante evolução na sociedade contemporânea, moldando o cenário tecnológico com sua versatilidade multifacetada. Além de sua função central, os microprocessadores têm evoluído constantemente para atender às demandas crescentes de computação em diversas áreas. Na era da inteligência artificial, esses componentes tornam-se fundamentais para a execução de algoritmos complexos, impulsionando avanços significativos em aprendizado de máquina e processamento de dados massivos. A expansão da internet das coisas (IoT) e a crescente integração de dispositivos conectados também destacam a importância dos microprocessadores na interconexão e comunicação eficiente entre sistemas. Sua importância reside na capacidade de processar informações de maneira eficiente e rápida, influenciando diretamente o desempenho de dispositivos e sistemas. Considerando o contexto apresentado em relação ao que define a principal função dos microprocessadores, assinale a alternativa correta.</p>",
     "alternativas": [
      "Execução de algoritmos complexos.",
      "Controle de sistemas embarcados.",
      "Integração de periféricos e memórias.",
      "Manipulação de dados em ambientes dedicados.",
      "Coordenação das operações de todo o sistema."
     ],
     "resposta": "e",
     "resolucao": "<p><strong>e)</strong> Coordenação das operações de todo o sistema</p>",
     "fonte": "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf, Aula 1, p. 5 (o microprocessador executa instruções e coordena as operações de todo o sistema)."
    }
   ]
  },
  {
   "id": "atividade-avaliativa",
   "titulo": "Atividade Avaliativa (resolvida)",
   "fonte": "Atividade_avaliativa.pdf",
   "questoes": [
    {
     "enunciado": "<p><strong>Questão 1 – Flip-Flops.</strong> a) O que é um Flip-Flop e qual sua principal finalidade? b) Diferença entre circuito combinacional e sequencial. c) Por que um Flip-Flop armazena um bit? d) Importância do clock. e) Duas aplicações.</p>",
     "respostaFinal": "<ul><li><strong>a)</strong> Circuito digital biestável (dois estados estáveis) que armazena 1 bit; é o elemento básico de memória dos circuitos sequenciais.</li><li><strong>b)</strong> Combinacional: saída depende só das entradas atuais, sem memória. Sequencial: saída depende das entradas atuais e do estado anterior (tem memória).</li><li><strong>c)</strong> Porque a realimentação entre as portas mantém Q em 0 ou 1 mesmo depois que a entrada que o ajustou volta ao nível inativo.</li><li><strong>d)</strong> O clock define o instante em que a saída pode mudar (borda de subida ou de descida), sincronizando o circuito; fora da borda, as entradas síncronas não alteram Q.</li><li><strong>e)</strong> Registradores (armazenamento e deslocamento de dados) e contadores/divisores de frequência. Também: memórias e máquinas de estado.</li><li><strong>Importante:</strong> o flip-flop é um circuito <strong>sequencial</strong> (tem memória), nunca combinacional.</li></ul>",
     "resolucao": "<p>Base: <em>AulaSD_3.pptx</em> (Introdução, Flip-flops com clock, Aplicações) e U2 - Livro Didático, Aula 1 e Aula 2 (flip-flop como armazenador de 1 bit; combinacional sem memória, sequencial com memória; aplicações em contadores e registradores).</p><p>No item d, a ideia de &quot;borda&quot; vem do <em>AulaSD_3.pptx</em> (&quot;somente a transição positiva do clock pode alterar a saída Q&quot;).</p>",
     "fonte": "AulaSD_3.pptx; U2 - Livro Didático.pdf, Aulas 1 a 3."
    },
    {
     "enunciado": "<p><strong>Questão 2 – Arduino e sistemas embarcados.</strong> Sistema de automação residencial com Arduino que monitora a temperatura e aciona um ventilador acima de um limite. a) O que é Arduino e sua finalidade? b) Diferença entre pinos digitais e entradas analógicas. c) Função dos sensores e atuadores no projeto. d) Para que serve o Arduino IDE? e) O Arduino precisa estar permanentemente conectado à Internet para executar um programa gravado? Justifique.</p>",
     "respostaFinal": "<ul><li><strong>a)</strong> Plataforma open-source de prototipagem eletrônica: placa com microcontrolador, circuitos de E/S e conexão USB, programada em C/C++ simplificado. Serve para criar projetos de automação, robótica, IoT e aprendizado.</li><li><strong>b)</strong> Pinos digitais (0 a 13 no Uno) operam em dois níveis, 0 V (LOW) e 5 V (HIGH), como entrada ou saída. Entradas analógicas (A0 a A5) medem a tensão aplicada, que pode assumir valores intermediários (0 a 5 V), vinda de grandezas contínuas como temperatura e luz.</li><li><strong>c)</strong> Sensor: mede a temperatura e entrega o sinal ao Arduino (entrada). Atuador: executa a ação sobre o ambiente, aqui ligar/desligar o ventilador (saída).</li><li><strong>d)</strong> É o ambiente de desenvolvimento integrado onde se escreve, verifica e carrega (via USB) o programa no microcontrolador.</li><li><strong>e)</strong> Não. Depois de gravado na memória flash, o programa roda de forma independente, bastando alimentação; a Internet só é necessária se o projeto usar comunicação em rede (por exemplo com um shield Ethernet).</li></ul>",
     "resolucao": "<p>Base: <em>Arduino.pptx</em> (slides 2, 3, 8 a 12), U4 - Livro Didático, Aulas 1 e 2 (pinos digitais 0 a 13, A0 a A5, setup/loop) e <em>AulaSD_4.pptx</em>.</p><p>A resposta da letra e vem do slide 3 do <em>Arduino.pptx</em>: &quot;Depois de programado, o microcontrolador pode ser usado de forma independente&quot;. A ideia de sensor como entrada e atuador como saída é o enquadramento do próprio livro (sensores e atuadores); o limite de temperatura é a lógica do enunciado.</p>",
     "fonte": "Arduino.pptx; U4 - Livro Didático.pdf, Aulas 1 e 2."
    },
    {
     "enunciado": "<p><strong>Questão 3 – Latches.</strong> Classifique em V ou F: (1) O latch armazena um bit. (2) SET coloca Q em 1. (3) RESET coloca Q em 1. (4) Q e Q̅ são complementares nos estados válidos. (5) O latch é combinacional pois não armazena. (6) Latches podem ser usados na construção de registradores e memórias.</p>",
     "respostaFinal": "<p><strong>V – V – F – V – F – V</strong></p>",
     "resolucao": "<ul><li>(1) V: o latch armazena 1 bit.</li><li>(2) V: SET leva Q a 1.</li><li>(3) F: RESET leva Q a 0.</li><li>(4) V: nos estados válidos Q̅ = NÃO Q.</li><li>(5) F: a afirmação está errada. Latch e flip-flop são circuitos <strong>sequenciais</strong>, justamente porque têm memória; combinacional é o circuito sem memória (portas, MUX, somador).</li><li>(6) V: Latch → Flip-Flop → Registradores → Memórias → Processadores.</li></ul>",
     "fonte": "AulaSD_3.pptx (slide &quot;Latch&quot;)."
    },
    {
     "enunciado": "<p><strong>Questão 4 – Latch SR NOR e NAND.</strong> a) Diferença entre NOR e NAND. b) Nível de ativação no NOR. c) No NAND. d) Saída Q no NOR com entradas ambas em 0. e) Saída Q no NAND com entradas ambas em 1. f) O que é a condição proibida.</p>",
     "respostaFinal": "<ul><li><strong>a)</strong> NOR: entradas ativas em nível alto, repouso em S = R = 0, proibido em S = R = 1. NAND: entradas ativas em nível baixo (S̅ e R̅), repouso em S̅ = R̅ = 1, proibido em S̅ = R̅ = 0.</li><li><strong>b)</strong> Nível alto (1).</li><li><strong>c)</strong> Nível baixo (0).</li><li><strong>d)</strong> Q mantém o valor anterior (retenção).</li><li><strong>e)</strong> Q mantém o valor anterior (retenção).</li><li><strong>f)</strong> É a combinação em que SET e RESET são ativados ao mesmo tempo: as duas saídas assumem o mesmo valor (Q = Q̅), perdendo a complementaridade, e se as entradas voltam ao repouso juntas o estado final é imprevisível.</li></ul>",
     "resolucao": "<p>Base: <em>AulaSD_3.pptx</em> (Latch com portas NOR e NAND).</p><div class=\"caixa nota\" data-titulo=\"Divergência no slide\">Para o NAND, o <em>AulaSD_3.pptx</em> escreve que SET = RESET = 0 &quot;faz Q = Q̅ = 0&quot;. Pela lógica da porta NAND (qualquer entrada 0 força a saída em 1), as duas saídas vão para <strong>1</strong>. O valor 0 vale para o NOR com S = R = 1. Verifique com o professor qual versão ele cobra.</div>",
     "fonte": "AulaSD_3.pptx."
    },
    {
     "enunciado": "<p><strong>Questão 5 – Microprocessadores e microcontroladores.</strong> Equipamento A: computador para sistemas operacionais e aplicativos complexos. Equipamento B: automação industrial (leitura de sensores, acionamento de motores). a) Qual usa microprocessador? b) Qual usa microcontrolador? c) Componentes integrados no microcontrolador. d) Por que o microprocessador precisa de componentes externos. e) Três aplicações de microcontroladores.</p>",
     "respostaFinal": "<ul><li><strong>a)</strong> Equipamento A: propósito geral, alto desempenho e flexibilidade para muitas tarefas ao mesmo tempo.</li><li><strong>b)</strong> Equipamento B: tarefa específica de controle, tempo real, baixo consumo e custo, com tudo integrado em um chip.</li><li><strong>c)</strong> CPU (ULA e unidade de controle), memória de programa (flash/ROM/PROM), RAM, linhas de E/S, e auxiliares como clock, temporizadores/contadores e USART.</li><li><strong>d)</strong> Porque contém só o processamento (ULA, registradores, controle); memória RAM/ROM e controladores de E/S ficam fora do chip.</li><li><strong>e)</strong> Eletrodomésticos (máquina de lavar, micro-ondas), automóveis, controladores de processos industriais, alarmes, relógios, impressoras.</li></ul>",
     "resolucao": "<p>Base: <em>AulaSD_4.pptx</em> (MPU x MCU, &quot;1.1 Origem dos microcontroladores&quot;, &quot;Aplicações de microcontroladores&quot;) e U3 - Livro Didático, Aula 1.</p>",
     "fonte": "AulaSD_4.pptx; U3 - Livro Didático.pdf, Aula 1."
    },
    {
     "enunciado": "<p><strong>Questão 6 – RISC e CISC.</strong> a) Sigla RISC. b) Sigla CISC. c) Qual tem instruções mais simples e reduzidas. d) Qual permite instruções complexas. e) Por que RISC favorece pipeline. f) Relação entre tamanho das instruções e complexidade de decodificação.</p>",
     "respostaFinal": "<ul><li><strong>a)</strong> Reduced Instruction Set Computing.</li><li><strong>b)</strong> Complex Instruction Set Computing.</li><li><strong>c)</strong> RISC.</li><li><strong>d)</strong> CISC.</li><li><strong>e)</strong> Instruções simples e uniformes levam tempos parecidos, então podem ser divididas em estágios regulares e executadas em sobreposição.</li><li><strong>f)</strong> RISC: instruções de formato/tamanho uniforme, decodificação simples e rápida. CISC: instruções de tamanhos e complexidades diferentes, decodificação mais complexa (e uso de microprogramação).</li></ul>",
     "resolucao": "<p>Base: <em>AulaSD_4.pptx</em> (Arquitetura RISC, CISC e MIPS) e U3 - Livro Didático, Aulas 3 e 4 (CISC: &quot;instruções podem ser de diferentes tamanhos e complexidades&quot;; MIPS: uniformidade de formatos simplifica o controle).</p><p>A frase do item e é a explicação usual de livros de arquitetura (conhecimento geral); o material liga RISC a simplicidade, eficiência e pipeline.</p>",
     "fonte": "AulaSD_4.pptx; U3 - Livro Didático.pdf, Aulas 3 e 4."
    },
    {
     "enunciado": "<p><strong>Questão 7 – Arquitetura MIPS.</strong> a) Significado de MIPS. b) Quatro características. c) Pipeline e finalidade. d) Cinco estágios e função. e) Três formatos de instrução. f) Diferença entre R, I e J. g) Modos de endereçamento.</p>",
     "respostaFinal": "<ul><li><strong>a)</strong> Microprocessor without Interlocked Pipeline Stages.</li><li><strong>b)</strong> Implementação RISC; conjunto de instruções reduzido; formatos de instrução uniformes (R, I, J); 32 registradores de 32 bits; execução em pipeline de 5 estágios.</li><li><strong>c)</strong> Dividir a execução da instrução em estágios independentes para processar várias instruções ao mesmo tempo, aumentando o throughput.</li><li><strong>d)</strong> IF (busca da instrução na memória, usando o PC), ID (decodificação e leitura dos registradores), EX (a ULA executa a operação ou calcula endereço), MEM (acesso à memória de dados em LOAD/STORE), WB (escrita do resultado no registrador de destino).</li><li><strong>e)</strong> Formato R, formato I e formato J.</li><li><strong>f)</strong> R: operandos em registradores (opcode, rs, rt, rd, shamt, funct), ex. ADD. I: operando imediato de 16 bits (opcode, rs, rt, imediato), usado em constantes, LOAD/STORE e desvios condicionais. J: salto incondicional (opcode e endereço de 26 bits).</li><li><strong>g)</strong> São as formas de indicar onde está o operando. Principais: imediato (valor na própria instrução), por registrador (operando em registrador) e por deslocamento (endereço = registrador-base + deslocamento).</li></ul>",
     "resolucao": "<p>Base: <em>AulaSD_4.pptx</em> (slides de MIPS, pipeline, formatos e modos) e U3 - Livro Didático, Aula 3.</p><div class=\"caixa nota\" data-titulo=\"Divergência no material\">O livro (U3, Aula 3) lista os modos <em>imediato, por registrador e por deslocamento</em>; o resumo da Aula 5 do mesmo livro cita &quot;imediato, direto e registrado&quot;. Use a lista da Aula 3 e dos slides, que é a mesma.</div>",
     "fonte": "AulaSD_4.pptx; U3 - Livro Didático.pdf, Aulas 3 e 5."
    },
    {
     "enunciado": "<p><strong>Exercício prático: Latch SR com portas NOR.</strong> Estado inicial Q = 0 e Q̅ = 1. Tabela de (S, R) por etapa: 1 (1,0); 2 (0,0); 3 (0,1); 4 (0,0); 5 (1,0); 6 (0,1). Responda: a) Q em cada etapa. b) Etapas de SET. c) Etapas de RESET. d) Etapas de retenção. e) Por que S = 0 e R = 0 não zera Q. f) Condição proibida.</p>",
     "respostaFinal": "<table><thead><tr><th>Etapa</th><th>S</th><th>R</th><th>Operação</th><th>Q</th><th>Q̅</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>0</td><td>SET</td><td>1</td><td>0</td></tr><tr><td>2</td><td>0</td><td>0</td><td>Retenção</td><td>1</td><td>0</td></tr><tr><td>3</td><td>0</td><td>1</td><td>RESET</td><td>0</td><td>1</td></tr><tr><td>4</td><td>0</td><td>0</td><td>Retenção</td><td>0</td><td>1</td></tr><tr><td>5</td><td>1</td><td>0</td><td>SET</td><td>1</td><td>0</td></tr><tr><td>6</td><td>0</td><td>1</td><td>RESET</td><td>0</td><td>1</td></tr></tbody></table><ul><li><strong>a)</strong> Q = 1, 1, 0, 0, 1, 0.</li><li><strong>b)</strong> SET: etapas 1 e 5.</li><li><strong>c)</strong> RESET: etapas 3 e 6.</li><li><strong>d)</strong> Retenção: etapas 2 e 4.</li><li><strong>e)</strong> Com S = R = 0 ambas as entradas estão inativas; a realimentação cruzada das duas NOR sustenta o valor já armazenado, então Q permanece como estava.</li><li><strong>f)</strong> S = R = 1: as duas NOR recebem 1 e forçam suas saídas a 0, logo Q = Q̅ = 0 (não complementares). Se S e R voltam a 0 juntas, o estado final é imprevisível.</li></ul>",
     "resolucao": "<p>Leitura da tabela: a figura de enunciado em <em>Atividade_avaliativa.pdf</em> (página 2) foi lida do PDF. Regra do latch NOR em <em>AulaSD_3.pptx</em>: S = R = 0 repouso; S = 1, R = 0 faz Q = 1; S = 0, R = 1 faz Q = 0; S = R = 1 faz Q = Q̅ = 0.</p>",
     "fonte": "Atividade_avaliativa.pdf, p. 2; AulaSD_3.pptx (Latch com portas NOR)."
    },
    {
     "enunciado": "<p><strong>Exercício prático: Latch SR com portas NAND.</strong> Entradas ativas em nível baixo (S̅ e R̅); estado inicial Q = 0 e Q̅ = 1. Combinações (S̅, R̅): 1 (1,1); 2 (0,1); 3 (1,1); 4 (1,0); 5 (1,1); 6 (0,0). Responda: a) Q em cada etapa. b) Etapa do SET. c) Etapa do RESET. d) Etapas de retenção. e) O que ocorre na etapa 6. f) Por que é proibida. g) Diferença entre retenção e condição proibida nos latches NOR e NAND.</p>",
     "respostaFinal": "<table><thead><tr><th>Etapa</th><th>S̅</th><th>R̅</th><th>Operação</th><th>Q</th><th>Q̅</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>1</td><td>Retenção</td><td>0</td><td>1</td></tr><tr><td>2</td><td>0</td><td>1</td><td>SET</td><td>1</td><td>0</td></tr><tr><td>3</td><td>1</td><td>1</td><td>Retenção</td><td>1</td><td>0</td></tr><tr><td>4</td><td>1</td><td>0</td><td>RESET</td><td>0</td><td>1</td></tr><tr><td>5</td><td>1</td><td>1</td><td>Retenção</td><td>0</td><td>1</td></tr><tr><td>6</td><td>0</td><td>0</td><td>Proibida</td><td>1</td><td>1</td></tr></tbody></table><ul><li><strong>a)</strong> Q = 0, 1, 1, 0, 0, 1 (na etapa 6 também Q̅ = 1).</li><li><strong>b)</strong> Etapa 2: S̅ = 0 (ativo em baixo) e R̅ = 1, o que força Q = 1.</li><li><strong>c)</strong> Etapa 4: R̅ = 0 (ativo) e S̅ = 1, o que força Q = 0.</li><li><strong>d)</strong> Retenção: etapas 1, 3 e 5 (S̅ = R̅ = 1).</li><li><strong>e)</strong> Os dois sinais ficam ativos: ambas as NAND têm uma entrada em 0, então as duas saídas vão a 1 (Q = Q̅ = 1).</li><li><strong>f)</strong> Porque Q e Q̅ deixam de ser complementares e, quando S̅ e R̅ voltam juntos a 1, o estado final é imprevisível.</li><li><strong>g)</strong> NOR: retenção em S = R = 0 e proibido em S = R = 1 (saídas 0 e 0). NAND: retenção em S̅ = R̅ = 1 e proibido em S̅ = R̅ = 0 (saídas 1 e 1). As condições se invertem porque um usa entradas ativas em alto e o outro ativas em baixo.</li></ul>",
     "resolucao": "<p>Leitura da tabela: figura de enunciado em <em>Atividade_avaliativa.pdf</em> (página 2). O valor Q̅ = 1 na etapa 6 segue a lógica da porta NAND; o <em>AulaSD_3.pptx</em> escreve 0 para essa condição (ver nota na Questão 4).</p>",
     "fonte": "Atividade_avaliativa.pdf, p. 2; AulaSD_3.pptx (Latch com portas NAND)."
    }
   ]
  }
 ]
});
