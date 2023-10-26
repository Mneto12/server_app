import * as ExcelJS from 'exceljs';

const workbook = new ExcelJS.Workbook();

workbook.creator = 'Vensalud';
const worksheet = workbook.addWorksheet('Equipos medicos');

// add image to workbook by filename
// const imageId1 = workbook.addImage({
//     filename: 'C:/Users/migue/Desktop/home2.JPEG',
//     extension: 'jpeg',
// });

// worksheet.addImage(imageId1, 'B2:D6');

const workbookConfig = {
    workbook,
    worksheet
}

export default workbookConfig;