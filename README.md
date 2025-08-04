# Organo

Organo é uma aplicação web desenvolvida em Angular para organizar e visualizar leituras de livros, categorizando-os por gêneros literários.

---

## O que o projeto faz

- Permite organizar livros por gêneros literários (Romance, Mistério, Fantasia, Ficção Científica, Técnicos, etc).
- Exibe listas de livros, cada um com informações como título, autor, imagem e botão de favorito.
- Interface responsiva e moderna, com destaque visual para cada gênero.
- Possui componentes reutilizáveis para livros, gêneros, cabeçalho e rodapé.

---

## Estrutura do Projeto

```
organo/
├── public/                     # Imagens e assets públicos
│   ├── banner.png
│   ├── favicon.ico
│   ├── rodape.png
│   └── sem-livros.png
├── src/
│   ├── index.html              # HTML principal
│   ├── main.ts                 # Bootstrap Angular
│   ├── styles.scss             # Estilos globais
│   └── app/
│       ├── app.ts              # Componente raiz
│       ├── app.html            # Template raiz
│       ├── app.scss            # Estilos do app
│       ├── mock-books.ts       # Mock de dados dos livros
│       └── componentes/
│           ├── book/           # Componente de livro
│           │   ├── book.ts
│           │   ├── book.html
│           │   └── book.scss
│           ├── footer/         # Rodapé
│           ├── header/         # Cabeçalho
│           ├── list-books/     # Lista de livros
│           └── literary-genre/ # Gênero literário
├── angular.json                # Configuração Angular
├── package.json                # Dependências e scripts
├── tsconfig.json               # Configuração TypeScript
└── README.md                   # Documentação do projeto
```

---

## Tecnologias Utilizadas

- **Angular 20+**: Framework principal para construção da aplicação.
- **TypeScript**: Linguagem principal para desenvolvimento dos componentes.
- **SCSS**: Pré-processador CSS para estilização dos componentes.
- **HTML**: Estrutura dos componentes e páginas.
- **Angular CLI**: Ferramenta para scaffolding, build e serve do projeto.

---