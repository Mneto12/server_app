import { CareCenter } from "@prisma/client";

export default interface CareCentersRepositoryInterface {
    getAll(): Promise<CareCenter[]>;

    get(id: string): Promise<CareCenter>;

    // TODO: Refactor this name
    getMedicalServicesByCareCenter(id: string): Promise<CareCenter>;
}