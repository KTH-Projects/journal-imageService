
const mysql = require('mysql2');


var con = mysql.createConnection({
  
    host: process.env.REACT_APP_MYSQL_IP,
    user: process.env.REACT_APP_MYSQL_USER,
    password: process.env.REACT_APP_MYSQL_ROOT_PASSWORD,
    port:process.env.REACT_APP_MYSQL_PORT,
    database: process.env.REACT_APP_MYSQL_DATABASE
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

const imageTableQuery = `
    CREATE TABLE IF NOT EXISTS images (
      id VARCHAR(255) PRIMARY KEY,
      image LONGTEXT NOT NULL,
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
