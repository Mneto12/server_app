import { Controller, Get } from "@nestjs/common/decorators";

@Controller("api/equipments")

export class EquipmentsController {
    constructor() {}

    @Get()
    getEquipments(): string {
        return "This action returns all equipments";
    }
}