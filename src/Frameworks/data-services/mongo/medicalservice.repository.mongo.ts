import { MedicalServices, PrismaClient } from "@prisma/client";
import MedicalServicesRepositoryInterface from "src/Core/interfaces/medicalservices";

export class MedicalServiceRepository implements MedicalServicesRepositoryInterface {
    constructor() {}
  
    async getAll(): Promise<MedicalServices[]> {
        const prisma = new PrismaClient();
        try {
            const medicalService = await prisma.medicalServices.findMany();

            return medicalService;
        } catch (e) {
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async get(id: string): Promise<MedicalServices> {
        const prisma = new PrismaClient();
        try {
            const medicalService = await prisma.medicalServices.findUnique({
                where: {
                    id: id
                }
            });

            return medicalService;
        } catch (e) {
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }
}