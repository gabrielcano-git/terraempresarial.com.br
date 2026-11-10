# Terra Empresarial modernizado

Execute `npm install --cache /tmp/terra-npm`, `npm run build` e `npm start`. Abra http://localhost:4173.

A pasta `dist` contém apenas o site estático publicável. Auditoria e evidências permanecem fora dela. Os estilos editáveis estão em `src/style.scss` e `src/tailwind.css`; não editar o CSS gerado.

## Escopo

Página `/`, âncoras inicio, sobre, cases, servicos, contato e planos. Preservados os quatro planos, dois certificados, seis grupos de serviços com listas completas, missão, visão, valores, marcas e contatos originais. Mantidos os preços e a unidade /mês dos certificados conforme a origem, embora devam ser confirmados comercialmente.

Aplicados landmarks, h1 único, títulos completos, navegação, CTAs, telefone tel, foco, skip link, redução de movimento, metadescrição, redes HTTPS e rodapé atualizado. O formulário prepara uma mensagem para revisão e envio no WhatsApp: não usa o backend Elementor. A política de privacidade não foi inventada; falta fornecer uma política aprovada para vincular junto à coleta. Fonte de sistema usada provisoriamente: família original não confirmada.

## Validação

Build Tailwind e Sass executado com sucesso. Conteúdo mapeado pelo HTML público e evidências existentes. Playwright instalado e execução tentada; Chromium bloqueado pelo sandbox macOS (bootstrap_check_in Permission denied). Sem validação visual, teclado, contraste ou métricas Lighthouse/PageSpeed nesta versão. Nenhuma publicação realizada. WebMCP não configurado.

## GitHub Pages

O workflow `.github/workflows/pages.yml` instala as dependências, compila os estilos e publica somente `dist`. Os arquivos HTML, JS e imagens de `dist` são fontes versionadas neste projeto e devem ser incluídos no commit. Os caminhos relativos permitem hospedar também em `https://USUARIO.github.io/REPOSITORIO/`.

1. Crie um repositório no GitHub e envie este projeto para a branch `main`.
2. No repositório, abra **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Abra **Actions → Publicar no GitHub Pages → Run workflow** (ou envie um novo commit para `main`).
4. Ao concluir o deploy, o ambiente `github-pages` mostrará a URL do site.

Para conectar esta pasta, que ainda não possui Git configurado:

```sh
git init -b main
git add .
git commit -m "Prepara site Terra Empresarial para GitHub Pages"
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

Não há domínio personalizado configurado. A publicação e o workflow remoto precisam ser verificados após conectar o repositório.
