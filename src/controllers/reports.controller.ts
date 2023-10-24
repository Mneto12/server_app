import { Controller, Get, Res, Header, Param, Query } from "@nestjs/common/decorators";
import * as ExcelJS from 'exceljs';
import { Response } from "express";
import { BadRequestException } from "@nestjs/common";
import { join } from "path";
import { uid } from "uid";
import { PrismaClient } from "@prisma/client";
import { Inject } from "@nestjs/common";
import FilterData from "src/Core/interfaces/filter";

@Controller("api/reports/excel")
export class ReportsController {
    constructor(
        @Inject('FilterData')
        private readonly filterService: FilterData
    ) {}

    @Get(':model')
    @Header('Content-Type', 'text/xlsx')
    async test(
        @Res() response: Response, 
        @Param('model') model: string,
        @Query() query: any
    ): Promise<any> {
        const workbook = new ExcelJS.Workbook();

        workbook.creator = 'Me';
        workbook.lastModifiedBy = 'Her';
        workbook.created = new Date(1985, 8, 30);
        workbook.modified = new Date();
        workbook.lastPrinted = new Date(2016, 9, 27);
        const worksheet = workbook.addWorksheet('Hojita');

        // add image to workbook by filename
        const imageId1 = workbook.addImage({
            filename: 'C:/Users/migue/Desktop/home2.JPEG',
            extension: 'jpeg',
        });

        worksheet.addImage(imageId1, 'B2:D6');

        const prisma = new PrismaClient();

        const avancedQuery = this.filterService.createfilter(query);

        const { skip, take, where, orderBy } = avancedQuery;
        
        
        const equipments = await prisma[model].findMany({
            where: {
                ...where
            }
        })

        console.log(equipments)

        const equipmentsColumns = Object.keys(equipments[0])

        const columns = equipmentsColumns.map((column) => {
            return {
                header: column,
                key: column,
                width: 20
            }
        })

        const formatedColumns = columns.map((column) => {
            if(column.key === 'CareCenter') {
                return {
                    ...column,
                    header: 'Centro de Salud'
                }
            }

            if(column.key === 'name') {
                return {
                    ...column,
                    header: 'Equipo Medico'
                }
            }

            if(column.key === 'operative') {
                return {
                    ...column,
                    header: 'Operativo'
                }
            }

            if(column.key === 'key') {
                return {
                    ...column,
                    header: 'Codigo VenSalud'
                }
            }

            if(column.key === 'brand') {
                return {
                    ...column,
                    header: 'Marca'
                }
            }

            return column
        })

        // console.log(formatedColumns)

        worksheet.columns = [
            1,1,
            ...formatedColumns
        ];

        const rowsEquipments = equipments.map((equipment) => {
            if(equipment.CareCenter) {
                return {
                    ...equipment,
                    CareCenter: equipment.CareCenter.name
                }
            }
            return equipment
        })

        const formartedRowsEquipments = rowsEquipments.map((equipment) => {
            if(equipment.operative) {
                return {
                    ...equipment,
                    operative: 'Si'
                }
            }

            return {
                ...equipment,
                operative: 'No'
            }
        })

        // console.log(formartedRowsEquipments)

        const rows = [
            ...formartedRowsEquipments
        ];

        worksheet.addRows(rows);

        // Make and download the file
        const randomStringGenerator = () => uid(4);

        const random = randomStringGenerator();
        const desktopFilePath = join('C:\\Users\\migue\\Desktop', `Reporte-${random}.xlsx`);

        try {
            await workbook.xlsx.writeFile(desktopFilePath);

            return response.send({
                message: 'Excel file created successfully'
            })
        } catch (error) {
            console.log(error);

            throw new BadRequestException(error);
        }
    }
}