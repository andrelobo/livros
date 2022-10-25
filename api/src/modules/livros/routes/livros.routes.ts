import { Router } from 'express';

import { celebrate, Joi, Segments } from 'celebrate';
import LivrosController from '../controllers/LivrosController';

const livrosRouter = Router();

const livrosController = new LivrosController();



livrosRouter.get('/', livrosController.index);

livrosRouter.post(

  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      autor: Joi.string().required(),
      genero: Joi.string().required(),
      capa: Joi.string(),

    },

  }),

  livrosController.create,


);

livrosRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  livrosController.show);


livrosRouter.get(
  '/:nome',
  celebrate({
    [Segments.PARAMS]: {
      nome: Joi.string().required(),
    },
  }),
  livrosController.showByName);


livrosRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      autor: Joi.string().required(),
      genero: Joi.string().required(),
      capa: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  livrosController.update,
);



livrosRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  livrosController.delete,
);

export default livrosRouter;



