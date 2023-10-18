import { Module } from '@nestjs/common';
import { EquipmentsController } from './Controllers/Equipments.controller';
import { EquipmentsUseCasesModules } from './Use-cases/equiments/equipments.usecase.module';
import { DataServicesModule } from './Services/data-services/data-services.module';
import { CareCentersController } from './Controllers/carcenters.controller';
import { CareCenterUseCasesModules } from './Use-cases/careCenters/carecenters.usecase.module';
import { MedicalServicesUseCasesModules } from './Use-cases/medicalServices/medicalservices.usecase.module';
import { MedicalServicesController } from './Controllers/medicalservices.controller';
import { OperatorsController } from './Controllers/operators.controller';
import { OperatorsUseCasesModules } from './Use-cases/operators/operators.usecase.module';
import { RepairsUseCasesModules } from './Use-cases/repairs/repairs.usecase.module';
import { RepairsController } from './Controllers/repairs.controller';

@Module({
  imports: [
    EquipmentsUseCasesModules,
    CareCenterUseCasesModules,
    MedicalServicesUseCasesModules,
    OperatorsUseCasesModules,
    RepairsUseCasesModules,
    DataServicesModule
  ],
  controllers: [
    EquipmentsController,
    CareCentersController,
    MedicalServicesController,
    OperatorsController,
    RepairsController
  ],
  providers: [],
})
export class AppModule {}
