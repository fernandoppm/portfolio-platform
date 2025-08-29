# Plataforma de Portfólios - Interface com React 🚀

![React](https://img.shields.io/badge/React-18.2.0-%2361DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-%233178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.2.0-%23646CFF?style=for-the-badge&logo=vite)
![Status](https://img.shields.io/badge/status-concluído-success?style=for-the-badge)

<br>

## 📋 Descrição

Este projeto é a interface de usuário (Frontend) para a "Plataforma de Portfólios". Desenvolvido como uma **Single Page Application (SPA)** com **React** e **TypeScript**, ele **consome dados de uma API externa construída em NestJS**. A aplicação permite que usuários criem, visualizem e gerenciem portfólios profissionais de forma dinâmica e intuitiva, com um design moderno e totalmente responsivo.

<br>

## ✨ Funcionalidades Principais

* **Página de Início (Homepage):**
    * **Seção de Boas-Vindas ("Hero Section"):** Uma apresentação inicial impactante com título, subtítulo e um botão de "Começar Agora" para engajar o usuário.
    * **Listagem Dinâmica:** Apresenta os portfólios criados em formato de cards, com animações de entrada em cascata.
    * **Animações de Hover:** Feedback visual elegante nos cards ao passar o mouse.

* **Busca e Filtro em Tempo Real:**
    * Campo de busca interativo na página inicial.
    * Filtra os portfólios por nome ou cargo à medida que o usuário digita.

* **Gerenciamento Completo de Portfólios (CRUD):**
    * **Criação e Edição:** Formulário completo e reutilizável para criar ou atualizar portfólios.
    * **Leitura (Detalhes):** Página dedicada para cada portfólio, acessada via rota dinâmica.
    * **Exclusão:** Opção para remover um portfólio permanentemente.

* **Interface e Experiência do Usuário (UI/UX):**
    * **Tema Dual (Light/Dark):** Botão para alternar instantaneamente entre um tema claro e escuro, com a preferência salva no Local Storage.
    * **Animações Avançadas com Framer Motion:** Transições de página suaves, animação de entrada em cascata (*stagger*), e animações de layout na lista ao filtrar.
    * **Design Responsivo (Mobile-First):** Interface que se adapta a desktops, tablets e celulares, incluindo um menu "hambúrguer".

* **Navegação e Persistência:**
    * **Roteamento:** Navegação fluida entre as páginas utilizando `React Router DOM`.
    * **Persistência de Dados via API:** Todas as informações dos portfólios são enviadas e recebidas de uma API backend (NestJS), e salvas permanentemente em um banco de dados.

<br>

## 🛠️ Tecnologias Utilizadas

* **React** e **TypeScript**
* **Vite** (Ambiente de Desenvolvimento)
* **CSS Modules** (Estilização)
* **React Router DOM** (Roteamento)
* **Framer Motion** (Animações)
* **React Icons** (Ícones)
* **Context API** (Gerenciamento de Estado)
* **Fetch API** (Comunicação com o Backend)

<br>

## ⚙️ Como Executar o Projeto

**Pré-requisito:** Para que o frontend funcione completamente, o projeto do backend (`portfolio-api-sqlite`) deve estar rodando, pois ele é o responsável por fornecer os dados.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/fernandoppm/portfolio-platform.git](https://github.com/fernandoppm/portfolio-platform.git)
    ```
    
2.  **Acesse a pasta do projeto:**
    ```bash
    cd portfolio-platform
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal).

