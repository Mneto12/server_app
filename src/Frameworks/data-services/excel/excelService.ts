import MakeReports from 'src/Core/interfaces/Reports';
import WorkBookConfig from './workbookconfig';
import { join } from 'path';
import { TranslateHeaderWorksheet } from 'src/Helpers/TranslateHeaderWorksheet';
import * as ExcelJS from 'exceljs';
import { uid } from "uid";

export class ExcelService implements MakeReports {
    constructor() {}

    async invoke(data: any): Promise<any> {
        const config = WorkBookConfig.config();

        const { workbook, worksheet } = config;


        if(data.length === 0) return false

        worksheet.name = `Equipos`

        const randomStringGenerator = () => uid(4);

        const random = randomStringGenerator();

        this.makeFile(data, worksheet)

        worksheet.getRows(1, 1).forEach((row) => {
            row.eachCell((cell) => {
                cell.alignment = {
                    vertical: 'middle',
                    horizontal: 'center',
                }
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'ff949494' }
                }
                cell.font = {
                    bold: true,
                    size: 12
                }
            })
        });

        worksheet.eachRow((row, index) => {
            row.eachCell((cell) => {
                if(index !== 1) {
                    cell.alignment = {
                        vertical: 'middle',
                        horizontal: 'center',
                        wrapText: true
                    }
                    cell.font = {
                        size: 12
                    }
                }
            })
        })

        worksheet.eachColumnKey((column, index) => {
            worksheet.getColumn(index).eachCell((cell) => {
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                }
            })
        })
        // Make and download the file
        const desktopFilePath = join('C:\\Users\\migue\\Desktop', `Reportes-${random}.xlsx`);

        try {
            await workbook.xlsx.writeFile(desktopFilePath);

            return true
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    private makeFile(data: any, worksheet: ExcelJS.Worksheet) {

        const filterData = this.filterData(data)

        const dataColumns = Object.keys(filterData[0])
        
        const headersInSpanish = TranslateHeaderWorksheet.type(dataColumns)

        const dataWithSpanishHeaders = this.makeHeaders(filterData, headersInSpanish)
        
        const columns = headersInSpanish.map((column) => {
            console.log('Aqui',column)
            return {
                header: column,
                key: column,
                width: column === 'Nombre' ? 50 : 20
            }
        })

        worksheet.columns = [
            ...columns
        ];

        worksheet.addRows(dataWithSpanishHeaders);
    }

    private filterData(data) {
        return data.map((column) => {
            const { 
                createdAt, 
                updatedAt, 
                deletedAt, 
                deleted, 
                id, 
                MedicalServiceId, 
                CareCenterId, 
                EquipmentsId,
                MunicipalityId,
                StateId,
                ...data } = column;
            return data;
        })
    }

    private makeHeaders(filterData, headersInSpanish) {
        return filterData.map((data) => {
            return data = Object.keys(data).reduce((object, key, index) => {
                object[headersInSpanish[index]] = data[key];
                if(key === 'operative') {
                    object[headersInSpanish[index]] = data[key] ? 'Operativo' : 'No operativo';
                }
                return object;
            }, {});
        })
    }
}