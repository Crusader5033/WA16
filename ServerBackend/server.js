const express = require('express');
const app = express();
const sql = require('mssql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

const config = {
  server: '193.85.203.188',
  database: 'prochazka6',
  user: 'prochazka6',
  password: 'dominik2005',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};


app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const pool = await sql.connect(config);

    const query = `INSERT INTO users (username, password,name) VALUES ('${username}', '${password}','name')`;
    await pool.request().query(query);

    res.sendStatus(201); 
  } catch (error) {
    console.error(error);
    res.sendStatus(500); 
  }
});


app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const pool = await sql.connect(config);

    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    const result = await pool.request().query(query);

    if (result.recordset.length > 0) {
      res.sendStatus(200); 
    } else {
      res.sendStatus(401); 
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500); 
  }
});
app.use(express.static(__dirname)); 




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
