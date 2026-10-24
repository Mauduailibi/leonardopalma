export const siteConfig = {
  name: "Leonardo Palma",
  tagline: "arquitetura interiores e paisagismo",
  location: "Balneário Camboriú · Santa Catarina",
  locationShort: "Balneário Camboriú · SC",
  manifesto: "O espaço é a moldura, a vida é a obra",
  description:
    "Um escritório de arquitetura, interiores e paisagismo com design minimalista, que valoriza o talento local e projeta espaços onde o caos se transforma em harmonia.",
  showLacunas: true,
  showNumbers: true,
  contact: {
    email: "[Lacuna] e-mail",
    phone: "[Lacuna] telefone / WhatsApp",
    address: "R. 2480, 93 · Sala 03 · Centro, Balneário Camboriú – SC",
    instagram: "@arq.leonardopalma",
    instagramHref: "https://www.instagram.com/arq.leonardopalma/",
  },
} as const

export const navItems = [
  { label: "Projetos", href: "/projetos" },
  { label: "Serviços", href: "/servicos" },
  { label: "CASACOR", href: "/casacor" },
  { label: "Contato", href: "/contato" },
] as const

export const cta = {
  startProject: "Iniciar um projeto",
  viewProject: "Ver o projeto",
  viewAllProjects: "Ver todos os projetos",
  viewServices: "Conheça os serviços",
  viewCasacor: "Ver o projeto completo",
  downloadPortfolio: "Baixar o portfólio",
} as const
