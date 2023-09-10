import { Injectable } from "@nestjs/common/decorators";
import { Equipment } from "src/core/entities/equipments.entity";
import { AbstractsService } from "src/Core/abstracts/abstracts-services";

export class EquipmentsUseCases {
    constructor(
        private dataServices: AbstractsService,
    ) {}
  
    getEquipments(): Promise<Equipment[]> {
        return this.dataServices.equipments.getAll();
    }
}