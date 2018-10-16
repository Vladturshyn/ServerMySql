const env = {
  database: 'heroku_46730d7d959b023',
  username: 'b0ed182fd67118',
  password: 'ac84ac6f',
  host: 'eu-cdbr-west-02.cleardb.net',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;