import {Module} from "@nestjs/common";
import PrismaAdvancedFilteringService from "./filter.service.prisma";

@Module({
    providers: [PrismaAdvancedFilteringService,{
        provide: 'CreateFilterData',
        useClass: PrismaAdvancedFilteringService
    }],
    exports: [PrismaAdvancedFilteringService, 'CreateFilterData']
})

export class FilterServicePrismaModule {}