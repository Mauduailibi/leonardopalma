import { projectAssets, type ProjectSlug } from "@/lib/assets"
import { padIndex } from "@/lib/utils"
import { siteConfig } from "@/content/site"

export type ProjectCategory = "arquitetura" | "interiores" | "paisagismo" | "exposicoes"

export type Project = {
  slug: ProjectSlug
  title: string
  concept: string
  excerpt: string
  description: string[]
  categories: ProjectCategory[]
  categoryLabels: string[]
  tags?: string[]
  year: string
  location: string
  area?: string
  coordinates?: string
  highlights?: string[]
  featured: boolean
  imageCaptions: {
    hero: string
    card: string
  }
  galleryCaptions: string[]
}

/* Máximo de imagens que o layout da galeria comporta (par · larga · grade de 4) */
export const PROJECT_GALLERY_COUNT = 7

export const categoryLabel: Record<ProjectCategory, string> = {
  arquitetura: "Arquitetura",
  interiores: "Interiores",
  paisagismo: "Paisagismo",
  exposicoes: "Exposições",
}

const extraGalleryCaption = "[Lacuna] imagem adicional da galeria"

export const projects: Project[] = [
  {
    slug: "harmonia-do-caos",
    title: "Harmonia do Caos",
    concept: "O espaço é a moldura, a vida é a obra",
    excerpt:
      "A exposição Harmonia do Caos na CASACOR SANTA CATARINA reúne mais de 30 artistas nacionais e internacionais.",
    description: [
      "A exposição Harmonia do Caos na CASACOR SANTA CATARINA reúne mais de 30 artistas nacionais e internacionais e reflete os dois anos de aprendizado do escritório no mercado de arquitetura. Com um design minimalista, o espaço destaca as obras de arte, que dialogam entre si e com o público em um cenário que simula um labirinto. A curadoria plural explora diversas linguagens artísticas, valorizando o talento local.",
      "Inspirado na música Bolero de Ravel, o projeto propõe um jogo entre equilíbrio e desequilíbrio, criando uma experiência imersiva e desconfortavelmente confortável, onde o caos se transforma em harmonia. A exposição abrange estilos como Pop Art e Abstracionismo, mostrando a convivência de contrastes e formas de maneira coesa além de uma seleção de móveis assinados por designers brasileiros.",
    ],
    categories: ["exposicoes"],
    categoryLabels: ["Exposição"],
    tags: ["Exposição", "CASACOR", "Efêmero"],
    year: "[Lacuna]",
    location: "[Lacuna]",
    featured: false,
    imageCaptions: {
      hero: "imagem 4:5 · salão da exposição com bancos em suede e retratos de grande formato",
      card: "salão da exposição",
    },
    galleryCaptions: [
      "mural colorido com pessoas em movimento na escadaria",
      "retrato do arquiteto",
      "retrato da equipe · cinco pessoas · preto e branco",
      "poltrona laranja com mesas laterais",
      "salão da exposição com bancos em suede e retratos de grande formato",
      "detalhe de banco e mesa lateral",
      "poltrona escultórica clara",
    ],
  },
  {
    slug: "casa-sobre-trapezios",
    title: "Casa Sobre Trapézios",
    concept: "Casa elevada e jardim com sombreamento otimizado e baixa manutenção",
    excerpt:
      "Pensada para ser um refúgio das regiões cosmopolitas, a Casa Sobre Trapézios ergue-se sobre prismas trapezoidais para criar um ambiente único e elevado do chão, estabelecendo uma relação natural com a paisagem e com as árvores do entorno.",
    description: [
      "Pensada para ser um refúgio das regiões cosmopolitas, a Casa Sobre Trapézios ergue-se sobre prismas trapezoidais para criar um ambiente único e elevado do chão, estabelecendo uma relação natural com a paisagem e com as árvores do entorno.",
      "Em seu perímetro, recebe brises deslizantes verticais de Aço Corten que além de trazerem a edificação uma estética contemporânea, são capazes de proporcionar equilíbrio térmico no verão e maior incidência solar no inverno.",
      "Guiadas pelas placas de mármore travertino, encontram-se as áreas de lazer e área gourmet que proporcionam espaços de confraternização, divertimento, aconchego e contemplação, atrelados a um projeto paisagístico mediterrâneo.",
      "O jardim, projetado para ter um alto índice de sombreamento e pouca queda de folhas durante o ano, proporciona um ambiente integrado com os arredores e une o projeto lumínico, tornando a relação NATURAL/ARTIFICIAL mais íntima e completa.",
    ],
    categories: ["arquitetura", "paisagismo"],
    categoryLabels: ["Arquitetura", "Paisagismo"],
    year: "[Lacuna]",
    location: "[Lacuna]",
    coordinates: "[Lacuna]",
    featured: true,
    imageCaptions: {
      hero: "imagem 3:2 · área de lazer com piscina ao entardecer",
      card: "fachada em concreto com brises de Aço Corten",
    },
    galleryCaptions: [
      "fachada em contra-plongée com jardim",
      "fachada frontal diurna",
      "garagem com detalhe dos brises",
      "área de lazer com piscina ao entardecer",
      "vista da piscina com deck",
      "jardim lateral com passarela",
      "piscina com prainha e espreguiçadeiras",
    ],
  },
  {
    slug: "casa-z",
    title: "Casa Z",
    concept: "Luxo e requinte em cada detalhe desta reforma sofisticada",
    excerpt:
      "Nesta requintada reforma de arquitetura de interiores, o estilo Art Déco permeia cada detalhe, criando um ambiente luxuoso e sofisticado.",
    description: [
      "Nesta requintada reforma de arquitetura de interiores, o estilo Art Déco permeia cada detalhe, criando um ambiente luxuoso e sofisticado.",
      "O hall de entrada é uma composição magnífica, com um reluzente piso de mármore Nero Marquina e um imponente painel de 4,5 metros de altura, esculpido em metalon preto fosco e vidro canelado fumê, acompanhado por uma belíssima escultura dourada de um rosto humano, evocando silenciosa grandiosidade.",
      "No living, uma paleta de cores escuras e cativantes — cinza, preto e couro — se desdobra em mobiliário orgânico, enquanto a iluminação direta e indireta, através de fitas de LED e sancas, realça os pontos de interesse. O pendente assinado por Jader Almeida, com suas centenas de pontos luminosos, eleva o espaço a novas alturas. As generosas aberturas proporcionam uma vista deslumbrante para a piscina e a praia do Estaleirinho.",
      "A cozinha, ponto focal deste enigma de elegância, ostenta uma bancada esculpida em Quartzito Wakanda de 5 metros, acomodando nove convivas. Móveis em tom Marsala, bancadas em Nero Marquina polido e quartzito Wakanda escovado criam uma ousada harmonia com o preto predominante no living. Equipada com eletrodomésticos de última geração, esta cozinha é um santuário da alta tecnologia.",
      "O bar, marcado pelo letreiro em neon e uma coleção nobre de whiskies importados, brilha em destaque. Uma adega dupla, máquina de gelo e cervejeira completam este retiro de luxo e imponência.",
      "Em síntese, esta reforma é uma ode à elegância imponente, onde o estilo Art Déco se entrelaça com uma visão contemporânea, resultando em um ambiente de puro esplendor e sofisticação.",
    ],
    categories: ["interiores"],
    categoryLabels: ["Interiores"],
    tags: ["Interiores", "Reforma", "Art Déco"],
    year: "[Lacuna]",
    location: "Vista para a praia do Estaleirinho",
    highlights: ["Painel de 4,5 m", "Bancada de 5 m para 9 convivas", "Pendente Jader Almeida"],
    featured: true,
    imageCaptions: {
      hero: "living com pé-direito duplo e escada",
      card: "living Art Déco contemporâneo",
    },
    galleryCaptions: [
      "detalhe do painel Art Déco e escultura dourada",
      "cozinha com bancada em Nero Marquina",
      "vista superior do living",
      "bar com letreiro neon “cheers”",
      "living com pé-direito duplo e escada",
      "vaso em cerâmica diante do painel vazado",
    ],
  },
  {
    slug: "casa-breeze",
    title: "Casa Breeze",
    concept: "Perfeita para desfrutar da brisa e do som das ondas",
    excerpt:
      "Uma residência contemporânea de praia que redefine o luxo à beira do oceano Atlântico.",
    description: [
      "Uma residência contemporânea de praia que redefine o luxo à beira do oceano Atlântico. A fachada deslumbrante combina a beleza atemporal da madeira e da pedra natural, criando uma estética única que se integra perfeitamente ao ambiente natural circundante.",
      "A iluminação é a chave para realçar a modernidade desta residência. A fachada é adornada com uma miríade de LEDs, proporcionando uma atmosfera acolhedora ao anoitecer e transformando a casa em uma verdadeira obra de arte luminosa.",
      "A proximidade com a praia é uma característica marcante deste projeto. Grandes janelas de vidro proporcionam vistas panorâmicas do oceano, enquanto terraços espaçosos convidam a desfrutar do som suave das ondas e da brisa do mar. Este é mais do que um lar; é uma experiência de vida à beira-mar, onde a arquitetura contemporânea se funde harmoniosamente com a natureza.",
    ],
    categories: ["arquitetura", "paisagismo"],
    categoryLabels: ["Arquitetura", "Paisagismo"],
    year: "[Lacuna]",
    location: "[Lacuna]",
    featured: true,
    imageCaptions: {
      hero: "fachada com paisagismo de agaves e palmeiras",
      card: "fachada contemporânea à beira-mar",
    },
    galleryCaptions: [
      "fachada com paisagismo de agaves e palmeiras",
      "vista frontal com garagem",
      "detalhe do volume em madeira",
      "fachada lateral com montanhas ao fundo",
      "vista da rua com a praia ao fundo",
      "fachada com palmeiras e volume branco",
      "vista elevada da residência",
    ],
  },
  {
    slug: "escola-atlantica",
    title: "Escola Atlântica",
    concept: "Cada ambiente estimula a criatividade e os sentidos",
    excerpt:
      "O bloco principal, onde se localizam as salas de aula, o auditório e a administração, foi pensado para remeter a um aquário com sua forma bruta e retilínea.",
    description: [
      "O bloco principal, onde se localizam as salas de aula, o auditório e a administração fora pensado cuidadosamente para remeter a um aquário com sua forma bruta e retilínea, onde os elementos metálicos vazados da fachada lembram algas marinhas, e os alunos e funcionários no interior representam a vida marinha em constante movimento e adaptação.",
      "Toda a escola apresenta uma leveza manifestada em suas cores e ambientes, proporcionando aos alunos um ambiente leve e que estimula a criatividade e os sentidos a todo momento.",
      "O contato com a natureza é indispensável, expressando a hipótese da Biofilia, nos arredores da escola há uma grande variedade de vegetação que oferece sombra e locais de contemplação, possibilitando uma conexão mais íntima com a natureza e outras formas de vida.",
    ],
    categories: ["arquitetura", "paisagismo"],
    categoryLabels: ["Institucional"],
    tags: ["Institucional", "Educacional"],
    year: "[Lacuna]",
    location: "[Lacuna]",
    featured: true,
    imageCaptions: {
      hero: "fachada com elementos verticais amarelos e azuis",
      card: "arquitetura escolar institucional",
    },
    galleryCaptions: [
      "fachada com elementos verticais amarelos e azuis",
      "entrada com sinalização",
      "playground com módulos coloridos",
      "vista do conjunto a partir da rua",
      "área de contemplação arborizada",
      "quadra e piscina junto à praia",
      "crianças no playground com balanço",
    ],
  },
  {
    slug: "casa-lumberjack",
    title: "Casa Lumberjack",
    concept: "Uma casa no lago aconchegante",
    excerpt:
      "A casa em si possui elementos retilíneos em toda a composição, guiando o olhar até o lago e possui grandes aberturas para possibilitar a contemplação da natureza do entorno.",
    description: [
      "A casa em si possui elementos retilíneos em toda a composição, guiando o olhar até o lago e possui grandes aberturas para possibilitar a contemplação da natureza do entorno. A escolha de materiais foi baseada em estudos de arquitetura vernacular, buscando materiais e mão de obra local e de baixo impacto no meio ambiente.",
      "Seu interior possui grande influência de madeira, trazendo aconchego a quem toma uma taça de vinho na poltrona e também elementos em preto e branco, visando a exclusividade e alto padrão em uma casa de campo. A casa possui grande espaço para festas e reuniões sociais, além de quatro suítes, quatro lavabos, lavanderia, quarto de empregados e 4 vagas de garagem para veículos.",
      "A casa é autossuficiente em energia graças às suas placas solares na cobertura evitando assim gastos durante o inverno.",
    ],
    categories: ["arquitetura"],
    categoryLabels: ["Arquitetura"],
    tags: ["Arquitetura", "Casa de campo"],
    year: "[Lacuna]",
    location: "[Lacuna]",
    highlights: [
      "4 suítes",
      "4 lavabos",
      "Lavanderia",
      "Quarto de empregados",
      "4 vagas",
      "Energia solar",
    ],
    featured: true,
    imageCaptions: {
      hero: "living com pé-direito duplo e janela panorâmica para o lago",
      card: "casa de campo à beira do lago",
    },
    galleryCaptions: [
      "living com pé-direito duplo e janela panorâmica para o lago",
      "fachada vista do lago",
      "hall com aquário embutido",
      "cozinha com ilha em pedra",
    ],
  },
  {
    slug: "suite-maple",
    title: "Suíte Maple",
    concept: "Uma composição equilibrada entre rusticidade e modernidade",
    excerpt:
      "Com detalhes de madeira ripada nas paredes e teto, criamos uma atmosfera envolvente e acolhedora.",
    description: [
      "Com detalhes de madeira ripada nas paredes e teto, criamos uma atmosfera envolvente e acolhedora. O revestimento atrás da cabeceira, que imita rocha natural branca, traz um toque de leveza e elegância ao ambiente, resultando em uma composição equilibrada entre a rusticidade e a modernidade.",
      "Cada detalhe foi pensado para oferecer conforto e tranquilidade, tornando esse espaço o lugar perfeito para relaxar e renovar as energias.",
    ],
    categories: ["interiores"],
    categoryLabels: ["Interiores"],
    year: "[Lacuna]",
    location: "[Lacuna]",
    featured: false,
    imageCaptions: {
      hero: "vista do quarto com cabeceira retroiluminada",
      card: "suíte com madeira ripada",
    },
    galleryCaptions: [
      "corredor com nichos iluminados e quadro de montanha",
      "closet com portas de vidro e home office",
      "vista do quarto com cabeceira retroiluminada",
      "detalhe da cabeceira em rocha natural",
      "quarto com janela e cabeceira em rocha natural",
      "home office e TV junto à cama",
      "detalhe da cama com a cabeceira ao fundo",
    ],
  },
  {
    slug: "suite-wonderland",
    title: "Suíte Wonderland",
    concept: "Espaço criativo, ideal para brincar e crescer",
    excerpt:
      "Em tons de vinho e rosa claro, criamos um ambiente acolhedor e seguro, onde o conforto se encontra com a criatividade.",
    description: [
      "Em tons de vinho e rosa claro, criamos um ambiente acolhedor e seguro, onde o conforto se encontra com a criatividade. Este refúgio infantil foi pensado para estimular a imaginação e o desenvolvimento da criança, enquanto ela se sente em seu próprio castelo mágico.",
      "Transformar sonhos em realidade é a nossa paixão. E esse quarto, cheio de amor e magia, é a prova disso.",
    ],
    categories: ["interiores"],
    categoryLabels: ["Interiores"],
    tags: ["Interiores", "Infantil"],
    year: "[Lacuna]",
    location: "[Lacuna]",
    featured: false,
    imageCaptions: {
      hero: "beliche com arco",
      card: "quarto infantil em tons de vinho e rosa",
    },
    galleryCaptions: [
      "corredor com papel de parede ilustrado e espelhos circulares",
      "beliche com arco",
      "marcenaria com nichos e palhinha",
      "poltrona junto à janela",
      "banheiro em tons rosados",
      "marcenaria com arco e área de brincar",
      "cama com nicho circular e bichos de pelúcia",
    ],
  },
  {
    slug: "apartamento-savanna",
    title: "Apartamento Savanna",
    concept: "Conforto e sofisticação em um design inspirado na natureza",
    excerpt:
      "Transformamos este apartamento em um refúgio contemporâneo, onde o uso de madeira e ripados no teto trazem aconchego e sofisticação.",
    description: [
      "Transformamos este apartamento em um refúgio contemporâneo, onde o uso de madeira e ripados no teto trazem aconchego e sofisticação.",
      "Os detalhes em branco adicionam leveza, enquanto a pedra natural, presente nos ambientes, conecta o interior à natureza de forma orgânica e elegante.",
      "O ambiente foi elaborado para criar uma atmosfera harmoniosa e moderna, perfeita para viver com estilo e conforto.",
    ],
    categories: ["interiores"],
    categoryLabels: ["Interiores"],
    year: "[Lacuna]",
    location: "[Lacuna]",
    featured: false,
    imageCaptions: {
      hero: "living com painel de pedra natural e teto ripado",
      card: "apartamento contemporâneo",
    },
    galleryCaptions: [
      "living com painel de pedra natural e teto ripado",
      "sala de jantar com adega vertical",
      "cozinha com bancada em madeira",
      "vista integrada living/cozinha",
      "canto de leitura com poltrona",
      "living e jantar integrados com quadro de girafa",
      "painel de TV com adega iluminada",
    ],
  },
  {
    slug: "suite-nogueira",
    title: "Suíte Nogueira",
    concept: "Atmosfera moderna com cores elegantes e refinadas",
    excerpt:
      "As cores amadeiradas, cuidadosamente selecionadas, criam uma atmosfera acolhedora que se contrapõe com elegância ao cimento queimado.",
    description: [
      "As cores amadeiradas, cuidadosamente selecionadas, criam uma atmosfera acolhedora que se contrapõe com elegância ao cimento queimado, conferindo modernidade e sofisticação aos ambientes.",
      "O uso de MDF em brilho em todo o mobiliário e cabeceira acrescenta um toque de requinte, refletindo a luz e ampliando a sensação de espaço.",
      "O espaço foi pensado para proporcionar um refúgio de paz e tranquilidade, ideal para relaxar e recarregar as energias após um dia cheio.",
    ],
    categories: ["interiores"],
    categoryLabels: ["Interiores"],
    year: "[Lacuna]",
    location: "[Lacuna]",
    featured: false,
    imageCaptions: {
      hero: "vista geral do quarto",
      card: "suíte com marcenaria em brilho",
    },
    galleryCaptions: [
      "cristaleira em madeira ébano com vista para o quarto",
      "closet e penteadeira",
      "cabeceira com iluminação linear",
      "vista geral do quarto",
      "quarto com painel de vidro e janela",
      "penteadeira e marcenaria em brilho",
    ],
  },
  {
    slug: "loft-bear-cave",
    title: "Loft Bear Cave",
    concept: "Funcionalidade e elegância em cada detalhe",
    excerpt:
      "Um loft contemporâneo de 55 m² que é o equilíbrio perfeito entre funcionalidade e elegância.",
    description: [
      "Um loft contemporâneo de 55 m² que é o equilíbrio perfeito entre funcionalidade e elegância.",
      "Em cada detalhe, buscamos trazer a modernidade dos tons de cinza e o aconchego da madeira, harmonizando com toques de verde que conectam o ambiente à natureza.",
      "Os espelhos estrategicamente posicionados não apenas ampliam o espaço, mas também realçam a sofisticação e o frescor deste lar.",
      "Este loft é uma verdadeira fusão de estilo e praticidade, onde o design encontra a natureza em perfeita harmonia.",
    ],
    categories: ["interiores"],
    categoryLabels: ["Interiores"],
    year: "[Lacuna]",
    location: "[Lacuna]",
    area: "55 m²",
    featured: false,
    imageCaptions: {
      hero: "living integrado com painel de mármore e TV",
      card: "loft contemporâneo 55 m²",
    },
    galleryCaptions: [
      "living integrado com painel de mármore e TV",
      "hall de entrada com quadro do urso",
      "vista do jantar com pendentes",
      "cozinha em tons escuros",
      "detalhe do quadro e arandelas",
      "estar com poltrona e mesa junto à janela",
      "living com sofá e painel iluminado",
    ],
  },
]

