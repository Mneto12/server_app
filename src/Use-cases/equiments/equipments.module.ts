import { Module } from '@nestjs/common';
import { EquipmentsUseCases } from './equipments.usecase';

@Module({
  imports: [],
  providers: [EquipmentsUseCases],
  exports: [EquipmentsUseCases],
})
export class EquipmentsUseCasesModules {}