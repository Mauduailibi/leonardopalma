export const assetPaths = {
  brand: {
    signature: "/assets/brand/signature.svg",
    favicon: "/favicon.svg",
    portfolioPdf: "/assets/brand/portfolio.pdf",
  },
  home: {
    hero: "/assets/home/hero.jpg",
    defines: "/assets/home/defines.jpg",
    process: "/assets/home/process.jpg",
  },
  pages: {
    casacor: {
      hero: "/assets/pages/casacor/hero.jpg",
    },
    escritorio: {
      hero: "/assets/pages/escritorio/hero.jpg",
      team: "/assets/pages/escritorio/team.jpg",
    },
    contato: {
      map: "/assets/pages/contato/map.jpg",
    },
    servicos: {
      arquitetura: "/assets/pages/servicos/arquitetura.jpg",
      interiores: "/assets/pages/servicos/interiores.jpg",
      paisagismo: "/assets/pages/servicos/paisagismo.jpg",
    },
  },
} as const

export type ProjectSlug =
  | "harmonia-do-caos"
  | "casa-sobre-trapezios"
  | "casa-z"
  | "suite-maple"
  | "casa-breeze"
  | "escola-atlantica"
  | "suite-wonderland"
  | "apartamento-savanna"
  | "suite-nogueira"
  | "casa-lumberjack"
  | "loft-bear-cave"

export function projectAssets(slug: ProjectSlug) {
  const base = `/assets/projects/${slug}`
  return {
    hero: `${base}/hero.jpg`,
    card: `${base}/card.jpg`,
    croqui: `${base}/croqui.jpg`,
    gallery: (index: number) => `${base}/gallery/${String(index).padStart(2, "0")}.jpg`,
  }
}
