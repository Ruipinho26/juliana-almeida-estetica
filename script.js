/* =========================================================
   JULIANA ALMEIDA ESTÉTICA — conteúdo + motor do site
   =========================================================

   ⚠  EDITE APENAS O OBJETO "CONTEUDO" ABAIXO.
      Não altere nada a partir da linha "MOTOR DE RENDERIZAÇÃO".

   Dois truques de escrita:
     *palavra*   →  fica em itálico rose gold (destaque)
     \n          →  muda de linha
   ========================================================= */

const CONTEUDO = {

  /* ─────────────────────────────────────────────────────────
     1. MARCA
     ───────────────────────────────────────────────────────── */
  marca: {
    nome:   "Juliana Almeida",
    sub:    "Estética",
    slogan: "Cuidar de ti. Realçar a tua essência.",
    // Para usar o logótipo real: guarde a imagem em media/logo.png
    // e escreva aqui  logo: "media/logo.png"
    logo:   ""
  },

  /* ─────────────────────────────────────────────────────────
     2. CONTACTOS  ← A PREENCHER
     Campos vazios ("") aparecem no site como "a preencher".
     ───────────────────────────────────────────────────────── */
  contacto: {
    telefone:   "915 435 419",
    whatsapp:   "351915435419",   // confirmado por ela: é o mesmo número do telemóvel
    email:      "julianaalmeida13.05.85@gmail.com",
    morada:     "Rua Santo António, n.º 1087",
    localidade: "4505-520 Lobão · Santa Maria da Feira",
    // \n muda de linha. Fonte: cartaz "Horário de atendimento" que ela enviou.
    horario:    "Seg a Sex · 9h – 20h\nSábado · 8h – 18h\nPausas · 13h – 14h e 16h30 – 17h"
  },

  redes: {
    instagram: "https://www.instagram.com/juliana254964",
    facebook:  "https://www.facebook.com/profile.php?id=61591956296550"
  },

  /* ─────────────────────────────────────────────────────────
     3. PREÇOS
     mostrarPrecos: false  →  esconde a coluna de preços toda
     ───────────────────────────────────────────────────────── */
  mostrarPrecos: true,
  precoVazio: "—",     // o que aparece enquanto o preço não estiver preenchido

  /* ─────────────────────────────────────────────────────────
     4. MENU DE NAVEGAÇÃO
     ───────────────────────────────────────────────────────── */
  nav: [
    { texto: "Áreas",       ancora: "#areas" },
    { texto: "Tratamentos", ancora: "#tratamentos" },
    { texto: "Sobre",       ancora: "#sobre" },
    { texto: "Contacto",    ancora: "#contacto" }
  ],
  navCta: "Marcar",

  /* ─────────────────────────────────────────────────────────
     5. BANNER DE ENTRADA (hero)
     ───────────────────────────────────────────────────────── */
  hero: {
    etiqueta: "Estética profissional · Nível 4",
    titulo:   "Cuidar de ti.\nRealçar a tua *essência.*",
    lead:     "Tratamentos de rosto e corpo, epilação, mãos e pés, sobrancelhas e pestanas — com avaliação personalizada, produtos profissionais e o tempo que a tua pele merece.",
    btnPrincipal: { texto: "Ver tratamentos", ancora: "#tratamentos" },
    btnSecundario:{ texto: "Marcar",          ancora: "#contacto" }
  },

  /* ─────────────────────────────────────────────────────────
     6. TIRA ESCURA DE CONFIANÇA
     ───────────────────────────────────────────────────────── */
  confianca: [
    "Formação de nível 4",
    "Avaliação personalizada",
    "Higiene e desinfeção rigorosas",
    "Produtos profissionais"
  ],

  /* ─────────────────────────────────────────────────────────
     7. ÁREAS + TRATAMENTOS  ← ELA CORTA O QUE NÃO FAZ
     Apague livremente linhas ou blocos inteiros.
     Cada tratamento: { nome: "...", preco: "" }
     Preencha o preço assim →  preco: "35 €"
     Cores possíveis: facial, corpo, epil, maos, pes, olhar, tec
     ───────────────────────────────────────────────────────── */
  areas: [
    {
      cor: "facial",
      nome: "Tratamentos faciais",
      resumo: "Limpeza, hidratação e equilíbrio, ajustados ao teu tipo de pele.",
      servicos: [
        { nome: "Limpeza de pele",                          preco: "48 €" },
        { nome: "Higienização e esfoliação",                preco: "28 €" },
        { nome: "Tratamento de hidratação",                 preco: "35 €" },
        { nome: "Tratamento para pele oleosa",              preco: "40 €" },
        { nome: "Tratamento para pele seca ou desidratada", preco: "sob consulta" },
        { nome: "Máscara facial",                           preco: "+10 €" },
        { nome: "Massagem facial",                          preco: "30 €" },
        { nome: "Tratamento de rosto com equipamento",      preco: "incluído" }
      ]
    },
    {
      cor: "corpo",
      nome: "Massagens e corpo",
      resumo: "Do relaxamento profundo ao trabalho de contorno e drenagem.",
      servicos: [
        { nome: "Massagem localizada · 30 min", preco: "25 €" },
        { nome: "Massagem de relaxamento",      preco: "40 €" },
        { nome: "Massagem modeladora",          preco: "40 €" },
        // Ela só faz drenagem às pernas — não é drenagem de corpo inteiro.
        // Por isso o preço NÃO é o dos 40 € da pesquisa (esse era para 60 min de
        // corpo inteiro). O comparável direto de pernas é 25 €/45min em SJM.
        { nome: "Drenagem linfática manual · pernas", preco: "30 €" },
        { nome: "Tratamento de estética corporal", preco: "40 €" },
        { nome: "Esfoliação corporal",          preco: "+15 €" },
        { nome: "Hidratação corporal",          preco: "+15 €" },
        { nome: "Envolvimento corporal",        preco: "sob consulta" }
      ]
    },
    {
      cor: "epil",
      nome: "Epilação",
      resumo: "Cera quente ou morna, com preparação e cuidado pós-epilação.",
      servicos: [
        { nome: "Buço",             preco: "5 €" },
        { nome: "Axilas",           preco: "7 €" },
        { nome: "Virilha simples",  preco: "8 €" },
        { nome: "Meia perna",       preco: "10 €" },
        { nome: "Virilha cavada",   preco: "12 €" },
        { nome: "Braços",           preco: "14 €" },
        { nome: "Rosto completo",   preco: "15 €" },
        { nome: "Perna inteira",    preco: "16 €" },
        { nome: "Virilha integral", preco: "22 €" }
      ]
    },
    {
      cor: "maos",
      nome: "Mãos e unhas",
      resumo: "Unhas tratadas, cutículas cuidadas e acabamento impecável.",
      servicos: [
        { nome: "Esmaltação",                    preco: "8 €" },
        { nome: "Manicure tradicional",          preco: "12 €" },
        { nome: "Manicure com verniz gel",       preco: "25 €" },
        { nome: "Remoção de verniz gel",         preco: "8 €" },
        { nome: "Cuidado das cutículas",         preco: "incluído" },
        { nome: "Tratamento e cuidado das unhas",preco: "sob consulta" }
      ]
    },
    {
      cor: "pes",
      nome: "Pés",
      resumo: "Pedicure completa, com esfoliação e hidratação a sério.",
      servicos: [
        { nome: "Cuidado das unhas dos pés",         preco: "15 €" },
        { nome: "Esfoliação e hidratação · spa dos pés", preco: "25 €" },
        { nome: "Pedicure",                          preco: "30 €" },
        { nome: "Cuidados estéticos da pele dos pés",preco: "35 €" },
        { nome: "Pedicure com verniz gel",           preco: "38 €" }
      ]
    },
    {
      cor: "olhar",
      nome: "Sobrancelhas e pestanas",
      resumo: "O desenho certo muda o olhar — e o rosto inteiro.",
      servicos: [
        { nome: "Coloração de sobrancelhas",          preco: "10 €" },
        { nome: "Design e modelação de sobrancelhas", preco: "12 €" },
        { nome: "Design + coloração",                 preco: "20 €" },
        { nome: "Coloração de pestanas",              preco: "incluído" },
        { nome: "Cuidados estéticos das sobrancelhas",preco: "sob consulta" }
      ]
    },
    {
      cor: "tec",
      nome: "Equipamentos estéticos",
      resumo: "O aparelho que uso como complemento, quando o tratamento o justifica.",
      servicos: [
        { nome: "Alta frequência", preco: "incluída" }
      ]
    }
  ],

  /* Cabeçalhos das duas secções de serviços */
  areasHead: {
    kicker: "O que faço",
    titulo: "Sete áreas, um mesmo *cuidado.*",
    sub:    "Cada tratamento começa por uma avaliação da pele e termina com aconselhamento para casa."
  },
  menuHead: {
    kicker: "Tratamentos",
    titulo: "Menu de *tratamentos*",
    sub:    "Escolhe o teu e fala comigo — respondo com disponibilidade e duração."
  },
  menuNota: "Alguns tratamentos podem exigir avaliação prévia ou estar sujeitos a contraindicações. Em caso de dúvida, falamos antes de marcar.",
  menuCta:  "Marcar",

  /* ─────────────────────────────────────────────────────────
     8. SOBRE
     ───────────────────────────────────────────────────────── */
  sobre: {
    kicker: "A profissional",
    titulo: "A pele de cada pessoa\nconta uma *história.*",
    texto:  "Sou esteticista com formação de nível 4 e trabalho a partir de uma ideia simples: nenhum tratamento resulta se não for escolhido para a pele que tenho à frente. Por isso, começo sempre por avaliar — tipo de pele, estado, rotina, o que já se usou e o que não correu bem.\n\nDepois disso, o tratamento é só metade do trabalho. A outra metade é o que levas para casa: os produtos certos, os gestos certos e a paciência de perceber que a pele responde ao longo do tempo, não numa sessão.",
    tags: ["Avaliação personalizada", "Produtos profissionais", "Aconselhamento para casa"]
  },

  /* Caixa de competências (ao lado do texto "Sobre") */
  competencias: {
    titulo: "Como trabalho",
    lista: [
      "Avaliação estética da pele e identificação do tipo e estado",
      "Escolha de cosméticos adequados a cada caso",
      "Aconselhamento de cuidados domiciliários",
      "Higienização e desinfeção rigorosa de todo o material",
      "Ficha de cliente e registo de todos os tratamentos",
      "Cumprimento das regras de higiene, segurança e saúde",
      "Aconselhamento sobre contraindicações e encaminhamento para profissional de saúde quando necessário"
    ]
  },

  /* ─────────────────────────────────────────────────────────
     9. CONTACTO
     ───────────────────────────────────────────────────────── */
  contactoHead: {
    kicker: "Marcações",
    titulo: "Vamos *falar?*",
    sub:    "Marca por WhatsApp, telefone ou Instagram — o que for mais fácil para ti."
  },

  /* ─────────────────────────────────────────────────────────
     10. RODAPÉ
     ───────────────────────────────────────────────────────── */
  rodape: {
    nota:  "© 2026 · Juliana Almeida Estética",
    legal: "Os tratamentos apresentados respeitam a formação da profissional, as contraindicações de cada cliente e as regras de higiene e segurança aplicáveis. Não substituem consulta, diagnóstico ou tratamento médico."
  }
};


