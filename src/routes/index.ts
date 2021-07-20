import { Router } from 'express';

const router = Router();

import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specification.routes';

router.use('/categories', categoriesRoutes);
router.use('/specification', specificationRoutes);

export { router };
