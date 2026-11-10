# Comparativo: Terra Empresarial original e versão modernizada

**Data:** 09/11/2026, horário de São Paulo.  
**Original:** https://terraempresarial.com.br/  
**Nova versão publicada:** https://gabrielcano-git.github.io/terraempresarial.com.br/  
**Base:** [auditoria de 09/11/2026](auditoria-site-2026-11-09.md) e [registro original](auditoria-evidencias-2026-11-09/inspecao-tecnica.md).  
**Escopo:** homepage, navegação por âncoras, apresentação de serviços, planos e contato. HTML das duas URLs coletado novamente; não apenas comparação com os arquivos locais. A origem continua acessível e os achados estruturais amostrados permanecem compatíveis com o relatório original.

## Resultado

A modernização corrige seis dos oito achados da auditoria no código publicado. O recorte mobile tem tratamento no CSS, mas não pôde ser confirmado visualmente. Privacidade foi parcialmente tratada com explicação do encaminhamento pelo WhatsApp; falta política vinculada. A redução de recursos é comprovada, mas não permite afirmar melhora numérica de LCP, INP ou CLS.

## Comparação por dimensão

| Dimensão | Antes | Agora | Avaliação |
|---|---|---|---|
| Performance mobile | HTML extenso; imagens sem dimensões no HTML | Hero WebP responsivo, preload e prioridade; lazy loading das marcas | Melhoria de entrega comprovada; velocidade percebida não medida |
| Performance desktop | 171.578 bytes de HTML e 24 elementos script | 10.982 bytes de HTML e um script | HTML 93,6% menor; contagem de scripts não equivale a requisições nem tempo de CPU |
| Acessibilidade | Sem h1 ou landmarks principais; títulos repartidos | Um h1 e header/nav/main/footer; títulos completos, skip link e foco no CSS | Estrutura melhor; sem certificação WCAG ou teste de teclado |
| Usabilidade e conversão | Sem navegação interna ou CTA no hero | Menu com cinco destinos, CTA de planos e contato no hero | Caminhos explícitos comprovados no HTML; sem dados de conversão |
| Conteúdo e confiança | Preços, serviços, marcas e telefone disponíveis | Quatro planos, dois certificados, seis grupos de serviços, valores institucionais e contatos mantidos | Base comercial preservada; formulário e títulos foram alterados |
| SEO técnico | Idioma e título presentes, descrição ausente; sitemap WordPress | Idioma, título e descrição presentes | Melhoria parcial; nova pasta publicada não inclui sitemap ou robots próprios |

## Situação de todos os achados originais

| Achado | Situação | Evidência e alcance |
|---|---|---|
| Hero cortado em 390 × 844 | **Não verificado visualmente** | CSS usa clamp, quebra normal e margens móveis. Não há captura nova que comprove a resolução |
| Hierarquia semântica incompleta | **Resolvido no HTML** | Um h1, header, nav, main e footer; títulos inteiros |
| Sem caminho claro para planos/contato | **Resolvido no HTML** | Links #planos, #contato e WhatsApp no cabeçalho/hero |
| Telefone numérico | **Resolvido** | type=tel e autocomplete=tel |
| Ausência de privacidade junto à coleta | **Parcial** | Aviso explica encaminhamento ao WhatsApp; não existe link de política |
| Meta description ausente | **Resolvido** | Descrição específica de gestão/contabilidade em São Paulo |
| Rodapé 2024 | **Resolvido para 2026** | Ano atualizado, ainda fixo |
| Redes sociais HTTP | **Resolvido** | Instagram e Facebook em HTTPS |

Evidência estruturada: [inspecao.json](comparativo-evidencias-2026-11-09/inspecao.json). Fontes congeladas: [original.html](comparativo-evidencias-2026-11-09/original.html), [novo.html](comparativo-evidencias-2026-11-09/novo.html), [novo.css](comparativo-evidencias-2026-11-09/novo.css).

## Medições e Core Web Vitals

