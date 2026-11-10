# Registro de evidências — Terra Empresarial

**Data:** 2026-11-09  
**URL auditada:** https://terraempresarial.com.br/  
**Escopo público:** página inicial de página única; seções identificadas por `#inicio`, `#sobre`, `#cases`, `#servicos`, `#contato`. O sitemap de páginas lista apenas `/`.

## Capturas

As duas imagens foram capturadas por serviço remoto de screenshot (thum.io), sem sessão autenticada:

- `home-desktop.png` — viewport informado 1440 × 900; PNG 1440 × 900.
- `home-mobile.png` — viewport informado 390 × 844; PNG 390 × 844.

A captura desktop mostra a marca e ícones sociais no cabeçalho e o hero “Resultados”. A captura mobile mostra o título e a frase de apoio recortados na borda direita. As imagens são registros visuais, não capturas Playwright nem inspeção do DOM renderizado pelo navegador local.

## Acesso e ferramentas

- Resposta da homepage: HTTP 200.
- Captura via WordPress mShots: HTTP 403; não usada como evidência.
- Automação de navegador: indisponível nesta sessão (host do browser indisponível; acesso ao Chrome não autorizado). Não foram observados console, foco visual, ordem de tabulação, zoom/reflow ou comportamento de movimento reduzido.
- PageSpeed Insights, mobile e desktop: API retornou HTTP 429 `RESOURCE_EXHAUSTED`, com cota diária padrão igual a zero. Não há Lighthouse scores, métricas de lab ou relatório PSI/CrUX nesta auditoria.
- Uma única requisição HTTP da homepage no ambiente de auditoria: 171.578 bytes; TTFB 0,294 s; duração total 0,439 s. É apenas uma leitura sintética do documento, não uma medida de carregamento do navegador nem de usuários reais.
- Nenhum formulário foi preenchido ou enviado.

## Sinais técnicos públicos

- Cabeçalhos HTTP da homepage: `x-powered-by: PHP/8.1.34`, `platform: hostinger`, `server: hcdn`; há cabeçalho `Link` para `wp-json` e para a página REST `wp-json/wp/v2/pages/8`.
- HTML referencia `wp-includes` e o endpoint REST; `wp-sitemap.xml` lista o sitemap de páginas. CMS WordPress: confirmado por sinais independentes.
- Assets observados no HTML: Astra `.../themes/astra/...` com query `ver=4.6.1`; Elementor `.../plugins/elementor/...` com `ver=3.18.3`; Elementor Pro `.../plugins/elementor-pro/...` com `ver=3.14.1`. Os números são os valores declarados nos assets servidos, não uma checagem de versão instalada no servidor.
- Nenhum framework frontend separado pôde ser identificado com os sinais consultados.

## Estrutura e conteúdo observados no HTML

- `lang="pt-BR"`, título de documento “Terra Empresarial – Gestão e Contabilidade” e meta viewport presentes; meta description não encontrada.
- Nenhum elemento `<h1>`; os títulos de seção usam múltiplos `<h2>` e alguns rótulos são divididos em widgets adjacentes, por exemplo “Resul”/“tados”, “Estra”/“tégias”, “Servi”/“ços” e “Con”/“tato”.
- Não foram encontrados elementos `<header>`, `<nav>`, `<main>` ou `<footer>` no HTML analisado. Existem roles para widgets (por exemplo, tablist e button), mas nenhum landmark principal/de navegação foi identificado.
- 14 imagens; todas possuem atributo `alt`; duas têm `alt=""` (decorativas ou redundantes, a confirmar visualmente conforme o contexto de cada imagem).
- Links encontrados na página: WhatsApp (HTTPS), Instagram (HTTP) e Facebook (HTTP); não foram encontrados links para âncoras internas no HTML.
- Os dois hrefs em HTTP retornaram `301` para HTTPS quando consultados separadamente (Instagram e Facebook). A recomendação de atualização evita depender desse redirecionamento.
- Formulário Elementor com campos obrigatórios Nome, E-mail, Telefone e Mensagem, rótulos ligados aos IDs correspondentes e botão “Enviar”. O campo Telefone é `type="number"`. A página não inclui link de política/aviso de privacidade nos links consultados.
- Conteúdo apresenta planos contábeis com preços, certificados digitais e serviços contábeis/empresariais. O texto do rodapé declara “Terra Empresarial - 2024”.

## Limites

Inspeção limitada ao conteúdo público servido para `/`, aos endpoints públicos de sitemap/REST e às capturas acima. Não houve interação com menus ou controles via Playwright, verificação de links externos no navegador, envio do formulário, análise de contraste por pares de cores computados, auditoria completa de acessibilidade, ou teste de páginas autenticadas. Não se inferem ranking, conversão ou conformidade WCAG a partir das evidências limitadas.
