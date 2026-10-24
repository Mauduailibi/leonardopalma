# Estrutura do Website — Leonardo Palma

**Arquitetura, Interiores e Paisagismo — Balneário Camboriú, SC**

Documento de arquitetura de informação e conteúdo para conversão do portfólio em PDF para um website moderno.
Todo o conteúdo textual abaixo foi extraído exclusivamente do arquivo `Portfolio_Leo_Palma_-_Comprimido.pdf`.
Trechos marcados com `[LACUNA]` indicam informação que **não existe no PDF** e precisa ser fornecida pelo escritório antes do desenvolvimento.

---

## 1. Fundamentos da marca

| Item | Conteúdo (fonte: portfólio) |
|---|---|
| Nome / logotipo | Leonardo Palma (assinatura manuscrita em branco) |
| Assinatura de marca (tagline) | `arquitetura interiores e paisagismo` — em caixa baixa, letter-spacing largo |
| Frase-manifesto | "O espaço é a moldura, a vida é a obra" |
| Localização | Balneário Camboriú / Santa Catarina |
| Tempo de mercado | Dois anos de aprendizado no mercado de arquitetura (referência da CASACOR SC — **atualizar**) |
| Sócios / equipe citada | Leonardo Palma, Leonardo Vieira, Iuri Meinhard, Rafael Santos e Luciano Rother |

### Identidade visual herdada do PDF

- **Capa:** fotografia arquitetônica em escala de cinza escuríssima (quase preto, ~`#1B1F23`), com a assinatura em branco centralizada.
- **Miolo:** fundo off-white / cinza muito claro (~`#F2F2F2`), tipografia preta.
- **Três níveis tipográficos por projeto:**
  1. Título em sans-serif bold caixa alta (ex: `CASA SOBRE TRAPÉZIOS`)
  2. Subtítulo/conceito em manuscrita, entre aspas (ex: *"Casa elevada e jardim com sombreamento otimizado e baixa manutenção"*)
  3. Corpo de texto em sans-serif justificado, 3–4 parágrafos
- **Rodapé de página:** `Leonardo Palma` à esquerda, número da página à direita — pode virar um elemento de navegação/numeração no site.
- **Grid de imagens:** hero full-bleed → grade de 2 imagens no topo → bloco de texto à esquerda + imagem vertical grande à direita → grade de 4 imagens (2×2).

> **Nota de direção:** o contraste entre a capa quase preta e o miolo claro é o gesto mais forte do portfólio. Vale traduzir isso no site como uma alternância deliberada entre seções escuras (hero, CASACOR, contato) e claras (projetos, sobre), em vez de um tema único.

---

## 2. Inventário de projetos

Todos os projetos presentes no PDF, com os dados disponíveis:

| # | Projeto | Slug | Categoria | Conceito (frase manuscrita) | Pág. no PDF |
|---|---|---|---|---|---|
| 01 | Harmonia do Caos — CASACOR SC | `harmonia-do-caos` | Exposição / Efêmero | "O espaço é a moldura, a vida é a obra" | 1 |
| 02 | Casa Sobre Trapézios | `casa-sobre-trapezios` | Arquitetura + Paisagismo | "Casa elevada e jardim com sombreamento otimizado e baixa manutenção" | 7 |
| 03 | Casa Z | `casa-z` | Interiores (reforma) | "Luxo e requinte em cada detalhe desta reforma sofisticada" | 13 |
| 04 | Suíte Maple | `suite-maple` | Interiores | "Uma composição equilibrada entre rusticidade e modernidade" | 19 |
| 05 | Casa Breeze | `casa-breeze` | Arquitetura + Paisagismo | "Perfeita para desfrutar da brisa e do som das ondas" | 25 |
| 06 | Escola Atlântica | `escola-atlantica` | Institucional / Educacional | "Cada ambiente estimula a criatividade e os sentidos" | 31 |
| 07 | Suíte Wonderland | `suite-wonderland` | Interiores / Infantil | "Espaço criativo, ideal para brincar e crescer" | 37 |
| 08 | Apartamento Savanna | `apartamento-savanna` | Interiores | "Conforto e sofisticação em um design inspirado na natureza" | 43 |
| 09 | Suíte Nogueira | `suite-nogueira` | Interiores | "Atmosfera moderna com cores elegantes e refinadas" | 49 |
| 10 | Casa Lumberjack | `casa-lumberjack` | Arquitetura (casa de campo) | "Uma casa no lago aconchegante" | 55 |
| 11 | Loft Bear Cave | `loft-bear-cave` | Interiores (55 m²) | "Funcionalidade e elegância em cada detalhe" | 59 |

### Filtros/categorias sugeridos para a página de projetos

Derivados da tagline e dos tipos de projeto existentes:

