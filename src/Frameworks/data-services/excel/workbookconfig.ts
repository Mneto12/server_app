import * as ExcelJS from 'exceljs';

export default class WorkBookConfig {

    public static config() {
        const workbook = new ExcelJS.Workbook();
        workbook.creator = 'Vensalud';
        const worksheet = workbook.addWorksheet('Pagina 1');
        
        const workbookConfig = {
            workbook,
            worksheet
        }
        
        return workbookConfig;
    }
}