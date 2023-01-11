const express = require('express')
const app = express()
const port = process.env.APP_PORT || 80

const config = {
  host: 'mysql',
  user: 'admin',
  password: 'admin',
  database: 'db',
}

const mysql = require('mysql2')

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  connection.query(`INSERT INTO db.people (name) VALUES ('Joao Node');`)

  connection.query(`SELECT * FROM db.people`, (error, results, fields) => {
    
    const names = `
    <ul>
      ${results.map(p => `<li>${p.name}</li>`).join('')}
    </ul>
  `;
    
    res.send("<h1>Full Cycle Rocks!</h1>" + names)
  })
})

app.listen(port, () => {
  console.log('Server on:', port);
})