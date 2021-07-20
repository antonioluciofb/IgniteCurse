import { Request, Response } from 'express';
import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoryController {
  constructor(private ListCategoryUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.ListCategoryUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoryController };
