import {Router} from 'express';

const  router = Router();



router.get('/', (req, res) => res.render('index'));
router.get('/portifolio', (req, res) => res.render('portifolio'));
router.get('/bio', (req, res) => res.render('bio'));
router.get('/contato', (req, res) => res.render('contato'));

export default router;