export const indexProjectOrder: ProjectSlug[] = [
  "casa-sobre-trapezios",
  "casa-z",
  "harmonia-do-caos",
  "escola-atlantica",
  "casa-lumberjack",
  "apartamento-savanna",
  "casa-breeze",
  "loft-bear-cave",
  "suite-nogueira",
  "suite-maple",
  "suite-wonderland",
]

export const projectKickers: Record<ProjectSlug, string> = {
  "harmonia-do-caos": "Exposição / Efêmero",
  "casa-sobre-trapezios": "Arquitetura + Paisagismo",
  "casa-z": "Interiores (reforma)",
  "suite-maple": "Interiores",
  "casa-breeze": "Arquitetura + Paisagismo",
  "escola-atlantica": "Institucional / Educacional",
  "suite-wonderland": "Interiores / Infantil",
  "apartamento-savanna": "Interiores",
  "suite-nogueira": "Interiores",
  "casa-lumberjack": "Arquitetura (casa de campo)",
  "loft-bear-cave": "Interiores · 55 m²",
}

export const wideProjectSlugs: ProjectSlug[] = [
  "casa-sobre-trapezios",
  "escola-atlantica",
  "casa-breeze",
]

export const projectFilters = [
  { id: "todos", label: "Todos" },
  { id: "arquitetura", label: "Arquitetura" },
  { id: "interiores", label: "Interiores" },
  { id: "paisagismo", label: "Paisagismo" },
  { id: "exposicoes", label: "Exposições" },
] as const

