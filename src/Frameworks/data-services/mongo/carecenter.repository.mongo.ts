import { CareCenter, PrismaClient } from "@prisma/client";
import CareCentersRepositoryInterface from "src/Core/interfaces/carecenters";

export class CareCentersRepository implements CareCentersRepositoryInterface {
    constructor() {}
  
    async getAll(): Promise<CareCenter[]> {
        const prisma = new PrismaClient();
        try {
            const carecenter = await prisma.careCenter.findMany();

            return carecenter;
        } catch (e) {
            console.log(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async get(id: string): Promise<CareCenter> {
        const prisma = new PrismaClient();
        try {
            const carecenter = await prisma.careCenter.findUnique({
                where: {
                    id: id
                }
            });

            return carecenter;
        } catch (e) {
            console.log(e);
            prisma.$disconnect();
            return e;    
        }
    }
}