import { Inject } from "@nestjs/common";
import { Repairs } from "@prisma/client";
import RepairsRepositoryInterface from "src/Core/interfaces/repairs";
import FilterData from "src/Core/interfaces/filter";
import { RepairParamsConstants } from "src/Core/DTO/RepairFilter";
import { CreateRepair } from "src/Core/DTO/Repairs";

export class RepairsUseCases {
    constructor(
        @Inject('RepairsRepositoryInterface')
        private readonly repository: RepairsRepositoryInterface,
        @Inject('FilterData')
        private readonly filterService: FilterData
    ) {}
  
    async getRepairs(pagination: any): Promise<Repairs[]> {
        let { skip, take } = pagination;

        skip = !skip ? 0 : parseInt(skip);
        take = !take ? 10 : parseInt(take);

        return await this.repository.getAll(skip, take);
    }

    async getRepairByFilter(query: any): Promise<Repairs[]> {
        const keys = Object.keys(query);
        const values = Object.values(query);

        const isInvalidParam = keys.find(key => !RepairParamsConstants.includes(key));
        const isMissingValues = values.find(value => !value);

        if(isInvalidParam || isMissingValues === '') throw new Error('Invalid Query of Equipments');
 
        const buildFilterDataAndValidate = this.filterService.createfilter(query);

        return await this.repository.getAllByFilter(buildFilterDataAndValidate);
    }

    async getRepair(id: string): Promise<Repairs> {
        return await this.repository.get(id);
    }

    async createRepair(repair: CreateRepair): Promise<Repairs> {
        return await this.repository.create(repair);
    }

    async updateRepair(id: string, repair: Partial<Repairs>): Promise<Repairs | false> {
        return await this.repository.update(id, repair);
    }

    async deleteRepair(id: string): Promise<true | false> {
        return await this.repository.delete(id);
    }
}