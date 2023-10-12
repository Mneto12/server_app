import { Module } from '@nestjs/common';
import { EquipmentsController } from './Controllers/Equipments.controller';
import { EquipmentsUseCasesModules } from './Use-cases/equiments/equipments.usecase.module';
import { DataServicesModule } from './Services/data-services/data-services.module';
import { CareCentersController } from './Controllers/carcenters.controller';
import { CareCenterUseCasesModules } from './Use-cases/careCenter/carecenters.usecase.module';
import { MedicalServicesUseCasesModules } from './Use-cases/medicalService/medicalservices.usecase.module';
import { MedicalServicesController } from './Controllers/medicalservices.controller';

@Module({
  imports: [
    EquipmentsUseCasesModules,
    CareCenterUseCasesModules,
    MedicalServicesUseCasesModules,
    DataServicesModule
  ],
  controllers: [
    EquipmentsController,
    CareCentersController,
    MedicalServicesController
  ],
  providers: [],
})
export class AppModule {}
