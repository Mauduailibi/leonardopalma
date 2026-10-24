# Design System — Leonardo Palma

**Referência de direção:** AXIS HAUS — Visual Identity & Website (Behance / axis-haus.webflow.io)
**Documento complementar:** `estrutura-site-leonardo-palma.md` (arquitetura de informação e conteúdo)

---

## 1. Tese de design

O portfólio impresso do Leonardo tem um gesto único: a capa quase preta com a assinatura em branco, e um miolo claro onde a fotografia respira. A referência AXIS HAUS resolve isso de outro jeito — **o preto nunca sai**, e a única fonte de cor no site inteiro é a luz quente que vem de dentro dos próprios projetos.

Isso funciona perfeitamente aqui porque quase toda a fotografia do portfólio do Leonardo é de luz quente sobre fundo escuro: as fitas de LED da Casa Z, o letreiro neon do bar, as sancas do Loft Bear Cave, a fachada da Casa Breeze "adornada com uma miríade de LEDs", o entardecer da Casa Sobre Trapézios. Sobre preto, essas imagens acendem.

**A tese:** o site é uma sala escura. A arquitetura é a única coisa iluminada. Nenhum elemento de interface compete com a fotografia — a interface é feita de linhas de 1px, tipografia clara e cartões de vidro, e some quando a imagem entra.

**O momento assinatura:** cada projeto se materializa. A imagem principal chega como traço — um croqui em linha cor de Aço Corten — e se transforma na obra construída diante do usuário. É a única vez em que a cor de acento aparece com força, e ela conta literalmente o que o escritório faz: transformar desenho em espaço.

### O que herdamos da referência

- Fundo preto absoluto e contínuo, sem alternância de seções claras
- Tipografia display geométrica, peso leve, em tamanhos muito grandes
- Ênfase por tom dentro do mesmo título (parte branca, parte cinza)
- Numeração estrutural `01 / 02 / 03` em corpo grande e tom apagado
- Cartões de vidro sobrepostos à fotografia
- Um cartão invertido (branco) entre cartões escuros, como ponto de foco
- Navegação em pílula, botões brancos arredondados, chips com borda fina
- Metadados técnicos como detalhe de design (coordenadas, ano, escopo, `01/05`)

### O que não copiamos

- **O logotipo.** O Leonardo já tem uma assinatura manuscrita. Ela permanece como marca — é o ativo mais pessoal que ele tem, e vale mais do que um monograma geométrico.
- **A frase manuscrita dos projetos.** A referência não tem esse recurso; o portfólio do Leonardo tem, e ele é o que diferencia o site de qualquer outro estúdio escuro. Mantida e promovida.
- **O acento.** A referência é rigorosamente monocromática. Nós introduzimos o Corten — cor de um material real do repertório dele (os brises da Casa Sobre Trapézios) — reservado quase exclusivamente ao efeito de materialização.
- **A malha de cartões da home.** A referência empilha muitos cartões; com 11 projetos fotográficos fortes, o nosso peso vai para a imagem.

> **Nota de honestidade:** fundo quase preto com um acento quente é hoje um dos clichês de site gerado por IA. A diferença aqui é que a direção foi escolhida por você a partir de uma referência concreta, e o acento vem de um material que existe na obra. Se em algum momento o Corten começar a aparecer em botões, ícones e bordas, ele virou decoração — corte de volta até sobrar só no momento assinatura.

---

## 2. Cor

```css
:root {
  /* Base */
  --void:          #000000;  /* fundo global */
  --carbon:        #0A0B0C;  /* seções que precisam de separação sutil */
  --graphite:      #141517;  /* superfície de cartão */
  --graphite-hi:   #1C1E21;  /* cartão em hover */

  /* Traço */
  --stroke:        rgba(255,255,255,0.10);  /* bordas padrão */
  --stroke-hi:     rgba(255,255,255,0.24);  /* bordas em hover/foco */
  --rule:          rgba(255,255,255,0.06);  /* divisores de lista */

  /* Texto */
  --text:          #FFFFFF;  /* títulos, texto de destaque */
  --text-dim:      #8E9095;  /* corpo de texto */
  --text-mute:     #55575C;  /* numeração, metadados, ênfase apagada */

  /* Inversão */
  --invert-bg:     #FFFFFF;
  --invert-text:   #000000;

  /* Acento — Aço Corten */
  --corten:        #B4522A;  /* traço do croqui, sublinhados, foco */
  --ember:         #F0B27A;  /* halo quente, gradientes de luz */
  --corten-glow:   rgba(180,82,42,0.28);

  /* Vidro */
  --glass:         rgba(255,255,255,0.06);
  --glass-stroke:  rgba(255,255,255,0.14);
  --glass-blur:    20px;
}
```

