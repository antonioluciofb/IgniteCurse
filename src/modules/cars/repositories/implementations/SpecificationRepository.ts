import { Specification } from '../../model/Specification';
import {
  ICreateSpecicationDTO,
  ISpecificationRepository,
} from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  } 

  create({ name, description }: ICreateSpecicationDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description, create_at: new Date() }); 

    this.specification.push(specification);
  }
  findByName(name: string): Specification {
    const specification = this.specification.find(
      specification => specification.name === name,
    );

    return specification;
  }
}

export { SpecificationRepository };
