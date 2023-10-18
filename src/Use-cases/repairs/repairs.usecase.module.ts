import { Module } from '@nestjs/common';
import { RepairsUseCases } from './repairs.usecase';
import { DataServicesModule } from 'src/Services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [RepairsUseCases],
  exports: [RepairsUseCases],
})
export class RepairsUseCasesModules {}