**Regras de uso**

| Cor | Onde pode aparecer | Onde não pode |
|---|---|---|
| `--corten` | Traço do croqui no efeito assinatura · sublinhado do link ativo · anel de foco do teclado · filete do slide ativo no carrossel | Botões · ícones · fundos de cartão · texto corrido |
| `--ember` | Gradiente de halo atrás do hero · brilho do cursor customizado | Qualquer texto |
| `--invert-bg` | Botões primários · um único cartão de destaque por seção | Fundos de seção |

Proporção-alvo em qualquer tela: **90% preto e cinzas, 9% branco, 1% Corten.**

---

## 3. Tipografia

A referência usa uma grotesca geométrica de traço quase monolinear, com peso leve em corpos grandes — formas muito redondas, `g` de um andar, terminais retos. Três papéis:

```css
:root {
  --font-display: 'Outfit', 'Kumbh Sans', system-ui, sans-serif;
  --font-body:    'Inter Tight', 'Inter', system-ui, sans-serif;
  --font-mono:    'Geist Mono', 'JetBrains Mono', ui-monospace, monospace;
  --font-script:  'Palma Signature', cursive; /* fonte manuscrita do portfólio */
}
```

### Display — `Outfit`
Geométrica variável, gratuita, a mais próxima da referência entre as opções livres. Usada **apenas** em pesos `200` (ExtraLight) e `300` (Light), sempre em corpos ≥ 40px. Nunca em bold, nunca em caixa alta. Tracking negativo: `-0.02em` a `-0.035em` conforme o corpo cresce.

*Alternativa paga, se houver orçamento:* `Sofia Pro Light` ou `Gilroy Light` — mais fiéis ao original.

### Corpo — `Inter Tight`
Neutra, alta legibilidade em cinza sobre preto. Pesos `400` e `500`. Corpo de 15–17px, altura de linha `1.55`, cor `--text-dim`. Nunca justificado — o portfólio impresso justifica, mas em tela sobre fundo escuro isso cria rios de espaço visíveis.

### Utilitário — `Geist Mono`
**Este é o nosso desvio deliberado da referência.** A AXIS HAUS usa a mesma sans para metadados; nós trocamos por uma monoespaçada em caixa alta, corpo pequeno e tracking largo, para: numeração de projetos, coordenadas, ano, área, escopo, contadores de carrossel (`01/05`), rótulos de categoria e o rodapé.

A justificativa é do próprio ofício: prancha técnica, cota, legenda de desenho. Amarra o site ao desenho arquitetônico — e conversa diretamente com o efeito de croqui que abre cada projeto.

### Manuscrita — assinatura
A fonte manuscrita do portfólio, usada em **dois lugares e nada além**:
1. O logotipo (de preferência como SVG, não como fonte, para controle do traço)
2. A frase-conceito de cada projeto

Nunca em navegação, botões, corpo de texto ou títulos de seção.

### Escala

```css
--t-hero:    clamp(3.25rem, 8vw, 7.5rem);    /* 52 → 120px  | display 200 | -0.035em | lh 0.94 */
--t-display: clamp(2.5rem, 5.5vw, 5rem);     /* 40 → 80px   | display 200 | -0.03em  | lh 1.02 */
--t-h2:      clamp(2rem, 3.5vw, 3.25rem);    /* 32 → 52px   | display 300 | -0.02em  | lh 1.1  */
--t-h3:      clamp(1.25rem, 2vw, 1.625rem);  /* 20 → 26px   | display 300 | -0.01em  | lh 1.25 */
--t-body-lg: 1.0625rem;                      /* 17px        | body 400    | lh 1.55  */
--t-body:    0.9375rem;                      /* 15px        | body 400    | lh 1.55  */
--t-small:   0.8125rem;                      /* 13px        | body 400    | lh 1.5   */
--t-mono:    0.6875rem;                      /* 11px        | mono 500    | +0.14em  | uppercase */
--t-numeral: clamp(3rem, 6vw, 5.5rem);       /* 48 → 88px   | display 200 | cor: --text-mute */
--t-script:  clamp(1.5rem, 3vw, 2.5rem);     /* 24 → 40px   | manuscrita  | lh 1.35 */
```

