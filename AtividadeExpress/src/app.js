import express from 'express';
import path from 'path';
const app = express();


app.set('views', path.join(__dirname, 'views')); // uni caminhos
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => res.render('index'));


app.get('/portifolio', (req, res) => res.render('portifolio'));
app.get('/bio', (req, res) => res.render('bio'));
app.get('/contato', (req, res) => res.render('contato'));


export default app;

