import MakeReports from 'src/Core/interfaces/Reports';

export default class ExcelService implements MakeReports {
    constructor() {}

    public invoke(model: string, query: any): any {

        console.log(model)
        console.log(query)

        return query

        // const prisma = new PrismaClient();

        // const avancedQuery = this.filterService.createfilter(query);

        // const { skip, take, where, orderBy } = avancedQuery;
        
        
        // const equipments = await prisma[model].findMany({
        //     where: {
        //         ...where
        //     }
        // })

        // console.log(equipments)

        // const equipmentsColumns = Object.keys(equipments[0])

        // const columns = equipmentsColumns.map((column) => {
        //     return {
        //         header: column,
        //         key: column,
        //         width: 20
        //     }
        // })

        // const formatedColumns = columns.map((column) => {
        //     if(column.key === 'CareCenter') {
        //         return {
        //             ...column,
        //             header: 'Centro de Salud'
        //         }
        //     }

        //     if(column.key === 'name') {
        //         return {
        //             ...column,
        //             header: 'Equipo Medico'
        //         }
        //     }

        //     if(column.key === 'operative') {
        //         return {
        //             ...column,
        //             header: 'Operativo'
        //         }
        //     }

        //     if(column.key === 'key') {
        //         return {
        //             ...column,
        //             header: 'Codigo VenSalud'
        //         }
        //     }

        //     if(column.key === 'brand') {
        //         return {
        //             ...column,
        //             header: 'Marca'
        //         }
        //     }

        //     return column
        // })

        // // console.log(formatedColumns)

        // worksheet.columns = [
        //     1,1,
        //     ...formatedColumns
        // ];

        // const rowsEquipments = equipments.map((equipment) => {
        //     if(equipment.CareCenter) {
        //         return {
        //             ...equipment,
        //             CareCenter: equipment.CareCenter.name
        //         }
        //     }
        //     return equipment
        // })

        // const formartedRowsEquipments = rowsEquipments.map((equipment) => {
        //     if(equipment.operative) {
        //         return {
        //             ...equipment,
        //             operative: 'Si'
        //         }
        //     }

        //     return {
        //         ...equipment,
        //         operative: 'No'
        //     }
        // })

        // // console.log(formartedRowsEquipments)

        // const rows = [
        //     ...formartedRowsEquipments
        // ];

        // worksheet.addRows(rows);

        // // Make and download the file
        // const randomStringGenerator = () => uid(4);

        // const random = randomStringGenerator();
        // const desktopFilePath = join('C:\\Users\\migue\\Desktop', `Reporte-${random}.xlsx`);

        // try {
        //     await workbook.xlsx.writeFile(desktopFilePath);

        //     return response.send({
        //         message: 'Excel file created successfully'
        //     })
        // } catch (error) {
        //     console.log(error);

        //     throw new BadRequestException(error);
        // }
    }
}