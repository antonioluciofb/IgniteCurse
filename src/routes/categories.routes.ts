import { request, response, Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../model/categorie';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categorie = new Category();

  Object.assign(categorie, {
    name,
    description,
    create_at: new Date(),
  });

  categories.push(categorie);

  return response.status(201).json(categories);
});

export { categoriesRoutes };
