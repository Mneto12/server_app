import { Inject } from "@nestjs/common";
import { MedicalServices } from "@prisma/client";
import MedicalServicesRepositoryInterface from "src/Core/interfaces/medicalservices";

export class MedicalServicesUseCases {
    constructor(
        @Inject('MedicalServicesRepositoryInterface')
        private readonly repository: MedicalServicesRepositoryInterface
    ) {}
  
    async getMedicalServices(): Promise<MedicalServices[]> {
        return await this.repository.getAll();
    }

    async getMedicalService(id: string): Promise<MedicalServices> {
        return await this.repository.get(id);
    }
}