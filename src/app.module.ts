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

@Module({
  imports: [
    EquipmentsUseCasesModules,
    CareCenterUseCasesModules,
    MedicalServicesUseCasesModules,
    OperatorsUseCasesModules,
    DataServicesModule
  ],
  controllers: [
    EquipmentsController,
    CareCentersController,
    MedicalServicesController,
    OperatorsController
  ],
  providers: [],
})
export class AppModule {}
