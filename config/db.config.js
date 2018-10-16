const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.company = require('../model/company.model.js')(sequelize, Sequelize);
db.product = require('../model/product.model.js')(sequelize, Sequelize);

// Here we can connect companies and products base on company'id
db.company.hasMany(db.product, {foreignKey: 'fk_companyid', sourceKey: 'uuid'});
db.product.belongsTo(db.company, {foreignKey: 'fk_companyid', targetKey: 'uuid'});

module.exports = db;