const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors'); // Importing the cors middleware to allow cross-origin requests

const argon2 = require('argon2');

// Create an express application
const app = express();

// Use the middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* 
API Endpoint : Select
*/
app.post('/select', (req, res) => {
    switch (true) {
        case req.body.email !== undefined && req.body.password !== undefined:
            db.execute("SELECT * FROM users WHERE email = ? AND password = ?;", [req.body.email, req.body.password], (err, results) => {
                if (err) {
                    console.error('Error executing query');
                    return;
                }
                res.json({ results });
            });
            break;

        case req.body.name !== undefined:
            console.log(req.body.name);
            res.json({ message: `Hello, ${req.body.name}`});
            break;

        default:
            return res.status(400).json({ message: "No valid key provided in request body." });
    }
});

// Set the port for the server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port localhost/${PORT}`);
});