import { Controller, Get, Patch, Post, Delete, Param, Body, Query } from "@nestjs/common/decorators";
import { Repairs } from "@prisma/client";
import { RepairParamsDTO } from "src/Core/DTO/RepairFilter";
import { CreateRepair } from "src/Core/DTO/Repairs";
import { RepairsUseCases } from "src/Use-cases/repairs/repairs.usecase";

@Controller("api/repairs")
export class RepairsController {
    constructor(private repairUseCases: RepairsUseCases) {}

    @Get()
    async getRepairs(@Query() pagination: any) {
        return await this.repairUseCases.getRepair(pagination);
    }

    @Get('filter')
    async getRepairsByFilter(@Query() query: RepairParamsDTO) {
        return await this.repairUseCases.getRepairByFilter(query);
    }

    @Get(':id')
    async getRepair(@Param('id') id: string) {
        return await this.repairUseCases.getRepair(id);
    }

    @Post()
    async createRepairs(@Body() repair: CreateRepair) {
        return await this.repairUseCases.createRepair(repair);
    }

    @Patch(':id')
    async updateRepairs(@Param('id') id: string, @Body() repair: Partial<Repairs>) {
        return await this.repairUseCases.updateRepair(id, repair);
    }

    @Delete(':id')
    deleteRepairs(@Param('id') id: string) {
        return this.repairUseCases.deleteRepair(id);
    }
}