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
      caption: "Casa Sobre Trapézios · fachada com brises de Aço Corten e piscina",
      alt: "Casa Sobre Trapézios: fachada com brises de Aço Corten e piscina ao entardecer",
    },
    inclusos: [
      { index: "01", label: "Relação com a paisagem e com o entorno" },
      { index: "02", label: "Conforto térmico — brises e orientação solar" },
      { index: "03", label: "Materiais de baixo impacto" },
      { index: "04", label: "Do estudo preliminar ao projeto executivo, com projeto legal para aprovação" },
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
      caption: "Casa Z · painel Art Déco no living com pé-direito duplo",
      alt: "Casa Z: painel Art Déco com escultura dourada no living de pé-direito duplo, com escada e sancas iluminadas",
    },
    inclusos: [
      { index: "01", label: "Marcenaria sob medida" },
      { index: "02", label: "Iluminação direta e indireta" },
      { index: "03", label: "Seleção de materiais nobres" },
      { index: "04", label: "Do conceito ao detalhamento executivo de marcenaria e iluminação" },
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
      caption: "Casa Sobre Trapézios · jardim lateral com passarela",
      alt: "Casa Sobre Trapézios: jardim lateral com passarela em placas e vegetação densa",
    },
    inclusos: [
      { index: "01", label: "Alto índice de sombreamento" },
      { index: "02", label: "Baixa manutenção e pouca queda de folhas" },
      { index: "03", label: "Integração ao projeto lumínico e à arquitetura" },
      { index: "04", label: "Do estudo de implantação ao projeto executivo de plantio e iluminação" },
    ],
    relatedVariant: "landscape",
    related: [
      { slug: "casa-sobre-trapezios", kicker: "Paisagismo" },
      { slug: "casa-breeze", kicker: "Paisagismo" },
      { slug: "escola-atlantica", kicker: "Paisagismo" },
    ],
  },
]
