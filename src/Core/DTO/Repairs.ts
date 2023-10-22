export interface CreateRepair {
    description: string;
    date: Date;
    TypeRepair: TypeRepair;
    EquipmentsId: string;
    OperatorId: string;
}

export enum TypeRepair {
    preventive = "preventive",
    corrective = "corrective",
    technical_leave = "technical_leave",
    technical_revision = "technical_revision",
}