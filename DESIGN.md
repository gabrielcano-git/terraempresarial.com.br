# Design system — Terra Empresarial

Este documento descreve a identidade visual observada na homepage pública de [terraempresarial.com.br](https://terraempresarial.com.br/), com base nas capturas desktop (1440 × 900) e mobile (390 × 844) de 9 de novembro de 2026. É uma referência de interface, não uma especificação extraída dos arquivos-fonte: este diretório não contém o tema ou os estilos do site.

## Direção visual

A página combina uma apresentação empresarial sóbria com um destaque azul intenso. O hero usa fotografia de escritório em preto e branco, escurecida para servir de fundo, e tipografia grande, em caixa alta, com preenchimento azul e contorno claro. Áreas escuras, texto branco e detalhes azuis sustentam o contraste visual. A marca aparece no cabeçalho sobre fundo grafite.

## Paleta observada

Os nomes e valores abaixo são aproximações visuais da captura, não valores medidos do CSS. Não os trate como tokens oficiais sem conferência no site ou no painel de estilos.

| Papel | Referência aproximada | Uso observado |
|---|---|---|
| Azul da marca | `#0757D7` | Símbolo da marca e palavra em destaque no hero |
| Grafite | `#242424` | Cabeçalho |
| Preto carvão | `#111111` | Sobreposição escura do hero e áreas de fundo |
| Branco | `#FFFFFF` | Texto, ícones e contorno do título |
| Cinza claro | `#D8D8D8` | Nome da marca e elementos claros do cabeçalho |

Use o azul como acento, preservando grandes áreas neutras. Sobre fotografia, escureça a imagem o suficiente para manter legíveis os textos claros e o azul.

## Tipografia

- A marca no cabeçalho usa uma sans-serif de aparência geométrica, peso médio e capitalização normal.
- O título do hero é uma sans-serif pesada, em caixa alta e escala muito grande. O tratamento combina uma palavra azul preenchida e outra palavra clara apenas contornada, com sobreposição vertical.
- O texto de apoio é pequeno, leve e claro, alinhado ao bloco do título.
- A família tipográfica exata não foi confirmada nas evidências disponíveis. Ao implementar mudanças, reutilize a fonte efetivamente carregada pelo site em vez de introduzir uma nova família.

## Marca e ícones

- O cabeçalho apresenta o símbolo azul da Terra e o nome “Terra Empresarial” à esquerda.
- À direita há três atalhos circulares claros para WhatsApp, Instagram e Facebook, com ícones azuis.
- Preserve os arquivos oficiais da marca e os ícones existentes. Não redesenhe o símbolo usando texto ou formas improvisadas.

## Layout e componentes

### Cabeçalho

Faixa horizontal grafite, compacta, com marca alinhada à esquerda e atalhos sociais agrupados à direita. Os ícones ficam dentro de círculos brancos e têm espaçamento uniforme.

### Hero

Fotografia ampla de ambiente de trabalho ocupa o fundo. Um tratamento monocromático e uma sobreposição escura reduzem o ruído da imagem. O conteúdo textual fica na metade direita em desktop, com bastante área negativa ao redor. O título domina a composição; abaixo dele aparece uma frase curta de apoio.

### Seções de conteúdo

A homepage também apresenta as seções “Sobre”, “Cases”, “Serviços” e “Contato”, incluindo planos contábeis com preços, certificados digitais, serviços e formulário de contato. Mantenha títulos de seção claros, agrupamento visual consistente e componentes de preços fáceis de comparar. A auditoria disponível não registra medidas ou estilos suficientes para definir detalhes adicionais desses blocos como padrões confirmados.

### Ações e contato

WhatsApp e formulário são os caminhos de contato observados. Use rótulos claros nas ações e mantenha telefone, e-mail e formulário legíveis em todas as larguras. Evite depender apenas de ícones para comunicar uma ação importante.

## Responsividade e acessibilidade visual

- Em telas menores, reduza a escala do título e permita que ele quebre em linhas dentro da largura disponível.
- A captura mobile de 390 × 844 mostra o título “Resultados” e a frase de apoio cortados na borda direita. Considere isso um problema visual conhecido a corrigir e conferir, não um comportamento desejado do design.
- Evite texto sobreposto fora do viewport e mantenha margens laterais suficientes para leitura.
- Preserve contraste entre texto e fundos. Uma medição formal de contraste não está disponível nesta referência.
- Use títulos semânticos e completos para cada seção; não divida palavras entre elementos apenas para reproduzir o efeito visual do hero.
- Garanta que atalhos sociais e botões tenham nome acessível e foco visível.

## Princípios para evoluções

1. Manter o azul intenso como acento principal sobre uma base escura e neutra.
2. Usar fotografia corporativa com tratamento discreto, sem competir com a mensagem.
3. Reservar o efeito de contorno/sobreposição para títulos de destaque, não para textos longos ou pequenos.
4. Preservar a leitura e o contato como prioridades em celular.
5. Reaproveitar marca, fontes, espaçamentos e componentes já carregados pelo site quando os estilos originais estiverem disponíveis.

## Fonte e limites desta referência

Observação visual da homepage em 9 de novembro de 2026 e registro em [`auditoria-evidencias-2026-11-09/inspecao-tecnica.md`](auditoria-evidencias-2026-11-09/inspecao-tecnica.md). A auditoria identifica WordPress, tema Astra e Elementor, mas não contém valores computados de cor, família de fonte ou especificações completas de componentes. Este arquivo não afirma conformidade WCAG nem substitui inspeção dos estilos servidos.
