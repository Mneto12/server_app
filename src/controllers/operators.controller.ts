import { Controller, Get, Param } from "@nestjs/common/decorators";
import { OperatorUseCases } from "src/Use-cases/operators/operators.usercase";

@Controller("api/operators")
export class OperatorsController {
    constructor(private operatorUseCases: OperatorUseCases) {}

    @Get()
    async getOperators() {
        return await this.operatorUseCases.getOperators();
    }

    @Get(':id')
    async getOperator(@Param('id') id: string) {
        return await this.operatorUseCases.getOperator(id);
    }
}