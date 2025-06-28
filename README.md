# Plataforma de Portfólios - Showcase Interativo 🚀

![React](https://img.shields.io/badge/React-18.2.0-%2361DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-%233178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.2.0-%23646CFF?style=for-the-badge&logo=vite)
![Status](https://img.shields.io/badge/status-concluído-success?style=for-the-badge)

<br>

## 📋 Descrição

Este projeto é uma **Single Page Application (SPA)** moderna desenvolvida como projeto final do módulo de Front-End. A aplicação permite que usuários criem, visualizem e gerenciem portfólios profissionais de forma dinâmica e intuitiva. O design foi cuidadosamente elaborado com um tema dual (Light/Dark), efeitos de *glassmorphism* e um design responsivo e animado para garantir uma excelente experiência de usuário.

<br>

## ✨ Funcionalidades Principais

A Plataforma de Portfólios oferece uma experiência de usuário rica e fluida com as seguintes funcionalidades:

* **Página de Início (Homepage):**
    * **Seção de Boas-Vindas ("Hero Section"):** Uma apresentação inicial impactante com título, subtítulo e um botão de "Começar Agora" para engajar o usuário.
    * **Listagem Dinâmica:** Apresenta os portfólios criados em formato de cards, com animações de entrada em cascata.
    * **Animações de Hover:** Feedback visual elegante nos cards ao passar o mouse.

* **Busca e Filtro em Tempo Real:**
    * Campo de busca interativo na página inicial.
    * Filtra os portfólios por nome ou cargo à medida que o usuário digita.

* **Gerenciamento Completo de Portfólios (CRUD):**
    * **Criação:** Formulário completo e intuitivo para adicionar novos portfólios, incluindo seções para habilidades, experiências profissionais e projetos.
    * **Leitura (Detalhes):** Página dedicada para cada portfólio, acessada via rota dinâmica (`/portfolio/:id`), que exibe todas as informações de forma organizada.
    * **Atualização (Edição):** Funcionalidade para editar um portfólio existente, reutilizando o mesmo formulário de criação pré-preenchido com os dados atuais.
    * **Exclusão:** Opção para remover um portfólio permanentemente.

* **Interface e Experiência do Usuário (UI/UX):**
    * **Tema Dual (Light/Dark):** Botão no cabeçalho para alternar instantaneamente entre um tema claro e um escuro.
    * **Persistência do Tema:** A escolha de tema do usuário é salva no Local Storage, mantendo a preferência ao recarregar a página.
    * **Animações Avançadas com Framer Motion:** Transições de página suaves, animação de entrada em cascata (*stagger*) para os elementos da tela, e animações de layout na lista de portfólios ao filtrar, proporcionando um feedback visual instantâneo e elegante.
    * **Design Responsivo (Mobile-First):** A interface se adapta perfeitamente a diferentes tamanhos de tela.

* **Navegação e Persistência:**
    * **Roteamento:** Navegação fluida entre as páginas sem recarregamentos, utilizando `React Router DOM`.
    * **Persistência de Dados:** Todos os portfólios criados são salvos no Local Storage do navegador.

<br>

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e conceitos:

* **Frontend:**
    * **React:** Biblioteca JavaScript para construção da interface de usuário.
    * **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
    * **CSS Modules:** Para escopo e modularização dos estilos CSS.
    * **React Router DOM:** Para gerenciamento de rotas e navegação.
    * **React Icons:** Biblioteca de ícones (edição, lixeira, busca, etc.).
    * **Framer Motion:** Biblioteca para criar animações fluidas e declarativas.
    * **Context API:** Para gerenciamento de estado global (portfólios e tema).
    * **Local Storage API:** Para persistência de dados no lado do cliente.

* **Ferramentas:**
    * **Vite:** Ferramenta de build rápida para projetos frontend.
    * **Git:** Sistema de controle de versão.
    * **GitHub:** Plataforma para hospedagem do código.

<br>

## 🌟 Boas Práticas e Diferenciais

O projeto foi desenvolvido com foco em:

* **Código Limpo e Componentização:** Estrutura de componentes modular e reutilizável (Cards, Botões, etc.), facilitando a manutenção.
* **Design Responsivo:** Layouts planejados para funcionar bem em qualquer dispositivo.
* **Estilização Profissional e Tematização:** Interface visualmente agradável, com paleta de cores coesa para os temas Light e Dark e uso de variáveis CSS.
* **Experiência de Usuário (UX) Polida:** O uso estratégico de animações, feedback visual e persistência de dados eleva a qualidade percebida da aplicação.
* **Gerenciamento de Estado Eficiente:** Uso da Context API para criar uma arquitetura de dados limpa e centralizada.

<br>

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/fernandoppm/portfolio-platform.git
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

