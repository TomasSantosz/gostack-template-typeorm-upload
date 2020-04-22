import { Router } from 'express';

import CreateUserService from '../services/CreateCategoriesService';

const categoriesRouter = Router();

categoriesRouter.post('/', async (request, response) => {
  const { title } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    title,
  });

  return response.json(user);
});

export default categoriesRouter;
