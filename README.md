## Descrição

Projeto criado para praticar os conhecimentos em NestJS, TypeORM e GraphQL

## Instalação

```bash
$ yarn install
```

## Execução do app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Docker

Ao subir os containers a aplicação sera iniciada automaticamente, na porta informada no `.env`

```bash
# criar o .env
$ cp .env.example .env

# Alterar as variáveis de conexão com o banco e porta da aplicação do .env, caso necessário.

# subir o container
$ docker-compose up --build
```