- **Arquitetura** — Casa Sobre Trapézios, Casa Breeze, Casa Lumberjack, Escola Atlântica
- **Interiores** — Casa Z, Suíte Maple, Suíte Wonderland, Apartamento Savanna, Suíte Nogueira, Loft Bear Cave
- **Paisagismo** — Casa Sobre Trapézios, Casa Breeze, Escola Atlântica
- **Exposições** — Harmonia do Caos (CASACOR SC)

*(Um projeto pode aparecer em mais de um filtro — Casa Sobre Trapézios é o caso mais claro, com projeto arquitetônico, paisagístico e lumínico.)*

---

## 3. Mapa do site (sitemap)

```
/                              Home
├── /projetos                  Índice de projetos (com filtros)
│   ├── /projetos/harmonia-do-caos
│   ├── /projetos/casa-sobre-trapezios
│   ├── /projetos/casa-z
│   ├── /projetos/suite-maple
│   ├── /projetos/casa-breeze
│   ├── /projetos/escola-atlantica
│   ├── /projetos/suite-wonderland
│   ├── /projetos/apartamento-savanna
│   ├── /projetos/suite-nogueira
│   ├── /projetos/casa-lumberjack
│   └── /projetos/loft-bear-cave
├── /escritorio                Sobre o escritório (bio, manifesto, equipe)
├── /servicos                  Arquitetura, Interiores, Paisagismo
├── /casacor                   CASACOR SC — Harmonia do Caos (página de reconhecimento)
├── /contato                   Contato + formulário de briefing
└── /portfolio.pdf             Download do portfólio completo (asset)
```

### Navegação principal (header)

`Projetos` · `Escritório` · `Serviços` · `CASACOR` · `Contato`

- Logotipo (assinatura) à esquerda, sempre linkando para `/`.
- Header transparente sobre o hero escuro; ganha fundo sólido ao rolar.
- Mobile: menu em overlay full-screen, fundo escuro, itens em tipografia grande.
- CTA persistente à direita: **Iniciar um projeto**.

### Navegação de rodapé (footer)

- Coluna 1: assinatura + tagline `arquitetura interiores e paisagismo`
- Coluna 2: links de navegação
- Coluna 3: seleção de 4 projetos em destaque
- Coluna 4: contato + redes sociais `[LACUNA]`
- Linha inferior: `© Leonardo Palma` · Política de Privacidade · Crédito de desenvolvimento

---

## 4. Home page — seções

### 4.1 Hero (seção escura)

**Objetivo:** reproduzir o impacto da capa do PDF na primeira dobra.

- **Fundo:** imagem da Casa Sobre Trapézios (fachada em concreto com brises de Aço Corten e jardim em primeiro plano), tratada em escala de cinza escura, exatamente como na capa. Alternativa: vídeo em loop silencioso.
- **Elemento central:** assinatura "Leonardo Palma" em branco.
- **Subtítulo:** `arquitetura interiores e paisagismo`
- **Indicador de scroll** discreto na base.
- **Sem CTA em botão** nesta dobra — a capa do portfólio é silenciosa e o site deve preservar isso. O CTA aparece na seção seguinte.

**Transição sugerida:** ao rolar, a imagem de fundo perde a dessaturação e revela a fotografia em cores — o mesmo movimento que acontece ao virar a capa do PDF.

### 4.2 Manifesto

Seção de respiro, tipografia grande, fundo claro.

> **"O espaço é a moldura, a vida é a obra"**

Texto de apoio (adaptado do texto da CASACOR no PDF):

> Um escritório de arquitetura, interiores e paisagismo com design minimalista, que valoriza o talento local e projeta espaços onde o caos se transforma em harmonia.

CTA: **Conheça o escritório** → `/escritorio`

### 4.3 Projetos em destaque

Seleção curada de 4 a 6 projetos, cobrindo as três disciplinas.

**Sugestão de curadoria:**
1. Casa Sobre Trapézios (arquitetura + paisagismo)
2. Casa Z (interiores de alto padrão)
3. Escola Atlântica (institucional — mostra escala)
4. Casa Lumberjack (casa de campo — mostra repertório fora do litoral)

**Estrutura de cada card:**
- Imagem principal do projeto (hover: leve zoom + revelação do conceito)
- Numeração `01 / 02 / 03` — legítima aqui, pois a seleção é ordenada e sequencial
- Nome do projeto
- Categoria
- Frase-conceito manuscrita

CTA final: **Ver todos os projetos** → `/projetos`

### 4.4 Disciplinas / Serviços

Três blocos, um para cada eixo da tagline. Cada bloco leva a `/servicos` e a um filtro de projetos.

