import { Module } from '@nestjs/common';
import { EquipmentsUseCases } from './equipments.usecase';
import { MongoRepositoriesModule } from 'src/Frameworks/data-services/mongo/repositories.mongo.module';
import { EquipmentRepository } from 'src/Frameworks/data-services/mongo/equipment.repository.mongo';
import { DataServicesModule } from 'src/Services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [EquipmentsUseCases, {
    provide: 'EquipmentsRepositoryInterface',
    useClass: EquipmentRepository,
  }],
  exports: [EquipmentsUseCases],
})
export class EquipmentsUseCasesModules {}