import { Injectable } from '@nestjs/common';
import FilterData from 'src/Core/interfaces/filter';

@Injectable()
export default class PrismaAdvancedFilteringService implements FilterData {
  constructor() {}

    public createfilter(query: Object[]): any {
        let where = { AND: [] };
        let orderBy = {};

        const columns = Object.keys(query);
        const values = Object.values(query);

        const data = columns.map((column, index) => {
            return {
                column,
                value: values[index]
            }
        });

        console.log(data);

        data.forEach((row) => {
            const query = this._buildTypesFilter(row);
            where.AND.push(query);
        });

        console.log('where', where.AND);

        return { where, orderBy }
    }

    private _buildTypesFilter(row: any): any {
      // TODO: implement this method
      const { column, value } = row;
      console.log('column', column);
      console.log('values', value);

      const firstChart = value[0]
      const lastChart = value[value.length - 1]

      const cleanValue = value.replace(/^\*|\*$/g, '');

      console.log('Aqui',cleanValue);

      let clausule: string = '';

      if (firstChart === '*' && lastChart === '*') {
        clausule = 'contains';
      } 

      if (firstChart !== '*' && lastChart !== '*') {
        clausule = 'equals';
      }

      const queryObj = {
        [column]: {
          [clausule]: cleanValue
        }
      }

      return queryObj;
    }
  
}

