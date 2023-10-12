export interface EquipmentsParamsDTO {
    name?: string;
    model?: string;
    brand?: string;
    key?: string;
    nationalKey?: string;
    status?: string;
    typeRepair?: string;
    condition?: string;
    CareCenterId?: string;
    MedicalServiceId?: string;
    DescriptionId?: string;
    createdAt?: string;
    updatedAt?: string;
}

export const EquipmentParamsConstants = [
    'name',
    'model',
    'brand',
    'key',
    'nationalKey',
    'status',
    'typeRepair',
    'condition',
    'CareCenterId',
    'MedicalServiceId',
    'DescriptionId',
    'createdAt',
    'updatedAt'
]