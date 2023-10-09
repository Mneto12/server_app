import { Module } from "@nestjs/common";
import { EquipmentRepository } from "./equipment.repository.mongo";
import { CareCentersRepository } from "./carecenter.repository.mongo";

@Module({
    providers: [EquipmentRepository, {
        provide: 'EquipmentsRepositoryInterface',
        useClass: EquipmentRepository,
    },
    CareCentersRepository, {
        provide: 'CareCentersRepositoryInterface',
        useClass: CareCentersRepository,
    }],
    exports: [
        EquipmentRepository, 
        'EquipmentsRepositoryInterface',
        CareCentersRepository,
        'CareCentersRepositoryInterface'
]
})

export class MongoRepositoriesModule {}