### Ênfase por tom — componente `<SplitTone>`

O recurso mais característico da referência: dentro de um mesmo título, parte das palavras fica branca e parte cinza (`--text-mute`).

```html
<h2 class="split-tone">
  <span class="dim">Arquitetura, interiores</span>
  <span class="lit">e paisagismo</span>
  <span class="dim">em Balneário Camboriú</span>
</h2>
```

Na referência isso é estático. **No nosso site, é animado:** o título entra inteiro em `--text-mute` e as palavras acendem para branco conforme o usuário rola, palavra por palavra, amarrado ao progresso de scroll da seção. É o mesmo recurso da referência, mas ganhando tempo.

---

## 4. Grid, espaço e forma

```css
:root {
  /* Layout */
  --max-w:      1440px;
  --gutter:     24px;
  --margin:     clamp(20px, 4vw, 64px);
  --cols:       12;        /* 6 no tablet, 4 no mobile */

  /* Espaço vertical — escala de 8 */
  --s-1:  8px;   --s-2: 16px;  --s-3: 24px;  --s-4: 32px;
  --s-5:  48px;  --s-6: 64px;  --s-7: 96px;  --s-8: 128px;
  --s-9:  160px; --s-10: 200px;

  --section-y: clamp(96px, 12vh, 200px);  /* respiro entre seções */

  /* Raio */
  --r-sm:  8px;    /* chips, botões pequenos */
  --r-md:  16px;   /* cartões */
  --r-lg:  24px;   /* imagens, cartões grandes */
  --r-xl:  32px;   /* containers de seção com imagem */
  --r-pill: 999px; /* nav, botões primários */
}
```

**Bordas.** Uma única regra: todo cartão e toda imagem recebe `1px solid var(--stroke)`. Sobre preto absoluto, é isso que dá a leitura de camadas — a referência depende inteiramente desse filete.

**Sombra.** Praticamente inexistente. Sobre preto, sombra não aparece; profundidade vem de borda, blur e luminosidade da fotografia. Único caso de sombra: cartões de vidro sobre imagem clara, `0 8px 40px rgba(0,0,0,0.5)`.

**Vidro.**
```css
.glass {
  background: var(--glass);
  border: 1px solid var(--glass-stroke);
  backdrop-filter: blur(var(--glass-blur)) saturate(120%);
  border-radius: var(--r-lg);
}
```
Usado apenas sobre fotografia, nunca sobre fundo preto chapado — sem nada atrás para desfocar, o vidro vira um retângulo cinza sem sentido.

---

## 5. Componentes

### 5.1 Navegação

Barra fixa no topo. Assinatura manuscrita à esquerda, pílula de links centralizada, botão `Iniciar um projeto` à direita.

- Fundo: transparente sobre o hero → `rgba(0,0,0,0.72)` + `backdrop-filter: blur(16px)` após 80px de scroll
- Container dos links: pílula com `1px solid var(--stroke)`
- Item ativo: pílula branca sólida com texto preto, que **desliza** entre os itens (`layoutId` do Framer Motion / FLIP)
- Ao rolar para baixo a nav se recolhe; ao rolar para cima, reaparece
- Mobile: overlay preto full-screen, links em `--t-display`, entrada em stagger de 60ms por item

### 5.2 Botões

| Variante | Estilo | Hover |
|---|---|---|
| **Primário** | Fundo branco, texto preto, `--r-pill`, padding `14px 28px` | Escala 1.03, leve atração magnética ao cursor (máx. 6px) |
| **Secundário** | Transparente, `1px solid var(--stroke)`, texto branco | Borda vai para `--stroke-hi`, fundo `rgba(255,255,255,0.04)` |
| **Ícone/seta** | Quadrado 44px, `--r-sm`, seta `↗` | Inverte (preto↔branco); a seta desliza para fora e uma segunda entra por baixo |
| **Texto** | Só texto + sublinhado de 1px | Sublinhado varre da esquerda em `--corten` |