| Disciplina | Texto de apoio (derivado dos projetos do PDF) | Projeto de referência |
|---|---|---|
| **Arquitetura** | Residências que estabelecem relação natural com a paisagem e com o entorno, com soluções de conforto térmico e materiais de baixo impacto. | Casa Sobre Trapézios |
| **Interiores** | Ambientes onde cada detalhe é pensado para conforto, tranquilidade e sofisticação — do Art Déco contemporâneo ao aconchego da madeira. | Casa Z |
| **Paisagismo** | Jardins projetados para alto índice de sombreamento e baixa manutenção, integrados ao projeto lumínico e aos arredores. | Casa Sobre Trapézios |

### 4.5 CASACOR Santa Catarina (seção escura)

Bloco de credibilidade — o ativo mais forte do portfólio.

- **Selo/logo:** CASACOR
- **Título:** Harmonia do Caos — CASACOR Santa Catarina
- **Texto:**
  > A exposição Harmonia do Caos na CASACOR SANTA CATARINA reúne mais de 30 artistas nacionais e internacionais. Com um design minimalista, o espaço destaca as obras de arte, que dialogam entre si e com o público em um cenário que simula um labirinto.
- **Imagem:** ambiente da exposição com os bancos em suede sobre tapete orgânico e as pinturas de grande formato.
- **Assinatura do projeto:** Leonardo Palma, Leonardo Vieira, Iuri Meinhard, Rafael Santos e Luciano Rother
- CTA: **Ver o projeto completo** → `/casacor`

### 4.6 Números / Reconhecimento *(opcional)*

Dados disponíveis no PDF (poucos — usar só se complementados):

- `+30` artistas nacionais e internacionais na curadoria da exposição
- `2 anos` de mercado até a CASACOR SC — **atualizar para o número atual**
- `[LACUNA]` nº de projetos entregues, m² projetados, cidades atendidas

> Se não houver números reais e atualizados, **cortar esta seção**. Métricas fracas enfraquecem a página inteira.

### 4.7 Chamada final para contato (seção escura)

- **Título:** Vamos projetar o seu espaço
- **Texto curto** sobre o processo `[LACUNA]`
- **CTAs:** `Iniciar um projeto` (→ `/contato`) e `Baixar o portfólio` (→ PDF)

---

## 5. Página: Projetos (`/projetos`)

### Estrutura

1. **Cabeçalho da página** — título `Projetos` + linha de apoio: *seleção de projetos de arquitetura, interiores e paisagismo*.
2. **Barra de filtros** — `Todos` · `Arquitetura` · `Interiores` · `Paisagismo` · `Exposições` (filtragem sem recarregar a página, com estado na URL: `/projetos?categoria=interiores`).
3. **Grid de projetos** — layout assimétrico (alternando cards largos e estreitos) para evitar a grade previsível de portfólio. Cada card mostra: imagem principal, nome, categoria, conceito no hover.
4. **CTA final** — bloco de contato.

### Ordem sugerida no grid

Priorizar impacto visual e diversidade, não a ordem do PDF:
Casa Sobre Trapézios → Casa Z → Harmonia do Caos → Escola Atlântica → Casa Lumberjack → Apartamento Savanna → Casa Breeze → Loft Bear Cave → Suíte Nogueira → Suíte Maple → Suíte Wonderland

---

## 6. Template: página de projeto (`/projetos/[slug]`)

Estrutura única, alimentada pelos dados de cada projeto. Reproduz a sequência de leitura do PDF.

```
┌─────────────────────────────────────────┐
│  1. HERO full-bleed                     │  imagem principal, altura ~85vh
│     nome + categoria sobrepostos        │
├─────────────────────────────────────────┤
│  2. CONCEITO                            │  frase manuscrita, grande, centralizada
├─────────────────────────────────────────┤
│  3. TEXTO + FICHA TÉCNICA               │  texto à esquerda (2 col) / ficha à direita
├─────────────────────────────────────────┤
│  4. GALERIA — grade 2×2 assimétrica     │  imagens em pares, como no PDF
├─────────────────────────────────────────┤
│  5. IMAGEM DE RESPIRO full-bleed        │
├─────────────────────────────────────────┤
│  6. GALERIA — segunda leva              │
├─────────────────────────────────────────┤
│  7. NAVEGAÇÃO                           │  ← projeto anterior | próximo projeto →
├─────────────────────────────────────────┤
│  8. CTA de contato                      │
└─────────────────────────────────────────┘
```

### Campos de dados por projeto (modelo de CMS)

```yaml
titulo:
slug:
categorias: []           # arquitetura | interiores | paisagismo | exposicoes
conceito:                # frase manuscrita entre aspas
descricao: []            # array de parágrafos
imagem_hero:
imagem_card:
galeria: []
ficha_tecnica:
  ano:                   # [LACUNA] em todos os projetos
  local:                 # [LACUNA] — exceto Casa Z (praia do Estaleirinho)
  area:                  # disponível apenas em Loft Bear Cave (55 m²)
  status:                # [LACUNA] — construído / em obra / projeto
  equipe:                # [LACUNA]
  fotografia:            # [LACUNA] — obrigatório para fotos reais
  render:                # [LACUNA]
destaque: true|false
ordem:
seo_titulo:
seo_descricao:
```

