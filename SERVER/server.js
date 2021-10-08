const express = require('express');
                require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const data = {
    
}

app.get('/',(req,res) => {res.send('hello world')});
app.post('/data', (req,res) => {
    res.json(data)
})

app.listen(PORT,() => console.log(`>Server listening on PORT: ${PORT}`))