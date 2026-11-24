# Formato dos arquivos de conteúdo da plataforma de revisão

A plataforma é HTML/CSS/JS estático, aberta direto pelo navegador (file://, sem servidor).
Por isso o conteúdo NÃO é JSON nem HTML solto: cada arquivo é um `.js` que chama uma função
de registro com um objeto. Não é preciso mexer em nenhum outro arquivo da plataforma.

## Onde gravar

| Disciplina | Sigla | Pasta |
|---|---|---|
| Fundamentos de IA | `fia` | `sis/conteudo/fia/` |
| Projeto de Software | `ps` | `sis/conteudo/ps/` |
| Sistemas Digitais e Microprocessadores | `sdm` | `sis/conteudo/sdm/` |

Caminho no computador: `C:\Users\Kevin\Desktop\Estudos\Faculdade\sis\conteudo\<sigla>\`

Dois arquivos por disciplina, com estes nomes exatos:

- `revisao.js` — conteúdo da página de revisão
- `atividades.js` — atividades resolvidas

Imagens (opcional): `sis/conteudo/<sigla>/img/arquivo.png`, referenciadas no HTML como
`<img src="conteudo/<sigla>/img/arquivo.png" alt="...">` (caminho relativo à pasta `sis`).

Codificação: UTF-8. A plataforma é aberta só depois que os dois arquivos existirem; se faltar
algum, a página mostra um aviso no lugar.

## Regras de sintaxe (importante)

- Textos com HTML vão entre crases (template literal): `` `...` ``.
- Dentro desses textos NÃO use crase (`` ` ``) nem a sequência `${`. Se precisar, escreva
  `\`` e `\${`.
- Barra invertida literal (ex.: caminhos, LaTeX) deve ser escrita `\\`.
- Ids: só letras minúsculas, números e hífen, únicos no arquivo (ex.: `u1-agentes-inteligentes`).
- O arquivo precisa ser JavaScript válido. Teste com `node --check revisao.js` se possível.

## 1. revisao.js

```js
registrarRevisao({
  disciplina: "fia",                       // sigla
  visaoGeral: `<p>Parágrafo curto com os assuntos da disciplina.</p>`,
  fontes: [                                // materiais analisados (aparecem na visão geral)
    "HAMI_FUN_INT_AR_ U1 - Livro Didático.pdf",
    "Aula 01 - Introdução a Inteligencia Artificial (1).pptx"
  ],
  modulos: [
    {
      id: "u1",
      titulo: "Unidade 1 — Título da unidade",
      intro: `<p>Opcional: uma ou duas frases.</p>`,
      topicos: [
        {
          id: "u1-agentes",
          titulo: "Agentes inteligentes",
          fonte: "U1 - Livro Didático, Seção 1.2",   // opcional, mostrado no fim do tópico
          html: `
            <dl class="campos">
              <dt>Conceito</dt><dd>...</dd>
              <dt>Características</dt><dd><ul><li>...</li></ul></dd>
              <dt>Como funciona</dt><dd>...</dd>
            </dl>
            <div class="caixa exemplo"><p>...</p></div>
            <div class="caixa prova"><ul><li>...</li></ul></div>
          `
        }
      ]
    }
  ]
});
```

O índice lateral, a visão geral por módulo, a navegação anterior/próximo entre tópicos e os
botões de menu/atividades são gerados automaticamente a partir de `modulos` e `topicos`.

## 2. atividades.js

```js
registrarAtividades({
  disciplina: "fia",
  grupos: [
    {
      id: "u2-atividade-aprendizagem",
      titulo: "U2 — Atividade de Aprendizagem",
      fonte: "U2 - Atividade de Aprendizagem.txt",   // arquivo de origem
      questoes: [
        {
          // Questão objetiva
          enunciado: `<p>Texto integral do enunciado, incluindo afirmativas I, II... </p>`,
          alternativas: [                      // na ordem a, b, c, d, e
            "texto da alternativa a",
            "texto da alternativa b",
            "texto da alternativa c"
          ],
          resposta: "c",                       // letra correta (destacada automaticamente)
          resolucao: `<p>Raciocínio objetivo, cálculos, etapas.</p>`,
          comentarios: {                       // opcional: por que cada alternativa está certa/errada
            a: "Incorreta: ...",
            b: "Incorreta: ..."
          },
          fonte: "U2 - Livro Didático, Seção 2.1", // base teórica da resposta
          limitacao: ""                        // opcional: enunciado incompleto, figura ausente etc.
        },
        {
          // Questão discursiva / sem alternativas
          enunciado: `<p>...</p>`,
          respostaFinal: `<p>Resposta final destacada.</p>`,
          resolucao: `<p>...</p>`,
          fonte: "..."
        }
      ]
    }
  ]
});
```

- A numeração das questões é automática dentro de cada grupo (use `numero: 5` para forçar).
- `resposta` (letra) é usada em objetivas; `respostaFinal` (HTML) em discursivas. Pode usar
  os dois numa objetiva se quiser destacar também o conteúdo.
- Se a resposta foi corrigida depois do sistema marcar incorreta, diga isso em `resolucao`.
- Se não houver atividades para a disciplina, grave `grupos: []` (a página informa que não há).

## 3. Componentes HTML disponíveis (use dentro de `html`, `intro`, `enunciado`, `resolucao`)

| Componente | Uso |
|---|---|
| `<dl class="campos"><dt>Conceito</dt><dd>...</dd>...</dl>` | Estrutura Conceito / Características / Como funciona. Rótulos livres. |
| `<div class="caixa definicao">` | Definição formal. |
| `<div class="caixa prova">` | Atenção para a prova. |
| `<div class="caixa exemplo">` | Exemplo prático. |
| `<div class="caixa nota">` | Observação, divergência entre fontes. |
| `<div class="caixa externo">` | Complemento de fonte externa (cite a fonte dentro). |
| `<div class="caixa ..." data-titulo="Outro título">` | Troca o título padrão da caixa. |
| `<div class="formula">...</div>` | Fórmula em destaque (texto, use `<sub>`, `<sup>`). |
| `<table>` com `<thead>`/`<tbody>` | Tabelas comparativas (rolagem horizontal automática no celular). |
| `<span class="termo">` | Termo-chave destacado no meio do texto. |
| `<pre><code>...</code></pre>` | Código (escape `<` como `&lt;`). |
| `<h4>` | Subtítulo dentro de um tópico. |
| `<ul>`, `<ol>`, `<strong>`, `<em>`, `<code>`, `<img>` | Normais. |

Não use `<h1>`–`<h3>` (reservados ao layout), estilos inline, scripts ou CSS próprios.

## 4. Resumo rápido (somente PS)

Arquivo `conteudo/ps/resumo.js`, chamando `registrarResumo({ disciplina, visaoGeral, fontes, modulos })`,
com a mesma estrutura de `registrarRevisao` (módulos e tópicos, mesmos componentes). Abre em `resumo.html?d=ps`
(aba "Resumo", habilitada por `resumo: true` em `disciplinas.js`). Tópicos curtos, para releitura antes da prova.
