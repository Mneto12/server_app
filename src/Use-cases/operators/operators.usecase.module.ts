import { Module } from '@nestjs/common';
import { OperatorUseCases } from './operators.usercase';
import { DataServicesModule } from 'src/Services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [OperatorUseCases],
  exports: [OperatorUseCases],
})
export class OperatorsUseCasesModules {}