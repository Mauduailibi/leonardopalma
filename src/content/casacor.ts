import { assetPaths, projectAssets } from "@/lib/assets"

const gallery = projectAssets("harmonia-do-caos")

export const casacorPage = {
  kicker: "Casacor",
  edition: "Santa Catarina · [Lacuna] edição / ano",
  title: "Harmonia do Caos",
  concept: "“O espaço é a moldura, a vida é a obra”",
  hero: {
    src: assetPaths.pages.casacor.hero,
    caption:
      "imagem hero · salão da exposição com bancos em suede e retratos de grande formato",
    alt: "Salão da exposição Harmonia do Caos com bancos em suede e retratos de grande formato",
  },
  editorial: {
    index: "01",
    label: "Exposição / Efêmero",
    paragraphs: [
      "A exposição Harmonia do Caos na CASACOR SANTA CATARINA reúne mais de 30 artistas nacionais e internacionais e reflete os dois anos de aprendizado do escritório no mercado de arquitetura. Com um design minimalista, o espaço destaca as obras de arte, que dialogam entre si e com o público em um cenário que simula um labirinto. A curadoria plural explora diversas linguagens artísticas, valorizando o talento local.",
      "Inspirado na música Bolero de Ravel, o projeto propõe um jogo entre equilíbrio e desequilíbrio, criando uma experiência imersiva e desconfortavelmente confortável, onde o caos se transforma em harmonia. A exposição abrange estilos como Pop Art e Abstracionismo, mostrando a convivência de contrastes e formas de maneira coesa além de uma seleção de móveis assinados por designers brasileiros.",
    ],
    stats: [
      { label: "Artistas", value: "+30 nacionais e internacionais", accent: true },
      { label: "Referência", value: "Bolero de Ravel" },
      { label: "Estilos", value: "Pop Art · Abstracionismo" },
      { label: "Período · endereço", value: "[Lacuna]", lacuna: true },
    ],
  },
  authors: {
    index: "02",
    label: "Assinatura do projeto",
    title: "Cinco autores, um espaço",
    credit: "Crédito fotográfico · [Lacuna]",
    photo: {
      src: assetPaths.pages.escritorio.team,
      caption: "retrato da equipe · cinco pessoas · preto e branco",
      alt: "Retrato em preto e branco da equipe do projeto",
    },
    names: [
      "Leonardo Palma",
      "Leonardo Vieira",
      "Iuri Meinhard",
      "Rafael Santos",
      "Luciano Rother",
    ],
  },
  gallery: {
    index: "03",
    label: "Galeria completa · 7 imagens",
    items: [
      {
        src: gallery.gallery(1),
        caption: "mural colorido com pessoas em movimento na escadaria",
        alt: "Mural colorido com pessoas em movimento na escadaria",
        span: 4,
        height: "h-[620px]",
        radius: "rounded-xl",
        halo: true,
      },
      {
        src: assetPaths.pages.escritorio.hero,
        caption: "retrato do arquiteto",
        alt: "Retrato do arquiteto Leonardo Palma",
        span: 2,
        height: "h-[620px]",
        radius: "rounded-xl",
        grayscale: true,
      },
      {
        src: gallery.gallery(3),
        caption: "poltrona laranja com mesas laterais",
        alt: "Poltrona laranja com mesas laterais",
        span: 2,
        height: "h-[520px]",
        radius: "rounded-lg",
        halo: true,
      },
      {
        src: gallery.gallery(4),
        caption: "detalhe de banco e mesa lateral",
        alt: "Detalhe de banco e mesa lateral",
        span: 2,
        height: "h-[520px]",
        radius: "rounded-lg",
        offset: true,
      },
      {
        src: gallery.gallery(5),
        caption: "poltrona escultórica clara",
        alt: "Poltrona escultórica clara",
        span: 2,
        height: "h-[520px]",
        radius: "rounded-lg",
      },
      {
        src: gallery.gallery(6),
        caption: "salão da exposição com retratos de grande formato",
        alt: "Salão da exposição com retratos de grande formato",
        span: 3,
        height: "h-[560px]",
        radius: "rounded-xl",
        halo: true,
      },
      {
        src: assetPaths.pages.escritorio.team,
        caption: "retrato da equipe · cinco pessoas · preto e branco",
        alt: "Retrato em preto e branco da equipe",
        span: 3,
        height: "h-[560px]",
        radius: "rounded-xl",
        grayscale: true,
      },
    ],
  },
}
