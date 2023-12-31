import { Injectable } from '@nestjs/common';
import {CreateFilterData} from 'src/Core/interfaces/filter';

@Injectable()
export default class PrismaAdvancedFilteringService implements CreateFilterData {
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

        orderBy = data.find((row) => row.column === 'orderBy') ? 
          this._orderByFilter(data.find((row) => row.column === 'orderBy')) : {};

        data.forEach((row) => {
          if (
            row.column === 'orderBy' ||
            row.column === 'skip' ||
            row.column === 'take'
          ) return;

          if(row.column === 'createdAt' || row.column === 'updatedAt') {
            const query = this._buildDateFilter(row);
            where.AND.push(query);

            return
          }
  
            const query = this._buildTypesFilter(row);
            where.AND.push(query);

            return
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

      let cleanValue = value.replace(/^\*|\*$/g, '');

      console.log('Aqui',cleanValue);

      let clausule: string = '';

      if (firstChart === '*' && lastChart === '*') {
        clausule = 'contains';
      } 

      if (firstChart !== '*' && lastChart !== '*') {
        clausule = 'equals';
      }

      if(column === 'operative') {
        value === 'true' ? cleanValue = true : cleanValue = false;
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

      if (value.length === 21) {
        let Range = value.split(',')

        if (Range.length !== 2) throw new Error('Invalid Range Date')

        let firstDate = new Date(Range[0])
        let secondDate = new Date(Range[1])

        if (isNaN(firstDate.getTime()) || isNaN(secondDate.getTime())) throw new Error('Invalid Date')

        if (firstDate > secondDate) throw new Error('Invalid Range Date')

        const queryObj = {
          [column]: {
              gte: firstDate,
              lte: secondDate
          }
        }

        return queryObj;
      } else if (value.length === 10) {
        let date = new Date(value)

        if(isNaN(date.getTime())) throw new Error('Invalid Date')

        const endOfDay = new Date(`${value}T23:59:59Z`)

        const queryObj = {
          [column]: {
              gte: date,
              lte: endOfDay
          }
        }

        return queryObj;
      } else {
        throw new Error('Invalid Date')
      }
    }
  
}

