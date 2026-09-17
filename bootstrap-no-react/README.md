# Bootstrap no React

Projeto desenvolvido para praticar o uso do Bootstrap em aplicações React.

## Exercícios realizados

### 1. Galeria Responsiva
Galeria com 6 blocos utilizando o sistema de grid do Bootstrap.

- 1 bloco por linha em telas pequenas;
- 2 blocos por linha em telas médias;
- 3 blocos por linha em telas grandes;
- Uso de `container`, `row`, `col` e `g-*`.

### 2. Navbar e Cards
Criação de uma barra de navegação e cards de cursos utilizando Bootstrap.

Os cards são gerados a partir de um array utilizando `map()` e possuem a mesma altura.

### 3. Formulário Validado
Formulário de matrícula contendo:

- Nome;
- E-mail;
- Curso.

O formulário possui validação e utiliza as classes `is-invalid` e `invalid-feedback` do Bootstrap.

### 4. Tabela com Filtro
Tabela de alunos contendo nome, curso e nota.

Foi implementado um campo de busca para filtrar os alunos pelo nome. Notas abaixo de 6 são destacadas com um badge.

## Desafio Final — Catálogo do Curso

O desafio final reúne os principais conceitos trabalhados nos exercícios anteriores em uma única página:

- Navbar;
- Catálogo de cursos em cards;
- Tabela de alunos inscritos;
- Formulário de inscrição;
- Layout responsivo;
- Validação de formulário;
- Componentes React;
- Bootstrap e React-Bootstrap.

## Bootstrap CSS x React-Bootstrap

Para um projeto completo, eu escolheria o **React-Bootstrap**, pois seus componentes são construídos para funcionar diretamente com React e permitem controlar comportamentos utilizando o estado e os recursos do React.

O Bootstrap CSS continua sendo útil para utilizar classes de layout e utilitários de forma simples, mas o React-Bootstrap facilita a criação de componentes que possuem comportamentos próprios.

Neste projeto foram utilizadas as duas abordagens para praticar suas diferenças.

## Tecnologias utilizadas

- React
- Bootstrap
- React-Bootstrap
- JavaScript
- HTML
- CSS

## Como executar o projeto

Instale as dependências:

```bash
npm install