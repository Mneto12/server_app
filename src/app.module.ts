import { Module } from '@nestjs/common';
import { EquipmentsController } from './Controllers/Equipments.controller';

@Module({
  imports: [],
  controllers: [EquipmentsController],
  providers: [],
})
export class AppModule {}
