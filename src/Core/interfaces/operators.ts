import { Operator } from "@prisma/client";

export default interface OperatorsRepositoryInterface {
    getAll(): Promise<Operator[]>;

    get(id: string): Promise<Operator>;
}