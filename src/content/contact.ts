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
      {
        label: "Endereço do escritório",
        value: "R. 2480, 93 · Sala 03 · Centro, Balneário Camboriú – SC",
      },
    ],
    socialTitle: "Redes sociais",
    social: [
      { label: "Instagram · @arq.leonardopalma", href: "https://www.instagram.com/arq.leonardopalma/" },
      { label: "Pinterest · [Lacuna]", href: "#" },
      { label: "LinkedIn · [Lacuna]", href: "#" },
    ],
  },
  map: {
    pinKicker: "Escritório",
    pinTitle: "Centro · Balneário Camboriú",
    pinAddress: "R. 2480, 93 · Sala 03",
    address: "R. 2480, 93 · Sala 03 · Centro · Balneário Camboriú – SC · 88330-407",
    /* Aproximada: início da R. 2480, junto à Av. Brasil (CEP 88330-407) */
    coordinates: { lat: -26.9948, lng: -48.6292 },
    coordinatesLabel: "26.9948° S · 48.6292° W",
    routeLabel: "Traçar rota",
    routeHref:
      "https://www.google.com/maps/dir/?api=1&destination=R.+2480%2C+93+-+Centro%2C+Balne%C3%A1rio+Cambori%C3%BA+-+SC%2C+88330-407",
  },
} as const
