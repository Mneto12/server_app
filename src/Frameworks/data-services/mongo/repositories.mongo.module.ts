import { Module } from "@nestjs/common";
import { EquipmentRepository } from "./equipment.repository.mongo";

@Module({
    providers: [EquipmentRepository, {
        provide: 'EquipmentsRepositoryInterface',
        useClass: EquipmentRepository,
    }],
    exports: [EquipmentRepository, 'EquipmentsRepositoryInterface']
})

export class MongoRepositoriesModule {}