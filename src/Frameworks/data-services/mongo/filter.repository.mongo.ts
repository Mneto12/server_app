import { PrismaClient } from "@prisma/client";
import {FilterData} from "src/Core/interfaces/filter";

export class FilterRepositoryMongo implements FilterData {
    constructor() {}

    async getAllByFilter(model: string , avancedQuery: any): Promise<[]> {
        const prisma = new PrismaClient();

        const { skip, take, where, orderBy } = avancedQuery;
        try {
            const data = await prisma[model].findMany({
                skip: skip,
                take: take,
                where: {
                    ...where
                },
                orderBy: {
                    ...orderBy
                }
            });

            return data;
        } catch (e) {
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }
}