Todo rótulo de botão descreve a ação: `Iniciar um projeto`, `Ver o projeto`, `Baixar o portfólio`. Nunca `Saiba mais`.

### 5.3 Chips de metadado

Borda fina, `--r-sm`, mono 11px em caixa alta, `--text-dim`. Usados para escopo (`Arquitetura` · `Interiores` · `Paisagismo`) e categorias. Estáticos, não clicáveis, exceto na barra de filtros de `/projetos` — onde o chip ativo inverte para branco.

### 5.4 Cartão de valor (trio `01 / 02 / 03`)

Reproduz o trio da referência. Numeral grande em `--text-mute`, botão de seta no topo direito, título e descrição ancorados na base. **Um dos três é branco invertido** — na referência é o do meio; no nosso caso, o que corresponder à disciplina que o escritório mais quer vender.

Hover: o cartão escuro sobe 6px, a borda acende, e o numeral ganha um leve deslocamento contrário (parallax interno de 8px).

### 5.5 Cartão de projeto

- Imagem em `--r-lg`, proporção 4:5 no grid, 16:9 nos destaques
- Categoria em mono no topo, nome em `--t-h3` na base
- Hover: imagem escala 1.05 em 900ms com `--ease-out-expo`, a frase-conceito manuscrita faz fade-in sobre a base, e um cursor customizado com o rótulo `Ver projeto` acompanha o ponteiro
- A imagem não tem overlay escuro permanente — só um gradiente de baixo, `linear-gradient(to top, rgba(0,0,0,0.75), transparent 55%)`, para o texto ter contraste

### 5.6 Carrossel de projetos

Modelo direto da referência: imagem à direita, ficha à esquerda, indicadores de progresso em traço fino, contador `01/05` em mono e duas setas.

- Indicador ativo: filete que **preenche em Corten** durante o autoplay
- Arrastável no touch e no mouse, com inércia
- A troca de slide anima a imagem por máscara horizontal (não crossfade) — coerente com a linguagem do efeito assinatura
- Autoplay de 6s, pausado em hover, foco ou `prefers-reduced-motion`

### 5.7 Lista numerada (`Por que trabalhar conosco` / `Etapas`)

Linhas separadas por `1px solid var(--rule)`. Numeral em display leve `--text-mute`, título em `--t-h3`, descrição em `--text-dim`, chip de rótulo à direita.

Hover na linha: a linha inteira desloca 12px para a direita, o numeral acende de `--text-mute` para `--text`, e o separador inferior varre em Corten da esquerda para a direita.

### 5.8 Cartões de vidro sobre imagem

Como no bloco `Steps to your new home` da referência: fotografia full-bleed com 3 a 4 cartões de vidro posicionados em profundidades diferentes.

Cada cartão recebe uma velocidade de parallax distinta (`0.92`, `1.0`, `1.08`) para dar profundidade real durante o scroll. No mobile viram um carrossel horizontal — empilhados eles cobrem a foto inteira.

### 5.9 Bloco de dados técnicos

Tudo em mono, alinhado em duas colunas com um filete acima:

```
ANO           2024
LOCAL         Balneário Camboriú, SC
ÁREA          55 m²
ESCOPO        Interiores
COORDENADAS   26.9906° S  48.6350° W
```

As coordenadas são um detalhe que vale manter da referência: gratuitas de produzir, e reforçam que cada projeto tem um sítio real. Para os projetos sem endereço definido, omitir a linha em vez de inventar.

### 5.10 Cursor customizado

Ponto de 8px que cresce para 64px com rótulo ao passar sobre imagens (`Ver projeto`), setas do carrossel (`Arrastar`) e o hero de projeto (`Ver a obra`). Desativado em touch e sob `prefers-reduced-motion`.

---

## 6. Fotografia

Regra única e inegociável: **nenhum tratamento de cor sobre as imagens dos projetos.** Elas já são quentes e já carregam o único calor do site. Filtro, duotone ou overlay colorido matariam exatamente a coisa que faz a página funcionar.

