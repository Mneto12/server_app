export interface CreateEquipment {
    name: string;
    model: string;
    brand: string;
    key: string;
    nationalKey: string;
    status: Status;
    typeRepair?: TypeRepair;
    condition: Condition;
    CareCenterId: string;
    MedicalServiceId: string;
    DescriptionId?: string;
}

export enum Status {
    operative = "operative",
    inoperative = "inoperative",
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