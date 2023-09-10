import { Equipment } from '../entities/equipments.entity';
import { AbstractsRepository } from './abstracts-repository';

export abstract class AbstractsService {
    abstract equipments: AbstractsRepository<Equipment>;
}