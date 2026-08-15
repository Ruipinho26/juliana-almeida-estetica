# Juliana Almeida Estética — site

Site de marca em HTML + CSS + JS puro, **sem dependências externas**.
Abre com duplo-clique no `index.html` ou em qualquer alojamento estático.
Funciona offline, sem servidor, sem base de dados.

Design: paleta **rose gold sobre creme** tirada do logótipo, tipografia serifada com
espaçamento largo, e no banner o vídeo da **peónia a abrir** (o mesmo do site_aromas).

---

## Onde se edita tudo

**Todos os textos, serviços, preços e contactos vivem num único sítio:
o objeto `CONTEUDO` no topo do `script.js`.**

1. Abra `script.js` num editor (Bloco de Notas, VS Code…)
2. O `CONTEUDO` está logo no início, dividido em 10 secções numeradas
3. Edite apenas o que está **entre aspas** (`"..."`)
4. Guarde e recarregue o browser (F5)

> ⚠️ **Não** altere nada abaixo da linha `MOTOR DE RENDERIZAÇÃO`.

### Dois truques de escrita

| Truque | Como escrever | Resultado |
|--------|---------------|-----------|
| **Destaque** numa palavra | `a tua *essência.*` | palavra em *itálico rose gold* |
| **Nova linha** num título | `Cuidar de ti.\nRealçar...` | quebra de linha |
| **Novo parágrafo** (só no texto "Sobre") | `...à frente.\n\nDepois disso...` | dois parágrafos |

---

## ✅ Lista do que falta preencher

Estes campos estão vazios de propósito — **não inventei dados**.
Enquanto estiverem vazios, o site mostra *"a preencher"* em itálico nesse sítio.

Em `CONTEUDO.contacto`:

| Campo | Exemplo |
|-------|---------|
| `telefone` | `"912 345 678"` |
| `whatsapp` | `"351912345678"` ← **só dígitos**, com o 351, sem `+` nem espaços |
| `email` | `"geral@julianaalmeida.pt"` |
| `morada` | `"Rua das Flores, 12"` |
| `localidade` | `"Braga"` |
| `horario` | `"Seg – Sex · 9h – 19h · Sáb · 9h – 13h"` |

Em `CONTEUDO.redes`:

| Campo | Exemplo |
|-------|---------|
| `instagram` | `"https://instagram.com/o_nome_dela"` |
| `facebook` | `""` deixa vazio se não tiver — o cartão desaparece |

E os **preços** de cada tratamento (ver secção seguinte).

> 💡 Para ver a lista do que ainda falta: abra o site no Chrome, carregue em `F12`
> e veja o separador **Console** — ele imprime tudo o que está por preencher.

---

## Serviços — cortar o que ela não faz

Os tratamentos estão em `CONTEUDO.areas`, agrupados em **7 áreas**, tal como no PDF
*Esteticista Nível 4*, já podados por ela. São **38 tratamentos**.

**Antes de publicar, apague o que ela não faz.** Cada tratamento é uma linha:

```js
{ nome: "Drenagem linfática manual", preco: "" },
```

Apague a linha inteira (com a vírgula) para o tirar do site.
Para tirar uma área inteira, apague o bloco `{ ... }` todo — desde `{ cor: ...` até
ao `}` correspondente. Os números (01, 02, 03…) refazem-se sozinhos.

> ⚠️ **Importante:** o próprio PDF avisa que o nível 4 não autoriza tudo sem mais nada.
> Alguns tratamentos (equipamentos, lifting de pestanas, drenagem) exigem formação
> específica, equipamento certificado ou condições próprias. Anunciar um serviço
> que não se pode prestar é um problema real — por isso a lista **tem de ser podada
> por ela**, não por mim.

### Preços

Cada tratamento tem `preco: ""`. Enquanto estiver vazio aparece um traço `—`,
para se ver que é um espaço por preencher. Basta escrever o valor:

```js
{ nome: "Limpeza de pele", preco: "35 €" },
```

