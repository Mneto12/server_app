import { Module } from '@nestjs/common';
import { EquipmentsController } from './Controllers/Equipments.controller';
import { EquipmentsUseCasesModules } from './Use-cases/equiments/equipments.usecase.module';
import { DataServicesModule } from './Services/data-services/data-services.module';
import { CareCentersController } from './Controllers/carcenters.controller';
import { CareCenterUseCasesModules } from './Use-cases/careCenter/carecenters.usecase.module';

@Module({
  imports: [
    EquipmentsUseCasesModules,
    CareCenterUseCasesModules,
    DataServicesModule
  ],
  controllers: [
    EquipmentsController,
    CareCentersController
  ],
  providers: [],
})
export class AppModule {}
