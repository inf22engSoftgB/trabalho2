# trabalho2
Este repositório alberga o projeto desenvolvido para a disciplina de Engenharia de Software do 2º ano da Licenciatura de Informática lecionada na Universidade da Maia.
Este trabalho reporta-se ao momento de avaliação designado por trabalho nº 2  desenvolvido em grupo constituido pelo seguintes elementos:
* [Bruno Ribeiro](https://github.com/a040225)
* [Cátia Antunes](https://github.com/CatiaAntunes)
* [Diogo Alves](https://github.com/Diogojqalves)
* Organizaçao - [inf22engSoftgB](https://github.com/inf22engSoftgB)


No terminal: git clone https://github.com/inf22engSoftgB/trabalho2.git

# Sprint 1

Desenvolvimento REST API com Adonis.js versão 4

Configuração: 
1. Instalação de dependências (no terminal):
- npm i -g @adonisjs/cli
- cd adonis-restAPI
- npm i

2. Base de Dados
- Iniciar o serviço MYSQL
- Criar a base de dados adonis com o seguinte query: create schema adonis;

3. Ligação à Base de Dados
a)  Criar ficheiro ./adonis-restAPI/.env conforme a estrutura em ./adonis-restAPI/.env e atualizar a chave/ valor DB_PASSWORD=secret
b) No terminal:
    - cd adonis-restAPI
    - adonis serve --dev
c) Num segundo terminal, para criar as tabelas da base de dados:
    - adonis migration:run
d) Validar criação das tabelas no SQL

# Sprint 2

Desenvolvimento REST API com Adonis.js versão 4 (Continuação)

- Implementação do Swagger (OPEN API)
- ./adonis-restAPI/docs

# Sprint 3
 
Desenvolvimento do Frontend em React

# Sprint 4
Contentarização dos serviços via docker

a) docker-compose up

