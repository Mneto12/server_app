import { CreateEquipment } from "src/Core/DTO/Equipment";
import { Inject } from "@nestjs/common";
import { Equipments } from "@prisma/client";
import EquipmentsRepositoryInterface from "src/Core/interfaces/equipments";
import { EquipmentsParamsDTO, EquipmentParamsConstants } from "src/Core/DTO/EquipmentsFilter";
import FilterData from "src/Core/interfaces/filter";

export class EquipmentsUseCases {
    constructor(
        @Inject('EquipmentsRepositoryInterface')
        private readonly repository: EquipmentsRepositoryInterface,
        @Inject('FilterData')
        private readonly filterService: FilterData
    ) {}
  
    async getEquipments(): Promise<Equipments[]> {
        return await this.repository.getAll();
    }

    async getEquipmentsByFilter(query: any): Promise<Equipments[]> {
        const keys = Object.keys(query);
        const values = Object.values(query);

        const isInvalidParam = keys.find(key => !EquipmentParamsConstants.includes(key));
        const isMissingValues = values.find(value => !value);

        if(isInvalidParam || isMissingValues === '') throw new Error('Invalid Query of Equipments');
 
        const buildFilterDataAndValidate = this.filterService.createfilter(query);

        return await this.repository.getAllByFilter(buildFilterDataAndValidate);
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