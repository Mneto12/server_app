import { Module } from '@nestjs/common';
import { EquipmentsUseCases } from './repairs.usecase';
import { DataServicesModule } from 'src/Services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [EquipmentsUseCases],
  exports: [EquipmentsUseCases],
})
export class RepairsUseCasesModules {}