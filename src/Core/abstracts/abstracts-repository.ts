export abstract class AbstractsRepository<T> {
    abstract getAll(): Promise<T[]>;

    abstract get(id: string): Promise<T>;

    abstract create(): Promise<T>;

    abstract update(id: string): Promise<T>;

    abstract delete(id: string): void;
}