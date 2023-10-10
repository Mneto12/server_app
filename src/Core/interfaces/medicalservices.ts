import { MedicalServices } from "@prisma/client";

export default interface MedicalServicesRepositoryInterface {
    getAll(): Promise<MedicalServices[]>;

    get(id: string): Promise<MedicalServices>;
}