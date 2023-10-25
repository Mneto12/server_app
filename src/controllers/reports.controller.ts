import { Controller, Get, Res, Header, Param, Query } from "@nestjs/common/decorators";
import { Response } from "express";
import { BadRequestException } from "@nestjs/common";
import { Inject } from "@nestjs/common";
import MakeReports from "src/Core/interfaces/Reports";

@Controller("api/reports/excel")
export class ReportsController {
    constructor(
        @Inject('MakeReports') private readonly repository: MakeReports
    ) {}

    @Get(':model')
    @Header('Content-Type', 'text/xlsx')
    async test(
        @Res() response: Response, 
        @Param('model') model: string,
        @Query() query: any
    ): Promise<any> {

    }
}