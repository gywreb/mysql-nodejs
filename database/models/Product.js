const { DataTypes } = require("sequelize");
const ConnectMySQL = require("../dbConnect");

const Product = ConnectMySQL.sequelize.define("products", {
  product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notNull: {
        msg: "name is required",
      },
      notEmpty: {
        msg: "name is required",
      },
    },
  },
  quantity_in_stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: "quantity must be a number",
      },
      notNull: {
        msg: "quantity is required",
      },
    },
  },
  unit_price: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false,
    validate: {
      isDecimal: {
        msg: "unit's price must be a decimal number",
      },
      notNull: {
        msg: "unit's price is required",
      },
    },
  },
});

module.exports = Product;
