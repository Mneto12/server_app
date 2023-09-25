import { PrismaClient } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import EquipmentsRepositoryInterface from "src/Core/contracts/equipments";

@Injectable()
export class EquipmentsMongoRepository implements EquipmentsRepositoryInterface {
    private prisma: PrismaClient;
    // @ts-ignore
    private _repository: EquipmentsRepositoryInterface<any>;

    // @ts-ignore
    constructor(repository: EquipmentsRepositoryInterface
    ) {
        this.prisma = new PrismaClient();
        this._repository = repository;
    }

    async getAll(): Promise<any>{
        return await this._repository.getAll();
    }

    async get(id: string): Promise<any>{
        return await this._repository.get(id);
    }

    async create(): Promise<any>{
        return await this._repository.create();
    }

    async update(id: string): Promise<any>{
        return await this._repository.update(id);
    }

    async delete(id: string): Promise<any>{
        return await this._repository.delete(id);
    }
}