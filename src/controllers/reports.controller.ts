import { Controller, Get, Res, Header, Param, Query } from "@nestjs/common/decorators";
import { Response } from "express";
import { BadRequestException } from "@nestjs/common";
import { Inject } from "@nestjs/common";
import MakeReports from "src/Core/interfaces/Reports";
import { CreateFilterData, FilterData } from "src/Core/interfaces/filter";

@Controller("api/reports/excel")
export class ReportsController {
    constructor(
        @Inject('MakeReports') 
        private readonly repository: MakeReports,
        @Inject('CreateFilterData')
        private readonly filterService: CreateFilterData,
        @Inject('FilterData')
        private readonly filterRepository: FilterData
    ) {}

    @Get(':model')
    async test(
        @Res() response: Response, 
        @Param('model') model: string,
        @Query() query: any
    ): Promise<any> {

        const avancedQuery = this.filterService.createfilter(query);

        const data = await this.filterRepository.getAllByFilter(model, avancedQuery);

        const report = await this.repository.invoke(data, model);

        return response.send({
            message: 'Excel file created successfully',
            file: report
        })
    }
}