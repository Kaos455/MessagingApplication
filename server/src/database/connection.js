// Using MySQL2 as the MySQL client
// This is due to the fact that the original MySQL client does not support the authentication method requested by MYSQL 8.0
const mysql = require('mysql2');

// Create connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'messaging_application'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database');
        return;
    }
    // If there is no error, show the following message
    console.log('Connected to database successfully');
});

module.exports = db;