---

## 7. Conteúdo de cada página de projeto

Textos transcritos do PDF, prontos para o CMS.

### 7.1 Harmonia do Caos — CASACOR Santa Catarina

**Categoria:** Exposição
**Conceito:** "O espaço é a moldura, a vida é a obra"
**Assinatura:** Leonardo Palma, Leonardo Vieira, Iuri Meinhard, Rafael Santos e Luciano Rother

**Texto (bloco 1):**
> A exposição Harmonia do Caos na CASACOR SANTA CATARINA reúne mais de 30 artistas nacionais e internacionais e reflete os dois anos de aprendizado do escritório no mercado de arquitetura. Com um design minimalista, o espaço destaca as obras de arte, que dialogam entre si e com o público em um cenário que simula um labirinto. A curadoria plural explora diversas linguagens artísticas, valorizando o talento local.

**Texto (bloco 2):**
> Inspirado na música Bolero de Ravel, o projeto propõe um jogo entre equilíbrio e desequilíbrio, criando uma experiência imersiva e desconfortavelmente confortável, onde o caos se transforma em harmonia. A exposição abrange estilos como Pop Art e Abstracionismo, mostrando a convivência de contrastes e formas de maneira coesa além de uma seleção de móveis assinados por designers brasileiros.

**Imagens:** mural colorido com pessoas em movimento na escadaria · retrato do arquiteto · retrato da equipe (5 pessoas, P&B) · poltrona laranja com mesas laterais · salão da exposição com bancos em suede e retratos de grande formato · detalhe de banco e mesa lateral · poltrona escultórica clara

### 7.2 Casa Sobre Trapézios

**Categoria:** Arquitetura + Paisagismo
**Conceito:** "Casa elevada e jardim com sombreamento otimizado e baixa manutenção"

**Texto:**
> Pensada para ser um refúgio das regiões cosmopolitas, a Casa Sobre Trapézios ergue-se sobre prismas trapezoidais para criar um ambiente único e elevado do chão, estabelecendo uma relação natural com a paisagem e com as árvores do entorno.
>
> Em seu perímetro, recebe brises deslizantes verticais de Aço Corten que além de trazerem a edificação uma estética contemporânea, são capazes de proporcionar equilíbrio térmico no verão e maior incidência solar no inverno.
>
> Guiadas pelas placas de mármore travertino, encontram-se as áreas de lazer e área gourmet que proporcionam espaços de confraternização, divertimento, aconchego e contemplação, atrelados a um projeto paisagístico mediterrâneo.
>
> O jardim, projetado para ter um alto índice de sombreamento e pouca queda de folhas durante o ano, proporciona um ambiente integrado com os arredores e une o projeto lumínico, tornando a relação NATURAL/ARTIFICIAL mais íntima e completa.

**Palavras-chave para SEO:** prismas trapezoidais, brises de Aço Corten, mármore travertino, paisagismo mediterrâneo, projeto lumínico
**Imagens:** fachada em contra-plongée com jardim · fachada frontal diurna · garagem com detalhe dos brises · área de lazer com piscina ao entardecer · vista da piscina com deck · jardim lateral com passarela · piscina com prainha e espreguiçadeiras

### 7.3 Casa Z

**Categoria:** Interiores (reforma)
**Conceito:** "Luxo e requinte em cada detalhe desta reforma sofisticada"
**Local:** vista para a praia do Estaleirinho

**Texto:**
> Nesta requintada reforma de arquitetura de interiores, o estilo Art Déco permeia cada detalhe, criando um ambiente luxuoso e sofisticado.
>
> O hall de entrada é uma composição magnífica, com um reluzente piso de mármore Nero Marquina e um imponente painel de 4,5 metros de altura, esculpido em metalon preto fosco e vidro canelado fumê, acompanhado por uma belíssima escultura dourada de um rosto humano, evocando silenciosa grandiosidade.
>
> No living, uma paleta de cores escuras e cativantes — cinza, preto e couro — se desdobra em mobiliário orgânico, enquanto a iluminação direta e indireta, através de fitas de LED e sancas, realça os pontos de interesse. O pendente assinado por Jader Almeida, com suas centenas de pontos luminosos, eleva o espaço a novas alturas. As generosas aberturas proporcionam uma vista deslumbrante para a piscina e a praia do Estaleirinho.
>
> A cozinha, ponto focal deste enigma de elegância, ostenta uma bancada esculpida em Quartzito Wakanda de 5 metros, acomodando nove convivas. Móveis em tom Marsala, bancadas em Nero Marquina polido e quartzito Wakanda escovado criam uma ousada harmonia com o preto predominante no living. Equipada com eletrodomésticos de última geração, esta cozinha é um santuário da alta tecnologia.
>
> O bar, marcado pelo letreiro em neon e uma coleção nobre de whiskies importados, brilha em destaque. Uma adega dupla, máquina de gelo e cervejeira completam este retiro de luxo e imponência.
>
> Em síntese, esta reforma é uma ode à elegância imponente, onde o estilo Art Déco se entrelaça com uma visão contemporânea, resultando em um ambiente de puro esplendor e sofisticação.

