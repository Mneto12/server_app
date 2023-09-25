import { Equipment } from "../entities/equipments.entity";

export default interface EquipmentsRepositoryInterface {
    getAll(): Promise<Equipment[]>;

    get(id: string): Promise<Equipment>;

    create(): Promise<Equipment>;

    update(id: string): Promise<Equipment>;

    delete(id: string): void;
}