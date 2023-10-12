import {Module} from "@nestjs/common";
import PrismaAdvancedFilteringService from "./filter.service.prisma";

@Module({
    providers: [PrismaAdvancedFilteringService,{
        provide: 'FilterData',
        useClass: PrismaAdvancedFilteringService
    }],
    exports: [PrismaAdvancedFilteringService, 'FilterData']
})

export class FilterServicePrismaModule {}