import { Module } from '@nestjs/common';
import { EquipmentsController } from './controllers/equipments.controller';

@Module({
  imports: [],
  controllers: [EquipmentsController],
  providers: [],
})
export class AppModule {}