**Ficha técnica extraível:** painel de 4,5 m · bancada de 5 m para 9 convivas · pendente Jader Almeida
**Imagens:** living com pé-direito duplo e escada · detalhe do painel Art Déco e escultura dourada · cozinha com bancada Nero Marquina · vista superior do living · bar com letreiro neon "cheers"

### 7.4 Suíte Maple

**Categoria:** Interiores
**Conceito:** "Uma composição equilibrada entre rusticidade e modernidade"

**Texto:**
> Com detalhes de madeira ripada nas paredes e teto, criamos uma atmosfera envolvente e acolhedora. O revestimento atrás da cabeceira, que imita rocha natural branca, traz um toque de leveza e elegância ao ambiente, resultando em uma composição equilibrada entre a rusticidade e a modernidade.
>
> Cada detalhe foi pensado para oferecer conforto e tranquilidade, tornando esse espaço o lugar perfeito para relaxar e renovar as energias.

**Imagens:** corredor com nichos iluminados e quadro de montanha · closet com portas de vidro e home office · vista do quarto com cabeceira retroiluminada · detalhe da cabeceira em rocha natural

### 7.5 Casa Breeze

**Categoria:** Arquitetura + Paisagismo
**Conceito:** "Perfeita para desfrutar da brisa e do som das ondas"

**Texto:**
> Uma residência contemporânea de praia que redefine o luxo à beira do oceano Atlântico. A fachada deslumbrante combina a beleza atemporal da madeira e da pedra natural, criando uma estética única que se integra perfeitamente ao ambiente natural circundante.
>
> A iluminação é a chave para realçar a modernidade desta residência. A fachada é adornada com uma miríade de LEDs, proporcionando uma atmosfera acolhedora ao anoitecer e transformando a casa em uma verdadeira obra de arte luminosa.
>
> A proximidade com a praia é uma característica marcante deste projeto. Grandes janelas de vidro proporcionam vistas panorâmicas do oceano, enquanto terraços espaçosos convidam a desfrutar do som suave das ondas e da brisa do mar. Este é mais do que um lar; é uma experiência de vida à beira-mar, onde a arquitetura contemporânea se funde harmoniosamente com a natureza.

**Imagens:** fachada com paisagismo de agaves e palmeiras · vista frontal com garagem · detalhe do volume em madeira · fachada lateral com montanhas ao fundo · vista da rua com a praia ao fundo

### 7.6 Escola Atlântica

**Categoria:** Institucional / Educacional
**Conceito:** "Cada ambiente estimula a criatividade e os sentidos"

**Texto:**
> O bloco principal, onde se localizam as salas de aula, o auditório e a administração fora pensado cuidadosamente para remeter a um aquário com sua forma bruta e retilínea, onde os elementos metálicos vazados da fachada lembram algas marinhas, e os alunos e funcionários no interior representam a vida marinha em constante movimento e adaptação.
>
> Toda a escola apresenta uma leveza manifestada em suas cores e ambientes, proporcionando aos alunos um ambiente leve e que estimula a criatividade e os sentidos a todo momento.
>
> O contato com a natureza é indispensável, expressando a hipótese da Biofilia, nos arredores da escola há uma grande variedade de vegetação que oferece sombra e locais de contemplação, possibilitando uma conexão mais íntima com a natureza e outras formas de vida.

**Palavras-chave para SEO:** arquitetura escolar, biofilia, fachada metálica vazada, arquitetura institucional
**Imagens:** fachada com elementos verticais amarelos e azuis · entrada com sinalização · playground com módulos coloridos · vista aérea do conjunto · área de contemplação arborizada · quadra e piscina junto à praia

### 7.7 Suíte Wonderland

**Categoria:** Interiores / Infantil
**Conceito:** "Espaço criativo, ideal para brincar e crescer"

**Texto:**
> Em tons de vinho e rosa claro, criamos um ambiente acolhedor e seguro, onde o conforto se encontra com a criatividade. Este refúgio infantil foi pensado para estimular a imaginação e o desenvolvimento da criança, enquanto ela se sente em seu próprio castelo mágico.
>
> Transformar sonhos em realidade é a nossa paixão. E esse quarto, cheio de amor e magia, é a prova disso.

