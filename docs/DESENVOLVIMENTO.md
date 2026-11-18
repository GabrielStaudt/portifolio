# Desenvolvimento

## Estrutura

```text
assets/
  fonts/               Fontes e licenças
  icons/               Sprite SVG e favicon
  images/              Foto
  screenshots/         Capturas desktop e mobile
src/
  index.html           Apresentação, habilidades e projeto em destaque
  projetos.html        Projetos e detalhes
  sobre.html           Perfil e formação
  styles.css           Identidade visual, responsividade e impressão
scripts/
  build.mjs            Gera dist/ e copia os assets utilizados pelo site
  check.mjs            Verifica páginas, links e âncoras
.github/workflows/
  ci.yml               Verificação de alterações
  pages.yml            Publicação no GitHub Pages
```

## Prévia local

Com Node.js 22 ou superior:

```sh
npm run build
npm run check
```

Com Python 3, sirva a saída por HTTP:

```sh
python -m http.server 4173 --directory dist
```

Acesse `http://localhost:4173`. Use HTTP para carregar os símbolos do sprite SVG: alguns navegadores bloqueiam referências SVG externas em páginas abertas por `file://`.

O build recria apenas a pasta `dist/` dentro do projeto. Fontes, ícones e imagens são copiados para `dist/assets/`. Capturas e documentação dos assets ficam no repositório, sem aumentar a saída do site.

## Atualizar

Edite `src/` e os assets de uso do site. Rode o build e a verificação. Confira as três páginas em desktop e celular, os detalhes dos projetos, as âncoras e a navegação por teclado.

As fontes são locais; não há dependência de CDN de CSS ou carregamento remoto da foto.

## Publicação

Cada push em `main` executa as verificações e publica em:

https://gabrielstaudt.github.io/portifolio/

O workflow de Pages permite execução manual. A origem configurada é GitHub Actions.

A publicação adicional em Sites usa o identificador preservado em `.openai/hosting.json`. Para atualizá-la no Codex, use esse Site existente. A publicação no GitHub Pages não atualiza automaticamente a cópia no Sites.

## Conteúdo

Perfil: https://github.com/GabrielStaudt

As informações profissionais, a formação, os cursos e os idiomas seguem o currículo fornecido por Gabriel. Métricas de estrelas, commits e contribuições não são simuladas.

## Git

Use Conventional Commits e branches descritivas. Os pull requests usam o template do repositório; branches integradas são removidas automaticamente. As regras de contribuição estão em `CONTRIBUTING.md`.
