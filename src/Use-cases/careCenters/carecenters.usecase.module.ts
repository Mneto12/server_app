import { Module } from '@nestjs/common';
import { CareCenterUseCases } from './carecenters.usercase';
import { DataServicesModule } from 'src/Services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [CareCenterUseCases],
  exports: [CareCenterUseCases],
})
export class CareCenterUseCasesModules {}