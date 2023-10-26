import { Equipments, PrismaClient } from "@prisma/client";
import { CreateEquipment } from "src/Core/DTO/Equipment";
import EquipmentsRepositoryInterface from "src/Core/interfaces/equipments";

export class EquipmentRepository implements EquipmentsRepositoryInterface {
    constructor() {}
  
    async getAll(skip: number, take: number): Promise<Equipments[]> {
        const prisma = new PrismaClient();
        try {
            const [equipments, totalEquipments] = await prisma.$transaction([
                prisma.equipments.findMany({
                    skip: skip,
                    take: take,
                    select: {
                        id: true,
                        name: true,
                        brand: true,
                        operative: true,
                        CareCenter: {
                            select: {
                                name: true,
                            }
                        }
                    }
                }),
                prisma.equipments.count()
            ])

            // @ts-ignore
            return {equipments, totalEquipments};
        } catch (e) {
            console.error(e);
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
                },
                select: {
                    id: true,
                    name: true,
                    model: true,
                    brand: true,
                    operative: true,
                    key: true,
                    serial: true,
                    nationalKey: true,
                    condition: true,
                    description: true,
                    MedicalService: {
                        select: {
                            service: true,
                            floor: true,
                        }
                    },
                    CareCenter: {
                        select: {
                            name: true,
                            director: true,
                        }
                    },
                    Repairs: {
                        select: {
                            id: true,
                            description: true,
                            date: true,
                            TypeRepair: true
                        }
                    },
                    createdAt: true,
                    updatedAt: true
                }
            });

            // @ts-ignore
            return equipment;
        } catch (e) {
            console.error(e);
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
            console.error(e);
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
            console.error(e);
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
            console.error(e);
            prisma.$disconnect();
            return e;    
        }
    }
}