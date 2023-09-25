import {Module} from "@nestjs/common";
import { MongoModule } from "src/Frameworks/mongo/mongo.module";

@Module({
    imports: [MongoModule],
    exports: [MongoModule]
})

export class DataServicesModule {}