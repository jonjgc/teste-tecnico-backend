# API de Gerenciamento de Usuários e Tarefas

Esta API REST tem como objetivo fornecer endpoints para gerenciar usuários e suas respectivas tarefas, seguindo as melhores práticas de desenvolvimento com Node.js e TypeScript.

## Funcionalidades

- CRUD completo para Usuários.
- CRUD completo para Tarefas.
- Vinculação de tarefas a usuários específicos.
- Validação de dados de entrada para garantir a integridade da API.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Express**: Framework para a construção da API REST.
- **Prisma**: ORM para interação com o banco de dados.
- **PostgreSQL**: Banco de dados.
- **Zod**: Biblioteca para validação de schemas e dados.

## Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

- Node.js versão 18 ou superior)
- npm ou yarn
- Git
- Um servidor PostgreSQL rodando (Docker é uma ótima opção)

### Passos para Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/jonjgc/teste-tecnico-backend.git
    cd teste-tecnico-backend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    - Renomeie o arquivo `.env.example` para `.env` na raiz do projeto.
    - Adicione a sua URL de conexão com o PostgreSQL:
    ```env
    DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO?schema=public"
    ```

4.  **Execute as migrações do banco de dados:**
    Este comando irá criar as tabelas `users` e `tasks` no seu banco.
    ```bash
    npx prisma migrate dev
    ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O servidor estará rodando em `http://localhost:3000`.

## 📝 Endpoints da API

Aqui está a documentação das rotas disponíveis na API.

### Usuários (`/users`)

- **`POST /users`**: Cria um novo usuário.
  - **Body:**
    ```json
    {
      "name": "string",
      "email": "string"
    }
    ```

- **`GET /users`**: Lista todos os usuários.

- **`GET /users/:id`**: Busca um usuário pelo seu ID.

- **`PUT /users/:id`**: Atualiza um usuário.

- **`DELETE /users/:id`**: Deleta um usuário.

### Tarefas (`/tasks`)

- **`POST /tasks`**: Cria uma nova tarefa.
  - **Body:**
    ```json
    {
      "title": "string",
      "description": "string",
      "userId": "string (UUID do usuário)"
    }
    ```

- **`GET /tasks`**: Lista todas as tarefas, incluindo o nome do usuário associado.

- **`GET /tasks/:id`**: Busca uma tarefa pelo seu ID.

- **`PUT /tasks/:id`**: Atualiza uma tarefa (título, descrição ou status).

- **`DELETE /tasks/:id`**: Deleta uma tarefa.

## 🚀 Deploy

O deploy desta aplicação foi realizado na Vercel e pode ser acessado através do seguinte link:

[**https://teste-tecnico-backend-pi.vercel.app**](https://teste-tecnico-backend-pi.vercel.app)


##  Testando a API ao Vivo (Deploy)

Todos os endpoints citados acima podem ser testados diretamente na aplicação em produção, sem a necessidade de rodar o projeto localmente.

Você pode usar ferramentas como o Insomnia, Postman ou qualquer outro cliente HTTP para interagir com a API.

**A URL base para todas as requisições é:** https://teste-tecnico-backend-pi.vercel.app

#### Exemplo 1: Criar um Novo Usuário

Para criar um novo usuário, envie uma requisição `POST` para o endpoint `/users` com o seguinte corpo (Body) em formato JSON:

POST https://teste-tecnico-backend-pi.vercel.app/users

**Corpo (Body):**
```json
{
  "name": "Nome de Teste",
  "email": "teste@example.com"
}
```

#### Exemplo 2: Listar Usuários

Para listar todos os usuários, basta fazer uma requisição `GET` para o endpoint `/users`:

GET https://teste-tecnico-backend-pi.vercel.app/users