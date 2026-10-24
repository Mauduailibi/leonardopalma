# Assets

Coloque as imagens nos caminhos abaixo. O site lê esses arquivos automaticamente — se o arquivo ainda não existir, a tela mostra o placeholder listrado do design.

Formato atual: **WebP** (qualidade 80, sem metadados). Larguras máximas: hero 2400px · galeria 1600px · card 960×1200px (recorte 4:5 centralizado). Os originais em alta ficam em `portifolio/` (fora do Git).

Exemplo de conversão: `cwebp -q 80 -m 6 -sharp_yuv -metadata none -resize 1600 0 original.jpg -o 01.webp`

## Marca — `/assets/brand`

| Arquivo | Uso |
|---|---|
| `signature.svg` | Assinatura manuscrita (traço único, para animação) |
| `portfolio.pdf` | Download do portfólio completo |

## Home — `/assets/home`

| Arquivo | Uso no design |
|---|---|
| `hero.webp` | Hero 16:9 — residência ao entardecer com luz quente interna |
| `defines.webp` | Seção “O que define nosso trabalho” — fachada com brises de Aço Corten |
| `process.webp` | Seção “Como trabalhamos” — residência noturna com piscina iluminada |

## Páginas — `/assets/pages`

```
casacor/hero.webp
contato/map.webp
servicos/arquitetura.webp
servicos/interiores.webp
servicos/paisagismo.webp
```

## Projetos — `/assets/projects/<slug>`

Um diretório por projeto. Arquivos esperados:

| Arquivo | Uso |
|---|---|
| `hero.webp` | Imagem principal da página e carrossel da home |
| `card.webp` | Miniatura 4:5 (grid e card de vidro do hero) |
| `croqui.webp` | Croqui do efeito assinatura (página de projeto) |
| `gallery/01.webp` … | Galeria, numerada |

Slugs:

```
harmonia-do-caos
casa-sobre-trapezios
casa-z
suite-maple
casa-breeze
escola-atlantica
suite-wonderland
apartamento-savanna
suite-nogueira
casa-lumberjack
loft-bear-cave
```

Nenhum filtro de cor sobre as fotos dos projetos.