Duas opções extra, no topo do `CONTEUDO`:

| Campo | O que faz |
|-------|-----------|
| `mostrarPrecos: false` | esconde a coluna de preços toda (fica só a lista de tratamentos) |
| `precoVazio: "sob consulta"` | troca o traço `—` por outro texto |

---

## O logótipo

Neste momento o site desenha um monograma **JA** em SVG (arco + iniciais), a condizer
com a marca. Para usar o **logótipo verdadeiro**:

1. Guarde a imagem em `media/logo.png` (de preferência PNG com fundo transparente)
2. No `script.js`, em `CONTEUDO.marca`, escreva:

```js
logo: "media/logo.png"
```

O logótipo passa a aparecer no cabeçalho e no rodapé, no lugar do monograma.

---

## WhatsApp — como funciona

Assim que preencher `contacto.whatsapp`, **cada tratamento fica clicável**: a cliente
carrega em "Limpeza de pele" e abre-lhe o WhatsApp com a mensagem já escrita —
*"Olá! Gostaria de marcar: Limpeza de pele — Tratamentos faciais"*.

Enquanto o número estiver vazio, esses cliques levam à secção Contacto (não dão erro).

---

## O vídeo do banner

A flor é um vídeo em loop, sem som, que arranca sozinho: `media/hero-bg.webm`
(com `hero-bg.mp4` de reserva para o Safari) e `media/hero-poster.jpg` como imagem
fixa enquanto carrega. Pesa ~1 MB no formato moderno.

Para trocar por outro vídeo, substitua os três ficheiros mantendo os nomes.
O enquadramento está afinado no `styles.css`, em `.hero__vid`:
ao centro em telemóvel, empurrado para a direita em ecrã grande, para o texto
ficar sempre sobre creme limpo. O véu creco por cima é o `.hero__scrim`.

Quem tiver o sistema em "reduzir movimento" vê só a imagem fixa — o vídeo não toca.

---

## Estrutura das páginas

| Secção | O que mostra |
|--------|--------------|
| Banner | Vídeo da peónia, slogan, dois botões e as áreas principais |
| Tira escura | Quatro compromissos (`CONTEUDO.confianca`) |
| Áreas | 7 cartões, um por área de trabalho |
| Menu de tratamentos | Lista completa com preços, estilo menu de spa |
| Sobre | Texto da profissional + caixa "Como trabalho" |
| Contacto | Telefone, email, morada, horário + WhatsApp / telefone / Instagram |
| Rodapé | Lótus, marca e nota legal |

---

## Ficheiros

```
esteticista/
├── index.html      ← estrutura + desenhos SVG (monograma JA, lótus do rodapé)
├── styles.css      ← cores, tipografia, espaçamentos, enquadramento do vídeo
├── script.js       ← CONTEUDO editável + motor de renderização
├── media/
│   ├── hero-bg.webm    ← vídeo da peónia (formato moderno, ~1 MB)
│   ├── hero-bg.mp4     ← o mesmo vídeo, reserva para Safari
│   ├── hero-poster.jpg ← imagem fixa enquanto o vídeo carrega
│   └── favicon.svg     ← ícone do separador do browser
├── README.md       ← este ficheiro
└── Esteticista_Nivel_4_Servicos_e_Competencias.pdf  ← documento de origem
```

---

## Publicar online

Como é um site estático, serve qualquer um destes (todos com plano gratuito):
**Netlify**, **Cloudflare Pages** ou **GitHub Pages** — arrasta-se a pasta e fica online.

Antes de publicar, rever também no `index.html`:
- a linha `<link rel="canonical" href="...">` — pôr o domínio real
- as etiquetas `og:url` e `og:title` — para o preview ao partilhar no WhatsApp/Facebook

---

## Nota legal (já está no rodapé)

O site inclui, discretamente no rodapé, a nota de que os tratamentos respeitam
a formação da profissional, as contraindicações e as regras de higiene e segurança,
e que não substituem consulta médica. Vale a pena mantê-la.
