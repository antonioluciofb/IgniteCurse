import { Category } from '../model/Categorie';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepository, ICreateCategoryDTO };
