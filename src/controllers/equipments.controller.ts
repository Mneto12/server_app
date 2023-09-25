import { Controller, Get, Patch, Post, Delete, Param, Body } from "@nestjs/common/decorators";
import { CreateEquipment, UpdateEquipment } from "src/Core/DTO/Equipment";
import { EquipmentsUseCases } from "src/Use-cases/equiments/equipments.usecase";

@Controller("api/equipments")
export class EquipmentsController {
    constructor(private equipmentsUseCases: EquipmentsUseCases) {}

    @Get()
    async getEquipments() {
        return await this.equipmentsUseCases.getEquipments();
    }

    @Get(':id')
    async getEquipment(@Param('id') id: string) {
        return await this.equipmentsUseCases.getEquipment(id);
    }

    @Post()
    async createEquipment(@Body() equipment: CreateEquipment) {
        return await this.equipmentsUseCases.createEquipment(equipment);
    }

    @Patch(':id')
    async updateEquipment(@Param('id') id: string, @Body() equipment: UpdateEquipment) {
        return await this.equipmentsUseCases.updateEquipment(id, equipment);
    }

    @Delete(':id')
    deleteEquipment(@Param('id') id: string) {
        return this.equipmentsUseCases.deleteEquipment(id);
    }
}