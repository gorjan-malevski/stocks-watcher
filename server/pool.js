const { Pool } = require('pg');
const getConfig = require('./config');
const dataBaseConfig = getConfig('databaseOptions')
const pool = new Pool({
  user: dataBaseConfig.user,
  password: dataBaseConfig.password,
  host: dataBaseConfig.host,
  port: dataBaseConfig.port,
  database: dataBaseConfig.database,
  ssl: dataBaseConfig.ssl,
});

module.exports = pool;