export const contactPage = {
  titleLit: "Vamos projetar",
  titleDim: "o seu espaço",
  formLabel: "Briefing do projeto",
  fieldCount: "09 campos",
  submit: "Enviar briefing",
  responseNote:
    "Respondemos em até dois dias úteis. [Lacuna] confirmar prazo de retorno.",
  success: "Briefing enviado. Entraremos em contato em breve.",
  projectTypes: ["Arquitetura", "Interiores", "Paisagismo", "Projeto completo"],
  propertyTypes: ["Casa", "Apartamento", "Comercial", "Institucional"],
  fields: {
    name: { label: "Nome", placeholder: "Seu nome completo" },
    email: { label: "E-mail", placeholder: "nome@email.com" },
    phone: { label: "Telefone / WhatsApp", placeholder: "(00) 00000-0000" },
    city: { label: "Cidade", placeholder: "Balneário Camboriú" },
    projectType: { label: "Tipo de projeto" },
    propertyType: { label: "Tipo de imóvel" },
    area: { label: "Metragem aproximada", placeholder: "320 m²" },
    deadline: { label: "Prazo desejado", placeholder: "Início previsto" },
    message: {
      label: "Mensagem",
      placeholder: "Conte sobre o terreno, o programa e o modo de morar",
    },
  },
  aside: {
    title: "Contato direto",
    items: [
      { label: "E-mail", value: "[Lacuna]" },
      { label: "Telefone / WhatsApp", value: "[Lacuna]" },
      { label: "Endereço do escritório", value: "[Lacuna] · Balneário Camboriú, SC" },
    ],
    socialTitle: "Redes sociais",
    social: [
      { label: "Instagram · [Lacuna]", href: "#" },
      { label: "Pinterest · [Lacuna]", href: "#" },
      { label: "LinkedIn · [Lacuna]", href: "#" },
    ],
  },
  map: {
    caption: "mapa em tratamento escuro · [Lacuna] coordenadas exatas",
    pinKicker: "Escritório",
    pinTitle: "Balneário Camboriú",
    pinAddress: "[Lacuna] endereço",
    footerLeft: "Santa Catarina · litoral norte",
    footerRight: "26.9906° S  48.6350° W",
  },
} as const
