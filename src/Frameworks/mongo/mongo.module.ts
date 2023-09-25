import { Module } from '@nestjs/common';
import {EquipmentsMongoRepository} from './equipments.mongo.repository';

@Module({ 
  imports: [],
  providers: [EquipmentsMongoRepository],
  exports: [EquipmentsMongoRepository],
})
export class MongoModule {}