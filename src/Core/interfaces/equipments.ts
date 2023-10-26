import { Equipments } from "@prisma/client";
import { CreateEquipment } from "src/Core/DTO/Equipment";

export default interface EquipmentsRepositoryInterface {
    getAll(skip: number, take: number): Promise<Equipments[]>;

    get(id: string): Promise<Equipments>;

    create(equipment: CreateEquipment): Promise<Equipments>;

    update(id: string, equipment: Partial<Equipments>): Promise<Equipments | false>;

    delete(id: string): Promise<true | false>;
}