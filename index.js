const express = require('express');
const cors = require('cors');

const app = express();

const connection = mysql.createConnection({
    host: '172.18.0.2',
    user: 'root',
    password: 'password',
    port: 3306
});

connection.connect(error => {
    if(error)
        console.log(error);
    else
        console.log('connected');
});

app.use(cors());

function return_query_json(query, respond) {
    connection.query(query, (error, result) => {
        if(error)
            respond.send(error);
        else
            respond.json({
                data: result
            });
    });
}

app.get('/hello', (request, respond) => {
    respond.send('Hello World!');
});

app.get('/videos', (request, respond) => {
    
});

app.listen(4000, () => {
    console.log('API server listening on port 4000');
});