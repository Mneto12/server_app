import MakeReports from 'src/Core/interfaces/Reports';
import workbookConfig from './WorkBookConfig';
import { join } from 'path';

export class ExcelService implements MakeReports {
    constructor() {}

    async invoke(data: any): Promise<any> {

        if(data.length === 0) return false

        const { workbook, worksheet } = workbookConfig;

        const dataColumns = Object.keys(data[0])

        const columns = dataColumns.map((column) => {
            return {
                header: column,
                key: column,
                width: 20
            }
        })

        worksheet.columns = [
            1,1,
            ...columns
        ];

        const dataRows = data.map((data) => {
            return {
                ...data,
            }
        })

        const rows = [
            ...dataRows
        ];

        worksheet.addRows(rows);

        // // Make and download the file
        const desktopFilePath = join('C:\\Users\\migue\\Desktop', `Reporte-2.xlsx`);

        try {
            await workbook.xlsx.writeFile(desktopFilePath);
            return true
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}