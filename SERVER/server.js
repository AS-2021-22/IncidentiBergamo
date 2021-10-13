const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const {SQLparserBoolFieldsAndCoord} = require('./functions/parsers')
                require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000



const DB = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PW,
  database : process.env.DB_database
})
 
DB.connect(err => {
    if (err) console.error('error connecting: ' + err.stack);
    else {
      console.log('DB connected')
      app.listen(PORT,() => console.log(`>Server listening on PORT: ${PORT}`))
    }
})

// DB.query(` SELECT * FROM incidenti WHERE incidenti.Protocollo = '2002/001824' `,(err,result) => {
//     if(err) console.log(err)
//     else console.log(SQLparserBoolFieldsAndCoord(result[0]))
// })

app.use(cors())

app.get('/',(req,res) => {res.send('hello world')})
app.post('/data', (req,res) => {
    DB.query(`SELECT Protocollo,Localizzazione FROM incidenti WHERE Morti > 0`,(err,result) => {
      if(err) res.json({'error': err})
      else res.json(result)
    })
})