- Gradiente de contraste apenas onde houver texto sobre imagem
- Todas as imagens em `--r-lg` com `1px solid var(--stroke)` — inclusive as full-bleed, que ganham margem lateral de `--margin` em vez de encostar na borda da tela (a referência faz isso e é o que dá o ar de objeto)
- Placeholder de carregamento: blur do próprio LQIP, nunca cinza chapado
- Proporções: hero 16:9 · card de grid 4:5 · galeria em par 3:2 · retrato 4:5

---

## 7. Movimento

### 7.1 Princípios

1. **Um momento assinatura por página.** Todo o resto é micro-interação.
2. **Nada pisca, nada balança, nada gira.** O vocabulário é: máscara, deslocamento, escala sutil, mudança de tom.
3. **Máscara em vez de fade.** Sempre que possível, revelar por `clip-path` em vez de opacidade. É o que dá a sensação de material sendo descoberto, e conversa com o efeito assinatura.
4. **Uma animação por elemento.** Nada de entrar subindo, escalando e clareando ao mesmo tempo.

### 7.2 Tokens

```css
:root {
  --ease-out-expo:  cubic-bezier(0.16, 1, 0.30, 1);    /* padrão de entrada */
  --ease-in-out-q:  cubic-bezier(0.76, 0, 0.24, 1);    /* transições de página */
  --ease-soft:      cubic-bezier(0.33, 1, 0.68, 1);    /* hovers */

  --dur-micro:  180ms;   /* hover de botão, chip */
  --dur-fast:   320ms;   /* troca de estado */
  --dur-base:   640ms;   /* entrada de elemento */
  --dur-slow:   1100ms;  /* revelação de imagem */
  --dur-sig:    2800ms;  /* efeito assinatura */

  --stagger:    70ms;
}
```

### 7.3 Inventário por seção

| Momento | Animação |
|---|---|
| **Entrada no site** (só na 1ª visita da sessão) | Tela preta, assinatura do Leonardo desenhando via `stroke-dashoffset` (1.2s), pausa de 300ms, cortina sobe revelando o hero |
| **Hero da home** | Imagem entra em escala 1.08 → 1.00 com máscara vertical (`--dur-slow`); H1 revelado linha por linha por `clip-path`, stagger 90ms; cartões de vidro entram por último, deslocados 20px |
| **Título `SplitTone`** | Palavras acendem de `--text-mute` para `--text` conforme o progresso de scroll da seção |
| **Trio de cartões** | Stagger de entrada 70ms; parallax interno no numeral |
| **Números** | Contador de 0 até o valor, 1.4s, easing de saída, dispara uma única vez |
| **`O que define nosso trabalho`** | Seção fixa: imagem permanece travada enquanto o índice `01 / 02 / 03` avança e o texto troca por máscara |
| **Grid de projetos** | Cada card revela por máscara vertical na entrada em viewport, stagger 80ms; a imagem tem parallax de 8% mais lento que a página |
| **Filtros** | Reordenação animada com FLIP — os cards se movem para as novas posições em vez de piscar |
| **Hero de projeto** | **Efeito assinatura — seção 8** |
| **Galerias** | Máscara diagonal na entrada, parallax leve, hover com escala 1.03 |
| **Etapas do processo** | Cartões de vidro em parallax de velocidades distintas |
| **Transição entre páginas** | Cortina preta de baixo para cima com a assinatura ao centro (500ms), nova página revela por cima (600ms) |
| **Rodapé** | Fundo revelado: o rodapé fica fixo e o conteúdo desliza sobre ele |

### 7.4 O que evitar

Marquee de texto infinito · texto embaralhando letra a letra · confete de partículas · fundos com gradiente animado · qualquer coisa acompanhando o movimento do mouse além do cursor customizado · scroll sequestrado (smooth scroll com Lenis é ok, scroll-jacking em seções não é).

---

## 8. Efeito assinatura — **Traço → Obra**

O momento único de cada página de projeto. A imagem principal chega como croqui em linha e se constrói até a imagem final.

### 8.1 Roteiro (2,8s)

