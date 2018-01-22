const express = require('express');
const swig = require('swig');
const app = express();

app.engine('swig', swig.renderFile);
app.set('view engine', 'swig');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(3000, () => console.log("Listening on port 3000..."));


const request = require('request');
const api = express();

api.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

api.get('/things', (req, res) => {
    res.set('Content-Type', 'text/json');
    request
        .get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json',
            function(error, response, body) {

                const jsonResponse = JSON.parse(body),
                    results = jsonResponse.Results;
                let output = {
                    count: 0,
                    results: []
                };
                results.forEach((obj) => {
                    const name = obj.Mfr_CommonName;
                    if(name !== null && output.results.indexOf(name) < 0) {
                        output.results.push(name);
                        output.count++;
                    }
                });
                output.results.sort();
                res.send(output);
            });
});

api.listen(3100, () => console.log("Listening on port 3100..."));