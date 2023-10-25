import {Module} from "@nestjs/common";
import { MongoRepositoriesModule } from "src/Frameworks/data-services/mongo/repositories.mongo.module";
import { FilterServicePrismaModule } from "src/Frameworks/data-services/prisma/filter.service.prisma.module";
import { ExcelServiceModule } from "src/Frameworks/data-services/excel/excel.service.module";

@Module({
    imports: [
        MongoRepositoriesModule, 
        FilterServicePrismaModule, 
        ExcelServiceModule
    ],
    exports: [
        MongoRepositoriesModule, 
        FilterServicePrismaModule, 
        ExcelServiceModule
    ]
})

export class DataServicesModule {}