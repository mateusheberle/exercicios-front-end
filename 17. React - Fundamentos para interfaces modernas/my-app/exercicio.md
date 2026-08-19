# Pratique

## Objetivo

Desenvolver uma aplicação front-end utilizando React para exibir um catálogo de produtos. O objetivo é aplicar os conceitos aprendidos no módulo, como criação de componentes reutilizáveis, uso de `JSX`, `props`, `state`, controle de formulários e ciclo de vida com o hook `useEffect`.

## Requisitos

### 1. Estrutura do Projeto

- Criar a aplicação utilizando `Vite`.
- Organizar os arquivos em pastas separadas: components, pages, assets (se necessário) e App.jsx.

### 2. Componentes Reutilizáveis

- Criar um componente `ProdutoCard` para exibir as informações de um produto.
- O componente deve receber as informações do produto via props (nome, preço, imagem e descrição).

### 3. Listagem Dinâmica

- Utilizar o `state` para armazenar a lista de produtos.
- Renderizar dinamicamente os produtos na tela através de `.map()`.

### 4. Formulário de Cadastro de Produto

- Criar um formulário controlado com React para adicionar novos produtos ao catálogo.
- Os dados do formulário devem ser armazenados no state e exibidos na tela após o envio.
- Campos obrigatórios: nome do produto, preço e descrição.

### 5. Simulação de API com `useEffect`

- Simular o carregamento inicial dos produtos usando o hook `useEffect`, com uma lista fictícia ou dados mockados.
- Exibir uma mensagem de "carregando..." enquanto os dados são simuladamente buscados.

## Entrega

- Subir o projeto completo no GitHub (repositório público).
- Compartilhar o link do repositório conforme as instruções.

## Dicas

- Utilize o `useState` para gerenciar os produtos e os campos do formulário.
- Mantenha o código organizado, separando os componentes por função.
- Utilize props corretamente para tornar os componentes reutilizáveis.
- Use `useEffect` com um `setTimeout` para simular o carregamento da lista de produtos.
- Capriche no visual utilizando CSS (ou bibliotecas visuais se preferir).