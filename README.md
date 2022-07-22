# Como rodar o projeto

## Rode o comando para clonar o repositório:

`
git clone https://github.com/gcruzdev/students-api-graphql.git
`

## Acesse a pasta do projeto
cd students-api-graphql

## Altere o arquivo .env.example renomeando-o para apenas .env e adicionando as variáveis de ambiente corretas
**Atenção: o arquivo .env não aceita aspas. O formato utilizado para adição de variáveis de ambiente é:**

`
  NAME = value
`

Após configurar e salvar as variáveis de ambiente, rode o comando a seguir para subir o container Docker:

`
docker-compose up
`

A API estará disponível para consultas em localhost:4000
