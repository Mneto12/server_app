import MakeReports from 'src/Core/interfaces/Reports';
import WorkBookConfig from './workbookconfig';
import { join } from 'path';
import { TranslateWorksheet } from 'src/Helpers/TranslateWorksheet';
import * as ExcelJS from 'exceljs';

export class ExcelService implements MakeReports {
    constructor() {}

    async invoke(data: any, model: string): Promise<any> {
        if(data.length === 0) return false

        console.log(model)

        const config = WorkBookConfig.config();

        const { workbook, worksheet } = config;

        const nameWorksheet = TranslateWorksheet.typeModel(model);

        worksheet.name = nameWorksheet

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
        const desktopFilePath = join('C:\\Users\\migue\\Desktop', `Reporte-${nameWorksheet}.xlsx`);

        // TODO: Descomentar para probar el buffer
        // const buffer = await workbook.xlsx.writeBuffer();

        try {
            await workbook.xlsx.writeFile(desktopFilePath);

            return true

            // TODO: Descomentar para probar el buffer
            // return buffer
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    private makeFile(data: any, worksheet: ExcelJS.Worksheet) {

        const filterData = this.filterData(data)

        const dataColumns = Object.keys(filterData[0])
        
        const headersInSpanish = TranslateWorksheet.typeHeader(dataColumns)

        const dataWithSpanishHeaders = this.makeHeaders(filterData, headersInSpanish)
        
        const columns = headersInSpanish.map((column) => {
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

                if(key === 'condition') {
                    object[headersInSpanish[index]] = data[key] === 'good' ? 
                        'Bueno' : object[headersInSpanish[index]] = data[key] === 'bad' ?
                        'Malo': 'Regular';
                }
                return object;
            }, {});
        })
    }
}