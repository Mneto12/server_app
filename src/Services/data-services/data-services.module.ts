import {Module} from "@nestjs/common";
import { MongoRepositoriesModule } from "src/Frameworks/data-services/mongo/repositories.mongo.module";

@Module({
    imports: [MongoRepositoriesModule],
    exports: [MongoRepositoriesModule]
})

export class DataServicesModule {}