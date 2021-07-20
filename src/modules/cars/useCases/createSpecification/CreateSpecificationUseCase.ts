import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequenst {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRegistry: ISpecificationRepository) {}

  execute({ name, description }: IRequenst) {
    const specificationAlreadyExists = this.specificationRegistry.findByName(
      name,
    );

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    this.specificationRegistry.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
