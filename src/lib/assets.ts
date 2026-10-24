export const assetPaths = {
  brand: {
    signature: "/assets/brand/signature.svg",
    favicon: "/favicon.svg",
    portfolioPdf: "/assets/brand/portfolio.pdf",
  },
  home: {
    hero: "/assets/home/hero.webp",
    defines: "/assets/home/defines.webp",
    process: "/assets/home/process.webp",
  },
  pages: {
    casacor: {
      hero: "/assets/pages/casacor/hero.webp",
    },
    contato: {
      map: "/assets/pages/contato/map.webp",
    },
    servicos: {
      arquitetura: "/assets/pages/servicos/arquitetura.webp",
      interiores: "/assets/pages/servicos/interiores.webp",
      paisagismo: "/assets/pages/servicos/paisagismo.webp",
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
    hero: `${base}/hero.webp`,
    card: `${base}/card.webp`,
    croqui: `${base}/croqui.json`,
    gallery: (index: number) => `${base}/gallery/${String(index).padStart(2, "0")}.webp`,
  }
}
