import { PrismaClient, Repairs } from "@prisma/client";
import { CreateRepair } from "src/Core/DTO/Repairs";
import RepairsRepositoryInterface from "src/Core/interfaces/repairs";

export class RepairsRepository implements RepairsRepositoryInterface {
    constructor() {}
  
    async getAll(skip: number, take: number): Promise<Repairs[]> {
        const prisma = new PrismaClient();
        try {
            const repairs = await prisma.repairs.findMany({
                skip: skip,
                take: take,
                select: {
                    id: true,
                    date: true,
                    Equipments: {
                        select: {
                            id: true,
                            name: true,
                        }
                    }
                }
            });

            // @ts-ignore
            return repairs;
        } catch (e) {
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async getAllByFilter(avancedQuery: any): Promise<Repairs[]> {
        const prisma = new PrismaClient();

        const { skip, take, where, orderBy } = avancedQuery;
        try {
            const repairs = await prisma.repairs.findMany({
                skip: skip,
                take: take,
                where: {
                    ...where
                },
                orderBy: {
                    ...orderBy
                }
            });

            return repairs;
        } catch (e) {
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async get(id: string): Promise<Repairs> {
        const prisma = new PrismaClient();
        try {
            const repair = await prisma.repairs.findUnique({
                where: {
                    id: id
                },
                select: {
                    id: true,
                    description: true,
                    date: true,
                    TypeRepair: true,
                    Equipments: {
                        select: {
                            id: true,
                            name: true,
                            key: true,
                            model: true,
                        }
                    },
                    Operator: {
                        select: {
                            name: true,
                            nationalId: true,
                            phoneNumber: true,
                            email: true,
                            company: true,
                        }
                    },
                    createdAt: true,
                    updatedAt: true
                }
            });

            // @ts-ignore
            return repair;
        } catch (e) {
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async create(repair: CreateRepair): Promise<Repairs> {
        const prisma = new PrismaClient();
        try {
            const newRepair = await prisma.repairs.create({
                data: repair
            });

            return newRepair;
        } catch (e) {
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async update(id: string, repair: Partial<Repairs>): Promise<Repairs | false> {
        const prisma = new PrismaClient();
        try {
            const repair = await prisma.repairs.findUnique({where: {id: id}});

            if (!repair) {
                return false;
            }
            
            const updatedRepairs = await prisma.repairs.update({
                where: {
                    id: id
                },
                data: repair
            });

            return updatedRepairs;
        } catch (e) {
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async delete(id: string): Promise<true | false> {
        const prisma = new PrismaClient();
        try {
            const repair = await prisma.repairs.findUnique({where: {id: id}});

            if (!repair) {
                return false;
            }

            await prisma.repairs.delete({where: {id: id}});

            return true;
        } catch (e) {
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }
}