import { Inject } from "@nestjs/common";
import { CareCenter } from "@prisma/client";
import CareCentersRepositoryInterface from "src/Core/interfaces/carecenters";

export class CareCenterUseCases {
    constructor(
        @Inject('CareCentersRepositoryInterface')
        private readonly repository: CareCentersRepositoryInterface
    ) {}
  
    async getCareCenters(): Promise<CareCenter[]> {
        return await this.repository.getAll();
    }

    async getCareCenter(id: string): Promise<CareCenter> {
        return await this.repository.get(id);
    }
}