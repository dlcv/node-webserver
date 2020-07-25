const express = require('express');
const app = express();

const hbs = require('hbs');
require('./helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public/'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    response.render('home.hbs', {
        name: 'Francisco'
    });
});

app.get('/about', (request, response) => {
    response.render('about.hbs');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});