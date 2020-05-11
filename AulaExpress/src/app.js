//configurar a aplicação express

import express from 'express';
import path from 'path';

import rotasView from './routes/view';

const app = express();

//configuração das paginas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//configuração dos recursos estaticos(imagens, fontes, folhas de estilo)
app.use(express.static(path.join ( __dirname, 'public')));


//rotas de view
app.use('/', rotasView);


export default app;