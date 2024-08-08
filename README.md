# Vue.js & Spring Boot CRUD Application

Este projeto é uma aplicação de exemplo que demonstra a criação de uma aplicação full-stack usando Vue.js para o frontend e Spring Boot para o backend. A aplicação implementa um sistema CRUD (Create, Read, Update, Delete) para gerenciamento de produtos.

## Tecnologias Utilizadas

- **Frontend**:
  - [Vue.js](https://vuejs.org/) (Vue 3)
  - [Vuex](https://vuex.vuejs.org/) para gerenciamento de estado
  - [Bootstrap](https://getbootstrap.com/) para estilização

- **Backend**:
  - [Spring Boot](https://spring.io/projects/spring-boot) (Java)
  - [PostgreSQL](https://www.postgresql.org/) para banco de dados
  - [Liquibase](https://www.liquibase.org/) para migrações de banco de dados

## Funcionalidades

- **Frontend**:
  - Adicionar novos produtos
  - Listar produtos com paginação
  - Editar informações dos produtos
  - Remover produtos

- **Backend**:
  - API REST para operações CRUD de produtos
  - Exclusão lógica de produtos
  - Autenticação

## Estrutura do Projeto

### Frontend

1. **Configuração**:
   - Instale as dependências com `npm install` ou `yarn install`.
   - Inicie o servidor de desenvolvimento com `npm run serve` ou `yarn serve`.

2. **Scripts Disponíveis**:
   - `dev`: Inicia o servidor de desenvolvimento.
   - `build`: Cria a versão de produção.

3. **Arquitetura**:
   - `src/components/`: Componentes Vue.js
   - `src/store/`: Vuex store
   - `src/router/`: Configuração das rotas

### Backend

1. **Configuração**:
   - Instale as dependências com `mvn install`.
   - Inicie a aplicação com `mvn spring-boot:run`.

2. **Scripts Disponíveis**:
   - `mvn spring-boot:run`: Inicia o servidor Spring Boot.

3. **Arquitetura**:
   - `src/main/java/com/example/controller/`: Controladores REST
   - `src/main/java/com/example/service/`: Serviços
   - `src/main/java/com/example/repository/`: Repositórios
   - `src/main/java/com/example/entities/`: Modelos de dados


## Configuração do Banco de Dados

1. **PostgreSQL**:
   - Certifique-se de ter o PostgreSQL instalado e configurado.
   - Crie um banco de dados chamado `crudjava`

2. **Liquibase**:
   - Se estiver usando Liquibase, as migrações serão aplicadas automaticamente na inicialização da aplicação.
