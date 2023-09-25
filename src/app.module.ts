import { Module } from '@nestjs/common';
import { EquipmentsController } from './Controllers/Equipments.controller';
import { EquipmentsUseCasesModules } from './Use-cases/equiments/equipments.module';
import { DataServicesModule } from './Services/data-services/data-services.module';

@Module({
  imports: [EquipmentsUseCasesModules],
  controllers: [EquipmentsController],
  providers: [],
})
export class AppModule {}
