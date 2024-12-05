const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/test', (req, res) => {
    res.json({ message : 'Hello World' });
});

app.get('/test/:name', (req, res) => {
    res.json({ message : `Hello ${req.params.name}` });
});

app.get('/getData', (req, res) => {
    res.json({ data : { name: 'John Doe', age: 25 }});
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port localhost/${PORT}`);
});