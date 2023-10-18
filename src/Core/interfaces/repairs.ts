import { Repairs } from "@prisma/client";

export default interface RepairsRepositoryInterface {
    getAll(skip: number, take: number): Promise<Repairs[]>;

    getAllByFilter(avancedQuery: any): Promise<Repairs[]>;

    get(id: string): Promise<Repairs>;

    create(repair: any): Promise<Repairs>;

    update(id: string, repair: Partial<Repairs>): Promise<Repairs | false>;

    delete(id: string): Promise<true | false>;
}