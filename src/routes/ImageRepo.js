const db = require('./db');

class ImageRepo {
  getAllImages() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM images';

      db.query(query, (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      });
    });
  }

  createImage({ id, image, date }) {
    return new Promise((resolve, reject) => {
      const insertQuery = 'INSERT INTO images (id, image, date) VALUES (?, ?, ?)';
  
      db.query(insertQuery, [id, image, date], (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      });
    });
  }

  updateImage({ id, image }) {
    return new Promise((resolve, reject) => {
      const updateQuery = 'UPDATE images SET image = ? WHERE id = ?';
  
      db.query(updateQuery, [image, id], (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      });
    });
  }
}

module.exports = new ImageRepo();
