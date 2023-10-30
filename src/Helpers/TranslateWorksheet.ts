import { spanishHeaders, spanishModels } from "src/Constants/spanishData"

export class TranslateWorksheet {
    public static typeHeader(columns) {
        let mapcolumns = []

        columns.forEach(column => {
            const translatedColumn = Object.keys(spanishHeaders).find(key => spanishHeaders[key] === column);
            if (translatedColumn) {
                mapcolumns.push(translatedColumn);
            }
        })
        
       return mapcolumns
    }

    public static typeModel(model: string) {
        const translatedModel = Object.keys(spanishModels).find(key => spanishModels[key] === model);

        if(translatedModel) {
            return translatedModel
        }
    }
}
  