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
    else console.log('DB connected')
})

// DB.query(` SELECT * FROM incidenti WHERE incidenti.Protocollo = '2002/001824' `,(err,result) => {
//     if(err) console.log(err)
//     else console.log(SQLparserBoolFieldsAndCoord(result[0]))
// })

function pointsParser(p){
  let list = []
  //console.log(p)
  p.forEach(element => {
    //console.log(element.Localizzazione)
    let loc = element.Localizzazione.substr(1,element.Localizzazione.length -2).split(',') //'['5.4354','5.4353']'
    //console.log(loc)
    loc[0] = parseFloat(loc[0])
    loc[1] = parseFloat(loc[1])
    list.push(loc)
  });
  //console.log(list)
  return list
}

const lista = [[45.6956,9.6671],[45.701,9.6657],[45.6957, 9.66]]

app.use(cors())

app.get('/',(req,res) => {res.send('hello world')})
app.post('/data', (req,res) => {
    DB.query(`SELECT Localizzazione FROM incidenti WHERE Morti > 0`,(err,result) => {
      if(err) res.json({'error': err})
      else res.json(pointsParser(result))
    })
})

app.listen(PORT,() => console.log(`>Server listening on PORT: ${PORT}`))