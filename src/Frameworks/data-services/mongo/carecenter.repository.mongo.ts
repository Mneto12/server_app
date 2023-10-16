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
            console.error(e);
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
                },
                select: {
                    id: true,
                    name: true,
                    director: true,
                    phoneNumber: true,
                    address: true,
                    MedicalService: {
                        select: {
                            id: true,
                            service: true,
                            floor: true
                        }
                    },
                    State: {
                        select: {
                            name: true
                        }
                    },
                    municipality: {
                        select: {
                            name: true
                        }
                    },
                    createdAt: true,
                    updatedAt: true
                }
            });

            // @ts-ignore
            return carecenter;
        } catch (e) {
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }
}