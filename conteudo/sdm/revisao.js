// Sistemas Digitais e Microprocessadores - revisão
(function () {
const MOD_U1 = {
  id: "u1",
  titulo: "Unidade 1 — Circuitos digitais e álgebra booleana",
  intro: `<p>Sistemas de numeração, códigos, portas lógicas, álgebra booleana, simplificação (Karnaugh) e projeto de circuitos a partir da tabela-verdade.</p>`,
  topicos: [
    {
      id: "u1-sinais-digitais",
      titulo: "Sinais analógicos e digitais",
      fonte: "AulaSD_1.pptx (slides 11 a 17); U1 - Livro Didático, Aula 1",
      html: `
        <dl class="campos">
          <dt>Circuito digital</dt><dd>Circuito eletrônico que processa sinais de <span class="termo">dois níveis</span> de tensão ou corrente, representados por 0 (baixo/desligado) e 1 (alto/ligado). É a base de computadores, celulares e sistemas modernos.</dd>
          <dt>Analógico</dt><dd>Valores contínuos e proporcionais (ponteiro de velocímetro, termômetro de mercúrio). Sofre mais com ruído e perde qualidade com facilidade.</dd>
          <dt>Digital</dt><dd>Símbolos discretos (0 e 1). Mais tolerante a ruído: pequenas variações elétricas ainda são lidas como 0 ou 1.</dd>
        </dl>
        <div class="caixa nota"><p>O mundo real é analógico: som, luz e temperatura precisam ser convertidos para digital (por exemplo, o termômetro digital) antes de serem processados.</p></div>`
    },
    {
      id: "u1-informacao-digital",
      titulo: "Informação digital: bit, byte e aplicações",
      fonte: "U1 - Livro Didático, Aula 1 (Introdução, Aplicações); AulaSD_1.pptx",
      html: `
        <dl class="campos">
          <dt>Vantagens do digital</dt><dd>Qualidade, capacidade de armazenamento e portabilidade. Exemplos do livro: câmera digital (a luz vira milhões de <span class="termo">pixels</span>, cada um com um código de cor e luminosidade, organizados em largura e altura) no lugar do filme; um pendrive com milhares de horas de mp3 no lugar de uma estante de discos de vinil.</dd>
          <dt>Base binária</dt><dd>A técnica mais comum. O <strong>bit</strong> (binary digit) vale 0 ou 1. Exemplo: lâmpada com interruptor inteligente: apagada = 0, acesa = 1.</dd>
          <dt>Octal e hexadecimal</dt><dd>Octal usa 8 valores (0 a 7). Hexadecimal usa 16 valores e letras de A a F para os valores acima de 9, para representar tudo com um único dígito.</dd>
        </dl>
        <table>
          <thead><tr><th>Dec</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th></tr></thead>
          <tbody><tr><td>Hex</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td></tr></tbody>
        </table>
        <h4>bit x Byte</h4>
        <p>Byte = 8 bits. A letra importa: <strong>b</strong> minúsculo é bit, <strong>B</strong> maiúsculo é Byte.</p>
        <div class="caixa exemplo"><p>Internet de 200 Mbps (megabits por segundo): o download nunca passa de 200 / 8 = <strong>25 MB/s</strong> (megabytes por segundo). Bit para Byte: divide por 8; Byte para bit: multiplica por 8.</p></div>
        <h4>Quantos bits por pixel</h4>
        <ul>
          <li>Tela preto e branco: <strong>1 bit</strong> por pixel (0 = branco, 1 = preto). Tela de 5 linhas x 10 colunas = 50 pixels.</li>
          <li>Tela com ~16 milhões de cores: <strong>24 bits</strong> por pixel, escritos como <strong>6 dígitos hexadecimais</strong> (4 bits por dígito).</li>
        </ul>
        <div class="caixa nota" data-titulo="Atenção ao texto do livro"><p>O livro diz que uma tela com 4 tons de cinza precisa de 3 bits por pixel. Como 2<sup>2</sup> = 4, bastam <strong>2 bits</strong> (3 bits dariam 8 tons). Use 2<sup>n</sup> para calcular.</p></div>
        <h4>Exemplo: como uma calculadora soma 9 + 4</h4>
        <ol>
          <li>Tecla 9: o valor 1001 ocupa 4 bits na 1ª posição da memória.</li>
          <li>Tecla +: habilita o circuito somador e libera a 2ª posição de memória.</li>
          <li>Tecla 4: 0100 é guardado na 2ª posição.</li>
          <li>Tecla =: gera o sinal de execução; as duas posições vão ao somador, que entrega 1101.</li>
          <li>Um circuito <strong>decodificador</strong> converte 1101 em decimal para o display: <strong>13</strong>.</li>
        </ol>`
    },
    {
      id: "u1-numeracao",
      titulo: "Sistemas de numeração e conversões",
      fonte: "AulaSD_1.pptx (slides 18 a 59); U1 - Livro Didático, Aula 1",
      html: `
        <div class="caixa definicao"><p>Sistema <strong>posicional</strong>: o valor do número é a soma de cada algarismo multiplicado pela base elevada à sua posição. A <span class="termo">base</span> é a quantidade de símbolos do sistema.</p></div>
        <table>
          <thead><tr><th>Sistema</th><th>Base</th><th>Símbolos</th></tr></thead>
          <tbody>
            <tr><td>Decimal</td><td>10</td><td>0 a 9</td></tr>
            <tr><td>Binário</td><td>2</td><td>0, 1</td></tr>
            <tr><td>Octal</td><td>8</td><td>0 a 7</td></tr>
            <tr><td>Hexadecimal</td><td>16</td><td>0 a 9 e A a F (A=10 ... F=15)</td></tr>
          </tbody>
        </table>
        <div class="formula">N = d<sub>n-1</sub>·B<sup>n-1</sup> + ... + d<sub>1</sub>·B<sup>1</sup> + d<sub>0</sub>·B<sup>0</sup></div>
        <h4>Termos</h4>
        <ul>
          <li><strong>Bit</strong>: dígito binário. <strong>Nibble</strong>: 4 bits. <strong>Byte</strong>: 8 bits (2<sup>8</sup> = 256 combinações).</li>
          <li><strong>MSB/MSD</strong>: bit/dígito mais significativo (esquerda). <strong>LSB/LSD</strong>: menos significativo (direita).</li>
          <li>Com <em>n</em> bits há <strong>2<sup>n</sup></strong> combinações (4 bits = 16).</li>
        </ul>
        <h4>Qualquer base para decimal</h4>
        <div class="caixa exemplo"><p>1011<sub>2</sub> = 1·8 + 0·4 + 1·2 + 1·1 = <strong>11</strong>. &nbsp; 1043<sub>5</sub> = 125 + 0 + 20 + 3 = <strong>148</strong>. &nbsp; 1A7B<sub>16</sub> = 4096 + 2560 + 112 + 11 = <strong>6779</strong>.</p></div>
        <h4>Decimal para outra base: divisões sucessivas</h4>
        <p>Divida pela base até o quociente ser menor que ela. O resultado é o último quociente (MSB) seguido dos restos em <strong>ordem inversa</strong>.</p>
        <div class="caixa exemplo"><p>45<sub>10</sub>: 45/2=22 r1; 22/2=11 r0; 11/2=5 r1; 5/2=2 r1; 2/2=1 r0; último quociente 1. Resultado <strong>101101<sub>2</sub></strong>. &nbsp; 92<sub>10</sub> = <strong>134<sub>8</sub></strong> (92/8=11 r4; 11/8=1 r3; 1). &nbsp; 97<sub>10</sub> = 1100001<sub>2</sub>.</p></div>
        <h4>Entre bases potência de 2</h4>
        <ul>
          <li>Binário para octal: grupos de <strong>3 bits</strong>, da direita para a esquerda. 111 010 111 = <strong>727<sub>8</sub></strong>.</li>
          <li>Binário para hexadecimal: grupos de <strong>4 bits</strong>. 0010 1101 1011 = <strong>2DB<sub>16</sub></strong>.</li>
          <li>Inverso: troque cada dígito pelos seus 3 (octal) ou 4 (hex) bits. F50<sub>16</sub> = 1111 0101 0000.</li>
          <li>Octal para hex (ou o contrário): passe antes pelo binário.</li>
        </ul>
        <div class="caixa nota" data-titulo="Erros de texto no livro"><p>(1) Na Aula 1, o livro troca os nomes: diz que o bit &quot;mais à direita&quot; é o <em>mais</em> significativo; o <strong>LSB</strong> é o bit mais à direita (menos significativo) e o <strong>MSB</strong> o mais à esquerda, como no slide. (2) Na multiplicação binária o livro diz que cada algarismo do multiplicador desloca o produto parcial &quot;para a direita&quot;; o deslocamento é <strong>para a esquerda</strong>, como no AulaSD_1 e na multiplicação decimal. Exemplo do livro: 6 (0110) + 7 (0111) = 1101 (13), com bit de carry.</p></div>
        <div class="caixa prova"><ul>
          <li>Agrupe sempre a partir da <strong>direita</strong>, completando com zeros à esquerda.</li>
          <li>Restos das divisões lidos de baixo para cima.</li>
          <li>Hexadecimal é muito usado em microprocessadores e no mapeamento de memória; o octal é pouco usado em eletrônica digital.</li>
        </ul></div>`
    },
    {
      id: "u1-aritmetica-binaria",
      titulo: "Aritmética binária",
      fonte: "AulaSD_1.pptx (slides 50 a 58)",
      html: `
        <table>
          <thead><tr><th>Operação</th><th>Regra</th></tr></thead>
          <tbody>
            <tr><td>Soma</td><td>0+0=0; 0+1=1; 1+0=1; <strong>1+1=0 e vai 1</strong> para a próxima coluna; 1+1+1(vem 1)=1 e vai 1</td></tr>
            <tr><td>Subtração</td><td>Igual à decimal. Em <strong>0-1</strong> resulta 1 e a coluna seguinte do subtraendo recebe o empréstimo</td></tr>
            <tr><td>Multiplicação</td><td>Produtos parciais (cada um deslocado uma casa à esquerda) somados</td></tr>
            <tr><td>Divisão</td><td>Deslocamentos e subtrações, como na decimal</td></tr>
          </tbody>
        </table>
        <div class="caixa exemplo"><p>45+47: 101101 + 101111 = <strong>1011100</strong> (92). &nbsp; 101101 - 100111 = <strong>000110</strong> (6).</p></div>
        <div class="caixa externo" data-titulo="Complemento: números negativos"><p>Os objetivos do slide 26 citam a notação de <strong>complemento de dois</strong> para números negativos, mas o material não traz o desenvolvimento. Conhecimento geral: inverta todos os bits e some 1 (ex.: 5 = 0101; -5 = 1010 + 1 = 1011 em 4 bits).</p></div>`
    },
    {
      id: "u1-codigos",
      titulo: "Códigos: BCD, Gray, XS-3, ASCII, EBCDIC",
      fonte: "U1 - Livro Didático, Aula 2 (Tabelas 1 a 7); AulaSD_1.pptx (slide 60)",
      html: `
        <table>
          <thead><tr><th>Código</th><th>Ideia</th><th>Exemplo</th></tr></thead>
          <tbody>
            <tr><td><strong>BCD</strong> (Binary Coded Decimal)</td><td>Cada dígito decimal vira 4 bits. Facilita operações aritméticas e exibição decimal.</td><td>28 = 0010 1000; 10 = 0001 0000</td></tr>
            <tr><td><strong>Gray</strong></td><td>Entre dois números consecutivos <strong>só 1 bit muda</strong>. Reduz erros de leitura de transições (ex.: posição de eixo de motor).</td><td>0=0000, 1=0001, 2=0011, 3=0010, 4=0110, 5=0111, 6=0101, 7=0100, 8=1100</td></tr>
            <tr><td><strong>Excesso de 3</strong> (XS-3)</td><td>Soma 3 ao dígito decimal e converte para binário; evita o código 0000 (confundível com ausência de dado).</td><td>0=0011, 5=1000, 9=1100</td></tr>
            <tr><td><strong>ASCII</strong></td><td>Caracteres em 7 ou 8 bits (128 ou 256 símbolos). PCs e servidores.</td><td>0=48, A=65, a=97</td></tr>
            <tr><td><strong>EBCDIC</strong></td><td>Alternativa ao ASCII, usada em mainframes IBM e sistemas legados.</td><td>0000 0000 = NUL</td></tr>
          </tbody>
        </table>
        <div class="caixa nota" data-titulo="Divergência no livro (XS-3)"><p>A Tabela 3 do livro mostra XS-3 como 0=0011, 1=0010, 2=0110, 3=0111 ... Esses valores seguem a sequência do código Gray, não a definição &quot;dígito + 3&quot; escrita no mesmo texto. Pela definição, 1 = 0100, 2 = 0101, 3 = 0110 ... 9 = 1100. Em prova, aplique a definição (somar 3); se a questão reproduzir a tabela do livro, confira o enunciado.</p></div>
        <div class="caixa prova"><ul>
          <li>ASCII: maiúsculas e minúsculas têm códigos diferentes; B = A + 1, C = B + 1 (facilita comparar ordem de caracteres). Dígito &#39;0&#39; = 48.</li>
          <li>Gray: &quot;só um bit muda&quot;. XS-3: &quot;soma 3&quot;. BCD: &quot;4 bits por dígito decimal&quot;.</li>
        </ul></div>`
    },
    {
      id: "u1-codigos-aplicacoes",
      titulo: "Códigos: tabelas completas e aplicações",
      fonte: "U1 - Livro Didático, Aula 2 (Tabelas 1 a 7; Aplicações de padrões de código)",
      html: `
        <table>
          <thead><tr><th>Dec</th><th>Binário</th><th>BCD</th><th>Gray</th><th>XS-3 (dígito + 3)</th></tr></thead>
          <tbody>
            <tr><td>0</td><td>0000</td><td>0000</td><td>0000</td><td>0011</td></tr>
            <tr><td>1</td><td>0001</td><td>0001</td><td>0001</td><td>0100</td></tr>
            <tr><td>2</td><td>0010</td><td>0010</td><td>0011</td><td>0101</td></tr>
            <tr><td>3</td><td>0011</td><td>0011</td><td>0010</td><td>0110</td></tr>
            <tr><td>4</td><td>0100</td><td>0100</td><td>0110</td><td>0111</td></tr>
            <tr><td>5</td><td>0101</td><td>0101</td><td>0111</td><td>1000</td></tr>
            <tr><td>6</td><td>0110</td><td>0110</td><td>0101</td><td>1001</td></tr>
            <tr><td>7</td><td>0111</td><td>0111</td><td>0100</td><td>1010</td></tr>
            <tr><td>8</td><td>1000</td><td>1000</td><td>1100</td><td>1011</td></tr>
            <tr><td>9</td><td>1001</td><td>1001</td><td>1101</td><td>1100</td></tr>
            <tr><td>10</td><td>1010</td><td>0001 0000</td><td>1111</td><td>(dois dígitos)</td></tr>
            <tr><td>11</td><td>1011</td><td>0001 0001</td><td>1110</td><td></td></tr>
            <tr><td>12</td><td>1100</td><td>0001 0010</td><td>1010</td><td></td></tr>
            <tr><td>13</td><td>1101</td><td>0001 0011</td><td>1011</td><td></td></tr>
            <tr><td>14</td><td>1110</td><td>0001 0100</td><td>1001</td><td></td></tr>
            <tr><td>15</td><td>1111</td><td>0001 0101</td><td>1000</td><td></td></tr>
          </tbody>
        </table>
        <p>Gray: confira que entre linhas consecutivas apenas 1 bit muda. A coluna XS-3 foi calculada pela definição (ver a divergência do livro no tópico de códigos). BCD acima de 9 usa um grupo de 4 bits para cada dígito decimal.</p>
        <h4>Aplicações citadas no livro</h4>
        <ul>
          <li><strong>ASCII</strong>: a letra A é o código 65 = 0100 0001. O computador guarda o código; o &quot;desenho&quot; da letra aparece na tela. Códigos de algarismos: 0 = 48 até 9 = 57; maiúsculas 65 a 90; minúsculas 97 a 122.</li>
          <li><strong>Gray</strong>: contagem de voltas do eixo de um motor em processo sensível. Se a contagem pular de 1 (0001) para 3 (0010) mudam dois bits, o que evidencia a falha e permite soar alarme, parar o processo ou descartar o produto.</li>
          <li><strong>EBCDIC</strong>: mainframes IBM e sistemas legados; 0000 0000 = NUL, 0000 0001 = SOH, 0000 0010 = STX.</li>
        </ul>
        <div class="caixa prova"><ul>
          <li>ASCII tem 7 bits (128 caracteres) na versão original e 8 bits (256) na estendida.</li>
          <li>BCD de 28 = 0010 1000 (cada dígito separado); binário puro de 28 = 11100. São diferentes.</li>
        </ul></div>`
    },
    {
      id: "u1-portas",
      titulo: "Portas lógicas e tabela-verdade",
      fonte: "U1 - Livro Didático, Aula 2 (Tabela 6) e Aula 4; AulaSD_1.pptx (slides 61 a 69)",
      html: `
        <div class="caixa definicao"><p>Porta lógica é um dispositivo eletrônico que realiza uma operação lógica sobre sinais digitais. A <strong>tabela-verdade</strong> lista todas as combinações de entrada com a saída; com <em>N</em> entradas há <strong>2<sup>N</sup></strong> linhas.</p></div>
        <table>
          <thead><tr><th>Porta</th><th>Expressão</th><th>Saída = 1 quando</th></tr></thead>
          <tbody>
            <tr><td>AND (E)</td><td>S = A·B</td><td>todas as entradas são 1</td></tr>
            <tr><td>OR (OU)</td><td>S = A + B</td><td>pelo menos uma entrada é 1</td></tr>
            <tr><td>NOT (NÃO)</td><td>S = A̅</td><td>a entrada é 0 (única com 1 entrada)</td></tr>
            <tr><td>NAND</td><td>S = (A·B)̅</td><td>pelo menos uma entrada é 0</td></tr>
            <tr><td>NOR</td><td>S = (A + B)̅</td><td>todas as entradas são 0</td></tr>
            <tr><td>XOR (OU exclusivo)</td><td>S = A ⊕ B</td><td>as entradas são diferentes</td></tr>
            <tr><td>XNOR</td><td>S = (A ⊕ B)̅</td><td>as entradas são iguais</td></tr>
          </tbody>
        </table>
        <h4>Como montar a tabela-verdade</h4>
        <ul>
          <li>Uma coluna por entrada e uma por saída.</li>
          <li>A coluna do bit menos significativo alterna 0,1,0,1; a seguinte, 0,0,1,1; depois 4 zeros e 4 uns, e assim por diante (o bloco dobra). A primeira linha é toda 0 e a última toda 1.</li>
        </ul>
        <div class="caixa nota"><p>O material resume as portas em uma figura (Tabela 6). Os casos XOR e XNOR foram descritos conforme a definição padrão; confira com a figura do livro se a prova usar símbolos.</p></div>`
    },
    {
      id: "u1-portas-detalhe",
      titulo: "Portas lógicas: tabelas, analogias e chips",
      fonte: "U1 - Livro Didático, Aula 2 (Tabelas 8 a 11, aplicações, Saiba mais); AulaSD_1.pptx (slides 62 a 69)",
      html: `
        <p>Toda porta tem uma ou mais entradas e <strong>uma única saída</strong>. AND, OR, NAND, NOR e XOR aceitam 2, 3, 4 ou mais entradas; a NOT só aceita 1.</p>
        <table>
          <thead><tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>NAND</th><th>NOR</th><th>XOR</th><th>XNOR</th></tr></thead>
          <tbody>
            <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
            <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
            <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
            <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
          </tbody>
        </table>
        <ul>
          <li><strong>AND</strong> equivale à multiplicação lógica; a saída é o produto das entradas.</li>
          <li><strong>OR</strong> equivale à soma lógica, mas o resultado só pode ser 0 ou 1: 1 + 1 = 1 na álgebra booleana.</li>
          <li><strong>NOT</strong> inverte o bit (a barra sobre a variável indica a inversão).</li>
          <li><strong>NAND</strong> = AND seguida de NOT; <strong>NOR</strong> = OR seguida de NOT.</li>
          <li><strong>XOR</strong>: saída 1 quando uma e somente uma das entradas (de duas) está ativa.</li>
        </ul>
        <div class="caixa nota" data-titulo="OR x soma binária"><p>1 + 1 = 1 vale para a porta OR (soma lógica). Na aritmética binária (soma de números) 1 + 1 = 10, isto é, 0 e vai 1. Não misture os dois.</p></div>
        <div class="caixa exemplo" data-titulo="Exemplo com OR"><p>Luz no painel do carro de 2 portas que indica &quot;existe porta aberta&quot;: porta fechada = 0 (0 V), aberta = 1 (+5 V). Com OR: 0+0=0 (LED apagado); 1+0=1, 0+1=1, 1+1=1 (LED acende).</p></div>
        <div class="caixa exemplo" data-titulo="Exemplo com AND"><p>Máquina industrial que só parte com o dedo de cada mão em dois sensores: 0x0=0, 1x0=0, 0x1=0 e só 1x1=1 libera a máquina.</p></div>
        <h4>Chips da família 74xx</h4>
        <table>
          <thead><tr><th>CI</th><th>Conteúdo</th></tr></thead>
          <tbody>
            <tr><td>7408</td><td>4 portas AND de 2 entradas</td></tr>
            <tr><td>7432</td><td>4 portas OR de 2 entradas</td></tr>
            <tr><td>7404</td><td>4 portas NOT (1 entrada)</td></tr>
            <tr><td>7400</td><td>4 portas NAND de 2 entradas</td></tr>
            <tr><td>7402</td><td>4 portas NOR de 2 entradas</td></tr>
            <tr><td>7486</td><td>4 portas XOR de 2 entradas</td></tr>
          </tbody>
        </table>
        <div class="caixa prova"><ul><li>Decore os números dos chips: 7408 AND, 7432 OR, 7404 NOT, 7400 NAND, 7402 NOR, 7486 XOR.</li><li>O datasheet (folha de dados) traz as informações técnicas do CI; as primeiras páginas bastam para o curso.</li></ul></div>`
    },
    {
      id: "u1-algebra",
      titulo: "Álgebra booleana e De Morgan",
      fonte: "Regras_booleanas.pptx; U1 - Livro Didático, Aula 3 (Tabela 1); AulaSD_1.pptx (slides 61 e 62)",
      html: `
        <div class="caixa definicao"><p>Álgebra de Boole (George Boole, 1854): conjunto de regras para manipular variáveis binárias. Foi aplicada a circuitos de telefonia com relés em 1938. Serve para <strong>simplificar expressões</strong> antes de montar o circuito.</p></div>
        <table>
          <thead><tr><th>Regra</th><th>Forma</th><th>Nome / ideia</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>A + 0 = A</td><td>OR com 0 não altera</td></tr>
            <tr><td>2</td><td>A + 1 = 1</td><td>OR com 1 é sempre 1</td></tr>
            <tr><td>3</td><td>A · 0 = 0</td><td>AND com 0 é sempre 0</td></tr>
            <tr><td>4</td><td>A · 1 = A</td><td>AND com 1 não altera</td></tr>
            <tr><td>5</td><td>A + A = A</td><td>Idempotência</td></tr>
            <tr><td>6</td><td>A + A̅ = 1</td><td>Complemento</td></tr>
            <tr><td>7</td><td>A · A = A</td><td>Idempotência</td></tr>
            <tr><td>8</td><td>A · A̅ = 0</td><td>Complemento</td></tr>
            <tr><td>9</td><td>(A̅)̅ = A</td><td>Dupla negação</td></tr>
            <tr><td>10</td><td>A + A·B = A</td><td>Absorção</td></tr>
            <tr><td>11</td><td>A + A̅·B = A + B</td><td>Elimina a negação</td></tr>
            <tr><td>12</td><td>(A + B)·(A + C) = A + B·C</td><td>Lei distributiva com as regras 2, 4 e 7</td></tr>
          </tbody>
        </table>
        <p>Também valem as leis comutativa (A+B = B+A), associativa (A+(B+C) = (A+B)+C) e distributiva (A(B+C) = AB + AC).</p>
        <div class="caixa definicao" data-titulo="Teoremas de De Morgan"><div class="formula">(A+B)̅ = A̅ · B̅ &nbsp;&nbsp;&nbsp; (A·B)̅ = A̅ + B̅</div><p>&quot;Quebre a barra e troque a operação&quot;: o complemento de uma soma é o produto dos complementos, e vice-versa. Permite trocar OR por AND (com inversores), ou NAND por OR de entradas negadas.</p></div>
        <div class="caixa exemplo"><p>x = ACD + A̅BCD. Fatore CD: x = CD(A + A̅B) = CD(A + B) = ACD + BCD. Uma porta AND de 4 entradas virou de 3.</p></div>
        <div class="caixa nota"><p>As regras 1 a 12 seguem o <em>Regras_booleanas.pptx</em> (numeração e fórmulas lidas das imagens dos slides). A tabela de propriedades do livro (U1, Aula 3) está em imagem e usa outra numeração (o texto cita A + A̅B = A + B como item 15 e De Morgan ora como 16 e 17, ora como 15 e 16). Cite a regra pelo nome, não pelo número.</p></div>
      `
    },
    {
      id: "u1-karnaugh",
      titulo: "Simplificação por mapa de Karnaugh",
      fonte: "U1 - Livro Didático, Aula 3 (Figuras 2 a 10, Tocci 2011 e Floyd 2008)",
      html: `
        <div class="caixa definicao"><p>O <span class="termo">mapa de Karnaugh</span> reorganiza a tabela-verdade de modo que células vizinhas diferem em <strong>apenas uma variável</strong>, permitindo agrupar 1s e achar a expressão mínima.</p></div>
        <table>
          <thead><tr><th>Entradas</th><th>Células</th><th>Ordem (Gray)</th></tr></thead>
          <tbody>
            <tr><td>2</td><td>4</td><td>A̅, A (linha); B̅, B (coluna)</td></tr>
            <tr><td>3</td><td>8</td><td>AB: 00, 01, 11, 10; C: 0, 1</td></tr>
            <tr><td>4</td><td>16</td><td>AB: 00, 01, 11, 10; CD: 00, 01, 11, 10</td></tr>
          </tbody>
        </table>
        <h4>Passo a passo</h4>
        <ol>
          <li>Monte o mapa com o número de células das entradas e coloque 1 onde a saída da tabela-verdade é 1 (0 nas demais).</li>
          <li>Agrupe primeiro os <strong>1s isolados</strong> (sem vizinhos).</li>
          <li>Depois os 1s que têm <strong>só um vizinho</strong>: forme o par.</li>
          <li>Agrupe qualquer <strong>octeto</strong>, mesmo reutilizando 1s.</li>
          <li>Agrupe quartetos com 1s ainda não cobertos, usando o <strong>mínimo de grupos</strong>.</li>
          <li>Agrupe os pares que sobraram.</li>
          <li>Cada grupo gera um termo AND com as variáveis que <strong>não mudam</strong> no grupo; some (OR) os termos.</li>
        </ol>
        <table>
          <thead><tr><th>Grupo</th><th>Variáveis eliminadas</th></tr></thead>
          <tbody>
            <tr><td>Par (2 células)</td><td>1</td></tr>
            <tr><td>Quarteto (4)</td><td>2</td></tr>
            <tr><td>Octeto (8)</td><td>3</td></tr>
          </tbody>
        </table>
        <div class="caixa prova"><ul>
          <li>Os grupos são <strong>potências de 2</strong> e retangulares; as bordas do mapa são vizinhas (o mapa &quot;dá a volta&quot;); diagonal não vale.</li>
          <li>Cabeçalho sempre em ordem Gray (00, 01, 11, 10): quando duas variáveis mudam juntas entre vizinhas, o mapa está errado.</li>
          <li><strong>Don&#39;t care</strong> (X): condições que não ocorrem; podem valer 0 ou 1, conforme for conveniente para formar grupos maiores.</li>
          <li>Variável que aparece nas duas formas (A e A̅) dentro do grupo é eliminada.</li>
        </ul></div>`
    },
    {
      id: "u1-simplificacao-exemplos",
      titulo: "Simplificação: exemplos resolvidos",
      fonte: "U1 - Livro Didático, Aula 3 (Exemplos 1 e 2, Figuras 3, 8 e 9) e Aula 4 (alarme automotivo, Tabela 2)",
      html: `
        <h4>Passo inicial: obter a expressão</h4>
        <p>Antes de simplificar é preciso ter a expressão booleana, obtida da tabela-verdade ou do circuito. Cada saída da tabela tem seu próprio circuito.</p>
        <div class="caixa exemplo" data-titulo="Duas saídas (A B C)"><p>Tabela com S1 = 1 nas linhas 011, 101, 110, 111 e S2 = 1 nas linhas 001, 101, 110. Expressões: S1 = A̅BC + AB̅C + ABC̅ + ABC e S2 = A̅B̅C + AB̅C + ABC̅. Cada uma gera um circuito.</p></div>
        <h4>Exemplo 1: z = (A̅ + B)(A + B)</h4>
        <ol>
          <li>Expanda: z = A̅A + A̅B + BA + BB.</li>
          <li>A̅A = 0 (regra 8) e BB = B (regra 7): z = A̅B + AB + B.</li>
          <li>Fatore B: z = B(A̅ + A + 1).</li>
          <li>Pelas regras 2 e 6, o parêntese vale 1: <strong>z = B</strong> (um circuito de 3 portas virou um fio).</li>
        </ol>
        <h4>Exemplo 2: x = ACD + A̅BCD</h4>
        <p>Fatore CD: x = CD(A + A̅B). Pela regra 11, A + A̅B = A + B. Resultado: <strong>x = CD(A + B) = ACD + BCD</strong>. A porta AND de 4 entradas virou uma de 3.</p>
        <h4>Alarme automotivo: simplificação algébrica</h4>
        <p>Entradas: A = alarme ligado, B = porta-malas, C = portas; saída S1 = sirene. Tabela com S1 = 1 em 101, 110 e 111.</p>
        <ol>
          <li>S1 = AB̅C + ABC̅ + ABC. Evidência de A: S1 = A(B̅C + BC̅ + BC).</li>
          <li>Evidência de B nos dois últimos: S1 = A[B̅C + B(C̅ + C)].</li>
          <li>C̅ + C = 1 (regra 6): S1 = A[B̅C + B].</li>
          <li>Regra 11 (B + B̅C = B + C): <strong>S1 = A(B + C)</strong>.</li>
        </ol>
        <p>Pelo mapa de Karnaugh o resultado é o mesmo: dois grupos de dois 1s, A·C e A·B.</p>
        <div class="caixa prova"><ul>
          <li>Na prova, indique a regra aplicada em cada passo. As mais usadas: A + A̅ = 1, A·A̅ = 0, A + A̅B = A + B, A + AB = A.</li>
          <li>No mapa, a variável que <strong>não muda de valor</strong> dentro do grupo permanece no termo; os termos dos grupos são somados.</li>
          <li>Quanto maior o grupo, menos variáveis no termo; quanto menos grupos, menos termos.</li>
        </ul></div>`
    },
    {
      id: "u1-projeto",
      titulo: "Do circuito à expressão e da expressão ao circuito",
      fonte: "U1 - Livro Didático, Aula 4",
      html: `
        <div class="caixa definicao"><p>Todo circuito de portas tem uma tabela-verdade e uma expressão booleana. O processo é <strong>reversível</strong>: do circuito se escreve a expressão; da expressão se redesenha o circuito.</p></div>
        <h4>Da tabela-verdade ao circuito</h4>
        <ol>
          <li>Para cada linha com saída 1, escreva um <strong>termo produto</strong> (mintermo): variável direta se vale 1, negada se vale 0.</li>
          <li>Some (OR) os termos: <strong>soma de produtos</strong>.</li>
          <li>Simplifique pela álgebra ou pelo mapa de Karnaugh.</li>
          <li>Desenhe: inversores nas variáveis negadas, ANDs para os termos, OR final.</li>
        </ol>
        <div class="caixa exemplo"><p>Tabela com saída 1 em 001, 011, 101, 110, 111 (A B C): S = A̅B̅C + A̅BC + AB̅C + ABC̅ + ABC. Cada saída de uma tabela com várias saídas tem seu próprio circuito.</p></div>
        <h4>Do circuito à expressão</h4>
        <p>Siga o sinal da entrada até a saída, escrevendo a operação de cada porta. Ex.: S = (A·B)̅ · (B + C̅ + D): NAND de A e B multiplicado (AND) pela OR de três entradas.</p>
        <div class="caixa prova"><ul>
          <li>Porta NOT só tem uma entrada; AND, OR, NAND, NOR aceitam 2 ou mais.</li>
          <li>A soma de produtos retirada da tabela-verdade funciona, mas quase sempre pode ser simplificada para um circuito menor com o mesmo resultado.</li>
          <li>Exemplo de aplicação do livro: alarme automotivo com A (alarme ligado), B (porta-malas), C (portas) e saída S1 (sirene).</li>
        </ul></div>`
    }
  ]
};
const MOD_U2 = {
  id: "u2",
  titulo: "Unidade 2 — Circuitos combinacionais e sequenciais",
  intro: `<p>Lógica combinacional (MUX, DEMUX, somadores, subtratores) e sequencial (latches, flip-flops, contadores, registradores, máquinas de estado, 555).</p>`,
  topicos: [
    {
      id: "u2-fluxograma",
      titulo: "Fluxograma e documentação do projeto",
      fonte: "U2 - Livro Didático, Aula 1 (Figura 1; sequência de Gimenez, 2015)",
      html: `
        <table>
          <thead><tr><th>Símbolo</th><th>Uso</th></tr></thead>
          <tbody>
            <tr><td>Retângulo (processo)</td><td>Processamento ou operação a que os dados são submetidos</td></tr>
            <tr><td>Seta</td><td>Sentido do fluxo dos dados (entrada e saída do processamento)</td></tr>
            <tr><td>Losango (decisão)</td><td>Ponto de decisão: uma seta entra, duas saem (verdadeiro/falso)</td></tr>
            <tr><td>Terminador</td><td>Início e fim do projeto</td></tr>
          </tbody>
        </table>
        <p>Existem outros símbolos (documentos externos, impressão, mídias como pendrive, arquivos de log).</p>
        <h4>Sequência sugerida para projetar e documentar</h4>
        <ol>
          <li>Identificar os componentes do circuito.</li>
          <li>Escolher um software de desenho de circuitos.</li>
          <li>Começar com símbolos-padrão de portas, flip-flops e outros componentes.</li>
          <li>Conectar os componentes.</li>
          <li>Adicionar texto explicativo com a função dos componentes-chave.</li>
          <li>Usar cores e estilos para cada parte do circuito.</li>
          <li>Dividir em etapas para resolver problemas futuros.</li>
          <li>Adicionar notas e comentários.</li>
          <li>Revisar e definir sequência de testes e verificação.</li>
          <li>Organizar e registrar a documentação completa.</li>
        </ol>
        <div class="caixa prova"><p>Finalidade do passo a passo e da documentação adicional (tabela-verdade com estados e saídas): <strong>organizar os componentes, dar clareza a quem revisar o projeto depois e evitar erros na implementação</strong>. Vale tanto para projetos combinacionais quanto sequenciais.</p></div>`
    },
    {
      id: "u2-comb-seq",
      titulo: "Combinacional x sequencial",
      fonte: "U2 - Livro Didático, Aula 1; AulaSD_3.pptx (Introdução)",
      html: `
        <table>
          <thead><tr><th></th><th>Combinacional</th><th>Sequencial</th></tr></thead>
          <tbody>
            <tr><td>Saída depende de</td><td>Só das entradas atuais</td><td>Entradas atuais <strong>e do estado anterior</strong></td></tr>
            <tr><td>Memória</td><td>Não tem</td><td>Tem (flip-flops)</td></tr>
            <tr><td>Blocos</td><td>Portas AND, OR, NOT</td><td>Flip-flops e portas</td></tr>
            <tr><td>Exemplos</td><td>Portas, MUX, DEMUX, somador, subtrator, comparador, codificador, decodificador</td><td>Latch, <strong>flip-flop</strong>, contador, registrador, máquina de estados</td></tr>
          </tbody>
        </table>
        <div class="caixa exemplo"><p>Uma CPU usa os dois: a lógica combinacional executa as operações aritméticas e lógicas; a sequencial guarda o estado e controla a execução das instruções.</p></div>
        <div class="caixa nota"><p>O livro também usa um fluxograma para representar o raciocínio do circuito, mas a prova de questionário cobra principalmente a diferença conceitual acima.</p></div>`
    },
    {
      id: "u2-analogico-digital",
      titulo: "Sistemas analógicos e digitais: vantagens e aplicações",
      fonte: "U2 - Livro Didático, Aula 2 (Tocci, 2011)",
      html: `
        <table>
          <thead><tr><th></th><th>Analógico</th><th>Digital</th></tr></thead>
          <tbody>
            <tr><td>Sinal</td><td>Contínuo; qualquer valor dentro de um intervalo; resolução teoricamente infinita</td><td>Discreto; bits (0 e 1); resolução e precisão fixas, definidas pelo número de bits</td></tr>
            <tr><td>Vantagens</td><td>Representação precisa de grandezas contínuas; processamento suave e natural; menor perda de informação</td><td>Resistência a ruído e interferência (níveis lógicos); armazenamento, processamento e transmissão eficientes; flexibilidade</td></tr>
            <tr><td>Desvantagens</td><td>Sensível a ruído e interferência; difícil armazenar e transmitir com eficiência</td><td>Pode perder detalhes de grandezas contínuas; exige conversão analógico-digital</td></tr>
            <tr><td>Aplicações</td><td>Áudio analógico (vinil, fita cassete), rádio FM, osciloscópio e voltímetro analógicos, sensores de temperatura/pressão/luz</td><td>Computação, comunicação (redes, celular, satélite), mídia digital, DSP, controle digital, câmeras, armazenamento, sistemas embarcados</td></tr>
          </tbody>
        </table>
        <dl class="campos">
          <dt>Conversores</dt><dd><strong>ADC</strong> (analógico para digital) e <strong>DAC</strong> (digital para analógico) integram os dois mundos.</dd>
          <dt>Bit e palavra binária</dt><dd>Bit é a unidade básica; um conjunto de bits forma uma <strong>palavra binária</strong>.</dd>
          <dt>Processamento digital</dt><dd>Discreto, por operações lógicas (AND, OR, NOT e outras) sobre os bits.</dd>
        </dl>
        <div class="caixa nota"><p>O livro lista &quot;menor suscetibilidade a perdas de informação&quot; como vantagem do analógico, enquanto a AulaSD_1 afirma que o analógico sofre com ruídos e perde qualidade com facilidade. Em questões de prova, o consenso é: <strong>digital resiste melhor a ruído</strong>; analógico representa melhor grandezas contínuas.</p></div>`
    },
    {
      id: "u2-comp-cod-dec",
      titulo: "Comparadores, codificadores e decodificadores",
      fonte: "U2 - Livro Didático, Aula 2",
      html: `
        <p>São circuitos <strong>combinacionais</strong> (sem memória), além das portas lógicas.</p>
        <table>
          <thead><tr><th>Circuito</th><th>Função</th><th>Aplicações</th></tr></thead>
          <tbody>
            <tr><td><strong>Comparador</strong></td><td>Compara bit a bit e gera saídas lógicas indicando a relação entre as entradas (maior, menor, igual)</td><td>Sistemas de controle, tomada de decisão por condição, processamento de dados</td></tr>
            <tr><td><strong>Codificador</strong></td><td>Converte várias entradas em um código <strong>menor</strong> (cada combinação de entrada mapeia uma saída específica). Ex.: 4 para 2</td><td>Comunicação digital, interface de sensores, compressão de dados, controle remoto (botão vira sinal digital), teclado numérico</td></tr>
            <tr><td><strong>Decodificador</strong></td><td>Operação inversa: converte um código de entrada em saídas específicas</td><td>Display de sete segmentos, seleção de endereços de memória, receptor de TV por assinatura</td></tr>
          </tbody>
        </table>
        <div class="caixa exemplo"><p>Codificador de prioridade (do enunciado de atividade): quando várias entradas estão ativas, só a de maior prioridade é codificada; ex.: entrada de emergência em um alarme. Pode ter prioridade absoluta ou relativa.</p></div>
        <div class="caixa prova"><ul><li>Codificador: muitas linhas para poucas. Decodificador: poucas linhas para muitas.</li><li>Decodificador de 7 segmentos: código binário para os sinais que acendem os segmentos de um dígito.</li></ul></div>`
    },
    {
      id: "u2-mux",
      titulo: "Multiplexador (MUX) e demultiplexador (DEMUX)",
      fonte: "U2 - Livro Didático, Aula 3 (Figuras 1 e 3)",
      html: `
        <dl class="campos">
          <dt>MUX</dt><dd>Seleciona <strong>uma</strong> entre várias entradas de dados e a leva a <strong>uma</strong> saída, conforme os bits de seleção.</dd>
          <dt>DEMUX</dt><dd>Processo inverso: uma entrada é direcionada a <strong>uma</strong> entre várias saídas, escolhida pela seleção.</dd>
          <dt>Enable (EN)</dt><dd>Habilita o funcionamento. Como os bits de seleção sempre escolhem alguma entrada/saída (mesmo a 0), o Enable permite eliminar a saída quando nada deve aparecer.</dd>
        </dl>
        <div class="formula">entradas = 2<sup>n</sup> &nbsp;(n = bits de seleção) &nbsp; | &nbsp; 4 entradas: 2 bits; 8: 3 bits; 16: 4 bits</div>
        <div class="caixa exemplo"><p>MUX 8 entradas com seleção ABC = 011: a entrada 3 aparece na saída. Aplicações: multiplexar canais de TV em um cabo, selecionar sensores (temperatura, pressão) em aquisição de dados; DEMUX em endereçamento de memórias RAM/ROM.</p></div>`
    },
    {
      id: "u2-aritmeticos",
      titulo: "Somadores e subtratores",
      fonte: "U2 - Livro Didático, Aula 3 (Figuras 2 e 4)",
      html: `
        <table>
          <thead><tr><th>Circuito</th><th>Entradas</th><th>Saídas</th></tr></thead>
          <tbody>
            <tr><td>Meio-somador</td><td>A, B</td><td>Soma (S) e Carry (vai um)</td></tr>
            <tr><td>Somador completo</td><td>A, B e <strong>carry de entrada</strong></td><td>S e carry de saída</td></tr>
            <tr><td>Meio-subtrator</td><td>A (minuendo), B (subtraendo)</td><td>Diferença e borrow</td></tr>
            <tr><td>Subtrator completo</td><td>A, B e borrow de entrada</td><td>Diferença e borrow de saída</td></tr>
          </tbody>
        </table>
        <div class="caixa prova"><ul>
          <li>A diferença entre o &quot;meio&quot; e o &quot;completo&quot; é a <strong>entrada de carry/borrow</strong>.</li>
          <li>A saída do somador é o resultado <strong>e</strong> o bit de carry.</li>
          <li>Minuendo: valor de onde se retira; subtraendo: parcela retirada.</li>
        </ul></div>
        <div class="caixa externo" data-titulo="Complemento (conhecimento geral)"><p>Meio-somador: S = A ⊕ B; Carry = A·B. Somador completo: S = A ⊕ B ⊕ Cin; Cout = AB + Cin(A ⊕ B). Esse equacionamento não está no trecho analisado do livro.</p></div>
        <p>Usos: unidades aritméticas de processadores, DSP (filtros, equalizadores), instrumentação (somar sinais de sensores, calcular erro entre valor medido e referência).</p>`
    },
    {
      id: "u2-latch",
      titulo: "Latch SR (NOR e NAND)",
      fonte: "AulaSD_3.pptx (Latch); Atividade_avaliativa.pdf",
      html: `
        <div class="caixa definicao"><p>Latch: circuito digital que armazena <strong>1 bit</strong>, com entradas SET (Q = 1) e RESET (Q = 0) e saídas complementares Q e Q̅. Cadeia: Latch, Flip-Flop, Registradores, Memórias, Processadores.</p></div>
        <table>
          <thead><tr><th>Condição</th><th>NOR (ativo em 1)</th><th>NAND (ativo em 0)</th></tr></thead>
          <tbody>
            <tr><td>Repouso / retenção</td><td>S = R = 0</td><td>S̅ = R̅ = 1</td></tr>
            <tr><td>SET (Q = 1)</td><td>S = 1, R = 0</td><td>S̅ = 0, R̅ = 1</td></tr>
            <tr><td>RESET (Q = 0)</td><td>S = 0, R = 1</td><td>S̅ = 1, R̅ = 0</td></tr>
            <tr><td>Proibida</td><td>S = R = 1 (Q = Q̅ = 0)</td><td>S̅ = R̅ = 0 (Q = Q̅ = 1)</td></tr>
          </tbody>
        </table>
        <ul>
          <li>Após SET ou RESET, o estado permanece mesmo que a entrada volte ao repouso: é a memória.</li>
          <li>Na condição proibida as saídas deixam de ser complementares e, se as entradas voltam ao repouso juntas, o estado final é imprevisível.</li>
          <li>Ao ligar o circuito em repouso o estado inicial é imprevisível (tempos de propagação, capacitâncias); se precisar de estado definido, ative SET ou RESET momentaneamente.</li>
        </ul>
        <div class="caixa nota" data-titulo="Divergência no slide"><p>O AulaSD_3 escreve que no NAND com SET = RESET = 0 &quot;Q = Q̅ = 0&quot;. Pela lógica da porta NAND, ambas as saídas vão a <strong>1</strong>, como na tabela acima (o valor 0 vale para o NOR com S = R = 1).</p></div>
        <div class="caixa exemplo"><p>NOR com Q = 0 e (S,R) = (1,0), (0,0), (0,1), (0,0): Q = 1, 1, 0, 0. Veja o exercício resolvido na página de atividades.</p></div>
        <div class="caixa exemplo" data-titulo="Exemplo do slide"><p>Latch SR com chave, resistores de pull-up (+5 V) e portas AND: o estado do latch seleciona qual saída recebe a onda quadrada de 1 kHz. Se Q = 1, os pulsos vão à saída XA; se Q = 0, vão à XB. A saída não selecionada fica em nível baixo. Não divide a frequência.</p></div>`
    },
    {
      id: "u2-clock",
      titulo: "Clock, pulsos e entradas síncronas e assíncronas",
      fonte: "AulaSD_3.pptx (Pulsos digitais, Sinais de clock, Setup e hold)",
      html: `
        <ul>
          <li><strong>Síncrono</strong>: o instante da mudança é ditado pelo clock (CLK, CK ou CP). <strong>Assíncrono</strong>: a saída muda a qualquer momento.</li>
          <li>O triângulo na entrada CLK indica que o circuito é <span class="termo">disparado por borda</span>. Borda de <strong>subida</strong> (0 para 1) ou de <strong>descida</strong> (1 para 0). Um inversor (bolha) na entrada indica descida.</li>
          <li><strong>Pulso positivo</strong>: efeito na subida; <strong>negativo</strong>: efeito na descida. Tempo de subida e descida medidos entre 10% e 90%; largura do pulso (t<sub>w</sub>) medida em 50%.</li>
          <li><strong>t<sub>S</sub> (setup)</strong>: tempo em que as entradas devem estar estáveis <em>antes</em> da borda; <strong>t<sub>H</sub> (hold)</strong>: <em>depois</em> da borda.</li>
          <li><strong>Entradas síncronas</strong> (S, R, J, K, D, T) controlam para que estado o flip-flop vai na borda. <strong>Assíncronas</strong> <strong>PRESET</strong> (Q = 1) e <strong>CLEAR</strong> (Q = 0) têm prioridade sobre todas as outras e servem para inicializar.</li>
        </ul>
        <div class="caixa prova"><ul>
          <li>Latch D (transparente): com EN = 1, Q = D o tempo todo; com EN = 0, Q fica congelado. O flip-flop D só copia D na borda do clock.</li>
          <li>Enquanto PRESET/CLEAR estiverem ativos, o flip-flop não responde a D e CLK.</li>
        </ul></div>`
    },
    {
      id: "u2-flipflops",
      titulo: "Flip-flops RS, JK, D e T",
      fonte: "U2 - Livro Didático, Aula 4 (Tabelas 1 a 4); AulaSD_3.pptx",
      html: `
        <div class="caixa definicao"><p>Flip-flop: elemento de memória de 1 bit com clock. O RS dá origem aos outros três (JK, D e T).</p></div>
        <table>
          <thead><tr><th>Tipo</th><th>Entradas</th><th>Funcionamento (na borda ativa)</th></tr></thead>
          <tbody>
            <tr><td><strong>RS</strong></td><td>S, R</td><td>10: Q=1; 01: Q=0; 00: mantém; <strong>11: proibido</strong></td></tr>
            <tr><td><strong>JK</strong></td><td>J, K</td><td>10: Q=1; 01: Q=0; 00: mantém; <strong>11: inverte (toggle)</strong></td></tr>
            <tr><td><strong>D</strong></td><td>D</td><td>Q = D (transferência de dados)</td></tr>
            <tr><td><strong>T</strong></td><td>T</td><td>T=0: mantém; T=1: inverte</td></tr>
          </tbody>
        </table>
        <div class="caixa prova"><ul>
          <li>A diferença mais importante entre RS e JK é a combinação 11: no RS é proibida, no JK vira <strong>toggle</strong> (a saída inverte a cada borda).</li>
          <li>JK faz tudo que o RS faz, mais o toggle; por isso o JK pode substituir o RS, mas o RS não substitui o JK.</li>
          <li>JK com J = K = 1 funciona como T; D pode virar T ligando Q̅ à entrada D.</li>
          <li>T não tem entrada de dados: só alterna a cada evento do clock.</li>
        </ul></div>
        <div class="caixa exemplo"><p>JK com J = K = 1 e clock de 10 kHz: Q alterna a cada borda, saída de 5 kHz. Ligando Q ao CLK de um segundo JK com J = K = 1, a saída vai a 2,5 kHz.</p></div>`
    },
    {
      id: "u2-ff-detalhes",
      titulo: "Flip-flops: construção, conversões e latch D",
      fonte: "AulaSD_3.pptx (Flip-flops S-R, J-K, D, Latch D); U2 - Livro Didático, Aula 4 (Figura 3)",
      html: `
        <dl class="campos">
          <dt>Flip-flop SR com clock</dt><dd>Só muda no instante da borda do clock. No exemplo de borda de subida: a transição negativa não afeta Q e o nível das entradas fora da borda também não. S e R são as <strong>entradas síncronas de controle</strong>. Pode ser disparado por borda de descida (entrada de clock com inversor).</dd>
          <dt>Circuito interno</dt><dd>(1) um latch básico de portas NAND (portas 3 e 4); (2) um circuito de direcionamento de pulsos (portas NAND 1 e 2); (3) um <strong>detector de transição</strong>, baseado no atraso de uma porta (inversor), que produz um pulso de poucos nanossegundos.</dd>
          <dt>Flip-flop JK</dt><dd>Mais versátil que o RS: J = K = 1 não é estado ambíguo, é o modo <strong>toggle</strong> (Q inverte a cada borda), muito usado em contadores binários. Também pode operar por borda de descida.</dd>
          <dt>Flip-flop D</dt><dd>Uma só entrada síncrona: Q recebe D na borda. Pode ser feito com um RS. Aplicação principal: <strong>transferência paralela de dados</strong>. Se D ficar permanentemente em 0, Q vai a 0 e fica em 0.</dd>
          <dt>Flip-flop T</dt><dd>T = 0 sem alteração (como JK com J=K=0); T = 1 toggle (como JK com J=K=1).</dd>
          <dt>Latch D (transparente)</dt><dd>Sem detector de transição. Com EN = 1, Q segue D (modo transparente); com EN = 0, Q fica congelado.</dd>
        </dl>
        <table>
          <thead><tr><th>Construção (livro)</th><th>Como obter</th></tr></thead>
          <tbody>
            <tr><td>RS como base</td><td>Dá origem aos outros três tipos</td></tr>
            <tr><td>JK a partir do RS</td><td>Realimentação das saídas Q e Q̅ para as entradas, com clock</td></tr>
            <tr><td>D a partir do JK</td><td>Entrada D ligada em J e, invertida, em K</td></tr>
            <tr><td>T a partir do JK</td><td>J e K ligados juntos na entrada T</td></tr>
          </tbody>
        </table>
        <div class="caixa nota"><p>As ligações para obter D e T a partir do JK aparecem no livro apenas em figura (Figura 3). As descrições acima seguem a construção padrão (conhecimento geral); a relação &quot;D = J, K = D̅&quot; e &quot;T = J = K&quot; é o que vale.</p></div>
        <div class="caixa prova"><ul>
          <li>Flip-flop (e latch) é <strong>circuito sequencial</strong>: tem memória e armazena 1 bit. Não é combinacional.</li>
          <li>Latch D x flip-flop D: o latch é sensível ao <strong>nível</strong> de EN; o flip-flop copia D apenas na <strong>borda</strong> do clock.</li>
          <li>A saída Q do flip-flop D nem sempre é igual a D: só é igual a D no instante da borda ativa.</li>
          <li>Para o D operar em toggle, ligue Q̅ à entrada D.</li>
          <li>Um JK pode ser usado como SR, mas um SR não pode ser usado como JK.</li>
        </ul></div>`
    },
    {
      id: "u2-contadores",
      titulo: "Contadores, registradores e divisor de frequência",
      fonte: "U2 - Livro Didático, Aulas 3 e 4; AulaSD_3.pptx (Aplicações com flip-flops)",
      html: `
        <dl class="campos">
          <dt>Contador</dt><dd>Gera uma sequência de números a cada pulso de clock. <strong>Assíncrono</strong>: a saída de um flip-flop aciona o clock do seguinte (ex.: 74LS293, 4 bits, conta 0 a 15). <strong>Síncrono</strong>: todos recebem o mesmo clock.</dd>
          <dt>Registrador</dt><dd>Grupo de flip-flops que armazena dados. Registrador de deslocamento (shift register) transfere dados em série; no registrador em anel o bit circula (ex.: 74HC166).</dd>
          <dt>Divisor de frequência</dt><dd>Flip-flops T em cascata: cada estágio entrega metade da frequência do anterior (f/2, f/4, f/8 ...). Permite clock rápido para comunicação e lento para contagem de horas.</dd>
        </dl>
        <div class="formula">n flip-flops contam de 0 até 2<sup>n</sup> - 1 &nbsp; | &nbsp; f<sub>saída</sub> = f<sub>clock</sub> / 2<sup>n</sup></div>
        <table>
          <thead><tr><th></th><th>Transferência paralela</th><th>Transferência serial</th></tr></thead>
          <tbody>
            <tr><td>Velocidade</td><td>Mais rápida</td><td>Mais lenta</td></tr>
            <tr><td>Conexões</td><td>Mais interconexões</td><td>Menos, mais simples</td></tr>
            <tr><td>Fonte</td><td>Mantém os dados</td><td>Dados são deslocados</td></tr>
          </tbody>
        </table>
        <div class="caixa exemplo"><p>Contador BCD: conta somente até 1001 (9) e zera (CLR) quando a saída chega a 1010. Contador genérico: para a sequência 00, 01, 10, 00 com flip-flops D, monta-se a tabela estado atual/próximo estado e projeta-se a lógica de D.</p></div>
        <div class="caixa prova"><ul><li>Principal aplicação dos flip-flops: armazenamento e transferência de dados (registradores).</li><li>Também: contadores, sincronização, detecção de sequências, máquinas de estado.</li></ul></div>`
    },
    {
      id: "u2-aplicacoes-ff",
      titulo: "Aplicações dos flip-flops: sincronização, registradores e contadores",
      fonte: "AulaSD_3.pptx (Aplicações com flip-flops, Contadores, Diagrama de transição de estados)",
      html: `
        <ul>
          <li><strong>Sincronização</strong>: sincronizar sinais assíncronos com o clock do sistema.</li>
          <li><strong>Detecção de sequências de entrada</strong>: sequências simples com flip-flops; as mais complexas pedem projeto com máquinas de estado (Mealy ou Moore).</li>
          <li><strong>Armazenamento e transferência de dados</strong>: grupos de flip-flops formam <strong>registradores</strong>. Transferência paralela ou serial (registradores de deslocamento).</li>
          <li><strong>Divisão de frequência e contadores binários assíncronos</strong>.</li>
          <li><strong>Contador BCD</strong>: conta só até 1001 e zera (CLR) quando a saída chega a 1010.</li>
          <li><strong>Contador síncrono (paralelo)</strong>: todos os flip-flops recebem o mesmo clock; o contador binário de 4 bits segue o princípio do &quot;vai um&quot; da soma binária.</li>
        </ul>
        <h4>Contador genérico</h4>
        <p>Qualquer sequência de contagem pode ser implementada. Procedimento: (1) monte a tabela com o <strong>estado atual (Q)</strong> e o <strong>próximo estado (D)</strong>; (2) projete a lógica booleana que, a partir do estado atual, produz o próximo; (3) ligue essa lógica às entradas D dos flip-flops e aplique o clock comum.</p>
        <div class="caixa exemplo"><p>Sequência 00 &rarr; 01 &rarr; 10 &rarr; 00: com dois flip-flops D (Q1 Q0): 00 gera D = 01; 01 gera D = 10; 10 gera D = 00; o estado 11 (não usado) deve levar a 00. Exercícios do slide: sequência 000 &rarr; 001 &rarr; 011 &rarr; 111 &rarr; 000; contador de 4 bits que mostra os números primos de 0 a 15 (2, 3, 5, 7, 11, 13).</p></div>
        <p><strong>Diagrama de transição de estados</strong>: cada seta representa um pulso de clock e mostra para qual estado o flip-flop (ou contador) vai.</p>
        <h4>Transferência serial x paralela</h4>
        <table>
          <thead><tr><th></th><th>Paralela</th><th>Serial</th></tr></thead>
          <tbody>
            <tr><td>Velocidade</td><td>Mais rápida</td><td>Mais lenta</td></tr>
            <tr><td>Interconexões</td><td>Muitas</td><td>Poucas, mais simples</td></tr>
            <tr><td>Dados na fonte</td><td>Preservados</td><td>Deslocados (perdidos na fonte)</td></tr>
          </tbody>
        </table>
        <p>Muitas vezes se usa uma combinação dos dois.</p>`
    },
    {
      id: "u2-fsm-555",
      titulo: "Máquinas de estado e temporizador 555",
      fonte: "U2 - Livro Didático, Aulas 4 e 5; AulaSD_3.pptx",
      html: `
        <dl class="campos">
          <dt>Máquina de estados</dt><dd>Modelo para descrever sistemas sequenciais. Componentes: <strong>estados</strong> (condições do sistema), <strong>transições</strong> (passagens de um estado a outro) e <strong>condições de transição</strong>. Máquinas de estados estendidas (EFSM) acrescentam condições e variáveis às transições, com mais flexibilidade. Os slides citam os modelos Mealy e Moore.</dd>
          <dt>Exemplo do livro</dt><dd>Contador de 0 a 4 com 3 bits: 000, 001, 010, 011, 100 e volta a 0; os estados 5, 6 e 7 devem levar a 0.</dd>
          <dt>Aplicações</dt><dd>Protocolos de comunicação, análise léxica de linguagens, controle industrial.</dd>
          <dt>CI 555</dt><dd>Circuito integrado temporizador. Internamente tem um flip-flop RS. Gera sinal de onda quadrada (semelhante a um clock) cuja temporização depende de resistores e capacitor, útil para tempos da ordem de Hz a poucos kHz. Modos citados: <strong>monoestável</strong>, <strong>biestável</strong> e outros (ex.: astável, que pisca o LED no circuito do livro).</dd>
        </dl>
        <div class="caixa externo" data-titulo="Complemento (conhecimento geral)"><p>No 555 astável, a frequência é f &asymp; 1,44 / ((R1 + 2·R2)·C) (fórmula do datasheet usual do NE555). O material analisado não traz esta fórmula; use apenas se o professor a cobrar.</p></div>
        <div class="caixa prova"><ul><li>Os flip-flops com clock podem formar temporizadores; o 555 é a alternativa integrada ao circuito discreto.</li><li>Oscilador a cristal é outra fonte de clock, associável a CIs que multiplicam ou dividem a frequência.</li></ul></div>`
    },
    {
      id: "u2-estado-inicial",
      titulo: "Estado inicial do flip-flop e exemplo de aplicação",
      fonte: "AulaSD_3.pptx (Estado do flip-flop ao ligar o circuito; Exemplo de seletor de pulsos)",
      html: `
        <ul>
          <li>Ao ligar o circuito em repouso (S = R = 1 no latch NAND, S = R = 0 no NOR) não é possível prever em que estado o flip-flop ficará: depende de tempos de propagação, capacitâncias parasitas e carga nas saídas.</li>
          <li>Se for necessário um estado inicial definido, ative <strong>SET ou RESET momentaneamente</strong> ao ligar (um pulso na entrada apropriada).</li>
          <li>Os flip-flops com PRESET e CLEAR (assíncronos) têm essa função de inicialização embutida.</li>
        </ul>
        <div class="caixa exemplo"><p>Circuito do slide: uma chave seleciona o sinal de controle; resistores ligados a +5 V mantêm as entradas em nível alto quando não estão ao terra (ativas em baixo). A chave determina o estado do latch SR; esse estado seleciona qual saída recebe a onda quadrada de 1 kHz: Q = 1 &rarr; pulsos vão a XA; Q = 0 &rarr; vão a XB; a outra fica em nível baixo. Combina memória (latch) com lógica combinacional (AND) e <strong>não divide a frequência</strong>.</p></div>
        <div class="caixa prova"><p>Em portas AND, a saída só reproduz o clock quando a outra entrada está em 1. É assim que Q habilita a passagem dos pulsos.</p></div>`
    }

  ]
};

const MOD_U3 = {
  id: "u3",
  titulo: "Unidade 3 — Arquitetura de microprocessadores e microcontroladores",
  intro: `<p>Microprocessador x microcontrolador, Von Neumann x Harvard, componentes da CPU, RISC e MIPS, CISC, máquina MAC, MIC e microprogramação.</p>`,
  topicos: [
    {
      id: "u3-fundamentos",
      titulo: "Fundamentos: computador, arquitetura geral e programação",
      fonte: "U3 - Livro Didático, Aula 1 (Fundamentos do microprocessamento)",
      html: `
        <dl class="campos">
          <dt>Computador</dt><dd>Máquina eletrônica <strong>programável</strong> que processa dados: recebe informações, processa por instruções específicas e gera resultados.</dd>
          <dt>Arquitetura geral (genérica)</dt><dd>Modelo abstrato de alto nível que descreve a estrutura básica de um dispositivo mostrando só seus principais componentes, sem os detalhes técnicos. Arquitetura básica de um computador: memória, processador, placa-mãe, placa de vídeo, HD e fonte.</dd>
          <dt>Programação</dt><dd>Tanto microprocessadores quanto microcontroladores só funcionam com um programa: um algoritmo, isto é, uma sequência de instruções ou comandos.</dd>
        </dl>
        <h4>Microprocessador x microcontrolador (livro)</h4>
        <ul>
          <li><strong>Microprocessador</strong>: chip central que executa instruções e coordena o sistema. Projetado para operações dinâmicas, uma ampla gama de tarefas. Depende de componentes externos: memória RAM, ROM, circuito gerador de clock, endereçamento etc.</li>
          <li><strong>Microcontrolador</strong> (MCU, <em>Micro Controller Unit</em>, surgiu em meados de 1980): mais simples; já tem internamente memória RAM e ROM, oscilador de clock e entradas e saídas. Controla sistemas embarcados e tarefas específicas em ambientes dedicados; por ter periféricos integrados, tem <strong>capacidade limitada</strong>.</li>
        </ul>
        <div class="caixa prova"><ul>
          <li>Microprocessador = flexibilidade e desempenho com componentes externos; microcontrolador = tudo em um chip, capacidade limitada, tarefa específica.</li>
          <li>Von Neumann: <em>apenas um barramento</em> para instruções e dados. Harvard: <em>dois barramentos</em>, um para dados e outro para instruções.</li>
        </ul></div>`
    },
    {
      id: "u3-mpu-mcu",
      titulo: "Microprocessador x microcontrolador",
      fonte: "AulaSD_4.pptx; U3 - Livro Didático, Aula 1",
      html: `
        <table>
          <thead><tr><th></th><th>Microprocessador (MPU)</th><th>Microcontrolador (MCU)</th></tr></thead>
          <tbody>
            <tr><td>O que é</td><td>Circuito integrado só de processamento (ULA, registradores, controle)</td><td>&quot;Computador em um único chip&quot;: CPU + memória + periféricos de E/S</td></tr>
            <tr><td>Componentes externos</td><td>Obrigatórios: RAM, ROM e controladores de E/S</td><td>Integrados no chip</td></tr>
            <tr><td>Foco</td><td>Alto desempenho, flexibilidade, propósito geral</td><td>Tarefa específica, sistemas embarcados, baixo consumo e custo</td></tr>
            <tr><td>Uso típico</td><td>PCs, servidores, muitas tarefas ao mesmo tempo</td><td>Eletrodomésticos, automóveis, automação industrial, alarmes, relógios</td></tr>
          </tbody>
        </table>
        <h4>Dentro de um microcontrolador</h4>
        <ul>
          <li>CPU (interpreta as instruções) e memória de programa (PROM/flash).</li>
          <li>RAM (variáveis do programa).</li>
          <li>Linhas de E/S (controlam dispositivos externos e recebem sinais de sensores).</li>
          <li>Auxiliares: gerador de clock, contadores/temporizadores, USART (comunicação serial).</li>
        </ul>
        <div class="caixa exemplo"><p>Primeiro microcontrolador: Intel 8048 (1977), que deu origem à família 8051. Microcontroladores PIC (Microchip) usam arquitetura Harvard. Fabricantes citados: Intel, Microchip, Atmel, Texas Instruments, Freescale, Zilog e outros.</p></div>
        <div class="caixa prova"><ul><li>Usar MCU: controle embarcado, baixo consumo, espaço restrito, baixa necessidade de processamento.</li><li>Usar MPU: propósito geral, alta capacidade e muitas aplicações.</li></ul></div>`
    },
    {
      id: "u3-arquiteturas",
      titulo: "Arquiteturas Von Neumann e Harvard",
      fonte: "U3 - Livro Didático, Aulas 1 e 5; AulaSD_4.pptx",
      html: `
        <table>
          <thead><tr><th></th><th>Von Neumann</th><th>Harvard</th></tr></thead>
          <tbody>
            <tr><td>Memória</td><td>Única para programa e dados</td><td>Separadas (programa e dados)</td></tr>
            <tr><td>Barramentos</td><td>Um único (dados/endereços)</td><td>Distintos para instruções e dados</td></tr>
            <tr><td>Desempenho</td><td>Gargalo no acesso compartilhado à memória</td><td>Busca instrução enquanto acessa dados; mais rápida no mesmo clock</td></tr>
            <tr><td>Projeto</td><td>Mais simples e flexível</td><td>Mais complexo de implementar</td></tr>
            <tr><td>Uso</td><td>Propósito geral</td><td>Embarcados e alto desempenho de acesso à memória</td></tr>
          </tbody>
        </table>
        <p>Máquina de Von Neumann: memória, unidade de controle, ULA, registradores e periféricos de E/S.</p>
        <div class="caixa nota" data-titulo="Atenção ao slide"><p>O AulaSD_4 afirma que microcontroladores Harvard são conhecidos como &quot;RISC&quot; e os Von Neumann como &quot;CISC&quot;. É uma associação comum nesse material (PIC), mas Von Neumann/Harvard descrevem a organização da memória, e RISC/CISC o conjunto de instruções: são classificações independentes (conhecimento geral).</p></div>
        <div class="caixa exemplo"><p>Estudo de caso do livro: dispositivo médico portátil, em tempo real e baixo consumo. Resposta do livro: arquitetura <strong>Harvard</strong> (desempenho e eficiência energética), aceitando maior complexidade.</p></div>`
    },
    {
      id: "u3-componentes",
      titulo: "Componentes do microprocessamento (CPU, ULA, UC, registradores, barramentos, E/S)",
      fonte: "U3 - Livro Didático, Aulas 2 e 5; AulaSD_4.pptx (Conclusão)",
      html: `
        <dl class="campos">
          <dt>CPU (Unidade Central de Processamento)</dt><dd>&quot;Cérebro&quot; do computador; executa as instruções da programação. Também chamada processador. <strong>Atenção</strong>: no uso informal, &quot;CPU&quot; designa o gabinete do PC; no curso, CPU é só a unidade de processamento. Também controla direta ou indiretamente os periféricos e a memória principal, e define o <strong>endereçamento máximo</strong> do sistema (capacidade máxima da memória principal).</dd>
          <dt>ULA (Unidade Lógica e Aritmética)</dt><dd>Onde ocorrem as operações matemáticas e lógicas. Segundo Paixão: adição, subtração, multiplicação e divisão; complemento de 2; AND, OR e OR exclusivo; rotações à esquerda e à direita.</dd>
          <dt>UC (Unidade de Controle)</dt><dd>Sincronismo do processador (circuitos de temporização), controle da sequência de instruções e sua decodificação. Interpreta as instruções, coordena a ULA, busca dados na memória e controla o fluxo na CPU.</dd>
          <dt>Registradores</dt><dd>Pequenas memórias de alta velocidade dentro da CPU, para dados e endereços temporários durante a execução. Internos de 8, 16, 32, 64, 128 e 256 bits. Exemplos: registrador de instrução (guarda a instrução em execução) e registrador de dados.</dd>
          <dt>Barramentos</dt><dd>Vias de transferência de dados entre CPU, memória, ULA e E/S. Tipos: <strong>dados</strong> (transmitem dados), <strong>endereços</strong> (indicam posições de memória) e <strong>controle</strong> (sinais para coordenar operações).</dd>
          <dt>Entradas e saídas (E/S ou I/O)</dt><dd>Interfaces entre o mundo real e o sistema digital: entradas inserem dados; saídas entregam resultados ao exterior.</dd>
        </dl>
        <p>A arquitetura geral do processador é formada por <strong>três blocos básicos</strong>: ULA, UC e registradores, mais os barramentos internos.</p>
        <h4>Fluxo do processamento de dados</h4>
        <ol>
          <li><strong>Entrada</strong>: teclado, mouse, câmera; a CPU coordena a ida à memória pelos barramentos de dados e controle.</li>
          <li><strong>Armazenamento</strong>: memória principal, acesso rápido pela CPU.</li>
          <li><strong>Processamento</strong>: UC e ULA executam operações aritméticas e lógicas.</li>
          <li><strong>Controle do fluxo</strong>: a UC define a próxima instrução (barramento de controle).</li>
          <li><strong>Saída</strong>: monitores, impressoras, alto-falantes.</li>
        </ol>
        <div class="caixa exemplo"><p>Unidades de medida: 1 KB = 2<sup>10</sup> = 1024 bytes; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB. Prefixos decimais: quilo 10<sup>3</sup>, mega 10<sup>6</sup>, giga 10<sup>9</sup>, tera 10<sup>12</sup>, peta 10<sup>15</sup>.</p></div>
        <div class="caixa prova"><ul>
          <li>ULA = cálculo; UC = comando e sincronismo; registrador = armazenamento temporário dentro da CPU; barramento = transporte.</li>
          <li>Barramento de endereços indica <em>onde</em>; de dados transporta <em>o quê</em>; de controle coordena <em>quando</em> (sinais).</li>
        </ul></div>`
    },
    {
      id: "u3-ciclo-instrucao",
      titulo: "Ciclo de instrução e contador de programa",
      fonte: "U3 - Livro Didático, Aula 3 (Stallings, 2010)",
      html: `
        <div class="caixa definicao"><p>No início de cada <span class="termo">ciclo de instrução</span> o processador busca uma instrução na memória. O registrador <strong>contador de programa (PC)</strong> guarda o endereço da próxima instrução a buscar.</p></div>
        <ol>
          <li><strong>Busca</strong>: endereço da próxima instrução (PC) vai à memória.</li>
          <li><strong>Decodificação</strong>: identifica a operação e os registradores; lê os valores dos registradores.</li>
          <li><strong>Execução</strong>: operação aritmética, lógica ou de transferência de dados.</li>
          <li><strong>Acesso à memória</strong>: só se a instrução exigir (load/store).</li>
          <li><strong>Escrita de resultados</strong>: grava nos registradores e prepara a próxima instrução.</li>
        </ol>
        <p>Nem todas as instruções passam por todos os estágios em todos os ciclos. No pipeline, enquanto uma instrução é executada a seguinte já está sendo buscada (sobreposição), o que aumenta a taxa de transferência.</p>
        <div class="caixa exemplo"><p>Analogia do livro: chef (CPU) seguindo uma receita (programa). Potes etiquetados = registradores ($t0, $t1); passos da receita = instruções; dividir em etapas e fazer em paralelo = pipeline; somar o conteúdo de dois potes e guardar em um terceiro = <code>add $t0, $t1, $t2</code>; repetir a receita até o fim = ciclo de instrução. Tipos de instrução = categorias de receita (R, I, J); modos de endereçamento = onde buscar os ingredientes (na mão = imediato, na despensa = registrador, na geladeira = deslocamento).</p></div>`
    },
    {
      id: "u3-risc-mips",
      titulo: "Arquitetura RISC e MIPS",
      fonte: "U3 - Livro Didático, Aula 3; AulaSD_4.pptx",
      html: `
        <div class="caixa definicao"><p><strong>RISC</strong> (Reduced Instruction Set Computing): conjunto de instruções reduzido e simples, que busca eficiência. <strong>MIPS</strong> (Microprocessor without Interlocked Pipeline Stages): exemplo RISC conhecido pela simplicidade e eficiência.</p></div>
        <ul>
          <li><strong>Instruções simples</strong>, formatos uniformes que simplificam o controle.</li>
          <li><strong>32 registradores de 32 bits</strong> (identificados por nomes como $t0, $t1).</li>
          <li>Componentes: unidade de controle, ULA, registradores e memória.</li>
          <li>Vantagem do RISC: eficiência energética; desvantagem: precisa de mais instruções para tarefas complexas.</li>
        </ul>
        <h4>Pipeline de 5 estágios</h4>
        <table>
          <thead><tr><th>Estágio</th><th>Função</th></tr></thead>
          <tbody>
            <tr><td><strong>IF</strong> (busca)</td><td>Busca a instrução na memória de instruções usando o PC (contador de programa)</td></tr>
            <tr><td><strong>ID</strong> (decodificação)</td><td>Decodifica e lê os registradores no banco de registradores</td></tr>
            <tr><td><strong>EX</strong> (execução)</td><td>ULA executa a operação ou calcula o endereço de memória</td></tr>
            <tr><td><strong>MEM</strong></td><td>Acessa a memória de dados (LOAD/STORE)</td></tr>
            <tr><td><strong>WB</strong> (escrita)</td><td>Grava o resultado no registrador de destino</td></tr>
          </tbody>
        </table>
        <p>O pipeline divide a execução em estágios independentes, processando várias instruções ao mesmo tempo e aumentando o <em>throughput</em> (analogia do livro: lavar, secar e dobrar roupa em paralelo).</p>
        <h4>Formatos e tipos de instrução</h4>
        <table>
          <thead><tr><th>Formato</th><th>Campos</th><th>Uso</th></tr></thead>
          <tbody>
            <tr><td><strong>R</strong></td><td>opcode, rs, rt, rd, shamt, funct</td><td>Operações entre registradores (ADD, SUB)</td></tr>
            <tr><td><strong>I</strong></td><td>opcode, rs, rt, imediato de 16 bits</td><td>Constantes, LOAD/STORE, desvios condicionais</td></tr>
            <tr><td><strong>J</strong></td><td>opcode, endereço de 26 bits</td><td>Saltos incondicionais</td></tr>
          </tbody>
        </table>
        <p>Categorias: transferência de dados, aritméticas e lógicas, controle de fluxo.</p>
        <h4>Modos de endereçamento</h4>
        <ul>
          <li><strong>Imediato</strong>: operando é um valor dentro da própria instrução.</li>
          <li><strong>Por registrador</strong>: operando está em registrador.</li>
          <li><strong>Por deslocamento</strong>: endereço = registrador-base + deslocamento.</li>
        </ul>
        <div class="caixa nota" data-titulo="Divergência no livro"><p>O resumo da Aula 5 cita &quot;imediato, direto e registrado&quot;; a Aula 3 e os slides usam imediato, por registrador e por deslocamento. Prefira a segunda lista.</p></div>
        <div class="caixa prova"><ul><li>MIPS: pipeline de <strong>5</strong> estágios, 3 formatos (R, I, J), 3 modos de endereçamento (segundo a Aula 3).</li><li>Campos de R: rs e rt (origem), rd (destino), shamt (deslocamento), funct (função).</li></ul></div>`
    },
    {
      id: "u3-cisc",
      titulo: "Arquitetura CISC, máquina MAC, MIC e microprogramação",
      fonte: "U3 - Livro Didático, Aula 4; AulaSD_4.pptx",
      html: `
        <div class="caixa definicao"><p><strong>CISC</strong> (Complex Instruction Set Computing): conjunto de instruções complexo; uma única instrução pode executar várias operações ou acessar várias posições de memória. Instruções de tamanhos e complexidades diferentes.</p></div>
        <table>
          <thead><tr><th></th><th>RISC</th><th>CISC</th></tr></thead>
          <tbody>
            <tr><td>Instruções</td><td>Poucas, simples</td><td>Muitas, complexas</td></tr>
            <tr><td>Programa</td><td>Mais instruções para a mesma tarefa</td><td>Menos instruções (mais conveniência ao programador)</td></tr>
            <tr><td>Energia</td><td>Mais eficiente</td><td>Maior consumo e manutenção mais difícil (segundo o estudo de caso)</td></tr>
            <tr><td>Exemplos</td><td>MIPS, ARM</td><td>Intel x86, AMD x86, IBM System/360 (z/Architecture), DEC VAX</td></tr>
          </tbody>
        </table>
        <dl class="campos">
          <dt>Máquina MAC</dt><dd>No livro, multiplicação-acumulação (Multiply-Accumulate): unidade que multiplica dois operandos e soma o resultado a um acumulador. Muito usada em DSP (filtros, modulação). Instruções: multiplicar, acumular, carregar, armazenar.</dd>
          <dt>Arquitetura MIC</dt><dd>Many Integrated Core: muitos núcleos em um chip, para cargas altamente paralelas (ex.: Intel Xeon Phi). Os sinais de controle coordenam a execução paralela.</dd>
          <dt>Microprogramação</dt><dd>Instruções de alto nível decompostas em <strong>microinstruções</strong> executadas pela unidade de controle microprogramada. Vantagem (Stallings): simplifica o projeto da unidade de controle, mais barato e menos propenso a erros.</dd>
        </dl>
        <div class="caixa nota" data-titulo="Inconsistência no livro"><p>A Aula 5 do livro define MAC como &quot;Microprogrammable Control&quot; e MIC como &quot;Microprogrammable Instruction Control&quot;, mas as Aulas 4 e os slides usam Multiply-Accumulate e Many Integrated Core. Em prova, use as definições da Aula 4 (a mais detalhada); se a questão trouxer outra sigla, leia o contexto.</p></div>
        <div class="caixa nota" data-titulo="Atenção"><p>O livro diz que instruções CISC são executadas &quot;em um único ciclo de clock&quot;. Em geral, instruções complexas levam vários ciclos (conhecimento geral); a ideia a reter é que uma instrução realiza muitas operações.</p></div>`
    },
    {
      id: "u3-estudo-caso",
      titulo: "Estudo de caso: escolha da arquitetura (dispositivo médico)",
      fonte: "U3 - Livro Didático, Aula 5 (Estudo de caso e resolução)",
      html: `
        <p>Dispositivo portátil de monitoramento contínuo de sinais vitais. Requisitos: <strong>processamento em tempo real</strong>, <strong>baixo consumo</strong>, memória adequada, facilidade de manutenção e atualização.</p>
        <table>
          <thead><tr><th>Arquitetura</th><th>Vantagens</th><th>Desvantagens</th></tr></thead>
          <tbody>
            <tr><td>Von Neumann</td><td>Simplicidade de projeto; flexibilidade com dados e instruções</td><td>Gargalo pelo acesso compartilhado à memória (crítico em tempo real)</td></tr>
            <tr><td>Harvard</td><td>Melhor desempenho (memórias separadas); bom para tempo real</td><td>Complexidade de implementação (custo e dificuldade)</td></tr>
            <tr><td>RISC</td><td>Eficiência energética; conjunto simples</td><td>Mais instruções para tarefas complexas</td></tr>
            <tr><td>CISC</td><td>Tarefas complexas em menos instruções</td><td>Maior consumo e manutenção mais difícil</td></tr>
          </tbody>
        </table>
        <div class="caixa prova"><p><strong>Escolha do livro: Harvard.</strong> A separação de memória dá desempenho para tempo real; o livro também lhe atribui eficiência energética. O custo é a complexidade. Lição: alinhar requisitos do projeto com vantagens e desvantagens, priorizar o crítico e envolver especialistas de várias áreas (software, eletrônica, biomédica, design).</p></div>`
    },
    {
      id: "u3-cisc-dsp",
      titulo: "CISC e MAC na prática: processamento de sinal (DSP)",
      fonte: "U3 - Livro Didático, Aula 4 (Exploração e Aplicação)",
      html: `
        <ul>
          <li>Em um DSP (<em>Digital Signal Processor</em>) as operações de filtragem, modulação e demodulação usam multiplicação e acumulação repetidas.</li>
          <li><strong>Exemplo (áudio em tempo real)</strong>: instruções CISC carregam os coeficientes do filtro, a máquina MAC multiplica cada amostra pelo coeficiente e acumula na saída, e o fluxo de dados entre estágios é gerenciado; repete-se para cada amostra.</li>
          <li>Em ambiente de alta performance com <strong>MIC</strong> (ex.: Intel Xeon Phi), cada núcleo processa uma parte (um filtro ou um conjunto de amostras) e os sinais de controle distribuem os dados e mantêm a sincronização.</li>
          <li>A <strong>microprogramação</strong> implementa a operação MAC como sequência de microinstruções mais simples executadas pela unidade de controle.</li>
        </ul>
        <div class="caixa prova"><ul>
          <li>Lenz: a CISC permite instruções mais complexas mas precisa de mais acessos à memória de instruções.</li>
          <li>Instruções CISC combinam aritmética, lógica, movimentação de dados e controle de fluxo em uma só instrução (conveniência ao programador).</li>
        </ul></div>`
    }

  ]
};

const MOD_U4 = {
  id: "u4",
  titulo: "Unidade 4 — Arduino, novas arquiteturas e ARM",
  intro: `<p>Plataforma Arduino (hardware, pinos, programação), arquiteturas com IA e processadores ARM.</p>`,
  topicos: [
    {
      id: "u4-arduino",
      titulo: "Arduino: conceito e arquitetura da placa",
      fonte: "U4 - Livro Didático, Aulas 1 e 2; Arduino.pptx",
      html: `
        <div class="caixa definicao"><p>Arduino: plataforma open-source de <strong>prototipagem eletrônica</strong>: placa com microcontrolador, circuitos de entrada/saída e interface USB, programada por IDE em C/C++ simplificado. Criado em 2005 na Itália (Ivrea) por Massimo Banzi e colegas; hardware livre.</p></div>
        <dl class="campos">
          <dt>Elementos universais</dt><dd>Entrada, microcontrolador e saída existem em todas as placas.</dd>
          <dt>Arduino Uno</dt><dd>ATmega328P (Microchip/Atmel), 16 MHz, 32 KB flash, 2 KB RAM, 1 KB EEPROM; 14 pinos digitais (6 com PWM), 6 entradas analógicas, cristal de 16 MHz, USB, botão reset e conector ICSP.</dd>
          <dt>Outras placas</dt><dd>Mega (mais pinos e memória), Nano (compacta), Due (microcontrolador ARM, mais potente).</dd>
          <dt>Shields</dt><dd>Placas encaixadas para expandir funções (ex.: Ethernet Shield).</dd>
          <dt>Programa independente</dt><dd>Depois de gravado (USB), roda sozinho; a Internet só é necessária se o projeto usar rede.</dd>
        </dl>
        <div class="caixa prova"><ul>
          <li>Pinos 0 e 1 (RX e TX): comunicação serial com o computador.</li>
          <li>Pino GND = 0 V, referência das tensões; também há 3,3 V e 5 V.</li>
          <li>Pino digital como saída: 5 V e até 40 mA (acende LED, mas não aciona motor diretamente).</li>
          <li>Botão de reset reinicia o programa desde o início.</li>
        </ul></div>`
    },
    {
      id: "u4-hardware-uno",
      titulo: "Arduino Uno: componentes da placa",
      fonte: "Arduino.pptx (slides 5 a 12); U4 - Livro Didático, Aula 1",
      html: `
        <ul>
          <li><strong>Microcontrolador</strong>: coração da placa; os demais componentes fornecem energia e comunicação com o computador. Tem processador, memória RAM, memória EPROM/flash (programas) e pinos de E/S.</li>
          <li><strong>Alimentação</strong>: pinos de 3,3 V, 5 V e GND (terra = zero volt, referência de todas as tensões). O USB também alimenta a placa.</li>
          <li><strong>Reset</strong>: pulso lógico no pino de reset; o microcontrolador reinicia o programa do começo e limpa a memória.</li>
          <li><strong>Entradas analógicas A0 a A5</strong> (&quot;Analog In&quot;): medem a tensão aplicada; valores usados no programa. Grandeza analógica assume infinitos valores em uma faixa (como o ponteiro do velocímetro).</li>
          <li><strong>Pinos digitais</strong>: entradas ou saídas. Como saída fornecem 5 V e até <strong>40 mA</strong>: acendem um LED comum, mas não acionam um motor diretamente. Pinos 0 e 1 (RX e TX) servem à comunicação serial com o computador.</li>
          <li><strong>Oscilador a cristal</strong>: 16 milhões de ciclos por segundo; a cada ciclo o microcontrolador pode executar uma operação.</li>
          <li><strong>Conector serial de programação (ICSP)</strong>: programa a placa sem usar a USB.</li>
          <li><strong>Chip de interface USB</strong>: converte os níveis do padrão USB para os da placa.</li>
        </ul>
        <div class="caixa exemplo"><p>Módulos são pequenas placas com sensores e componentes auxiliares (resistores, capacitores, LEDs). <strong>Shields</strong> se encaixam na placa para expandir funções, como o Ethernet Shield no Arduino Mega 2560, que dá acesso à rede mantendo os demais pinos livres (por exemplo, enviar temperatura e umidade para consulta remota).</p></div>
        <div class="caixa prova"><ul>
          <li>Elementos universais de qualquer placa Arduino: <strong>entrada, microcontrolador e saída</strong>.</li>
          <li>Hardware livre: qualquer pessoa pode montar, modificar e personalizar. Foi criado em 2005 por cinco pesquisadores para ser barato, funcional e fácil de programar.</li>
        </ul></div>`
    },
    {
      id: "u4-es-programacao",
      titulo: "Entradas, saídas e programação",
      fonte: "U4 - Livro Didático, Aulas 1 e 2; Arduino.pptx",
      html: `
        <table>
          <thead><tr><th></th><th>Digital</th><th>Analógica</th></tr></thead>
          <tbody>
            <tr><td>Pinos (Uno)</td><td>0 a 13</td><td>A0 a A5 (entradas)</td></tr>
            <tr><td>Valores</td><td>Dois níveis: LOW = 0 V, HIGH = 5 V</td><td>Qualquer valor na faixa (infinitos valores)</td></tr>
            <tr><td>Exemplo</td><td>Botão, sensor de presença, LED, relé</td><td>Sensor de temperatura, luz, umidade</td></tr>
          </tbody>
        </table>
        <p>Saídas &quot;analógicas&quot;: pinos 3, 5, 6, 9, 10 e 11 (PWM) simulam tensões entre 0 e 5 V.</p>
        <div class="caixa definicao" data-titulo="Sensores e atuadores"><p><strong>Sensor</strong> (entrada): mede uma grandeza e informa o Arduino. <strong>Atuador</strong> (saída): age sobre o ambiente (motor, ventilador, válvula, LED).</p></div>
        <h4>Estrutura de um programa</h4>
        <pre><code>void setup() {
  pinMode(10, OUTPUT);       // executa uma vez
}
void loop() {
  digitalWrite(10, HIGH);    // repete sempre
  delay(1000);
  digitalWrite(10, LOW);
  delay(1000);
}</code></pre>
        <ul>
          <li><code>setup()</code>: roda <strong>uma vez</strong> ao iniciar (configura pinos).</li>
          <li><code>loop()</code>: roda <strong>continuamente</strong>.</li>
          <li><code>pinMode(pino, OUTPUT/INPUT)</code> define o modo; <code>digitalWrite(pino, HIGH/LOW)</code> escreve o nível.</li>
          <li><strong>Arduino IDE</strong>: ambiente onde se escreve, compila e carrega o programa via USB.</li>
        </ul>
        <div class="caixa exemplo"><p>Projeto clássico: LED piscante (LED, resistor e placa). Outros: semáforo de pedestres, irrigação automática com sensor de umidade, monitor de temperatura com ventilador.</p></div>`
    },
    {
      id: "u4-c-algoritmos",
      titulo: "Linguagem C, algoritmos e primeiros programas",
      fonte: "U4 - Livro Didático, Aula 1",
      html: `
        <ul>
          <li>A linguagem do Arduino é uma variante simplificada de <strong>C/C++</strong>; conhecer C aproveita ao máximo a plataforma.</li>
          <li>Conceitos essenciais: tipos de dados, operadores, variáveis, estruturas de controle (condicionais e laços), funções, bibliotecas, <strong>arrays</strong> (vários elementos do mesmo tipo sob um único nome) e ponteiros.</li>
          <li>Algoritmos de exemplo citados: busca linear e ordenação por inserção; controle PID (Proporcional-Integral-Derivativo) em sistemas de controle.</li>
          <li><code>#include &lt;Arduino.h&gt;</code> inclui a biblioteca principal; <code>setup()</code> roda uma vez (configuração de pinos, variáveis); <code>loop()</code> roda em repetição infinita (leitura de sensores, controle de dispositivos).</li>
        </ul>
        <h4>Piscar o LED da placa</h4>
        <pre><code>void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // acende
  delay(1000);                      // 1 segundo
  digitalWrite(LED_BUILTIN, LOW);   // apaga
  delay(1000);
}</code></pre>
        <h4>Acender um LED no pino 10</h4>
        <pre><code>void setup() {
  pinMode(10, OUTPUT);
  digitalWrite(10, HIGH);   // 5 V no pino
}
void loop() { }</code></pre>
        <p><code>pinMode(pino, modo)</code> e <code>digitalWrite(pino, nível)</code> têm dois parâmetros; HIGH = 5 V e LOW = 0 V. O pino precisa ser configurado antes de ser usado.</p>
        <div class="caixa prova"><ul><li><code>delay(1000)</code> espera 1000 ms = 1 segundo.</li><li>No exemplo do pino 10 o código fica no <code>setup()</code>, mas o LED permanece aceso porque o pino mantém o nível.</li></ul></div>`
    },
    {
      id: "u4-projetos-casos",
      titulo: "Projetos com Arduino e estudo de caso (iluminação inteligente)",
      fonte: "U4 - Livro Didático, Aulas 1, 2 e 5",
      html: `
        <h4>Exemplos de projetos citados</h4>
        <ul>
          <li>Monitoramento de temperatura da água de um viveiro: acima do limite, aciona resfriamento ou envia notificação.</li>
          <li>Irrigação automática: sensores de umidade do solo e válvulas solenoides.</li>
          <li>Semáforo de pedestres com LEDs (entradas e saídas digitais); monitoramento residencial com sensores de movimento, temperatura e umidade (digitais e analógicos); controle de acesso com cartão (entrada digital lê o sensor, saída digital destrava a porta); monitoramento de energia em fábrica com sensores de corrente e tensão.</li>
          <li>LED piscante: projeto &quot;Hello World&quot; da eletrônica (LED, resistor e placa).</li>
        </ul>
        <h4>Escolha da placa</h4>
        <p>Considere pinos, poder de processamento, tamanho físico e recursos adicionais (comunicação sem fio, interfaces). Uno: básica e popular; Mega: mais pinos e memória; Nano: compacta; Due: ARM, maior desempenho.</p>
        <h4>Estudo de caso: iluminação residencial inteligente</h4>
        <table>
          <thead><tr><th>Etapa</th><th>Atividades</th></tr></thead>
          <tbody>
            <tr><td>1. Análise de requisitos e design conceitual</td><td>Pesquisa de mercado; requisitos funcionais e não funcionais (detecção de luminosidade, controle remoto por aplicativo, agendamento, presença, ajuste de intensidade); design conceitual considerando usabilidade e viabilidade técnica</td></tr>
            <tr><td>2. Desenvolvimento e implementação</td><td>Selecionar componentes (placas Arduino, sensores de luminosidade, relés, módulos sem fio); programar em C/C++ conforme os sensores e preferências; testes extensivos em diferentes cenários</td></tr>
          </tbody>
        </table>
        <div class="caixa prova"><p>Eficiência energética no caso: sensor de luminosidade ajusta a luz conforme a luz natural e desliga luzes em salas vazias.</p></div>`
    },
    {
      id: "u4-ia-arm",
      titulo: "Arquiteturas com IA e processadores ARM",
      fonte: "U4 - Livro Didático, Aulas 3 e 4",
      html: `
        <dl class="campos">
          <dt>Processadores para IA</dt><dd>Arquiteturas especializadas em operações matriciais (redes neurais): GPUs e TPUs (unidades de processamento tensorial) aceleram treinamento e inferência.</dd>
          <dt>ARM (Advanced RISC Machine)</dt><dd>Arquitetura RISC criada pela Acorn Computers (Reino Unido, início dos anos 1980; computador Acorn Archimedes, 1987). Destaca-se pela <strong>eficiência energética</strong> e flexibilidade; modular (fabricantes personalizam).</dd>
          <dt>Organização interna</dt><dd>CPU, FPU (ponto flutuante), unidade de memória, controlador de interrupções, interligados por barramentos; pipeline, previsão de ramificação, execução fora de ordem, caches.</dd>
          <dt>Aplicações</dt><dd>Smartphones, tablets, wearables, automóveis, dispositivos médicos, IoT e servidores/nuvem.</dd>
        </dl>
        <table>
          <thead><tr><th>Família ARM</th><th>Características</th></tr></thead>
          <tbody>
            <tr><td>ARM7</td><td>RISC; embarcados e baixo consumo; uma das primeiras</td></tr>
            <tr><td>ARM9</td><td>Mais desempenho; caches L2; Jazelle (código Java)</td></tr>
            <tr><td>ARM11</td><td>Mais desempenho e eficiência; extensões DSP</td></tr>
            <tr><td>Cortex</td><td>Mais recente; 32 e 64 bits; subcategorias Cortex-A, Cortex-R, Cortex-M</td></tr>
          </tbody>
        </table>
        <p><strong>Simuladores ARM</strong> (QEMU, ARM Development Studio): permitem criar e depurar software sem hardware físico, mas podem não reproduzir totalmente o comportamento real, por isso exigem testes em hardware. Placas de desenvolvimento citadas: Raspberry Pi e Arduino.</p>`
    },
    {
      id: "u4-arm-extra",
      titulo: "ARM: histórico, aplicações e desenvolvimento com simuladores",
      fonte: "U4 - Livro Didático, Aulas 3, 4 e 5",
      html: `
        <ul>
          <li><strong>Histórico</strong>: criado pela Acorn Computers (Reino Unido) no início dos anos 1980 para o Acorn Archimedes (1987); evoluiu mantendo o foco em eficiência energética e desempenho.</li>
          <li><strong>Aplicações</strong>: smartphones, tablets e wearables; sistemas embarcados em carros (entretenimento, navegação, segurança), dispositivos médicos, eletrodomésticos; IoT; servidores de alto desempenho e nuvem (eficiência e processamento paralelo).</li>
          <li><strong>Tendências com IA</strong>: assistentes virtuais (Siri, Alexa) usam unidades dedicadas para reconhecimento de voz e linguagem natural; processadores de IA incorporam GPUs e TPUs, otimizados para operações matriciais.</li>
          <li><strong>Organização interna</strong>: altamente modular (fabricantes personalizam); CPU, FPU, unidade de memória e controlador de interrupções ligados por barramentos; recursos como pipeline, previsão de ramificação, execução fora de ordem e caches de instruções e dados.</li>
          <li><strong>Simuladores</strong> (QEMU, ARM Development Studio): permitem desenvolver, depurar (rastreamento de instruções, monitoramento de registradores) e validar projetos antes do hardware real; economizam tempo e custo e dão segurança para experimentar. Limite: podem não capturar completamente desempenho e comportamento reais, então testes em hardware físico continuam necessários.</li>
          <li><strong>Raspberry Pi</strong>: placa do tamanho de um cartão de crédito com CPU, RAM, USB, HDMI, Ethernet e GPIO (entrada/saída de propósito geral).</li>
        </ul>
        <div class="caixa prova"><ul><li>ARM = Advanced RISC Machine: eficiência energética e flexibilidade.</li><li>Cortex-A (aplicações/móveis), Cortex-R, Cortex-M (microcontroladores): ver tabela de famílias.</li></ul></div>
        <div class="caixa externo" data-titulo="Complemento (conhecimento geral)"><p>Em geral, Cortex-A = aplicações (smartphones), Cortex-R = tempo real, Cortex-M = microcontroladores; o livro só cita as subcategorias e que atendem a dispositivos móveis, sistemas embarcados e microcontroladores.</p></div>`
    }
  ]
};

registrarRevisao({
  disciplina: "sdm",
  visaoGeral: `<p>Sistemas Digitais e Microprocessadores: sinais e sistemas de numeração, códigos, portas lógicas, álgebra booleana e Karnaugh (U1); circuitos combinacionais e sequenciais, latches, flip-flops, contadores e 555 (U2); arquitetura de microprocessadores e microcontroladores, Von Neumann e Harvard, RISC/MIPS e CISC (U3); Arduino, novas arquiteturas e ARM (U4).</p>`,
  fontes: [
    "HAMI_SIS_DIG_MI_ U1 - Livro Didático.pdf",
    "HAMI_SIS_DIG_MI_ U2 - Livro Didático.pdf",
    "HAMI_SIS_DIG_MI_ U3 - Livro Didático.pdf",
    "HAMI_SIS_DIG_MI_ U4 - Livro Didático.pdf",
    "AulaSD_1.pptx",
    "AulaSD_3.pptx",
    "AulaSD_4.pptx",
    "Arduino.pptx",
    "Regras_booleanas.pptx",
    "Atividade_avaliativa.pdf"
  ],
  modulos: [MOD_U1, MOD_U2, MOD_U3, MOD_U4]
});
})();
