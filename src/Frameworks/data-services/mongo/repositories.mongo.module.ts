import { Module } from "@nestjs/common";
import { EquipmentRepository } from "./equipment.repository.mongo";
import { CareCentersRepository } from "./carecenter.repository.mongo";
import { MedicalServiceRepository } from "./medicalservice.repository.mongo";

@Module({
    providers: [EquipmentRepository, {
        provide: 'EquipmentsRepositoryInterface',
        useClass: EquipmentRepository,
    },
    CareCentersRepository, {
        provide: 'CareCentersRepositoryInterface',
        useClass: CareCentersRepository,
    },
    MedicalServiceRepository, {
        provide: 'MedicalServicesRepositoryInterface',
        useClass: MedicalServiceRepository,
    }
],
    exports: [
        EquipmentRepository, 
        'EquipmentsRepositoryInterface',
        CareCentersRepository,
        'CareCentersRepositoryInterface',
        MedicalServiceRepository,
        'MedicalServicesRepositoryInterface'
]
})

export class MongoRepositoriesModule {}