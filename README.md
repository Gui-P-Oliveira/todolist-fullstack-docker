# To-Do List Full-Stack (Node.js, React & Docker)

[![CI/CD - Construir e Publicar Imagens Docker](https://github.com/brunamartinsdev/todolist-fullstack-docker/actions/workflows/main.yml/badge.svg)](https://github.com/brunamartinsdev/todolist-fullstack-docker/actions)

Uma aplicação de lista de tarefas completa, construída com Node.js no backend, React no frontend e totalmente conteinerizada com Docker. Este projeto foi desenvolvido como parte de um estudo de DevOps, focando em conteinerização e automação de CI/CD com GitHub Actions.

## Funcionalidades

- **CRUD Completo:** Crie, leia, atualize (marcar como concluído) e delete tarefas.
- **Persistência de Dados:** As tarefas são salvas em um banco de dados SQLite, com os dados persistidos através de um volume Docker.
- **Interface Reativa:** Interface moderna e responsiva construída com React e a biblioteca de componentes Material-UI.
- **Conteinerizado:** A aplicação inteira (backend e frontend) roda em contêineres Docker, gerenciados com um único comando via Docker Compose.
- **Automação de CI/CD:** Imagens Docker são construídas e publicadas no Docker Hub automaticamente a cada push na branch `main` utilizando GitHub Actions.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, SQLite
- **Frontend:** React, Vite, Material-UI
- **DevOps:** Docker, Docker Compose, GitHub Actions

## Como Rodar o Projeto Localmente

Você precisa ter o **Docker** e o **Docker Compose** instalados na sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/brunamartinsdev/todolist-fullstack-docker.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd todolist-fullstack-docker
    ```

3.  **Inicie a aplicação com Docker Compose:**
    ```bash
    docker-compose up --build
    ```

4.  **Acesse a aplicação:**
    - O frontend estará disponível em `http://localhost:5173`.
    - A API do backend estará disponível em `http://localhost:5000`.

## Imagens Docker

As imagens Docker deste projeto são construídas e publicadas automaticamente no Docker Hub e podem ser encontradas aqui:

- **Backend:** [https://hub.docker.com/repository/docker/brunamartinsdev/todolist-backend](https://hub.docker.com/repository/docker/brunamartinsdev/todolist-backend)
- **Frontend:** [https://hub.docker.com/repository/docker/brunamartinsdev/todolist-frontend](https://hub.docker.com/repository/docker/brunamartinsdev/todolist-frontend)

## Licença

Este projeto está sob a licença MIT.