| Fase | Tempo | O que acontece |
|---|---|---|
| **0 — Prancha** | 0 → 200ms | Fundo preto. Nada além de uma leve névoa quente onde a imagem vai nascer |
| **1 — Traço** | 200 → 1000ms | O croqui aparece por máscara horizontal da esquerda para a direita, como se estivesse sendo desenhado. Linhas em `--corten`, `filter: brightness(1.15)` |
| **2 — Materialização** | 1000 → 2400ms | Uma frente de revelação com borda suave (~18% de largura) varre de baixo para cima. Atrás dela: a imagem final, em cor, nítida. À frente: ainda o croqui. A própria frente carrega um brilho quente sutil |
| **3 — Assentamento** | 2400 → 2800ms | Escala 1.04 → 1.00, nome do projeto e frase-conceito entram por máscara, ficha técnica em stagger |

### 8.2 Arquitetura recomendada — duas camadas + máscara

Duas imagens estáticas sobrepostas em enquadramento **exatamente idêntico**, com uma máscara CSS animada.

**A inversão que importa para performance:** a imagem **final** é a camada de baixo, carregada com prioridade — assim ela é o elemento de LCP e o Google mede o carregamento correto. O **croqui** é a camada de cima, e o que animamos é a *remoção* dele. Visualmente idêntico, tecnicamente muito melhor.

```html
<figure class="sig" data-signature>
  <img class="sig__final"  src="/projetos/casa-z/final.avif"  alt="Living da Casa Z…" fetchpriority="high" decoding="sync">
  <img class="sig__sketch" src="/projetos/casa-z/croqui.avif" alt="" aria-hidden="true">
  <div class="sig__front" aria-hidden="true"></div>
</figure>
```

```css
.sig {
  position: relative;
  border-radius: var(--r-lg);
  overflow: hidden;
  border: 1px solid var(--stroke);
  isolation: isolate;
}
.sig img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
}
.sig__final  { transform: scale(1.04); transition: transform var(--dur-sig) var(--ease-out-expo); }
.sig__sketch {
  filter: brightness(1.15) saturate(1.1);
  /* fase 1: o croqui entra por varredura horizontal */
  -webkit-mask-image: linear-gradient(to right, #000 0 var(--draw), transparent var(--draw));
          mask-image: linear-gradient(to right, #000 0 var(--draw), transparent var(--draw));
  /* fase 2: e sai por varredura vertical com borda suave */
  opacity: var(--sketch-opacity, 1);
}
.sig[data-phase="2"] .sig__sketch {
  -webkit-mask-image: linear-gradient(to top, transparent 0 var(--reveal),
                       rgba(0,0,0,.5) calc(var(--reveal) + 9%), #000 calc(var(--reveal) + 18%));
          mask-image: linear-gradient(to top, transparent 0 var(--reveal),
                       rgba(0,0,0,.5) calc(var(--reveal) + 9%), #000 calc(var(--reveal) + 18%));
}
/* frente de revelação — o brilho quente que acompanha a varredura */
.sig__front {
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(to top,
    transparent calc(var(--reveal) - 4%),
    var(--corten-glow) var(--reveal),
    transparent calc(var(--reveal) + 10%));
  mix-blend-mode: screen;
  opacity: var(--front-opacity, 0);
}
.sig.is-done .sig__final { transform: scale(1); }
```

```js
// Dispara quando o hero entra em viewport; roda uma vez por sessão e por projeto.
function playSignature(el) {
  const set = (k, v) => el.style.setProperty(k, v);
  const done = () => { el.classList.add('is-done'); el.dispatchEvent(new Event('signature:done')); };

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return done();

  set('--draw', '0%'); set('--reveal', '0%'); set('--front-opacity', '0');

  const anim = (from, to, dur, delay, onTick) => new Promise(res => {
    const start = performance.now() + delay;
    const tick = now => {
      const p = Math.min(Math.max((now - start) / dur, 0), 1);
      const e = 1 - Math.pow(1 - p, 3);           // easeOutCubic
      onTick(from + (to - from) * e);
      p < 1 ? requestAnimationFrame(tick) : res();
    };
    requestAnimationFrame(tick);
  });

  // Fase 1 — traço
  anim(0, 100, 800, 200, v => set('--draw', v + '%'))
    .then(() => {
      // Fase 2 — materialização
      el.dataset.phase = '2';
      set('--front-opacity', '1');
      return anim(0, 108, 1400, 0, v => set('--reveal', v + '%'));
    })
    .then(() => { set('--front-opacity', '0'); done(); });
}

const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    playSignature(entry.target);
    obs.unobserve(entry.target);
  });
}, { threshold: 0.35 });

document.querySelectorAll('[data-signature]').forEach(el => io.observe(el));
```

