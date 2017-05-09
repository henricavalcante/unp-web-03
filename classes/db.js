const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b0d337c455a503',
    password: '73ac29308416c2b',
    database: 'heroku_34a7da4862aa45e'
});

conn.connect();

const query = (query, object) => {
    return new Promise((resolve, reject) => {
        if (object) {
            conn.query(query, object, (err, data) => (err ? reject(err) : resolve(data)));
        } else {
            conn.query(query, (err, data) => (err ? reject(err) : resolve(data)));
        }
    })
};

module.exports = {conn, query};