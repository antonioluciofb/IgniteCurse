import { Specification } from '../model/Specification';

interface ICreateSpecicationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecicationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecicationDTO };
