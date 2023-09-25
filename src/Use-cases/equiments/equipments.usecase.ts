// TODO: Refactor
import { PrismaClient } from "@prisma/client";
import { CreateEquipment, UpdateEquipment } from "src/Core/DTO/Equipment";
import { Equipment } from "src/core/entities/equipments.entity";

export class EquipmentsUseCases {
    constructor() {}
  
    async getEquipments(): Promise<Equipment[]> {
        const prisma = new PrismaClient();
        try {
            const equipments = await prisma.equiments.findMany();

            return equipments;
        } catch (e) {
            console.log(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async getEquipment(id: string): Promise<Equipment> {
        const prisma = new PrismaClient();
        try {
            const equipment = await prisma.equiments.findUnique({
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

    async createEquipment(equipment: CreateEquipment): Promise<Equipment> {
        const prisma = new PrismaClient();
        try {
            const newEquipment = await prisma.equiments.create({
                data: equipment
            });

            return newEquipment;
        } catch (e) {
            console.log(e);
            prisma.$disconnect();
            return e;    
        }
    }

    async updateEquipment(id: string, equipment: UpdateEquipment): Promise<Equipment | false> {
        const prisma = new PrismaClient();
        try {
            const equiment = await prisma.equiments.findUnique({where: {id: id}});

            if (!equiment) {
                return false;
            }
            
            const updatedEquipment = await prisma.equiments.update({
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

    async deleteEquipment(id: string): Promise<true | false> {
        const prisma = new PrismaClient();
        try {
            const equipment = await prisma.equiments.findUnique({where: {id: id}});

            if (!equipment) {
                return false;
            }

            await prisma.equiments.delete({where: {id: id}});

            return true;
        } catch (e) {
            console.log(e);
            prisma.$disconnect();
            return e;    
        }
    }
}