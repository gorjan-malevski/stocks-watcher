const config = {
  databaseOptions: {
    user: 'oyhhyqnkdugawa',
    password: '50cf9aebf5580aa4eafbf864e205721e9c911496da2691284f096c25a8dffc62',
    host: 'ec2-34-253-116-145.eu-west-1.compute.amazonaws.com',
    port: '5432',
    database: 'd6rfjla57c6ifm',
    ssl: true,
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