**Imagens:** corredor com papel de parede ilustrado e espelhos circulares · beliche com arco · marcenaria com nichos e palhinha · poltrona junto à janela · banheiro em tons rosados

### 7.8 Apartamento Savanna

**Categoria:** Interiores
**Conceito:** "Conforto e sofisticação em um design inspirado na natureza"

**Texto:**
> Transformamos este apartamento em um refúgio contemporâneo, onde o uso de madeira e ripados no teto trazem aconchego e sofisticação.
>
> Os detalhes em branco adicionam leveza, enquanto a pedra natural, presente nos ambientes, conecta o interior à natureza de forma orgânica e elegante.
>
> O ambiente foi elaborado para criar uma atmosfera harmoniosa e moderna, perfeita para viver com estilo e conforto.

**Imagens:** living com painel de pedra natural e teto ripado · sala de jantar com adega vertical · cozinha com bancada em madeira · vista integrada living/cozinha · canto de leitura com poltrona

### 7.9 Suíte Nogueira

**Categoria:** Interiores
**Conceito:** "Atmosfera moderna com cores elegantes e refinadas"

**Texto:**
> As cores amadeiradas, cuidadosamente selecionadas, criam uma atmosfera acolhedora que se contrapõe com elegância ao cimento queimado, conferindo modernidade e sofisticação aos ambientes.
>
> O uso de MDF em brilho em todo o mobiliário e cabeceira acrescenta um toque de requinte, refletindo a luz e ampliando a sensação de espaço.
>
> O espaço foi pensado para proporcionar um refúgio de paz e tranquilidade, ideal para relaxar e recarregar as energias após um dia cheio.

**Imagens:** cristaleira em madeira ébano com vista para o quarto · closet e penteadeira · cabeceira com iluminação linear · vista geral do quarto

### 7.10 Casa Lumberjack

**Categoria:** Arquitetura (casa de campo)
**Conceito:** "Uma casa no lago aconchegante"

**Texto:**
> A casa em si possui elementos retilíneos em toda a composição, guiando o olhar até o lago e possui grandes aberturas para possibilitar a contemplação da natureza do entorno. A escolha de materiais foi baseada em estudos de arquitetura vernacular, buscando materiais e mão de obra local e de baixo impacto no meio ambiente.
>
> Seu interior possui grande influência de madeira, trazendo aconchego a quem toma uma taça de vinho na poltrona e também elementos em preto e branco, visando a exclusividade e alto padrão em uma casa de campo. A casa possui grande espaço para festas e reuniões sociais, além de quatro suítes, quatro lavabos, lavanderia, quarto de empregados e 4 vagas de garagem para veículos.
>
> A casa é autossuficiente em energia graças às suas placas solares na cobertura evitando assim gastos durante o inverno.

**Ficha técnica extraível:** 4 suítes · 4 lavabos · lavanderia · quarto de empregados · 4 vagas · energia solar
**Palavras-chave para SEO:** arquitetura vernacular, casa de campo, autossuficiência energética, placas solares
**Imagens:** living com pé-direito duplo e janela panorâmica para o lago · fachada vista do lago · hall com aquário embutido · cozinha com ilha em pedra

### 7.11 Loft Bear Cave

**Categoria:** Interiores
**Conceito:** "Funcionalidade e elegância em cada detalhe"
**Área:** 55 m²

**Texto:**
> Um loft contemporâneo de 55 m² que é o equilíbrio perfeito entre funcionalidade e elegância.
>
> Em cada detalhe, buscamos trazer a modernidade dos tons de cinza e o aconchego da madeira, harmonizando com toques de verde que conectam o ambiente à natureza.
>
> Os espelhos estrategicamente posicionados não apenas ampliam o espaço, mas também realçam a sofisticação e o frescor deste lar.
>
> Este loft é uma verdadeira fusão de estilo e praticidade, onde o design encontra a natureza em perfeita harmonia.

**Imagens:** living integrado com painel de mármore e TV · hall de entrada com quadro do urso · vista do jantar com pendentes · cozinha em tons escuros · detalhe do quadro e arandelas

---

## 8. Página: Escritório (`/escritorio`)

Seções:

1. **Hero** — retrato do arquiteto (a foto P&B sentado na poltrona, do PDF) + frase "O espaço é a moldura, a vida é a obra".
2. **Manifesto** — texto sobre a filosofia de projeto. Base disponível no PDF: design minimalista, valorização do talento local, o espaço como moldura da vida. `[LACUNA]` — precisa de um texto autoral mais completo.
3. **Trajetória** — a participação na CASACOR SC como marco. `[LACUNA]` formação, ano de fundação do escritório, prêmios, publicações.
4. **Equipe** — foto P&B do grupo (5 pessoas) já disponível. Nomes: Leonardo Palma, Leonardo Vieira, Iuri Meinhard, Rafael Santos e Luciano Rother. `[LACUNA]` funções de cada um e se todos integram o escritório ou apenas a coautoria do projeto CASACOR.
5. **Como trabalhamos** — etapas do processo de projeto. `[LACUNA]` conteúdo integral.
6. **CTA de contato.**

