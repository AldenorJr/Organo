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

## Images do projeto

<img width="1874" height="686" alt="image" src="https://github.com/user-attachments/assets/3f7d17c0-6ccf-4610-8148-1b3bfce25427" />
<img width="1785" height="862" alt="image" src="https://github.com/user-attachments/assets/1d658bf8-d630-4804-9ee7-532e87bbadfb" />
<img width="1770" height="818" alt="image" src="https://github.com/user-attachments/assets/cc67b796-2a99-4e26-a916-8f16b9b3b3d5" />

---

## Tecnologias Utilizadas

- **Angular 20+**: Framework principal para construção da aplicação.
- **TypeScript**: Linguagem principal para desenvolvimento dos componentes.
- **SCSS**: Pré-processador CSS para estilização dos componentes.
- **HTML**: Estrutura dos componentes e páginas.
- **Angular CLI**: Ferramenta para scaffolding, build e serve do projeto.

---
