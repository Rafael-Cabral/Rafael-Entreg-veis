const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3061;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'bancoDeDados.db';

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("."));
app.use(express.json());

app.post('/email', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    sql = "INSERT INTO bancoDeDados (email, mensagem) VALUES ('" + req.body.email + "','" + req.body.mensagem + "')";
    var db = new sqlite3.Database(DBPATH); 
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close();
    res.end();
});

app.listen(port, hostname, () => {
	console.log(`BD server running at http://${hostname}:${port}/`);
});