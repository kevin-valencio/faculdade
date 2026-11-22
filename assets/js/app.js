/* Plataforma de revisão: renderização das páginas de revisão e de atividades.
   O conteúdo vem de conteudo/<sigla>/revisao.js e conteudo/<sigla>/atividades.js
   (formato descrito em conteudo/FORMATO.md). */
(function () {
  "use strict";

  var ROTULOS_CAIXA = {
    definicao: "Definição",
    prova: "Atenção para a prova",
    exemplo: "Exemplo",
    nota: "Observação",
    externo: "Complemento externo"
  };
  var LETRAS = "abcdefghij";

  /* ---------- utilitários ---------- */
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") e.className = attrs[k];
        else e.setAttribute(k, attrs[k]);
      });
    }
    if (html !== undefined && html !== null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function slug(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "item";
  }
  function idsUnicos() {
    var usados = {};
    return function (id, base) {
      var v = slug(id || base), n = 2, f = v;
      while (usados[f]) f = v + "-" + n++;
      usados[f] = true;
      return f;
    };
  }

  /* Ajustes no HTML de conteúdo: título das caixas e rolagem das tabelas. */
  function realcarConteudo(raiz) {
    raiz.querySelectorAll(".caixa").forEach(function (c) {
      if (c.querySelector(":scope > .caixa-titulo")) return;
      var tipo = Object.keys(ROTULOS_CAIXA).filter(function (t) { return c.classList.contains(t); })[0];
      var titulo = c.getAttribute("data-titulo") || ROTULOS_CAIXA[tipo] || "";
      if (titulo) c.insertBefore(el("div", { class: "caixa-titulo" }, esc(titulo)), c.firstChild);
    });
    raiz.querySelectorAll("table").forEach(function (t) {
      if (t.parentElement.classList.contains("tabela-rolagem")) return;
      var w = el("div", { class: "tabela-rolagem" });
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
    });
  }

  /* ---------- estrutura comum ---------- */
  var params = new URLSearchParams(location.search);
  var sigla = (params.get("d") || "").toLowerCase();
  var disc = window.DISCIPLINAS[sigla];
  var pagina = document.body.getAttribute("data-pagina"); // "revisao" | "atividades"

  function montarNavbar() {
    var nav = document.getElementById("navbar");
    var links = "";
    if (disc) {
      links =
        '<a class="nav-aba' + (pagina === "revisao" ? " ativa" : "") + '" href="revisao.html?d=' + sigla + '">Revisão</a>' +
        '<a class="nav-aba' + (pagina === "atividades" ? " ativa" : "") + '" href="atividades.html?d=' + sigla + '">Atividades<span class="longo"> resolvidas</span></a>';
    }
    nav.innerHTML =
      '<div class="nav-interno">' +
      '<a class="nav-menu" href="index.html" title="Voltar ao menu principal">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" fill="currentColor"/></svg>' +
      '<span>Menu</span></a>' +
      (disc ? '<span class="nav-disciplina">' + esc(disc.nome) + '</span>' : "") +
      '<div class="nav-abas">' + links + '</div>' +
      '<button class="nav-indice" type="button" aria-controls="indice" aria-expanded="false">Índice</button>' +
      "</div>";

    var btn = nav.querySelector(".nav-indice");
    var aside = document.getElementById("indice");
    var veu = document.getElementById("veu");
    function fechar() { document.body.classList.remove("indice-aberto"); btn.setAttribute("aria-expanded", "false"); }
    btn.addEventListener("click", function () {
      var aberto = document.body.classList.toggle("indice-aberto");
      btn.setAttribute("aria-expanded", aberto ? "true" : "false");
    });
    veu.addEventListener("click", fechar);
    aside.addEventListener("click", function (e) { if (e.target.closest("a")) fechar(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") fechar(); });
  }

  function aviso(titulo, texto) {
    var main = document.getElementById("conteudo");
    main.innerHTML = "";
    main.appendChild(el("div", { class: "aviso" },
      "<h2>" + esc(titulo) + "</h2><p>" + texto + "</p>" +
      '<p><a class="botao" href="index.html">Voltar ao menu principal</a></p>'));
    document.body.classList.add("sem-indice");
  }

  function carregarConteudo(arquivo) {
    var s = document.createElement("script");
    s.src = "conteudo/" + sigla + "/" + arquivo + ".js";
    s.onerror = function () {
      aviso("Conteúdo não encontrado",
        "O arquivo <code>conteudo/" + esc(sigla) + "/" + esc(arquivo) + ".js</code> ainda não foi gravado.");
    };
    document.body.appendChild(s);
  }

  /* Destaca no índice o item visível na tela. */
  function ativarScrollspy(seletorAlvos) {
    if (!("IntersectionObserver" in window)) return;
    var links = {};
    document.querySelectorAll("#indice a[href^='#']").forEach(function (a) {
      links[a.getAttribute("href").slice(1)] = a;
    });
    var atual = null;
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        var a = links[en.target.id];
        if (!a) return;
        if (atual) atual.classList.remove("ativo");
        a.classList.add("ativo");
        atual = a;
      });
    }, { rootMargin: "-80px 0px -70% 0px" });
    document.querySelectorAll(seletorAlvos).forEach(function (t) { obs.observe(t); });
  }

  function cabecalho(subtitulo, botaoHtml) {
    var h = el("header", { class: "cabecalho" });
    h.innerHTML =
      '<p class="sobretitulo">' + esc(subtitulo) + "</p>" +
      "<h1>" + esc(disc.nomeCompleto) + "</h1>" +
      '<div class="cabecalho-acoes">' + botaoHtml +
      '<a class="botao secundario" href="index.html">Menu principal</a></div>';
    return h;
  }

  /* ---------- página de revisão ---------- */
  window.registrarRevisao = function (dados) {
    if (pagina !== "revisao" || !dados) return;
    var main = document.getElementById("conteudo");
    var aside = document.getElementById("indice");
    var novoId = idsUnicos();
    var modulos = (dados.modulos || []).map(function (m, i) {
      return {
        id: novoId(m.id, "modulo-" + (i + 1)),
        titulo: m.titulo || "Módulo " + (i + 1),
        intro: m.intro || "",
        topicos: (m.topicos || []).map(function (t, j) {
          return { id: novoId(t.id, t.titulo || "topico-" + (i + 1) + "-" + (j + 1)), titulo: t.titulo || "Tópico", html: t.html || "", fonte: t.fonte || "" };
        })
      };
    });
    var todos = [];
    modulos.forEach(function (m) { m.topicos.forEach(function (t) { todos.push({ t: t, m: m }); }); });

    main.innerHTML = "";
    main.appendChild(cabecalho("Revisão para a prova",
      '<a class="botao" href="atividades.html?d=' + sigla + '">Ver atividades resolvidas</a>'));

    /* visão geral */
    var vg = el("section", { class: "visao-geral", id: "visao-geral" });
    var listaMod = modulos.map(function (m) {
      return '<li><a href="#' + m.id + '">' + esc(m.titulo) + '</a> <span class="contagem">' +
        m.topicos.length + (m.topicos.length === 1 ? " tópico" : " tópicos") + "</span></li>";
    }).join("");
    vg.innerHTML = "<h2>Visão geral</h2>" + (dados.visaoGeral || "") +
      (modulos.length ? '<ol class="lista-modulos">' + listaMod + "</ol>" : "") +
      (dados.fontes && dados.fontes.length
        ? '<details class="fontes"><summary>Materiais analisados (' + dados.fontes.length + ")</summary><ul>" +
          dados.fontes.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></details>"
        : "");
    main.appendChild(vg);

    /* módulos e tópicos */
    var idx = 0;
    modulos.forEach(function (m) {
      var sec = el("section", { class: "modulo", id: m.id });
      sec.appendChild(el("h2", { class: "modulo-titulo" }, esc(m.titulo)));
      if (m.intro) sec.appendChild(el("div", { class: "modulo-intro conteudo-html" }, m.intro));
      m.topicos.forEach(function (t) {
        var ant = todos[idx - 1], prox = todos[idx + 1];
        idx++;
        var art = el("article", { class: "topico", id: t.id });
        art.appendChild(el("h3", null, esc(t.titulo)));
        art.appendChild(el("div", { class: "conteudo-html" }, t.html));
        var rod = '<footer class="topico-rodape">' +
          (t.fonte ? '<p class="fonte">Fonte: ' + esc(t.fonte) + "</p>" : "") +
          '<nav class="topico-nav">' +
          (ant ? '<a href="#' + ant.t.id + '" class="ant">&larr; ' + esc(ant.t.titulo) + "</a>" : "<span></span>") +
          '<a href="#topo" class="topo">Topo</a>' +
          (prox ? '<a href="#' + prox.t.id + '" class="prox">' + esc(prox.t.titulo) + " &rarr;</a>" : "<span></span>") +
          "</nav></footer>";
        art.insertAdjacentHTML("beforeend", rod);
        sec.appendChild(art);
      });
      main.appendChild(sec);
    });

    main.appendChild(el("div", { class: "fim-pagina" },
      '<a class="botao" href="atividades.html?d=' + sigla + '">Ver atividades resolvidas</a>' +
      '<a class="botao secundario" href="index.html">Menu principal</a>'));

    /* índice */
    aside.innerHTML = '<p class="indice-titulo">Índice</p><ul class="indice-lista">' +
      '<li><a href="#visao-geral">Visão geral</a></li>' +
      modulos.map(function (m) {
        return '<li class="indice-modulo"><a href="#' + m.id + '">' + esc(m.titulo) + "</a>" +
          (m.topicos.length ? "<ul>" + m.topicos.map(function (t) {
            return '<li><a href="#' + t.id + '">' + esc(t.titulo) + "</a></li>";
          }).join("") + "</ul>" : "") + "</li>";
      }).join("") + "</ul>";

    realcarConteudo(main);
    ativarScrollspy("#visao-geral, .modulo, .topico");
    if (location.hash) { var alvo = document.getElementById(location.hash.slice(1)); if (alvo) alvo.scrollIntoView(); }
  };

  /* ---------- página de atividades ---------- */
  window.registrarAtividades = function (dados) {
    if (pagina !== "atividades" || !dados) return;
    var main = document.getElementById("conteudo");
    var aside = document.getElementById("indice");
    var novoId = idsUnicos();
    var grupos = (dados.grupos || []).map(function (g, i) {
      return { id: novoId(g.id, g.titulo || "grupo-" + (i + 1)), titulo: g.titulo || "Atividade " + (i + 1), fonte: g.fonte || "", questoes: g.questoes || [] };
    });
    var total = grupos.reduce(function (s, g) { return s + g.questoes.length; }, 0);

    main.innerHTML = "";
    main.appendChild(cabecalho("Atividades resolvidas",
      '<a class="botao" href="revisao.html?d=' + sigla + '">Ver revisão</a>'));

    var resumo = el("section", { class: "visao-geral", id: "visao-geral" });
    resumo.innerHTML = total
      ? "<h2>Visão geral</h2><p>" + total + (total === 1 ? " questão" : " questões") + " em " + grupos.length +
        (grupos.length === 1 ? " atividade" : " atividades") + ". Respostas e resoluções visíveis.</p>" +
        '<ol class="lista-modulos">' + grupos.map(function (g) {
          return '<li><a href="#' + g.id + '">' + esc(g.titulo) + '</a> <span class="contagem">' + g.questoes.length +
            (g.questoes.length === 1 ? " questão" : " questões") + "</span></li>";
        }).join("") + "</ol>"
      : "<h2>Visão geral</h2><p>Nenhuma atividade foi encontrada nos materiais desta disciplina.</p>";
    main.appendChild(resumo);

    grupos.forEach(function (g) {
      var sec = el("section", { class: "modulo", id: g.id });
      sec.appendChild(el("h2", { class: "modulo-titulo" }, esc(g.titulo)));
      if (g.fonte) sec.appendChild(el("p", { class: "grupo-fonte" }, "Arquivo: " + esc(g.fonte)));
      g.questoes.forEach(function (q, i) {
        var num = q.numero || i + 1;
        var qid = g.id + "-q" + num;
        var art = el("article", { class: "questao", id: qid });
        var resp = String(q.resposta || "").trim().toLowerCase().replace(/[^a-z]/g, "").charAt(0);
        var h = '<header class="questao-cab"><h3>Questão ' + esc(num) + "</h3>" +
          (resp ? '<span class="selo-resposta">Resposta: ' + resp.toUpperCase() + "</span>" : "") + "</header>";
        h += '<div class="enunciado conteudo-html">' + (q.enunciado || "") + "</div>";
        if (q.alternativas && q.alternativas.length) {
          h += '<ol class="alternativas">' + q.alternativas.map(function (alt, k) {
            var letra = LETRAS.charAt(k);
            var correta = letra === resp;
            var com = q.comentarios && q.comentarios[letra];
            return '<li class="' + (correta ? "correta" : "") + '">' +
              '<span class="letra">' + letra + ")</span>" +
              '<div class="alt-texto">' + alt +
              (com ? '<div class="alt-comentario">' + com + "</div>" : "") + "</div>" +
              (correta ? '<span class="marca">Correta</span>' : "") + "</li>";
          }).join("") + "</ol>";
        }
        var altCorreta = resp && q.alternativas ? q.alternativas[LETRAS.indexOf(resp)] : "";
        if (resp || q.respostaFinal) {
          h += '<div class="resposta-final"><div class="rf-rotulo">Resposta final</div><div class="conteudo-html">' +
            (resp ? "<p><strong>" + resp + ")</strong> " + (altCorreta || "") + "</p>" : "") +
            (q.respostaFinal || "") + "</div></div>";
        }
        if (q.resolucao) h += '<div class="resolucao"><div class="res-rotulo">Resolução</div><div class="conteudo-html">' + q.resolucao + "</div></div>";
        if (q.limitacao) h += '<div class="caixa nota" data-titulo="Limitação"><p>' + q.limitacao + "</p></div>";
        if (q.fonte) h += '<p class="fonte">Fonte: ' + esc(q.fonte) + "</p>";
        art.innerHTML = h;
        sec.appendChild(art);
      });
      main.appendChild(sec);
    });

    main.appendChild(el("div", { class: "fim-pagina" },
      '<a class="botao" href="revisao.html?d=' + sigla + '">Ver revisão</a>' +
      '<a class="botao secundario" href="index.html">Menu principal</a>'));

    aside.innerHTML = '<p class="indice-titulo">Atividades</p><ul class="indice-lista">' +
      '<li><a href="#visao-geral">Visão geral</a></li>' +
      grupos.map(function (g) {
        return '<li class="indice-modulo"><a href="#' + g.id + '">' + esc(g.titulo) +
          ' <span class="contagem">' + g.questoes.length + "</span></a></li>";
      }).join("") + "</ul>";

    realcarConteudo(main);
    ativarScrollspy("#visao-geral, .modulo");
    if (location.hash) { var alvo = document.getElementById(location.hash.slice(1)); if (alvo) alvo.scrollIntoView(); }
  };

  /* ---------- inicialização ---------- */
  montarNavbar();
  if (!disc) {
    aviso("Disciplina não encontrada", "Escolha uma disciplina no menu principal.");
  } else {
    document.body.setAttribute("data-disciplina", sigla);
    document.title = (pagina === "atividades" ? "Atividades — " : "Revisão — ") + disc.nome;
    carregarConteudo(pagina === "atividades" ? "atividades" : "revisao");
  }

  /* botão voltar ao topo */
  var topo = document.getElementById("voltar-topo");
  if (topo) {
    window.addEventListener("scroll", function () {
      topo.classList.toggle("visivel", window.scrollY > 600);
    }, { passive: true });
    topo.addEventListener("click", function () { window.scrollTo(0, 0); });
  }
})();
