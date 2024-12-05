const express = require('express');

// Importing the cors middleware to allow cross-origin requests
const cors = require('cors');

// Using MySQL2 as the MySQL client
// This is due to the fact that the original MySQL client does not support the authentication method requested by MYSQL 8.0
const mysql = require('mysql2');

// Create an express application
const app = express();

// Use the cors middleware
app.use(cors());

// Create connection to database
const db = mysql.createConnection({
    // Change the following to your MySQL host and user
    host: 'localhost',
    user: 'root',
    password: 'admin',
    // Change the following to the database you would like to use
    database: 'messaging_application'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database');
        return;
    }
    // If there is no error, show the following message
    console.log('Connected to database');
});


/* Any API Endpoints */
// app.get('/test', (req, res) => {
//     db.execute("SELECT * FROM users;", (err, results) => {
//         if (err) {
//             console.error('Error executing query');
//             return;
//         }
//         res.json({ data : results });
//     });
// });

// app.get('/test/:name', (req, res) => {
//     db.execute("INSERT INTO users (name) VALUES (?);", [req.params.name], (err, results) => {
//         if (err) {
//             console.error('Error executing query');
//             return;
//         }
//         res.json({ message : 'Data inserted successfully' });
//     });
// });


/* 
API Endpoint : Check User
Checks if user exists, if so returns 'User Exists' otherwise returns 'User does not Exist' */
app.get('/checkUser/:name', (req, res) => { 
    // Query the database to check if the user exists
    db.execute("SELECT * FROM users WHERE name = ?;" , [req.params.name], (err, results) => {
        // Checking for Errors
        if (err) {
            console.error('Error executing query');
            return;
        }
        
        if (results.length > 0) {
            res.json({ message : 'User exists' });
        } else {
            res.json(null);
        };
    })
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port localhost/${PORT}`);
});