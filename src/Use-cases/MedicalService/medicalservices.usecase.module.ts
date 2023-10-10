import { Module } from '@nestjs/common';
import { MedicalServicesUseCases } from './medicalservices.usecase';
import { DataServicesModule } from 'src/Services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [MedicalServicesUseCases],
  exports: [MedicalServicesUseCases],
})
export class MedicalServicesUseCasesModules {}