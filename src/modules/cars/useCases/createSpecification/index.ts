import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { CreateSpecificationController } from './CreateSpecificationController';

const categoriesRepository = CategoriesRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  categoriesRepository,
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export { createSpecificationController };
