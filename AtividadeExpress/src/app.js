import express from 'express';
import path from 'path';
const app = express();


app.set('views', path.join(__dirname, 'views')); // uni caminhos
app.set('view engine', 'pug');


app.get('/', (req, res) => res.render('index'));


app.get('/portifolio', (req, res) => res.render('portifolio'));


app.use(express.static(path.join(__dirname, 'public')));


export default app;