---

## 9. Página: Serviços (`/servicos`)

Um bloco por disciplina, cada um com: descrição, o que está incluso, projetos relacionados.

### Arquitetura
Residências unifamiliares, casas de praia e de campo, e projetos institucionais. Ênfase em relação com a paisagem, conforto térmico (brises, orientação solar) e materiais de baixo impacto.
**Projetos:** Casa Sobre Trapézios · Casa Breeze · Casa Lumberjack · Escola Atlântica

### Interiores
Projetos completos e reformas de alto padrão — living, cozinha, suítes, lofts e ambientes infantis. Ênfase em marcenaria sob medida, iluminação direta e indireta e seleção de materiais nobres.
**Projetos:** Casa Z · Apartamento Savanna · Suíte Nogueira · Suíte Maple · Suíte Wonderland · Loft Bear Cave

### Paisagismo
Jardins pensados para alto índice de sombreamento e baixa manutenção, integrados ao projeto lumínico e à arquitetura.
**Projetos:** Casa Sobre Trapézios · Casa Breeze · Escola Atlântica

`[LACUNA]` — escopo de entrega, etapas, prazos e faixa de investimento de cada serviço.

---

## 10. Página: CASACOR (`/casacor`)

Página dedicada, com o mesmo template de projeto, mas com destaque editorial:

1. Hero com o salão da exposição
2. Logo CASACOR + título "Harmonia do Caos"
3. Os dois blocos de texto (seção 7.1)
4. Bloco de assinatura com a foto da equipe e os cinco nomes
5. Galeria completa da exposição
6. `[LACUNA]` edição/ano da CASACOR SC, endereço, período, crédito fotográfico

---

## 11. Página: Contato (`/contato`)

**Seções:**

1. **Título:** Vamos projetar o seu espaço
2. **Formulário de briefing** — campos:
   - Nome
   - E-mail
   - Telefone / WhatsApp
   - Tipo de projeto (select): Arquitetura · Interiores · Paisagismo · Projeto completo
   - Tipo de imóvel: Casa · Apartamento · Comercial · Institucional
   - Cidade
   - Metragem aproximada
   - Prazo desejado
   - Mensagem
3. **Dados de contato diretos** — `[LACUNA]` e-mail, telefone, endereço do escritório, Instagram
4. **Mapa** — localização do escritório em Balneário Camboriú `[LACUNA]` endereço
5. **Download do portfólio** em PDF

---

## 12. Componentes reutilizáveis

| Componente | Uso |
|---|---|
| `SiteHeader` | Navegação fixa com transparência condicional |
| `SiteFooter` | Rodapé global |
| `HeroFullBleed` | Hero de imagem com título sobreposto (home + projetos) |
| `ConceptQuote` | Frase manuscrita entre aspas — assinatura tipográfica do site |
| `ProjectCard` | Card de projeto para grids e destaques |
| `ProjectGrid` | Grid assimétrico com filtros |
| `GalleryPair` | Duas imagens lado a lado (padrão do PDF) |
| `GalleryQuad` | Grade 2×2 (padrão do PDF) |
| `TextImageSplit` | Texto à esquerda + imagem vertical à direita |
| `SpecList` | Ficha técnica do projeto |
| `SectionDark` | Wrapper de seção escura |
| `CTABlock` | Bloco de chamada para contato |
| `ProjectNav` | Anterior / Próximo |
| `BriefingForm` | Formulário de contato |

---

## 13. Direção visual sugerida

Derivada diretamente do portfólio, não de um template genérico.

**Paleta**

| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#15181B` | Fundo escuro (hero, CASACOR, contato) |
| `--paper` | `#F2F2F2` | Fundo claro (miolo, projetos) |
| `--white` | `#FFFFFF` | Cards, respiro |
| `--text` | `#1A1A1A` | Texto sobre fundo claro |
| `--muted` | `#8A8A8A` | Legendas, numeração de página |
| `--accent` | `#B45A2A` | Aço Corten — acento raro, para hover e detalhes |

> O acento em Corten vem de um material real do repertório (os brises da Casa Sobre Trapézios), não de uma escolha decorativa. Usar com muita parcimônia — no máximo em estados de hover e num filete de destaque.

**Tipografia (três papéis, como no PDF)**

