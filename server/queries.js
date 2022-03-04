const pool = require('./pool');
insertStocksData = async (payload) => {
  const query = 'INSERT INTO stock_data (symbol, high, low, open, close, volume, time) VALUES ($1, $2, $3, $4, $5, $6, $7)';
  pool.query(query, payload, (err, result) => {
    console.log('result here', err);
  });
};

module.export = this.insertStocksData;