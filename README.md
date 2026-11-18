# Gabriel Staudt — Portfólio

Portfólio pessoal com três páginas: apresentação, projetos e perfil profissional.

**Site:** [gabriel-staudt-portfolio.euteconheco.chatgpt.site](https://gabriel-staudt-portfolio.euteconheco.chatgpt.site)

## Páginas

| Arquivo | Conteúdo |
| --- | --- |
| `src/index.html` | Apresentação e interesses em tecnologia |
| `src/projetos.html` | Projetos públicos, links e detalhes |
| `src/sobre.html` | Perfil profissional, formação, contato e impressão |

HTML e CSS nativos, com JavaScript apenas para a impressão do perfil. O site não possui formulário, coleta própria de dados ou dependências de produção. A foto é carregada do avatar público no GitHub.

## Executar localmente

Requisito: Node.js 22 ou superior. Não é necessário instalar pacotes.

```sh
npm run build
npm run check
```

Abra `dist/index.html` no navegador. Para servir por HTTP, com Python 3 instalado:

```sh
python -m http.server 4173 --directory dist
```

Acesse `http://localhost:4173`. O diretório `dist/` é gerado e não é versionado.

## Editar e publicar

Edite os arquivos em `src/`, execute o build e a verificação. A integração contínua executa esses comandos a cada push ou pull request para `main`.

A hospedagem atual usa Sites. A configuração está em `.openai/hosting.json`. Para publicar uma atualização com Codex, peça a atualização do Site existente usando esse identificador. Um push para este GitHub, sozinho, não publica no Sites.

### Alternativa: GitHub Pages

Em **Settings → Pages**, selecione **GitHub Actions** como origem. O workflow `pages.yml` permite publicação manual e publica novos pushes em `main`. O endereço padrão será `https://gabrielstaudt.github.io/portifolio/` após a primeira implantação bem-sucedida. O workflow usa caminhos relativos para funcionar sob `/portifolio/`.

## Padrões do projeto

- Commits em [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/), como `feat: adiciona página de projetos`.
- Branches: `feat/descricao`, `fix/descricao` ou `docs/descricao`. Trabalhos automatizados podem usar `codex/descricao`.
- Mudanças propostas por pull request; título no mesmo padrão dos commits.
- UTF-8, LF e indentação de dois espaços definidos por `.editorconfig` e `.gitattributes`.

Consulte [CONTRIBUTING.md](CONTRIBUTING.md) para orientações.

## Conteúdo e referências

Dados biográficos baseados no [perfil público de Gabriel Staudt](https://github.com/GabrielStaudt). A descrição de EDA segue o [repositório público](https://github.com/GabrielStaudt/An-lise-Explorat-ria-de-Dados-EDA-). Não são declarados vínculos profissionais, certificações ou resultados não informados. Os gráficos são ilustrações, identificadas como tais.

O [portfólio de Fabricyo Silva](https://github.com/FabricyoSilva/portifolio) foi uma referência de organização. Este projeto tem implementação e identidade visual próprias.

Código sob licença MIT. Nome, imagem e conteúdo pessoal identificam seu titular.