export type ProjectFilterId = (typeof projectFilters)[number]["id"]

export const featuredProjectOrder: ProjectSlug[] = [
  "casa-sobre-trapezios",
  "casa-z",
  "escola-atlantica",
  "casa-lumberjack",
  "casa-breeze",
]

export const footerProjectSlugs: ProjectSlug[] = [
  "casa-sobre-trapezios",
  "casa-z",
  "escola-atlantica",
  "casa-lumberjack",
]

export function isLacuna(value: string | undefined) {
  return !value || value.includes("[Lacuna]")
}

export function getProject(slug: ProjectSlug) {
  const project = projects.find((item) => item.slug === slug)
  if (!project) {
    throw new Error(`Project not found: ${slug}`)
  }
  return { ...project, assets: projectAssets(slug), kicker: projectKickers[slug] }
}

export function isProjectSlug(value: string): value is ProjectSlug {
  return projects.some((item) => item.slug === value)
}

export function findProject(slug: string) {
  if (!isProjectSlug(slug)) return undefined
  return getProject(slug)
}

export function getFeaturedProjects() {
  return featuredProjectOrder.map((slug) => getProject(slug))
}

export function getFooterProjects() {
  return footerProjectSlugs.map((slug) => getProject(slug))
}

export function getIndexProjects() {
  return indexProjectOrder.map((slug) => ({
    ...getProject(slug),
    layout: wideProjectSlugs.includes(slug) ? ("wide" as const) : ("portrait" as const),
  }))
}

