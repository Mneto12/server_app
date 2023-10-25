import {Module} from "@nestjs/common";
import ExcelService from "./excelService";

@Module({
    providers: [ExcelService,{
        provide: 'MakeReports',
        useClass: ExcelService
    }],
    exports: [ExcelService, 'MakeReports']
})

export class ExcelServiceModule {}