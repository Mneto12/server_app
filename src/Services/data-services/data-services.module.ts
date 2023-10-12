import {Module} from "@nestjs/common";
import { MongoRepositoriesModule } from "src/Frameworks/data-services/mongo/repositories.mongo.module";
import { FilterServicePrismaModule } from "src/Frameworks/data-services/prisma/filter.service.prisma.module";

@Module({
    imports: [MongoRepositoriesModule, FilterServicePrismaModule],
    exports: [MongoRepositoriesModule, FilterServicePrismaModule]
})

export class DataServicesModule {}