export function getAdjacentProjects(slug: ProjectSlug) {
  const index = indexProjectOrder.indexOf(slug)
  const prevSlug =
    indexProjectOrder[(index - 1 + indexProjectOrder.length) % indexProjectOrder.length]
  const nextSlug = indexProjectOrder[(index + 1) % indexProjectOrder.length]

  return {
    prev: getProject(prevSlug),
    next: getProject(nextSlug),
    index: index + 1,
  }
}

export function getProjectGallery(slug: ProjectSlug) {
  const project = getProject(slug)
  const count = Math.min(project.galleryCaptions.length, PROJECT_GALLERY_COUNT)
  return Array.from({ length: count }, (_, index) => {
    const caption = project.galleryCaptions[index] ?? extraGalleryCaption
    const pending = isLacuna(caption)
    return {
      src: project.assets.gallery(index + 1),
      caption,
      alt: pending ? `${project.title} — imagem ${padIndex(index + 1)}` : caption,
      pending,
    }
  })
}

export function getProjectSheet(slug: ProjectSlug) {
  const project = getProject(slug)
  const rows = [
    { label: "Ano", value: project.year },
    { label: "Local", value: project.location },
    { label: "Área", value: project.area ?? "[Lacuna]" },
    { label: "Escopo", value: project.kicker },
    { label: "Coordenadas", value: project.coordinates ?? "[Lacuna]" },
  ]

  return siteConfig.showLacunas ? rows : rows.filter((row) => !isLacuna(row.value))
}

export function isProjectFilterId(value: string | null): value is ProjectFilterId {
  return projectFilters.some((filter) => filter.id === value)
}
