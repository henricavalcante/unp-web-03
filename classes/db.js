const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'dev',
    password: '123456',
    database: 'myapp'
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