import { Module } from "@nestjs/common";
import { EquipmentRepository } from "./equipment.repository.mongo";
import { CareCentersRepository } from "./carecenter.repository.mongo";
import { MedicalServiceRepository } from "./medicalservice.repository.mongo";
import { OperatorRepository } from "./operator.repository.mongo";
import { RepairsRepository } from "./repairs.repository.mongo";
import {FilterRepositoryMongo} from "./filter.repository.mongo";

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
    },
    OperatorRepository, {
        provide: 'OperatorsRepositoryInterface',
        useClass: OperatorRepository,
    },
    RepairsRepository, {
        provide: 'RepairsRepositoryInterface',
        useClass: RepairsRepository,
    },
    FilterRepositoryMongo, {
        provide: 'FilterData',
        useClass: FilterRepositoryMongo,
    }
],
    exports: [
        EquipmentRepository, 
        'EquipmentsRepositoryInterface',
        CareCentersRepository,
        'CareCentersRepositoryInterface',
        MedicalServiceRepository,
        'MedicalServicesRepositoryInterface',
        OperatorRepository,
        'OperatorsRepositoryInterface',
        RepairsRepository,
        'RepairsRepositoryInterface',
        FilterRepositoryMongo,
        'FilterData'
]
})

export class MongoRepositoriesModule {}