//import {express} from 'express';
const express = require('express');        // call express
const app = express();                 // define our app using express
const bodyParser = require('body-parser');
const cors = require('cors');

// parse the body of messages
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Enable cross origin resource requests
app.use(cors());

const port = 8080;
const router = express.Router();

router.get('/hello', (req, res) => {
    res.json({message: 'Hello'});
});

router.post('/mynameis/:name', (req, res) => {
    res.json({
        message: `Hello ${req.params.name}, my name is Server`
    });
});

router.put('/howdy', (req, res) => {
    res.json({
        message: `Hello ${req.headers.firstname} ${req.headers.lastname}, that's using your head(er)`
    });
});

router.delete('/worries', (req, res) => {
    messages = req.body.map(x => `Deleting worry ${x}`);
    res.json({message: messages});
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);