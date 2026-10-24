import { assetPaths, type ProjectSlug } from "@/lib/assets"
import { siteConfig } from "@/content/site"

export type RelatedCardVariant = "portrait" | "compact" | "landscape"

export type ServiceRelated = {
  slug: ProjectSlug
  kicker?: string
}

export type ServiceDiscipline = {
  id: "arquitetura" | "interiores" | "paisagismo"
  index: string
  title: string
  align: "start" | "end"
  paragraphs: [string, string]
  image: {
    src: string
    caption: string
    alt: string
  }
  inclusos: { index: string; label: string; lacuna?: boolean }[]
  related: ServiceRelated[]
  relatedVariant: RelatedCardVariant
}

export const servicesPage = {
  titleLit: "Serviços",
  titleDim: "em três disciplinas que caminham juntas",
  support: siteConfig.description,
}

export const serviceDisciplines: ServiceDiscipline[] = [
  {
    id: "arquitetura",
    index: "01",
    title: "Arquitetura",
    align: "start",
    paragraphs: [
      "Residências unifamiliares, casas de praia e de campo, e projetos institucionais.",
      "Ênfase em relação com a paisagem, conforto térmico (brises, orientação solar) e materiais de baixo impacto.",
    ],
    image: {
      src: assetPaths.pages.servicos.arquitetura,
      caption: "imagem full-bleed · fachada com brises deslizantes de Aço Corten",
      alt: "Fachada com brises deslizantes de Aço Corten",
    },
    inclusos: [
      { index: "01", label: "Relação com a paisagem e com o entorno" },
      { index: "02", label: "Conforto térmico — brises e orientação solar" },
      { index: "03", label: "Materiais de baixo impacto" },
      {
        index: "04",
        label: "[Lacuna] escopo de entrega, etapas, prazos e faixa de investimento",
        lacuna: true,
      },
    ],
    relatedVariant: "portrait",
    related: [
      { slug: "casa-sobre-trapezios", kicker: "Arquitetura" },
      { slug: "casa-breeze", kicker: "Arquitetura" },
      { slug: "casa-lumberjack", kicker: "Casa de campo" },
      { slug: "escola-atlantica", kicker: "Institucional" },
    ],
  },
  {
    id: "interiores",
    index: "02",
    title: "Interiores",
    align: "end",
    paragraphs: [
      "Projetos completos e reformas de alto padrão — living, cozinha, suítes, lofts e ambientes infantis.",
      "Ênfase em marcenaria sob medida, iluminação direta e indireta e seleção de materiais nobres.",
    ],
    image: {
      src: assetPaths.pages.servicos.interiores,
      caption: "imagem full-bleed · living com pé-direito duplo e iluminação em sanca",
      alt: "Living com pé-direito duplo e iluminação em sanca",
    },
    inclusos: [
      { index: "01", label: "Marcenaria sob medida" },
      { index: "02", label: "Iluminação direta e indireta" },
      { index: "03", label: "Seleção de materiais nobres" },
      {
        index: "04",
        label: "[Lacuna] escopo de entrega, etapas, prazos e faixa de investimento",
        lacuna: true,
      },
    ],
    relatedVariant: "compact",
    related: [
      { slug: "casa-z" },
      { slug: "apartamento-savanna" },
      { slug: "suite-nogueira" },
      { slug: "suite-maple" },
      { slug: "suite-wonderland" },
      { slug: "loft-bear-cave" },
    ],
  },
  {
    id: "paisagismo",
    index: "03",
    title: "Paisagismo",
    align: "start",
    paragraphs: [
      "Jardins pensados para alto índice de sombreamento e baixa manutenção, integrados ao projeto lumínico e à arquitetura.",
      "O jardim, projetado para ter um alto índice de sombreamento e pouca queda de folhas durante o ano, proporciona um ambiente integrado com os arredores e une o projeto lumínico, tornando a relação natural e artificial mais íntima e completa.",
    ],
    image: {
      src: assetPaths.pages.servicos.paisagismo,
      caption: "imagem full-bleed · jardim lateral com passarela e projeto lumínico",
      alt: "Jardim lateral com passarela e projeto lumínico",
    },
    inclusos: [
      { index: "01", label: "Alto índice de sombreamento" },
      { index: "02", label: "Baixa manutenção e pouca queda de folhas" },
      { index: "03", label: "Integração ao projeto lumínico e à arquitetura" },
      {
        index: "04",
        label: "[Lacuna] escopo de entrega, etapas, prazos e faixa de investimento",
        lacuna: true,
      },
    ],
    relatedVariant: "landscape",
    related: [
      { slug: "casa-sobre-trapezios", kicker: "Paisagismo" },
      { slug: "casa-breeze", kicker: "Paisagismo" },
      { slug: "escola-atlantica", kicker: "Paisagismo" },
    ],
  },
]
