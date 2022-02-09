# api-commerce
API de ecommerce realizada no curso do Biopark Connect na matéria de Back-end em NodeJS

Para criar banco de dados com docker:

para aprendizado utilizei conteinerização com ajuda de um colega o Lucas Matras

1 - Utilizar:
  - docker run --name name -e MYSQL_ROOT_PASSWORD=root -p 49153:3306 -d mysql

2 - Abrir o CLI do container:
  - mysql -p
  - root
  - create database ecommerce;
  - use ecommerce;

3 - Rodar migrations
  - yarn typeorm migration:run
