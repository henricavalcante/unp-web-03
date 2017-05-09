const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const Veiculo = require('./classes/veiculo');

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.get('/api/veiculo', function (req, res) {
    Veiculo.getAll()
        .then(veiculos => res.send(JSON.stringify(veiculos)))
        .catch(error => res.send(JSON.stringify(error)));
});

app.post('/api/veiculo', function (req, res) {
    const v = new Veiculo(req.body);
    v.insert()
        .then(veiculo => res.send(JSON.stringify(veiculo)))
        .catch(error => res.send(JSON.stringify(error)));
});

app.delete('/api/veiculo', function (req, res) {
    const v = new Veiculo(req.body);
    v.delete()
        .then(() => res.send(JSON.stringify({})))
        .catch(error => res.send(JSON.stringify(error)));
});

app.listen(3000);
