import { Controller, Get, Patch, Post, Delete, Param, Body, Query } from "@nestjs/common/decorators";
import { CreateEquipment } from "src/Core/DTO/Equipment";
import { EquipmentsUseCases } from "src/Use-cases/equiments/equipments.usecase";
import { Equipments } from "@prisma/client";
import { EquipmentsParamsDTO } from "src/Core/DTO/EquipmentsFilter";

@Controller("api/equipments")
export class EquipmentsController {
    constructor(private equipmentsUseCases: EquipmentsUseCases) {}

    @Get()
    async getEquipments(@Query() pagination: any) {
        return await this.equipmentsUseCases.getEquipments(pagination);
    }

    @Get('filter')
    async getEquipmentsByFilter(@Query() query: EquipmentsParamsDTO) {
        return await this.equipmentsUseCases.getEquipmentsByFilter(query);
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
    async updateEquipment(@Param('id') id: string, @Body() equipment: Partial<Equipments>) {
        return await this.equipmentsUseCases.updateEquipment(id, equipment);
    }

    @Delete(':id')
    deleteEquipment(@Param('id') id: string) {
        return this.equipmentsUseCases.deleteEquipment(id);
    }
}