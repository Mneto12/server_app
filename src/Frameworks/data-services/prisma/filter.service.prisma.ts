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

        const skip = columns['skip'] ? columns['skip'] : 0;
        const take = columns['take'] ? columns['take'] : 10;

        const data = columns.map((column, index) => {
            return {
                column,
                value: values[index]
            }
        });

        console.log(data);

        orderBy = data.find((row) => row.column === 'orderBy') ? 
          this._orderByFilter(data.find((row) => row.column === 'orderBy')) : {};

        console.log('orderBy', orderBy);

        data.forEach((row) => {
          if (
            row.column === 'orderBy' ||
            row.column === 'skip' ||
            row.column === 'take'
          ) return;

          if(row.column === 'createdAt' || row.column === 'updatedAt') {
            const query = this._buildDateFilter(row);
            where.AND.push(query);
          }
  
            const query = this._buildTypesFilter(row);
            where.AND.push(query);
        });

        console.log('where', where.AND);

        return { skip, take, where, orderBy }
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

    private _orderByFilter(row: any): any {
      let { value } = row;

      const regex = /^(?!.*,)[^,]*\b(?:asc|desc)\b[^,]*(?!,.*,$).*$/i

      if (regex.test(value)) return {}

      let items = value.split(',');

      const queryObj = {
        [items[0]]: items[1]
      }

      return queryObj;
    }

    private _buildDateFilter(row: any): any {
      const { column, value } = row;

      const validateRangeOrDay = /^(?!.*,)[^,].*[^,](?!,.*,$).*$/;

      let Day
      let Range

      validateRangeOrDay.test(value) ? Range.split(',') : Day = value;


      const queryObj = {
        [column]: {
          [clausule]: cleanValue
        }
      }

      return queryObj;
    }
  
}

