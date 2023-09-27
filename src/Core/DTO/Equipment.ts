export interface CreateEquipment {
    name: string;
    model: string;
    brand: string;
    key: string;
    nationalKey: string;
    status: Status;
    typeRepair: TypeRepair;
    condition: string;
}

export enum Status {
    active = "active",
    inactive = "inactive",
    maintenance = "maintenance",
}

export enum TypeRepair {
    preventive = "preventive",
    corrective = "corrective",
}