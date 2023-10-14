import { Inject } from "@nestjs/common";
import { Operator } from "@prisma/client";
import OperatorsRepositoryInterface from "src/Core/interfaces/operators";

export class OperatorUseCases {
    constructor(
        @Inject('OperatorsRepositoryInterface')
        private readonly repository: OperatorsRepositoryInterface
    ) {}
  
    async getOperators(): Promise<Operator[]> {
        return await this.repository.getAll();
    }

    async getOperator(id: string): Promise<Operator> {
        return await this.repository.get(id);
    }
}