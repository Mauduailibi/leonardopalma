import { assetPaths } from "@/lib/assets"
import { getFeaturedProjects } from "@/content/projects"
import { siteConfig } from "@/content/site"

export const homeHero = {
  title: "Arquitetura, interiores e paisagismo de alto padrão",
  titleMobile: "Arquitetura, interiores e paisagismo",
  support: siteConfig.description,
  supportMobile:
    "Design minimalista que valoriza o talento local e projeta espaços onde o caos se transforma em harmonia.",
  image: {
    src: assetPaths.home.hero,
    caption: "imagem 16:9 · residência ao entardecer com luz quente interna · 2560px",
  },
  stats: [
    {
      value: "+30",
      label: "artistas nacionais e internacionais",
    },
    {
      value: "2",
      label: "anos de mercado até a CASACOR SC",
      lacuna: "[Lacuna] atualizar",
    },
  ],
}

export const homeManifesto = {
  lit: "O espaço é a moldura,",
  dim: "a vida é a obra",
  support: siteConfig.description,
}

export const homeDisciplines = {
  title: "Três disciplinas, um projeto",
  kicker: "Arquitetura · Interiores · Paisagismo",
  items: [
    {
      index: "01",
      title: "Arquitetura",
      href: "/servicos#arquitetura",
      inverted: false,
      offset: "down" as const,
      description:
        "Residências que estabelecem relação natural com a paisagem e com o entorno, com soluções de conforto térmico e materiais de baixo impacto.",
    },
    {
      index: "02",
      title: "Interiores",
      href: "/servicos#interiores",
      inverted: true,
      offset: "none" as const,
      description:
        "Ambientes onde cada detalhe é pensado para conforto, tranquilidade e sofisticação — do Art Déco contemporâneo ao aconchego da madeira.",
    },
    {
      index: "03",
      title: "Paisagismo",
      href: "/servicos#paisagismo",
      inverted: false,
      offset: "up" as const,
      description:
        "Jardins projetados para alto índice de sombreamento e baixa manutenção, integrados ao projeto lumínico e aos arredores.",
    },
  ],
}

export const homeDefines = {
  title: "O que define nosso trabalho",
  image: {
    src: assetPaths.home.defines,
    caption: "imagem larga · fachada com brises de Aço Corten",
  },
  principles: [
    {
      index: "01",
      label: "Luz",
      title: "A iluminação é a chave para realçar a modernidade",
      body: "A fachada é adornada com uma miríade de LEDs, proporcionando uma atmosfera acolhedora ao anoitecer e transformando a casa em uma verdadeira obra de arte luminosa.",
    },
    {
      index: "02",
      label: "Material",
      title: "Matéria que equilibra estética e conforto térmico",
      body: "Brises deslizantes verticais de Aço Corten trazem à edificação uma estética contemporânea e proporcionam equilíbrio térmico no verão e maior incidência solar no inverno.",
    },
    {
      index: "03",
      label: "Paisagem",
      title: "A relação NATURAL/ARTIFICIAL mais íntima e completa",
      body: "O jardim, projetado para ter um alto índice de sombreamento e pouca queda de folhas durante o ano, une o projeto lumínico e estabelece uma relação natural com o entorno.",
    },
  ],
}

export const homeFeatured = {
  title: "Projetos em destaque",
  projects: getFeaturedProjects(),
}

export const homeCasacor = {
  kicker: "Casacor",
  lacuna: "[Lacuna] logo oficial · edição e ano",
  title: "Harmonia do Caos — CASACOR Santa Catarina",
  paragraphs: [
    "A exposição Harmonia do Caos na CASACOR SANTA CATARINA reúne mais de 30 artistas nacionais e internacionais e reflete os dois anos de aprendizado do escritório no mercado de arquitetura. Com um design minimalista, o espaço destaca as obras de arte, que dialogam entre si e com o público em um cenário que simula um labirinto. A curadoria plural explora diversas linguagens artísticas, valorizando o talento local.",
    "Inspirado na música Bolero de Ravel, o projeto propõe um jogo entre equilíbrio e desequilíbrio, criando uma experiência imersiva e desconfortavelmente confortável, onde o caos se transforma em harmonia. A exposição abrange estilos como Pop Art e Abstracionismo, mostrando a convivência de contrastes e formas de maneira coesa além de uma seleção de móveis assinados por designers brasileiros.",
  ],
  authorsLabel: "Assinatura do projeto",
  authors:
    "Leonardo Palma, Leonardo Vieira, Iuri Meinhard, Rafael Santos e Luciano Rother",
  href: "/casacor",
  image: {
    src: assetPaths.pages.casacor.hero,
    caption:
      "imagem 4:5 · salão da exposição com bancos em suede e retratos de grande formato",
  },
}

export const homeProcess = {
  title: "Como trabalhamos",
  lacuna: "[Lacuna] etapas do processo · conteúdo integral pendente",
  image: {
    src: assetPaths.home.process,
    caption: "fotografia noturna full-bleed · residência com piscina iluminada",
  },
  steps: [
    {
      index: "01",
      title: "[Lacuna] etapa 01",
      body: "Descrição a ser fornecida pelo escritório.",
      offset: "-36px",
    },
    {
      index: "02",
      title: "[Lacuna] etapa 02",
      body: "Descrição a ser fornecida pelo escritório.",
      offset: "-8px",
    },
    {
      index: "03",
      title: "[Lacuna] etapa 03",
      body: "Descrição a ser fornecida pelo escritório.",
      offset: "-24px",
    },
    {
      index: "04",
      title: "[Lacuna] etapa 04",
      body: "Descrição a ser fornecida pelo escritório.",
      offset: "0px",
    },
  ],
}

export const homeCta = {
  title: "Vamos projetar o seu espaço",
  lacuna: "[Lacuna] texto curto sobre o processo",
}
