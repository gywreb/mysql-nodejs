const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");

const ConnectMySQL = require("./database/dbConnect");
ConnectMySQL.getConnect();

const product = require("./routes/product");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// ConnectMySQL.db.connect((err) => console.log(`DB is connected`.yellow));

// ConnectMySQL.db.query(`SELECT * FROM customers`, (err, results, fields) => {
//   console.log(results);
// });

app.use(express.json());

app.use("/api/v1/product", product);
app.use(errorHandler);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server is running on port: ${port}`.cyan));
