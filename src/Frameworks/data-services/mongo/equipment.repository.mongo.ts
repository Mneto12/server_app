import { Equipments, PrismaClient } from "@prisma/client";
import { CreateEquipment } from "src/Core/DTO/Equipment";
import EquipmentsRepositoryInterface from "src/Core/interfaces/equipments";

export class EquipmentRepository implements EquipmentsRepositoryInterface {
    constructor() {}
  
    async getAll(): Promise<Equipments[]> {
        const prisma = new PrismaClient();
        try {
            const equipments = await prisma.equipments.findMany();

            return equipments;
        } catch (e) {
            console.log(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async getAllByFilter(keys: String[], values: String[]): Promise<Equipments[]> {
        const prisma = new PrismaClient();
        try {
            const where = {};
            const equipments = await prisma.equipments.findMany({
                where: {
                    ...where
                }
            });

            return equipments;
        } catch (e) {
            console.log(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async get(id: string): Promise<Equipments> {
        const prisma = new PrismaClient();
        try {
            const equipment = await prisma.equipments.findUnique({
                where: {
                    id: id
                }
            });

            return equipment;
        } catch (e) {
            console.log(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async create(equipment: CreateEquipment): Promise<Equipments> {
        const prisma = new PrismaClient();
        try {
            const newEquipment = await prisma.equipments.create({
                data: equipment
            });

            return newEquipment;
        } catch (e) {
            console.log(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async update(id: string, equipment: Partial<Equipments>): Promise<Equipments | false> {
        const prisma = new PrismaClient();
        try {
            const equiment = await prisma.equipments.findUnique({where: {id: id}});

            if (!equiment) {
                return false;
            }
            
            const updatedEquipment = await prisma.equipments.update({
                where: {
                    id: id
                },
                data: equipment
            });

            return updatedEquipment;
        } catch (e) {
            console.log(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async delete(id: string): Promise<true | false> {
        const prisma = new PrismaClient();
        try {
            const equipment = await prisma.equipments.findUnique({where: {id: id}});

            if (!equipment) {
                return false;
            }

            await prisma.equipments.delete({where: {id: id}});

            return true;
        } catch (e) {
            console.log(e);
            prisma.$disconnect();
            return e;    
        }
    }
}