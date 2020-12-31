const { Sequelize } = require("sequelize");

class ConnectMySQL {
  constructor() {
    this.sequelize = null;
  }

  static getConnect() {
    this.sequelize = new Sequelize(
      process.env.MYSQL_DB,
      process.env.MYSQL_USER,
      process.env.MYSQL_PASSWORD,
      {
        host: process.env.MYSQL_HOST,
        dialect: process.env.DIALECT,
        logging: false, // disable query log in console
        define: {
          freezeTableName: true,
          timestamps: false,
        },
      }
    );

    // test DB connection
    this.sequelize
      .authenticate()
      .then(() => console.log(`DB is connected`.yellow))
      .catch((err) => console.log(`DB failed to connected error: ${err}`.red));

    // sync table from DB with sequelize model
    // perform SQL create table query => if table is not existed in DB -> create table, if existed -> sync model
    this.sequelize.sync(); // => does nothing if existed
  }
}

module.exports = ConnectMySQL;

// const mysql = require("mysql2");

// exports.ConnectMySQL = class ConnectMySQL {
//   constructor() {
//     this.db = null;
//   }
//   static getConnection() {
//     this.db = mysql.createConnection({
//       host: process.env.MYSQL_HOST,
//       user: process.env.MYSQL_USER,
//       password: process.env.MYSQL_PASSWORD,
//       database: process.env.MYSQL_DB,
//     });

//     this;
//   }
// };
