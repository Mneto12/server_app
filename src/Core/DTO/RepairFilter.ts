export interface RepairParamsDTO {
    date?: Date;
    description?: string;
    typeRepair?: string;
    createdAt?: string;
    updatedAt?: string;
}

export const RepairParamsConstants = [
    'description',
    'date',
    'typeRepair',
    'EquipmentsId',
    'OperatorId',
    'createdAt',
    'updatedAt',
    'skip',
    'take',
    'orderBy'
]