/* =========================================================
   ⚠  MOTOR DE RENDERIZAÇÃO — não é preciso editar daqui para baixo
   ========================================================= */
(function () {
  "use strict";

  var C = CONTEUDO;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- utilitários ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  // escapa + aplica *destaque* e quebras de linha
  function fmt(s) {
    return esc(s)
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br>");
  }
  function el(id) { return document.getElementById(id); }
  function vazio(v) { return !v || !String(v).trim(); }
  // devolve o valor ou uma marca "a preencher"
  function ouTodo(v) { return vazio(v) ? '<span class="todo">a preencher</span>' : esc(v); }

  /* ---------- WhatsApp ---------- */
  var WA = String(C.contacto.whatsapp || "").replace(/\D/g, "");
  function waHref(assunto) {
    if (!WA) return "#contacto";
    var t = assunto
      ? "Olá! Gostaria de marcar: " + assunto
      : "Olá! Gostaria de marcar um tratamento.";
    return "https://wa.me/" + WA + "?text=" + encodeURIComponent(t);
  }
  function waAttrs() { return WA ? ' target="_blank" rel="noopener"' : ""; }

  /* ---------- ícones ---------- */
  var ICO = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5l-.57-.02c-.2 0-.52.08-.8.38s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.34M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.49-8.42"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg>',
    tel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 3h3l1.5 4.5-2 1.5a13 13 0 0 0 6 6l1.5-2L21 14.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z"/></svg>'
  };

  /* ---------- marca (SVG do monograma, ou logótipo real) ---------- */
  function markHTML() {
    if (!vazio(C.marca.logo)) {
      return '<span class="brand__mark"><img src="' + esc(C.marca.logo) + '" alt=""></span>';
    }
    return '<span class="brand__mark">' +
      '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">' +
        '<path d="M24 4.5 A19.5 19.5 0 1 1 9.6 37" stroke="url(#rg)" stroke-width="1.3" stroke-linecap="round"/>' +
        '<path d="M31 43.5 A19.5 19.5 0 0 0 42 31" stroke="url(#rg)" stroke-width="1.3" stroke-linecap="round" opacity=".6"/>' +
        '<text x="24" y="31.5" text-anchor="middle" fill="url(#rg)"' +
          ' font-family="Bodoni MT,Didot,Playfair Display,Georgia,serif" font-size="19">JA</text>' +
      '</svg></span>';
  }
  function brandHTML() {
    return markHTML() +
      '<span class="brand__txt">' +
        '<span class="brand__nome">' + esc(C.marca.nome) + '</span>' +
        '<span class="brand__sub">' + esc(C.marca.sub) + '</span>' +
      '</span>';
  }

  /* ---------- 1. marca no cabeçalho e rodapé ---------- */
  el("brand-head").innerHTML = brandHTML();
  el("brand-foot").innerHTML = brandHTML();
  el("brand-head").setAttribute("aria-label", C.marca.nome + " — início");

  /* ---------- 2. navegação ---------- */
  var navLinks = C.nav.map(function (n) {
    return '<a href="' + esc(n.ancora) + '">' + esc(n.texto) + '</a>';
  }).join("");
  el("nav-desktop").innerHTML = navLinks;
  el("nav-mobile").innerHTML =
    C.nav.map(function (n) {
      return '<a href="' + esc(n.ancora) + '" data-close>' + esc(n.texto) + '</a>';
    }).join("") +
    '<a class="btn btn--rg" href="#contacto" data-close>' + esc(C.navCta) + "</a>";
  el("cta-head").textContent = C.navCta;

  /* ---------- 3. hero ---------- */
  el("hero-eyebrow").textContent = C.hero.etiqueta;
  el("hero-titulo").innerHTML = String(C.hero.titulo).split("\n")
    .map(function (linha) { return '<span class="l">' + fmt(linha) + "</span>"; }).join("");
  el("hero-lead").innerHTML = fmt(C.hero.lead);
  el("hero-cta").innerHTML =
    '<a class="btn btn--rg" href="' + esc(C.hero.btnPrincipal.ancora) + '">' + esc(C.hero.btnPrincipal.texto) + "</a>" +
    '<a class="link-quiet" href="' + esc(C.hero.btnSecundario.ancora) + '">' + esc(C.hero.btnSecundario.texto) + " &rarr;</a>";
  el("hero-chips").innerHTML = C.areas.slice(0, 4).map(function (a, i) {
    return (i ? "<i></i>" : "") + "<b>" + esc(a.nome) + "</b>";
  }).join("");

  /* ---------- 4. tira de confiança ---------- */
  el("trust-row").innerHTML = C.confianca.map(function (t, i) {
    return (i ? "<i></i>" : "") + "<span>" + esc(t) + "</span>";
  }).join("");

  /* ---------- 5. cabeçalhos de secção ---------- */
  function headHTML(h) {
    return '<p class="kicker">' + esc(h.kicker) + "</p>" +
           "<h2>" + fmt(h.titulo) + "</h2>" +
           '<div class="rule rule--short"><i></i></div>' +
           '<p class="sec__sub">' + fmt(h.sub) + "</p>";
  }
  el("areas-head").innerHTML    = headHTML(C.areasHead);
  el("menu-head").innerHTML     = headHTML(C.menuHead);
  el("contacto-head").innerHTML = headHTML(C.contactoHead);

  /* ---------- 6. grelha de áreas ---------- */
  el("areas-grid").innerHTML = C.areas.map(function (a, i) {
    var n = ("0" + (i + 1)).slice(-2);
    return '<a class="area reveal" href="#tratamentos" style="--c:var(--a-' + esc(a.cor) + ')">' +
      '<span class="area__n">' + n + "</span>" +
      "<h3>" + fmt(a.nome) + "</h3>" +
      "<p>" + fmt(a.resumo) + "</p>" +
      '<span class="area__go">Ver tratamentos &rarr;</span>' +
    "</a>";
  }).join("");

  /* ---------- 7. menu de tratamentos + preços ---------- */
  el("menu-servicos").innerHTML = C.areas.map(function (a, i) {
    var n = ("0" + (i + 1)).slice(-2);

    var linhas = a.servicos.map(function (s) {
      var temPreco = !vazio(s.preco);
      var preco = C.mostrarPrecos
        ? '<span class="mrow__preco' + (temPreco ? "" : " is-vazio") + '">' +
            esc(temPreco ? s.preco : C.precoVazio) + "</span>"
        : "";
      var dots = C.mostrarPrecos ? '<span class="mrow__dots"></span>' : "";
      return "<li>" +
        '<a class="mrow" href="' + waHref(s.nome + " — " + a.nome) + '"' + waAttrs() + '>' +
          '<span class="mrow__nome">' + fmt(s.nome) + "</span>" + dots + preco +
        "</a></li>";
    }).join("");

    return '<article class="mcard reveal" style="--c:var(--a-' + esc(a.cor) + ')">' +
      '<div class="mcard__top"><span class="mcard__n">' + n + "</span><h3>" + fmt(a.nome) + "</h3></div>" +
      '<p class="mcard__sub">' + fmt(a.resumo) + "</p>" +
      '<div class="rule"><i></i></div>' +
      '<ul class="mlist">' + linhas + "</ul>" +
      '<a class="btn btn--ghost btn--sm mcard__cta" href="' + waHref(a.nome) + '"' + waAttrs() + ">" +
        esc(C.menuCta) + "</a>" +
    "</article>";
  }).join("");
  el("menu-nota").textContent = C.menuNota;

  /* ---------- 8. sobre ---------- */
  el("sobre-txt").innerHTML =
    '<p class="kicker">' + esc(C.sobre.kicker) + "</p>" +
    "<h2>" + fmt(C.sobre.titulo) + "</h2>" +
    String(C.sobre.texto).split("\n\n").map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("") +
    '<ul class="sobre__tags">' +
      C.sobre.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
    "</ul>";

  el("sobre-comp").innerHTML =
    "<h3>" + fmt(C.competencias.titulo) + "</h3>" +
    '<div class="rule"><i></i></div>' +
    '<ul class="checks">' +
      C.competencias.lista.map(function (t) { return "<li>" + fmt(t) + "</li>"; }).join("") +
    "</ul>";

  /* ---------- 9. contacto ---------- */
  var ct = C.contacto;
  var morada = [ct.morada, ct.localidade].filter(function (x) { return !vazio(x); }).join(" · ");
  var telHref = String(ct.telefone || "").replace(/[^\d+]/g, "");

  var dl = "";
  dl += "<div><dt>Telefone</dt><dd>" +
        (vazio(ct.telefone) ? ouTodo("") : '<a href="tel:' + esc(telHref) + '">' + esc(ct.telefone) + "</a>") +
        "</dd></div>";
  dl += "<div><dt>Email</dt><dd>" +
        (vazio(ct.email) ? ouTodo("") : '<a href="mailto:' + esc(ct.email) + '">' + esc(ct.email) + "</a>") +
        "</dd></div>";
  dl += "<div><dt>Onde</dt><dd>" + ouTodo(morada) + "</dd></div>";
  // o horário tem várias linhas — usa fmt() para respeitar os \n
  dl += "<div><dt>Horário</dt><dd>" +
        (vazio(ct.horario) ? ouTodo("") : fmt(ct.horario)) +
        "</dd></div>";

  function via(cls, ico, titulo, etiqueta, href, externo) {
    var tag = href ? "a" : "div";
    var attr = href ? ' href="' + href + '"' + (externo ? ' target="_blank" rel="noopener"' : "") : "";
    return "<" + tag + ' class="cvia ' + cls + '"' + attr + ">" +
      '<span class="cvia__ico">' + ico + "</span>" +
      '<span class="cvia__txt"><b>' + titulo + "</b><span>" + esc(etiqueta) + "</span></span>" +
    "</" + tag + ">";
  }

  var vias = "";
  vias += WA
    ? via("cvia--wa", ICO.wa, "Falar no WhatsApp", "resposta mais rápida", waHref(""), true)
    : via("cvia--wa", ICO.wa, ouTodo(""), "whatsapp", "", false);
  vias += vazio(ct.telefone)
    ? via("", ICO.tel, ouTodo(""), "telefone", "", false)
    : via("", ICO.tel, esc(ct.telefone), "telefone", "tel:" + esc(telHref), false);
  vias += vazio(C.redes.instagram)
    ? via("", ICO.ig, ouTodo(""), "instagram", "", false)
    : via("", ICO.ig, "Instagram", "ver o trabalho", esc(C.redes.instagram), true);
  if (!vazio(C.redes.facebook)) {
    vias += via("", ICO.fb, "Facebook", "página", esc(C.redes.facebook), true);
  }

  el("contacto-corpo").innerHTML =
    '<div class="ccard reveal"><dl>' + dl + "</dl></div>" +
    '<div class="cvias reveal">' + vias + "</div>";

  /* ---------- 10. rodapé ---------- */
  el("foot-note").textContent  = C.rodape.nota + " · " + C.marca.slogan;
  el("foot-legal").textContent = C.rodape.legal;

  /* ---------- 11. título e meta da página ---------- */
  document.title = C.marca.nome + " " + C.marca.sub + " — " + C.marca.slogan;

  /* ---------- 12. menu mobile ---------- */
  var burger = el("burger"), mnav = el("mnav");
  function abrir() {
    mnav.classList.add("open");
    mnav.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
  }
  function fechar() {
    mnav.classList.remove("open");
    mnav.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }
  burger.addEventListener("click", function () {
    mnav.classList.contains("open") ? fechar() : abrir();
  });
  mnav.querySelectorAll("[data-close]").forEach(function (n) {
    n.addEventListener("click", fechar);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mnav.classList.contains("open")) fechar();
  });

  /* ---------- 13. cabeçalho sólido no scroll ---------- */
  var head = el("site-head");
  function onScroll() { head.classList.toggle("is-solid", window.scrollY > 40); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 14. animação de entrada ---------- */
  var items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (n) { n.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (n) { io.observe(n); });
  }

  /* ---------- 15. reduced-motion → parar o vídeo (fica a imagem) ---------- */
  if (reduce) {
    var v = document.querySelector(".hero__vid");
    if (v) { try { v.removeAttribute("autoplay"); v.pause(); } catch (e) {} }
  }

  /* ---------- 16. aviso do que falta preencher ---------- */
  var falta = [];
  ["telefone", "whatsapp", "email", "morada", "localidade", "horario"].forEach(function (k) {
    if (vazio(C.contacto[k])) falta.push("contacto." + k);
  });
  if (vazio(C.redes.instagram)) falta.push("redes.instagram");
  var semPreco = 0, total = 0;
  C.areas.forEach(function (a) {
    a.servicos.forEach(function (s) { total++; if (vazio(s.preco)) semPreco++; });
  });
  if (semPreco) falta.push("preços (" + semPreco + " de " + total + " por preencher)");
  if (falta.length && window.console) {
    console.info("%cA preencher no script.js:", "color:#A0654F;font-weight:bold", "\n· " + falta.join("\n· "));
  }
})();