O texto do hero (nome, conceito, ficha) escuta o evento `signature:done` e entra em seguida.

### 8.3 Variante por scroll

Em vez de tocar sozinho, o efeito pode ser amarrado ao scroll: o hero fica fixo e a materialização progride conforme o usuário rola ~80vh. Mais imersivo, mas atrasa a leitura do conteúdo.

**Recomendação:** autoplay na chegada. O usuário do site é um cliente potencial, não alguém explorando uma peça experimental — a informação do projeto precisa estar acessível em segundos. Guarde a variante por scroll para uma eventual página de destaque (a Casa Sobre Trapézios, por exemplo).

### 8.4 Variante de maior fidelidade — sequência de quadros

Se você quiser o traço realmente *se preenchendo* (e não apenas revelado por máscara), gere no Higgsfield uma sequência de 24 a 40 quadros do croqui até o render final.

- Formato: AVIF em sprite vertical, ou vídeo em `WebM` + `HEVC/alpha` de fallback
- Peso-alvo: até 900 KB por projeto — acima disso, volte para a máscara
- Trocar quadros por `background-position` em sprite ou desenhar em `<canvas>`
- **Nunca** usar isso na imagem de LCP sem a imagem final estática servida por baixo

### 8.5 Especificação dos assets

Para cada projeto, dois arquivos em enquadramento pixel-a-pixel idêntico:

| Arquivo | Especificação |
|---|---|
| `final.avif` | Render/foto original, 2560px de largura, AVIF + fallback WebP, LQIP em base64 |
| `croqui.avif` | Croqui em linha do mesmo enquadramento. **Fundo transparente ou preto puro**, linhas claras — o tom Corten vem do CSS, não do arquivo. Traço limpo, sem hachura pesada, sem sombreado |

**Prompt de orientação para o Magnific/Higgsfield:** croqui arquitetônico em linha fina e monocromática, sem preenchimento e sem sombras, mantendo perspectiva, proporções e todos os contornos principais do render original. Aumentar peso de linha nos volumes arquitetônicos e reduzir na vegetação — o traço precisa ler a **arquitetura**, não a folhagem.

**Teste de aceite:** sobrepondo os dois arquivos a 50% de opacidade, as arestas principais devem coincidir. Se o croqui deslocar a perspectiva, o efeito vira um crossfade borrado e perde todo o sentido.

### 8.6 Estados de exceção

- `prefers-reduced-motion: reduce` → imagem final direto, sem animação, sem croqui
- Conexão lenta (`navigator.connection.saveData` ou `effectiveType` 2G/3G) → pular o croqui
- Falha ao carregar o croqui → o `onerror` remove a camada; a imagem final já está lá
- Sem JS → CSS entrega a imagem final visível por padrão; o efeito é progressivo

### 8.7 Onde o efeito **não** entra

Só na imagem principal da página de projeto. Não no hero da home, não nos cards do grid, não nas galerias. Repetido, deixa de ser assinatura e vira maneirismo — e cobra um preço alto em produção de assets.

---

## 9. Aplicação por página

### Home
Hero com imagem full-bleed, H1 em `--t-hero`, cartões de vidro com dados e mini-carrossel de projeto no canto (exatamente o arranjo da referência) · `SplitTone` de manifesto · trio de cartões `01/02/03` das três disciplinas, com o de Interiores invertido em branco · seção fixa `O que define nosso trabalho` · carrossel de projetos em destaque · bloco CASACOR · etapas do processo com cartões de vidro · CTA final.

### Projetos
Cabeçalho com `SplitTone` · barra de chips de filtro · grid assimétrico com reordenação FLIP · rodapé de CTA.

### Projeto individual
**Efeito assinatura no hero** · nome + numeral + conceito manuscrito · bloco de dados técnicos com coordenadas · texto em duas colunas · galerias alternando pares e grade 2×2 · navegação anterior/próximo com preview da imagem em hover · CTA.

### Escritório
Retrato P&B em hero · manifesto em `SplitTone` grande · lista numerada de princípios · equipe · CTA.

