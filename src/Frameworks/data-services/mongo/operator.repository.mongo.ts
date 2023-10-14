import { Operator, PrismaClient } from "@prisma/client";
import OperatorsRepositoryInterface from "src/Core/interfaces/operators";

export class OperatorRepository implements OperatorsRepositoryInterface {
    constructor() {}
  
    async getAll(): Promise<Operator[]> {
        const prisma = new PrismaClient();
        try {
            const operator = await prisma.operator.findMany();

            return operator;
        } catch (e) {
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async get(id: string): Promise<Operator> {
        const prisma = new PrismaClient();
        try {
            const operator = await prisma.operator.findUnique({
                where: {
                    id: id
                }
            });

            return operator;
        } catch (e) {
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }
}