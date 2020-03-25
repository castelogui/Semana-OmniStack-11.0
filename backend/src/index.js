/**
 * Rota/Recurso
 */

/**
 * MÉTODOS HTTP:
 * 
 * GET: Buscar/Listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */


 /**
  * Tipos de Parâmetro:
  * 
  * Query Params: Parametros nomeados enviados na rota atraves do "?" (Filtros, paginação)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

 /**
  * Driver: SELECT * FROM USERS
  * Query Builder: table('users').select('*');where()
  */


const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);