- **Assinatura/conceito:** fonte manuscrita fina — a mesma do logotipo, usada apenas nas frases-conceito e no logo. Nunca em blocos de texto.
- **Display:** sans-serif geométrica bold, caixa alta, tracking apertado — para títulos de projeto.
- **Corpo:** sans-serif neutra de baixa altura-x, alinhamento justificado nos blocos longos (preserva a leitura do PDF), 16–18 px.
- **Utilitário:** versalete ou sans em caixa alta com tracking largo, para categorias, numeração e rodapés — herda o tratamento de `arquitetura interiores e paisagismo` da capa.

**Elemento-assinatura do site**
A numeração de páginas do PDF (`Leonardo Palma ——— 07`) transformada em um indicador fixo de progresso lateral nas páginas de projeto. É um detalhe que só faz sentido para este cliente e amarra o site ao objeto impresso de origem.

**Movimento**
Uma sequência orquestrada na entrada (dessaturação → cor no hero) e revelações discretas por scroll. Nada além disso — o repertório é fotográfico e a imagem precisa de silêncio ao redor.

---

## 14. Especificações técnicas

- **Imagens:** exportar em WebP/AVIF com fallback JPEG; hero em 2560 px, galeria em 1600 px, cards em 800 px. Lazy loading em tudo abaixo da dobra. As imagens do PDF estão comprimidas — **solicitar os arquivos originais em alta resolução**.
- **Responsividade:** grids de 2 e 4 colunas colapsam para 1 coluna no mobile; hero passa a 100svh; menu em overlay.
- **Acessibilidade:** `alt` descritivo em todas as imagens de projeto, foco visível no teclado, contraste mínimo AA, `prefers-reduced-motion` respeitado.
- **Performance:** meta LCP < 2,5 s mesmo com heros pesados — usar `priority` na imagem do hero e placeholders blur.
- **CMS sugerido:** qualquer headless com o modelo da seção 6, para que o escritório publique novos projetos sem desenvolvimento.

---

## 15. SEO — títulos e descrições por página

| Página | Title | Meta description |
|---|---|---|
| Home | Leonardo Palma — Arquitetura, Interiores e Paisagismo \| Balneário Camboriú | Escritório de arquitetura, interiores e paisagismo de alto padrão em Balneário Camboriú. Projetos residenciais, comerciais e institucionais. |
| Projetos | Projetos — Leonardo Palma Arquitetura | Casas, apartamentos, suítes e projetos institucionais assinados por Leonardo Palma. |
| Casa Sobre Trapézios | Casa Sobre Trapézios — Leonardo Palma | Residência elevada sobre prismas trapezoidais, com brises de Aço Corten e paisagismo mediterrâneo. |
| Casa Z | Casa Z — Reforma de Interiores Art Déco \| Leonardo Palma | Reforma de alto padrão com Art Déco contemporâneo, mármore Nero Marquina e vista para a praia do Estaleirinho. |
| Escola Atlântica | Escola Atlântica — Arquitetura Escolar \| Leonardo Palma | Projeto institucional inspirado em um aquário, com fachada metálica vazada e princípios de biofilia. |
| Escritório | O Escritório — Leonardo Palma Arquitetura | Conheça a filosofia de projeto e a equipe por trás dos projetos de Leonardo Palma. |
| Contato | Contato — Leonardo Palma Arquitetura | Comece seu projeto de arquitetura, interiores ou paisagismo em Balneário Camboriú. |

**Dados estruturados:** `Organization` + `LocalBusiness` na home (Balneário Camboriú, SC) e `CreativeWork` em cada página de projeto.

---

## 16. Lacunas de conteúdo — pendências antes do desenvolvimento

Nada disso está no PDF e precisa vir do escritório:

**Crítico**
- [ ] Dados de contato: e-mail, telefone/WhatsApp, endereço
- [ ] Instagram e demais redes sociais
- [ ] Imagens em alta resolução (as do PDF estão comprimidas)
- [ ] Créditos de fotografia e de renderização
- [ ] Ano, local, área e status de cada projeto

**Importante**
- [ ] Texto autoral sobre o escritório (bio, formação, ano de fundação)
- [ ] Funções de cada integrante da equipe
- [ ] Descrição do processo de trabalho (etapas do projeto)
- [ ] Edição/ano da CASACOR SC e período da exposição
- [ ] Número atualizado de anos de mercado (o PDF diz "dois anos")

**Desejável**
- [ ] Depoimentos de clientes
- [ ] Publicações e prêmios
- [ ] Vídeo institucional ou walkthrough de algum projeto para o hero
- [ ] Política de privacidade (LGPD) para o formulário de contato

---

## 17. Prioridade de construção

**Fase 1 — MVP**
Home · Projetos (índice) · Páginas de projeto (11) · Contato · Header/Footer

**Fase 2**
Escritório · Serviços · CASACOR · Formulário de briefing completo · SEO e dados estruturados

**Fase 3**
Blog/Diário de obra · Versão em inglês · Integração com CMS para publicação autônoma