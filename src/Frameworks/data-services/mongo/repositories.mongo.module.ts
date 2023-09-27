import { Module } from "@nestjs/common";
import { EquipmentRepository } from "./equipment.repository.mongo";

@Module({
    providers: [EquipmentRepository],
    exports: [EquipmentRepository]
})

export class MongoRepositoriesModule {}