### Serviços
Três seções longas, uma por disciplina, cada uma com imagem full-bleed, lista numerada de entregas e carrossel dos projetos relacionados.

### CASACOR
Tratamento editorial: hero com o salão da exposição, os dois blocos de texto em colunas, assinatura dos cinco autores, galeria completa. Único lugar onde o Corten pode aparecer um pouco mais — o projeto é sobre contraste e cor.

### Contato
Formulário sobre fundo preto, campos com borda inferior de 1px que acende em Corten no foco, sem caixas preenchidas. Coluna lateral com dados diretos e download do portfólio.

---

## 10. Mobile

- Grid de 12 → 4 colunas, `--margin` de 20px
- `--t-hero` limitado a 52px; H1 do hero em no máximo 4 linhas
- Cartões de vidro sobre imagem viram carrossel horizontal
- Trio `01/02/03` empilha; o cartão branco continua sendo o segundo
- Seções fixas (scroll travado) são desativadas — viram sequência normal
- Efeito assinatura mantido, com duração reduzida para 2,0s
- Cursor customizado desativado; alvos de toque com no mínimo 44px
- Menu em overlay preto full-screen

---

## 11. Acessibilidade

- Contraste: `--text-dim` (#8E9095) sobre preto atinge 7:1 — ok para corpo. `--text-mute` (#55575C) fica em 3.4:1 e **só pode ser usado em elementos decorativos** (numerais) ou em texto que anima até o branco. Nunca em informação que só existe naquele tom.
- Foco visível: anel de 2px em `--corten` com offset de 2px, em todos os elementos interativos.
- `prefers-reduced-motion` respeitado em toda animação, incluindo o efeito assinatura, o smooth scroll e o autoplay do carrossel.
- Carrossel operável por teclado, com região `aria-live="polite"` anunciando o slide atual.
- O croqui é decorativo: `alt=""` e `aria-hidden="true"`. O `alt` descritivo fica na imagem final.
- Todo texto sobre fotografia precisa do gradiente de contraste — sem exceção.

---

## 12. Performance

- **Meta:** LCP < 2,5s, CLS < 0,05, INP < 200ms
- Hero: AVIF com `fetchpriority="high"`, `srcset` em 4 larguras, LQIP em base64 inline
- O croqui carrega com `loading="lazy"` — ele nunca é o LCP
- Fontes: variáveis, subset latin + latin-ext, `font-display: swap`, pré-carregar apenas o peso 200 do display
- Peso-alvo por página: < 2,2 MB no primeiro carregamento
- Animações restritas a `transform`, `opacity`, `clip-path` e `mask-image` — nenhuma propriedade que force layout
- `content-visibility: auto` nas seções abaixo da dobra
- Blur de vidro é caro: no máximo 4 elementos com `backdrop-filter` simultâneos em tela

---

## 13. Stack sugerida

| Camada | Escolha | Por quê |
|---|---|---|
| Framework | Next.js (App Router) | `next/image` resolve AVIF, srcset e LQIP sozinho |
| Estilo | Tailwind + tokens CSS deste documento | Tokens como fonte única de verdade |
| Animação | GSAP + ScrollTrigger | Seções fixas e o efeito assinatura pedem timeline com scrub |
| Transição de página | Framer Motion (`AnimatePresence`) | Cortina entre rotas e a pílula deslizante da nav |
| Smooth scroll | Lenis | Necessário para o parallax não tremer |
| CMS | Sanity ou Payload | Modelo da seção 6 do documento de estrutura, com dois campos de imagem no hero |

---

## 14. Checklist de assets

**Por projeto (11 projetos)**
- [ ] Imagem de hero em alta (2560px) — as do PDF estão comprimidas demais
- [ ] Croqui do hero, enquadramento idêntico, validado no teste de sobreposição
- [ ] Imagem de card 4:5
- [ ] Galeria: 4 a 8 imagens
- [ ] Coordenadas do sítio (ou omitir a linha)

**Globais**
- [ ] Assinatura em SVG com traço único, preparada para animação por `stroke-dashoffset`
- [ ] Arquivo da fonte manuscrita usada no portfólio (ou substituto aprovado)
- [ ] Licença das fontes display e mono
- [ ] Favicon e Open Graph — assinatura branca sobre preto
- [ ] Vídeo ou imagem do hero da home