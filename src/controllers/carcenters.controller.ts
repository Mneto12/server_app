import { Controller, Get, Param } from "@nestjs/common/decorators";
import { CareCenterUseCases } from "src/Use-cases/careCenters/carecenters.usercase";

@Controller("api/carecenters")
export class CareCentersController {
    constructor(private careCenterUseCases: CareCenterUseCases) {}

    @Get()
    async getCareCenters() {
        return await this.careCenterUseCases.getCareCenters();
    }

    @Get(':id')
    async getCareCenter(@Param('id') id: string) {
        return await this.careCenterUseCases.getCareCenter(id);
    }

    @Get(':id/medicalservices')
    async getMedicalServicesByCareCenter(@Param('id') id: string) {
        return await this.careCenterUseCases.getMedicalServicesByCareCenter(id);
    }
}