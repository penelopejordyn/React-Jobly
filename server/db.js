
const { Client } = require("pg");

let DB_URI = {
  user: 'phoenixp',
  host: 'localhost',
  database: '',
  port: 5432,
  password: 'myPassword'
}






if (process.env.NODE_ENV === "test") {
  DB_URI.database = "jobly_test";
} else {
  DB_URI.database = "jobly";
}





let db = new Client(DB_URI);



db.connect();

module.exports = db;