export interface CreateEquipment {
    name: string;
    nationalKey: string;
    key: string;
}

export interface UpdateEquipment {
    name?: string;
    nationalKey?: string;
    key?: string;
}