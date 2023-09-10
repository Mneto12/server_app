import { AbstractsRepository } from "src/Core/abstracts/abstracts-repository";
import { Equipment } from "src/Core/entities/equipments.entity";
import { PrismaService } from "src/Helpers/prismaConfig";

export class MongoRespository<T> implements AbstractsRepository<T> {

    // TODO: Refactor _repository to be a generic type
    private _repository: prisma[T];
    private _populateOnFind: string[];
    private _prisma: PrismaService;

    constructor(repository: any, populateOnFind: string[] = []) {
        this._repository = repository;
        this._populateOnFind = populateOnFind;
        this._prisma = new PrismaService();
    }

    getAll(): Promise<T[]> {
        return this._prisma[T].findMany().populate(this._populateOnFind).exec();
    }

    get(id: string): Promise<T> {
        return this._repository.findById(id).populate(this._populateOnFind).exec();
    }

    create(): Promise<T> {
        return this._repository.create();
    }

    update(id: string): Promise<T> {
        return this._repository.findByIdAndUpdate(id).populate(this._populateOnFind).exec();
    }

    delete(id: string): void {
        this._repository.findByIdAndDelete(id).exec();
    }
}