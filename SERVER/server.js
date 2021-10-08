const express = require('express');
const mysql = require('mysql')
                require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req,res) => {res.send('hello world')});
app.post('/data', (req,res) => {
    res.json({test:'successfull'})
})

app.listen(PORT,() => console.log(`>Server listening on PORT: ${PORT}`))