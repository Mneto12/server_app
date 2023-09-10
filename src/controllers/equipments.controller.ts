import { Controller, Get, Patch, Post, Delete } from "@nestjs/common/decorators";

@Controller("api/equipments")

export class EquipmentsController {
    constructor() {}

    @Get()
    getEquipments(): string {
        return "This action returns all equipments";
    }

    @Get(":id")
    getEquipment(): string {
        return "This action returns a equipment";
    }

    @Post()
    createEquipment(): string {
        return "This action creates a equipment";
    }

    @Patch(":id")
    updateEquipment(): string {
        return "This action updates a equipment";
    }

    @Delete(":id")
    deleteEquipment(): string {
        return "This action deletes a equipment";
    }
}