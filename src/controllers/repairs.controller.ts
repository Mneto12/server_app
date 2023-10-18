import { Controller, Get, Patch, Post, Delete, Param, Body, Query } from "@nestjs/common/decorators";
import { Repairs } from "@prisma/client";

@Controller("api/repairs")
export class RepairsController {
    constructor(private repairUseCases: ) {}

    @Get()
    async getRepairs(@Query() pagination: any) {
        return await this.repairUseCases.(pagination);
    }

    @Get('filter')
    async getRepairsByFilter(@Query() query: ) {
        return await this.repairUseCases.(query);
    }

    @Get(':id')
    async getRepair(@Param('id') id: string) {
        return await this.repairUseCases.(id);
    }

    @Post()
    async createRepairs(@Body() repair: ) {
        return await this.repairUseCases.(repair);
    }

    @Patch(':id')
    async updateRepairs(@Param('id') id: string, @Body() repair: Partial<Repairs>) {
        return await this.repairUseCases.(id, repair);
    }

    @Delete(':id')
    deleteRepairs(@Param('id') id: string) {
        return this.repairUseCases.(id);
    }
}