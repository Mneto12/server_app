import {Module} from "@nestjs/common";
import {ExcelService} from "./excelservice";

@Module({
    providers: [
        ExcelService,{
        provide: 'MakeReports', 
        useClass: ExcelService
        }
    ],
    exports: [ExcelService, 'MakeReports']
})

export class ExcelServiceModule {}