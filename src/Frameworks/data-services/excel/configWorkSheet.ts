import * as ExcelJS from 'exceljs';

export default class WorkbookConfig {

    public static configWorkSheet(workbook2: any, columns: any): any {
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
    }
}