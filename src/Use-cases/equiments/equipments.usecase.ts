import { CreateEquipment } from "src/Core/DTO/Equipment";
import { Inject } from "@nestjs/common";
import { Equipments } from "@prisma/client";
import EquipmentsRepositoryInterface from "src/Core/interfaces/equipments";

export class EquipmentsUseCases {
    constructor(
        @Inject('EquipmentsRepositoryInterface') private readonly repository: EquipmentsRepositoryInterface
        ) {}
  
    async getEquipments(): Promise<Equipments[]> {
        return await this.repository.getAll();
    }

    async getEquipment(id: string): Promise<Equipments> {
        return await this.repository.get(id);
    }

    async createEquipment(equipment: CreateEquipment): Promise<Equipments> {
        return await this.repository.create(equipment);
    }

    async updateEquipment(id: string, equipment: Partial<Equipments>): Promise<Equipments | false> {
        return await this.repository.update(id, equipment);
    }

    async deleteEquipment(id: string): Promise<true | false> {
        return await this.repository.delete(id);
    }
}