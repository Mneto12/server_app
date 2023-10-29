import { spanishHeaders } from "src/Constants/spanishHeaders"

export class TranslateHeaderWorksheet {
    public static type(columns) {
        let mapcolumns = []

        columns.forEach(column => {
            const translatedColumn = Object.keys(spanishHeaders).find(key => spanishHeaders[key] === column);
            if (translatedColumn) {
                mapcolumns.push(translatedColumn);
            }
        })
        
       return mapcolumns
    }
}
  