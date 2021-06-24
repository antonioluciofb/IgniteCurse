import { Category } from '../model/categorie';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const categories = new Category();

    Object.assign(categories, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(categories);
  }
}

export { CategoriesRepository };
