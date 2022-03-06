const pool = require('./pool');

const insertStocksData = async (payload) => {
const query = 'TRUNCATE TABLE stock_data';
// const query = 'INSERT INTO stock_data (symbol, high, low, open, close, volume, time) VALUES ($1, $2, $3, $4, $5, $6, $7)'; 
// console.log(pool)
  pool.query(query, payload, (err, result) => {
    console.log('result here', err);
  });

};

module.exports = {
  insertStocksData
}