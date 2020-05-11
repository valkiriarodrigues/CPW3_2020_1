import { Router } from 'express';

const router = Router();

let clientes = [
    {
        nome:'jose da silva',
        email:'jose@email.com'
    },
    {
        nome:'maria dos santos',
        email:'maria@email.com'
    },
    {
        nome:'silvana andrade',
        email:'ailvana@email.com'
    }
]

//criando a rota da pag inicial
router.get('/', (req, res) => res.render('index'));

//criando a rota da pagina de clientes
router.get('/clientes',(req, res) => {

    res.render('clientes' , {clientes});
});

export default router;