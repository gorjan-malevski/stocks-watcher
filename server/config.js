const config = {
  databaseOptions: {
    user: 'siipdhpheaqbwd',
    password: '7d47b3e4791173517177a5880e06fe6815b7e56cc796b1eb40adc0240a58d4ef',
    host: 'ec2-54-209-221-231.compute-1.amazonaws.com',
    port: '5432',
    database: 'd2ohaakehshs6a',
    ssl:  { rejectUnauthorized: false },
  },
  apiHostOptions: {
    host: 'https://www.alphavantage.co/',
    key: 'KLD7YUSW0CXFZRJW',
    timeSeriesFunction: 'TIME_SERIES_INTRADAY',
    interval: '5min'
  },
  graphqlURL: 'https://stocks-watcher.hasura.app/v1/graphql'
};
//postgres://oyhhyqnkdugawa:50cf9aebf5580aa4eafbf864e205721e9c911496da2691284f096c25a8dffc62@ec2-34-253-116-145.eu-west-1.compute.amazonaws.com:5432/d6rfjla57c6ifm
const getConfig = (key) => {
  return config[key];
};

module.exports = getConfig;
//postgres://siipdhpheaqbwd:7d47b3e4791173517177a5880e06fe6815b7e56cc796b1eb40adc0240a58d4ef@ec2-54-209-221-231.compute-1.amazonaws.com:5432/d2ohaakehshs6a