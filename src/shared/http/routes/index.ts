import livrosRouter from '@modules/livros/routes/livros.routes';
import { Router } from 'express';


const routes = Router();


routes.use('/livros', livrosRouter);

routes.get('/', (req, res) => {
  return res.json({ message: 'Olá que tal ? !' });

});

export default routes;
