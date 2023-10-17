export interface CreateEquipment {
    name: string;
    model: string;
    brand: string;
    key: string;
    serial: string;
    nationalKey: string;
    Operative: boolean;
    condition: Condition;
    description: string;
    CareCenterId: string;
    MedicalServiceId: string;
    DescriptionId?: string;
}

export enum Condition {
    good = "good",
    regular = "regular",
    bad = "bad",
}

export enum TypeRepair {
    preventive = "preventive",
    corrective = "corrective",
    technical_leave = "technical_leave",
    technical_revision = "technical_revision",
}