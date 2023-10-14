import { Controller, Get, Param } from "@nestjs/common/decorators";
import { MedicalServicesUseCases } from "src/Use-cases/medicalServices/medicalservices.usecase";

@Controller("api/medicalservices")
export class MedicalServicesController {
    constructor(private medicalService: MedicalServicesUseCases) {}

    @Get()
    async getMedicalServices() {
        return await this.medicalService.getMedicalServices();
    }

    @Get(':id')
    async getMedicalService(@Param('id') id: string) {
        return await this.medicalService.getMedicalService(id);
    }
}