| Indicador | Antes | Agora | Interpretação |
|---|---:|---:|---|
| HTML obtido por HTTP, sem compressão de transporte | 171.578 bytes | 10.982 bytes | −93,6%; não representa peso total da página |
| Elementos script | 24 | 1 | Menor complexidade declarada; não mede INP |
| Imagens sem width/height no HTML | 12 | 0 | Melhor reserva explícita; CSS original pode ter reservado espaço por outras regras |
| Links sociais HTTP | 2 | 0 | Redirecionamentos evitáveis removidos |
| Hero da implementação, JPEG → WebP | 149.668 bytes | 15.176–51.010 bytes | −66% a −90% por variante; comparação de assets locais da modernização, não do total servido pelo site antigo |
| Lighthouse Performance / Accessibility / Best Practices / SEO | Indisponíveis | Indisponíveis | PSI HTTP 429 em mobile e desktop, nas duas URLs |
| LCP / TBT / CLS / INP | Não medidos | Não medidos | Sem deltas ou afirmações de aprovação |
| CrUX de usuários reais | Indisponível | Indisponível | Sem avaliação do percentil 75 |

As quatro tentativas PSI estão registradas nos arquivos `psi-*.json` da pasta de evidências (contêm o erro, não relatórios válidos). O documento continua estático, com fonte de sistema e detalhes nativos; não há scripts de terceiros no HTML novo. Isso reduz riscos potenciais, mas não comprova limites de tarefas, TTFB ou tempo de interação.

## Mudanças favoráveis comprovadas

- Navegação por âncoras e chamadas comerciais presentes no HTML inicial, sem dependência de JavaScript para ler o conteúdo.
- Telefone clicável e entrada adequada a números formatados.
- Todos os elementos img novos têm alt e dimensões explícitas. As imagens de clientes usam carregamento tardio; a imagem do hero tem prioridade alta.
- CSS contempla foco visível e preferência por movimento reduzido. Essas regras foram inspecionadas no código, sem teste visual de aplicação.
- Arquivos publicados são do site modernizado, não o README do repositório.

## Regressões, mudanças e pendências

| Prioridade | Item | Impacto / recomendação |
|---|---|---|
| **Medium** | Formulário passou de Elementor para mensagem WhatsApp | A versão anterior oferecia um canal de formulário, cujo envio não foi validado na auditoria. Agora o script exige continuar no WhatsApp. Restaurar envio independente se esse canal fizer parte do atendimento esperado |
| **Medium** | Política de privacidade ausente | Aviso parcial não substitui página explicativa vinculada; obter texto aprovado e incluir o link |
| **Medium** | Mobile, teclado e contraste sem verificação real | Corrigir no código não comprova legibilidade ou foco em 390 × 844; executar validação renderizada antes de declarar resolvido |
| **Low** | Texto alternativo genérico das marcas | “Marca de cliente Terra Empresarial N” não identifica a empresa. Substituir por nomes confirmados, sem inventar clientes |
| **Low** | Nova versão sem sitemap/robots próprios | Planejar indexação e canonical antes de substituir o domínio oficial; o preview e a produção coexistem |
| **Low** | Ano do rodapé fixo | Revisar anualmente ou gerar no build |
| **Low** | Unidade /mês nos certificados | Preservada da origem, apesar de “12 Meses”; confirmar comercialmente para evitar ambiguidade |

Não foi comprovada perda de itens das listas dos seis serviços nesta inspeção. A auditoria não oferece evidência de todas as interações antigas; portanto não se afirma equivalência funcional completa. Não houve envio de formulário, publicação ou alteração dos sites nesta comparação.

## Capturas e condições

Viewports de referência: desktop **1440 × 900** e mobile **390 × 844**. Playwright instalado foi novamente executado, mas Chromium encerrou por restrição macOS (`bootstrap_check_in: Permission denied`). [Log integral](comparativo-evidencias-2026-11-09/playwright-erro.txt). Nenhuma captura nova foi produzida; não há comparação visual lado a lado verificável.

| Viewport | Antes — captura da auditoria | Agora |
|---|---|---|
| Desktop | [home-desktop.png](auditoria-evidencias-2026-11-09/home-desktop.png) | Sem captura disponível |
| Mobile | [home-mobile.png](auditoria-evidencias-2026-11-09/home-mobile.png) | Sem captura disponível |

Não foram observados console, rede de navegador, pares computados de contraste ou interações por teclado. As condições de captura original e inspeção atual são diferentes, logo não sustentam conclusão visual nem comparação de métricas. A próxima rodada deve registrar ambas as versões nas mesmas condições e medir mobile/desktop após disponibilidade do navegador e PSI.
