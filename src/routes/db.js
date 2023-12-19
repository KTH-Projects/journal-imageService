
const mysql = require('mysql2');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "imagedb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

const imageTableQuery = `
    CREATE TABLE IF NOT EXISTS images (
      id VARCHAR(255) PRIMARY KEY,
      image VARCHAR(255) NOT NULL,
      date VARCHAR(255) NOT NULL
    )
  `;

  con.query(imageTableQuery, (createTableError) => {
    if (createTableError) {
      console.error('Error creating table:', createTableError);
    } else {
      console.log('Table created or already exists');
    }
  });

  
module.exports = con;
