export interface CreateRepair {
    date: Date;
    type: TypeRepair;
    description: string;
    EquipmentsId: string;
    OperatorId: string;
}

export enum TypeRepair {
    preventive = "preventive",
    corrective = "corrective",
    technical_leave = "technical_leave",
    technical_revision = "technical_revision",
}